# -*- coding: utf-8 -*-
"""Génère le CV PDF d'Abdoulaye Sonko Touré (1 page, A4).
Lancer : /tmp/cvenv/bin/python scripts/generate_cv.py
Sortie : public/assets/cv.pdf
"""
import os
from fpdf import FPDF

# --- Palette (alignée sur le portfolio) ---
NAVY   = (12, 26, 51)     # #0c1a33
PRIMARY= (30, 64, 175)    # #1e40af
GOLD   = (176, 141, 46)   # #b08d2e
TEXT   = (22, 33, 58)     # #16213a
MUTED  = (91, 100, 120)   # #5b6478
LIGHT  = (238, 241, 246)  # #eef1f6
LIGHTM = (154, 166, 189)  # #9aa6bd

FONTS = "/System/Library/Fonts/Supplemental"

SIDEBAR_W = 66.0
MARGIN    = 12.0          # marge interne colonne principale
SB_X      = 9.0           # marge interne sidebar
MAIN_X    = SIDEBAR_W + MARGIN
MAIN_W    = 210 - MAIN_X - 12.0

pdf = FPDF(orientation="P", unit="mm", format="A4")
pdf.set_auto_page_break(False)
pdf.set_margins(0, 0, 0)
pdf.add_page()

# Polices unicode
pdf.add_font("Body",  "",  os.path.join(FONTS, "Arial.ttf"))
pdf.add_font("Body",  "B", os.path.join(FONTS, "Arial Bold.ttf"))
pdf.add_font("Body",  "I", os.path.join(FONTS, "Arial Italic.ttf"))
pdf.add_font("Serif", "",  os.path.join(FONTS, "Georgia.ttf"))
pdf.add_font("Serif", "B", os.path.join(FONTS, "Georgia Bold.ttf"))

# --- Fond sidebar ---
pdf.set_fill_color(*NAVY)
pdf.rect(0, 0, SIDEBAR_W, 297, "F")

# ============================ SIDEBAR ============================
sx = SB_X
sw = SIDEBAR_W - 2 * SB_X
sy = 22.0

# Monogramme
pdf.set_draw_color(*GOLD)
pdf.set_line_width(0.6)
pdf.ellipse(sx + sw/2 - 11, sy, 22, 22)
pdf.set_font("Serif", "B", 19)
pdf.set_text_color(*GOLD)
pdf.set_xy(sx + sw/2 - 11, sy + 5.2)
pdf.cell(22, 11, "AST", align="C")
sy += 32

def sb_heading(label):
    global sy
    pdf.set_font("Body", "B", 8.5)
    pdf.set_text_color(*GOLD)
    pdf.set_xy(sx, sy)
    pdf.cell(sw, 5, label.upper())
    sy += 6
    pdf.set_draw_color(*GOLD)
    pdf.set_line_width(0.3)
    pdf.line(sx, sy, sx + 12, sy)
    sy += 4

def sb_line(text, bold=False, color=LIGHT, size=8.6, gap=4.8, lh=4.0):
    global sy
    pdf.set_font("Body", "B" if bold else "", size)
    pdf.set_text_color(*color)
    pdf.set_xy(sx, sy)
    pdf.multi_cell(sw, lh, text)
    sy = pdf.get_y() + gap

# --- Contact ---
sb_heading("Contact")
sb_line("ablayetour18@gmail.com", color=LIGHT, size=8.2, gap=2.0)
sb_line("+221 77 449 76 82", color=LIGHT, size=8.2, gap=2.0)
sb_line("Mbour, Sénégal", color=LIGHT, size=8.2, gap=7.0)

# --- Langues ---
sb_heading("Langues")
langs = [
    ("Wolof", "Langue maternelle", 1.0),
    ("Français", "Courant — C1", 0.92),
    ("Anglais", "Avancé — B2", 0.72),
    ("Italien", "Avancé — B2", 0.72),
]
for name, lvl, ratio in langs:
    pdf.set_font("Body", "B", 8.6)
    pdf.set_text_color(*LIGHT)
    pdf.set_xy(sx, sy)
    pdf.cell(sw, 4.2, name)
    pdf.set_font("Body", "", 7.6)
    pdf.set_text_color(*LIGHTM)
    pdf.set_xy(sx, sy + 4.2)
    pdf.cell(sw, 4.0, lvl)
    bar_y = sy + 9.0
    pdf.set_fill_color(44, 58, 88)
    pdf.rect(sx, bar_y, sw, 1.4, "F")
    pdf.set_fill_color(*GOLD)
    pdf.rect(sx, bar_y, sw * ratio, 1.4, "F")
    sy = bar_y + 6.4
sy += 2.5

# --- Compétences ---
sb_heading("Compétences")
skills = [
    ("Juridique", "Recherche juridique · Analyse de textes juridiques"),
    ("Bureautique", "Microsoft Word · Excel"),
    ("Savoir-être", "Esprit critique · Argumentation · Travail en équipe · Sens de l'organisation"),
]
for grp, items in skills:
    pdf.set_font("Body", "B", 8.4)
    pdf.set_text_color(*LIGHT)
    pdf.set_xy(sx, sy)
    pdf.cell(sw, 4.4, grp)
    sy += 4.6
    pdf.set_font("Body", "", 8.0)
    pdf.set_text_color(*LIGHTM)
    pdf.set_xy(sx, sy)
    pdf.multi_cell(sw, 3.9, items)
    sy = pdf.get_y() + 4.2
sy += 2.0

# --- Centres d'intérêt ---
sb_heading("Centres d'intérêt")
pdf.set_font("Body", "", 8.0)
pdf.set_text_color(*LIGHTM)
pdf.set_xy(sx, sy)
pdf.multi_cell(sw, 4.0, "Lecture juridique · Débats · Actualités politiques et juridiques")

# ============================ COLONNE PRINCIPALE ============================
my = 20.0

# En-tête : nom + titre
pdf.set_font("Serif", "B", 27)
pdf.set_text_color(*NAVY)
pdf.set_xy(MAIN_X, my)
pdf.cell(MAIN_W, 11, "Abdoulaye Sonko Touré")
my += 12.5
pdf.set_font("Body", "B", 10)
pdf.set_text_color(*GOLD)
pdf.set_xy(MAIN_X, my)
pdf.cell(MAIN_W, 5, "ÉTUDIANT EN DROIT DES AFFAIRES & FISCALITÉ")
my += 7.5
pdf.set_draw_color(*GOLD)
pdf.set_line_width(0.5)
pdf.line(MAIN_X, my, MAIN_X + MAIN_W, my)
my += 7.0

def main_heading(label):
    global my
    pdf.set_font("Body", "B", 11)
    pdf.set_text_color(*PRIMARY)
    pdf.set_xy(MAIN_X, my)
    pdf.cell(MAIN_W, 6, label.upper())
    my += 6.4
    pdf.set_draw_color(*LIGHT)
    pdf.set_line_width(0.4)
    pdf.line(MAIN_X, my, MAIN_X + MAIN_W, my)
    my += 4.0

# --- Profil ---
main_heading("Profil")
pdf.set_font("Body", "", 9.0)
pdf.set_text_color(*MUTED)
pdf.set_xy(MAIN_X, my)
pdf.multi_cell(MAIN_W, 4.5,
    "Étudiant menant en parallèle une Licence en droit des affaires et fiscalité "
    "à l'Institut supérieur de Management et une Licence d'anglais (3e année) à "
    "l'Université Cheikh Hamidou Kane. Élu à deux reprises Ministre des Affaires "
    "étrangères du gouvernement étudiant de son établissement. Quatre langues de "
    "travail, orienté vers la recherche juridique et l'analyse de textes appliquées "
    "au droit des affaires. Recherche un stage ou une alternance sur des dossiers "
    "fiscaux et contractuels concrets.")
my = pdf.get_y() + 6.0

# --- Expérience ---
main_heading("Engagement & expérience")

def xp(role, org, period, bullets):
    global my
    pdf.set_font("Body", "B", 9.8)
    pdf.set_text_color(*TEXT)
    pdf.set_xy(MAIN_X, my)
    pdf.cell(MAIN_W * 0.66, 5, role)
    pdf.set_font("Body", "", 8.4)
    pdf.set_text_color(*GOLD)
    pdf.set_xy(MAIN_X + MAIN_W * 0.66, my)
    pdf.cell(MAIN_W * 0.34, 5, period, align="R")
    my += 5.2
    pdf.set_font("Body", "I", 8.8)
    pdf.set_text_color(*MUTED)
    pdf.set_xy(MAIN_X, my)
    pdf.cell(MAIN_W, 4.5, org)
    my += 5.6
    for b in bullets:
        pdf.set_fill_color(*GOLD)
        pdf.ellipse(MAIN_X + 0.6, my + 1.5, 1.3, 1.3, "F")
        pdf.set_font("Body", "", 8.7)
        pdf.set_text_color(*MUTED)
        pdf.set_xy(MAIN_X + 4.5, my)
        pdf.multi_cell(MAIN_W - 4.5, 4.2, b)
        my = pdf.get_y() + 1.4
    my += 4.0

xp("Ministre chargé des Affaires étrangères",
   "Gouvernement étudiant — Institut supérieur de Management",
   "2023 – 2025",
   ["Élu à deux reprises Ministre des Affaires étrangères du gouvernement étudiant de l'établissement.",
    "Représentation des étudiants dans les relations avec les partenaires et institutions.",
    "Co-organisation d'activités et d'événements de la vie étudiante."])

xp("Stage d'observation — Cabinet d'avocats",
   "Lexisen Avocat",
   "Sept. – Oct. 2025",
   ["Observation du traitement de dossiers juridiques au sein du cabinet d'avocats Lexisen Avocat.",
    "Découverte du fonctionnement d'un cabinet et des étapes de suivi d'un dossier client."])

# --- Formation ---
main_heading("Formation")

def edu(degree, school, period, note):
    global my
    pdf.set_font("Body", "B", 9.6)
    pdf.set_text_color(*TEXT)
    pdf.set_xy(MAIN_X, my)
    pdf.cell(MAIN_W * 0.72, 5, degree)
    pdf.set_font("Body", "", 8.4)
    pdf.set_text_color(*GOLD)
    pdf.set_xy(MAIN_X + MAIN_W * 0.72, my)
    pdf.cell(MAIN_W * 0.28, 5, period, align="R")
    my += 5.0
    pdf.set_font("Body", "", 8.8)
    pdf.set_text_color(*MUTED)
    pdf.set_xy(MAIN_X, my)
    line = school + ("  ·  " + note if note else "")
    pdf.cell(MAIN_W, 4.5, line)
    my += 7.6

edu("Licence en droit des affaires et fiscalité",
    "Institut supérieur de Management", "2023 – 2026", "En cours · double cursus")
edu("Licence en anglais",
    "Université Cheikh Hamidou Kane", "2023 – 2026", "3e année · en cours")
edu("Baccalauréat — série littéraire (L)", "", "2023", None)

out = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "cv.pdf")
pdf.output(os.path.abspath(out))
print("CV généré :", os.path.abspath(out))
