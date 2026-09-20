from __future__ import annotations

import os
import random
import shutil
import zipfile
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / "public" / "datalog-logo.png"
OUTPUT = ROOT / "output" / "pdf" / "school-samples"
PUBLIC = ROOT / "public" / "downloads" / "schools"

NAVY = colors.HexColor("#071F59")
ROYAL = colors.HexColor("#123F86")
GOLD = colors.HexColor("#F2A313")
PALE = colors.HexColor("#EEF3F9")
INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#5D687C")


@dataclass
class Question:
    text: str
    choices: list[str]
    answer: str


@dataclass
class Paper:
    number: int
    subject: str
    level: str
    title: str
    slug: str
    topics: str
    questions: list[Question]
    structured: list[tuple[str, str]]


def mcq(text: str, correct: str, wrong: Iterable[str], rng: random.Random) -> Question:
    options = [str(correct), *[str(x) for x in wrong]]
    rng.shuffle(options)
    letter = "ABCD"[options.index(str(correct))]
    return Question(text, options, letter)


def math_paper(number: int, level: str, slug: str, scale: int) -> Paper:
    rng = random.Random(1000 + number)
    a, b = 17 * scale + 9, 8 * scale + 7
    product_a, product_b = scale + 6, scale + 4
    fraction_den = 4 if scale < 5 else 5
    fraction_num = 3 if fraction_den == 4 else 2
    fraction_whole = fraction_den * (scale + 3)
    rect_l, rect_w = scale + 7, scale + 3
    mean_values = [scale + 4, scale + 6, scale + 8, scale + 10]
    questions = [
        mcq(f"Find {a} + {b}.", str(a + b), [a + b + 10, a + b - 10, a + b + 1], rng),
        mcq(f"Subtract {b} from {a + b + scale}.", str(a + scale), [a, a + b, b + scale], rng),
        mcq(f"Evaluate {product_a} x {product_b}.", str(product_a * product_b), [product_a + product_b, product_a * product_b + product_a, product_a * product_b - product_b], rng),
        mcq(f"What is {fraction_num}/{fraction_den} of {fraction_whole}?", str(fraction_num * fraction_whole // fraction_den), [fraction_whole // fraction_den, fraction_num + fraction_whole, fraction_whole - fraction_num], rng),
        mcq(f"Find the perimeter of a rectangle {rect_l} cm long and {rect_w} cm wide.", f"{2*(rect_l+rect_w)} cm", [f"{rect_l*rect_w} cm", f"{rect_l+rect_w} cm", f"{2*rect_l+rect_w} cm"], rng),
        mcq(f"Find the area of a rectangle {rect_l} cm by {rect_w} cm.", f"{rect_l*rect_w} cm2", [f"{2*(rect_l+rect_w)} cm2", f"{rect_l+rect_w} cm2", f"{rect_l*2} cm2"], rng),
        mcq(f"Find the mean of {', '.join(map(str, mean_values))}.", str(sum(mean_values)//len(mean_values)), [scale + 6, scale + 8, scale + 10], rng),
        mcq("An angle on a straight line is equal to", "180 degrees", ["90 degrees", "270 degrees", "360 degrees"], rng),
        mcq(f"A book costs N{250 + scale*50}. What is the cost of {scale + 2} books?", f"N{(250 + scale*50)*(scale+2):,}", [f"N{250 + scale*50 + scale+2:,}", f"N{(250 + scale*50)*scale:,}", f"N{(250 + scale*50)*(scale+3):,}"], rng),
        mcq(f"Continue the sequence: {scale}, {scale+3}, {scale+6}, {scale+9}, ...", str(scale + 12), [scale + 10, scale + 11, scale + 13], rng),
    ]
    if "JSS" in level or "SSS" in level:
        x = scale + 5
        questions[3] = mcq(f"Solve 3x + {scale} = {3*x+scale}.", str(x), [x - 1, x + 1, 3*x], rng)
        questions[8] = mcq(f"Factorise x2 + {scale+3}x + {scale+2}.", f"(x + 1)(x + {scale+2})", [f"(x - 1)(x + {scale+2})", f"(x + 2)(x + {scale+2})", f"x(x + {scale+3})"], rng)
    if "SSS" in level:
        questions[4] = mcq("If sin theta = 3/5 for an acute angle, find cos theta.", "4/5", ["3/4", "5/4", "2/5"], rng)
        questions[7] = mcq("The gradient of the line through (2, 3) and (6, 11) is", "2", ["1/2", "4", "8"], rng)
    structured = [
        (f"Show all steps to calculate {a*2} - {b} + {scale*3}.", str(a*2-b+scale*3)),
        (f"A rectangular school garden measures {rect_l+5} m by {rect_w+4} m. Find its area and perimeter.", f"Area = {(rect_l+5)*(rect_w+4)} m2; perimeter = {2*((rect_l+5)+(rect_w+4))} m."),
        ("Write one real-life situation in which a table or graph would help a school make a decision.", "Any relevant example, such as comparing attendance, test scores or enrolment over time."),
    ]
    return Paper(number, "Mathematics", level, f"{level} Mathematics Sample Assessment", slug, "Number, operations, measurement, geometry, patterns and problem solving", questions, structured)


PRIMARY_ENGLISH = [
    ("Choose the correctly spelt word.", "beautiful", ["beautifull", "beutiful", "beautyful"]),
    ("The plural of 'child' is", "children", ["childs", "childes", "childrens"]),
    ("Choose the verb: 'The pupils read quietly.'", "read", ["pupils", "quietly", "the"]),
    ("Complete the sentence: Amina ___ to school every day.", "walks", ["walk", "walking", "walked yesterday"]),
    ("The opposite of 'ancient' is", "modern", ["old", "broken", "large"]),
    ("Choose the sentence with correct punctuation.", "Where are you going?", ["Where are you going.", "where are you going?", "Where are you going!"]),
    ("A word that means the same as 'happy' is", "joyful", ["angry", "weak", "silent"]),
    ("In 'The red bag is mine', the adjective is", "red", ["bag", "is", "mine"]),
    ("Complete: We arrived ___ the classroom before 8 o'clock.", "at", ["on", "by", "from"]),
    ("Which word is a pronoun?", "they", ["market", "quickly", "blue"]),
]

JUNIOR_ENGLISH = [
    ("Choose the sentence in the past perfect tense.", "She had completed the test.", ["She completes the test.", "She is completing the test.", "She will complete the test."]),
    ("The word closest in meaning to 'diligent' is", "hard-working", ["careless", "noisy", "uncertain"]),
    ("Identify the adverb: 'The scientist recorded the result carefully.'", "carefully", ["scientist", "recorded", "result"]),
    ("Choose the correctly punctuated direct speech.", "Tola said, 'I am ready.'", ["Tola said 'I am ready'.", "Tola said, I am ready.", "Tola said 'I am ready.'"]),
    ("Complete: Neither the teacher nor the pupils ___ late.", "were", ["was", "is", "be"]),
    ("A statement that exaggerates for emphasis is called", "hyperbole", ["simile", "alliteration", "personification"]),
    ("Choose the antonym of 'scarce'.", "abundant", ["rare", "limited", "small"]),
    ("Which sentence contains a relative clause?", "The book that I borrowed is useful.", ["I borrowed a useful book.", "Borrow the book now.", "The useful book is here."]),
    ("Change to passive voice: 'The class elected Musa.'", "Musa was elected by the class.", ["Musa elected the class.", "The class was elected by Musa.", "Musa is electing the class."]),
    ("The expression 'as bright as the sun' is a", "simile", ["metaphor", "irony", "euphemism"]),
]

SENIOR_ENGLISH = [
    ("Choose the option that best completes the sentence: Hardly had the bell rung ___ the pupils entered.", "when", ["than", "then", "while"]),
    ("The word nearest in meaning to 'pragmatic' is", "practical", ["idealistic", "careless", "unclear"]),
    ("Identify the grammatical name of: 'what the committee decided'.", "noun clause", ["adverbial clause", "relative clause", "prepositional phrase"]),
    ("Choose the sentence with correct concord.", "Each of the candidates has a card.", ["Each of the candidates have a card.", "Each of the candidate have cards.", "Each candidates has a card."]),
    ("A deliberate contrast between expectation and reality is", "irony", ["euphemism", "onomatopoeia", "alliteration"]),
    ("Choose the correctly reported form: Ada said, 'I will return tomorrow.'", "Ada said that she would return the next day.", ["Ada says she will return tomorrow.", "Ada said that I would return tomorrow.", "Ada said she returns the next day."]),
    ("The register most suitable for a formal research report is", "objective and precise", ["slang and humorous", "casual and conversational", "emotional and vague"]),
    ("The opposite of 'mitigate' is", "aggravate", ["reduce", "soften", "relieve"]),
    ("Which sentence contains an adverbial clause of condition?", "If you study, you will improve.", ["I know that you studied.", "The learner who studied improved.", "Study the material carefully."]),
    ("Choose the correctly punctuated sentence.", "However, the evidence was incomplete; therefore, the claim was revised.", ["However the evidence was incomplete therefore the claim was revised.", "However, the evidence was incomplete, therefore the claim was revised.", "However the evidence, was incomplete; therefore the claim was revised."]),
]


def english_paper(number: int, level: str, slug: str, band: str) -> Paper:
    rng = random.Random(2000 + number)
    source = PRIMARY_ENGLISH if band == "primary" else JUNIOR_ENGLISH if band == "junior" else SENIOR_ENGLISH
    questions = [mcq(text, correct, wrong, rng) for text, correct, wrong in source]
    passage = {
        "primary": "Our class planted maize behind the library. We watered the seedlings every morning. After several weeks, the plants became tall and green.",
        "junior": "The science club noticed that water was often wasted near the school taps. Members recorded the problem, repaired leaking points with adult supervision and created reminder signs. Water use reduced within one month.",
        "senior": "Reliable assessment does more than assign scores. When evidence is interpreted carefully, it reveals patterns in learning, identifies misconceptions and guides teaching decisions. Poorly designed assessment, however, may reward memorisation while hiding genuine understanding.",
    }[band]
    structured = [
        (f"Read this passage and state its main idea: '{passage}'", "A concise statement capturing the central message of the passage."),
        ("Write one well-formed paragraph of 60-100 words on: 'How assessment can improve learning'.", "Award for relevance, organisation, grammar, vocabulary and mechanics."),
        ("Rewrite this sentence in the past tense: 'The teacher checks the work and gives useful feedback.'", "The teacher checked the work and gave useful feedback."),
    ]
    return Paper(number, "English", level, f"{level} English Language Sample Assessment", slug, "Grammar, vocabulary, usage, comprehension and writing", questions, structured)


SCIENCE_BANKS = {
    "Primary 4": [
        ("Which organ helps us to breathe?", "lungs", ["stomach", "kidneys", "skin only"]),
        ("A young plant growing from a seed is a", "seedling", ["flower", "fruit", "root hair"]),
        ("The main natural source of light on Earth is the", "Sun", ["Moon", "wind", "soil"]),
        ("Water changes to ice when it", "freezes", ["boils", "evaporates", "melts"]),
        ("Which material is attracted by a magnet?", "iron nail", ["plastic ruler", "wooden spoon", "rubber band"]),
        ("A balanced diet contains", "different classes of food", ["only carbohydrates", "only fruits", "only protein"]),
        ("The force that pulls objects toward Earth is", "gravity", ["friction", "electricity", "light"]),
        ("Which practice protects drinking water?", "keeping the container covered", ["using dirty cups", "leaving it open", "mixing it with soil"]),
        ("Animals that eat only plants are", "herbivores", ["carnivores", "omnivores", "decomposers"]),
        ("The sense organ used for hearing is the", "ear", ["eye", "nose", "tongue"]),
    ],
    "Primary 5": [
        ("The process by which green plants make food is", "photosynthesis", ["respiration", "digestion", "germination"]),
        ("Which blood cells help fight infection?", "white blood cells", ["red blood cells", "platelets only", "plasma only"]),
        ("A simple machine used to lift a bucket from a well is a", "pulley", ["wedge", "screw", "wheelbarrow"]),
        ("The change from liquid water to water vapour is", "evaporation", ["condensation", "freezing", "melting"]),
        ("Which planet do humans live on?", "Earth", ["Mars", "Jupiter", "Venus"]),
        ("The hard framework that supports the body is the", "skeleton", ["muscle", "skin", "blood"]),
        ("One way to prevent soil erosion is to", "plant vegetation", ["remove all grasses", "burn the soil", "leave soil bare"]),
        ("A circuit must be ___ for a bulb to light.", "closed", ["open", "broken", "wet"]),
        ("Which nutrient mainly builds and repairs body tissues?", "protein", ["water", "vitamin C", "carbohydrate"]),
        ("The instrument used to measure temperature is a", "thermometer", ["barometer", "rain gauge", "balance"]),
    ],
    "Primary 6": [
        ("The organ that pumps blood around the body is the", "heart", ["liver", "lung", "brain"]),
        ("Which mixture can be separated by filtration?", "sand and water", ["salt solution", "sugar solution", "air"]),
        ("The Earth takes about ___ to revolve around the Sun.", "365 days", ["24 hours", "30 days", "7 days"]),
        ("Energy stored in food is", "chemical energy", ["sound energy", "light energy", "wind energy"]),
        ("Which microorganism is commonly used in bread making?", "yeast", ["virus", "algae", "protozoan"]),
        ("The transfer of pollen from anther to stigma is", "pollination", ["fertilisation", "germination", "transpiration"]),
        ("Which action reduces air pollution?", "using cleaner energy", ["burning plastic", "leaving engines running", "burning refuse"]),
        ("The control centre of the body is the", "brain", ["heart", "kidney", "stomach"]),
        ("Friction can be reduced by", "lubrication", ["roughening surfaces", "adding sand", "increasing load"]),
        ("A renewable source of energy is", "solar energy", ["coal", "petrol", "natural gas"]),
    ],
    "JSS 1": [
        ("The smallest unit of a living organism is the", "cell", ["tissue", "organ", "system"]),
        ("A testable explanation for an observation is a", "hypothesis", ["law", "conclusion", "table"]),
        ("The SI unit of length is the", "metre", ["litre", "gram", "second"]),
        ("Which state of matter has a definite volume but no definite shape?", "liquid", ["solid", "gas", "plasma only"]),
        ("The green pigment in leaves is", "chlorophyll", ["haemoglobin", "melanin", "starch"]),
        ("Which is a non-renewable resource?", "crude oil", ["sunlight", "wind", "flowing water"]),
        ("The movement of water through a plant and out of leaves is", "transpiration", ["digestion", "excretion", "circulation"]),
        ("A push or pull is called", "force", ["mass", "speed", "energy"]),
        ("Which apparatus measures liquid volume accurately?", "measuring cylinder", ["test tube", "spatula", "tripod stand"]),
        ("Organisms that break down dead matter are", "decomposers", ["producers", "predators", "parasites only"]),
    ],
    "JSS 2": [
        ("The process of releasing energy from food in cells is", "respiration", ["photosynthesis", "transpiration", "pollination"]),
        ("Speed is calculated as", "distance divided by time", ["time divided by distance", "distance times time", "mass divided by volume"]),
        ("Which part of the digestive system absorbs most nutrients?", "small intestine", ["mouth", "large intestine", "oesophagus"]),
        ("Acids turn blue litmus paper", "red", ["green", "white", "black"]),
        ("The unit of electric current is the", "ampere", ["volt", "watt", "ohm"]),
        ("Which gas is released during photosynthesis?", "oxygen", ["nitrogen", "carbon dioxide", "hydrogen"]),
        ("The density of a substance is mass divided by", "volume", ["time", "length", "temperature"]),
        ("A disease that can spread from one person to another is", "communicable", ["hereditary only", "deficiency only", "non-infectious"]),
        ("The male reproductive cell is the", "sperm cell", ["ovum", "zygote", "embryo"]),
        ("Which method separates two miscible liquids with different boiling points?", "distillation", ["filtration", "sieving", "decantation"]),
    ],
    "JSS 3": [
        ("The atomic number of an element is the number of", "protons", ["neutrons only", "shells", "compounds"]),
        ("An object moving at constant speed in a circle changes", "direction", ["mass", "volume", "temperature"]),
        ("The functional unit of the kidney is the", "nephron", ["neuron", "alveolus", "villus"]),
        ("A neutral solution has a pH of", "7", ["0", "5", "14"]),
        ("Electrical resistance is measured in", "ohms", ["amperes", "joules", "newtons"]),
        ("Which process produces two genetically identical cells?", "mitosis", ["meiosis", "fertilisation", "pollination"]),
        ("The tendency of an object to resist a change in motion is", "inertia", ["pressure", "power", "density"]),
        ("An ecosystem includes organisms and their", "physical environment", ["food only", "species only", "cells only"]),
        ("A chemical reaction that releases heat is", "exothermic", ["endothermic", "reversible only", "neutral only"]),
        ("The hormone that helps regulate blood sugar is", "insulin", ["adrenaline", "thyroxine", "oestrogen"]),
    ],
}


def science_paper(number: int, level: str, slug: str) -> Paper:
    rng = random.Random(3000 + number)
    questions = [mcq(text, correct, wrong, rng) for text, correct, wrong in SCIENCE_BANKS[level]]
    structured = [
        ("Describe one fair test you could carry out in the classroom. State what you would change, measure and keep the same.", "Award for a testable method with an independent variable, dependent variable and at least one controlled variable."),
        ("Explain one way science can help improve health or the environment in your community.", "Any accurate application supported with a clear explanation."),
        ("Draw and label a simple scientific diagram related to one topic covered in this paper.", "Award for scientific accuracy, clear labels, proportion and a suitable title."),
    ]
    return Paper(number, "Science", level, f"{level} Science Sample Assessment", slug, "Living things, matter, energy, environment and scientific enquiry", questions, structured)


def all_papers() -> list[Paper]:
    papers: list[Paper] = []
    math_specs = [
        (1, "Primary 4", "primary-4-mathematics", 1),
        (2, "Primary 5", "primary-5-mathematics", 2),
        (3, "Primary 6", "primary-6-mathematics", 3),
        (4, "JSS 1", "jss-1-mathematics", 4),
        (5, "JSS 2", "jss-2-mathematics", 5),
        (6, "JSS 3", "jss-3-mathematics", 6),
        (7, "SSS 1", "sss-1-mathematics", 7),
    ]
    english_specs = [
        (8, "Primary 4", "primary-4-english", "primary"),
        (9, "Primary 5", "primary-5-english", "primary"),
        (10, "Primary 6", "primary-6-english", "primary"),
        (11, "JSS 1", "jss-1-english", "junior"),
        (12, "JSS 2", "jss-2-english", "junior"),
        (13, "JSS 3", "jss-3-english", "junior"),
        (14, "SSS 1", "sss-1-english", "senior"),
    ]
    science_specs = [
        (15, "Primary 4", "primary-4-science"),
        (16, "Primary 5", "primary-5-science"),
        (17, "Primary 6", "primary-6-science"),
        (18, "JSS 1", "jss-1-science"),
        (19, "JSS 2", "jss-2-science"),
        (20, "JSS 3", "jss-3-science"),
    ]
    papers.extend(math_paper(*spec) for spec in math_specs)
    papers.extend(english_paper(*spec) for spec in english_specs)
    papers.extend(science_paper(*spec) for spec in science_specs)
    return papers


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Brand", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=8, textColor=NAVY, leading=10, spaceAfter=2))
styles.add(ParagraphStyle(name="TitleBrand", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=21, leading=25, textColor=NAVY, alignment=TA_CENTER, spaceAfter=8))
styles.add(ParagraphStyle(name="SubTitle", parent=styles["Normal"], fontName="Helvetica", fontSize=9, leading=13, textColor=MUTED, alignment=TA_CENTER, spaceAfter=12))
styles.add(ParagraphStyle(name="SectionBrand", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=13, leading=16, textColor=NAVY, spaceBefore=8, spaceAfter=8))
styles.add(ParagraphStyle(name="Question", parent=styles["Normal"], fontName="Helvetica", fontSize=9.4, leading=12.5, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Option", parent=styles["Normal"], fontName="Helvetica", fontSize=8.4, leading=10.4, leftIndent=6*mm, textColor=INK))
styles.add(ParagraphStyle(name="Fine", parent=styles["Normal"], fontName="Helvetica", fontSize=7.5, leading=10, textColor=MUTED))


class BrandedDocTemplate(BaseDocTemplate):
    def __init__(self, filename: Path, paper: Paper):
        super().__init__(str(filename), pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=22*mm, bottomMargin=18*mm, title=paper.title, author="Datalog ICT & General Merchandise Ltd.")
        self.paper = paper
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="content")
        self.addPageTemplates([PageTemplate(id="branded", frames=[frame], onPage=self.draw_branding)])

    def draw_branding(self, canvas, doc):
        width, height = A4
        canvas.saveState()
        if LOGO.exists():
            try:
                canvas.setFillAlpha(0.05)
                size = 115*mm
                canvas.drawImage(str(LOGO), (width-size)/2, (height-size)/2, size, size, preserveAspectRatio=True, mask="auto")
            except Exception:
                pass
        try:
            canvas.setFillAlpha(0.045)
        except Exception:
            pass
        canvas.setFillColor(NAVY)
        canvas.setFont("Helvetica-Bold", 29)
        canvas.translate(width/2, height/2)
        canvas.rotate(34)
        canvas.drawCentredString(0, -12, "DATALOG ICT - SAMPLE")
        canvas.restoreState()

        canvas.saveState()
        canvas.setStrokeColor(colors.HexColor("#DCE3EE"))
        canvas.line(18*mm, 15*mm, width-18*mm, 15*mm)
        canvas.setFont("Helvetica", 7)
        canvas.setFillColor(MUTED)
        canvas.drawString(18*mm, 10*mm, "Datalog ICT School Assessment Resource - Sample use only")
        canvas.drawRightString(width-18*mm, 10*mm, f"Page {doc.page}")
        canvas.restoreState()


def header_table(paper: Paper):
    logo_cell = ""
    if LOGO.exists():
        from reportlab.platypus import Image
        logo_cell = Image(str(LOGO), width=18*mm, height=18*mm)
    details = Paragraph("<b>DATALOG ICT &amp; GENERAL MERCHANDISE LTD.</b><br/><font color='#5D687C'>School Assessment &amp; Educational Consultancy</font>", styles["Brand"])
    table = Table([[logo_cell, details, Paragraph(f"<b>SAMPLE {paper.number:02d}</b><br/>{paper.subject}", styles["Brand"])]], colWidths=[22*mm, 105*mm, 42*mm])
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (-1, 0), (-1, -1), "RIGHT"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LINEBELOW", (0, 0), (-1, -1), 1.2, GOLD),
    ]))
    return table


def build_pdf(paper: Paper, destination: Path):
    doc = BrandedDocTemplate(destination, paper)
    story = [
        header_table(paper),
        Spacer(1, 8*mm),
        Paragraph(paper.title, styles["TitleBrand"]),
        Paragraph(f"Coverage: {paper.topics}<br/>Suggested time: 45 minutes | Total marks: 25", styles["SubTitle"]),
    ]
    info = Table([
        ["School:", "", "Learner:", ""],
        ["Date:", "", "Teacher/Class:", ""],
    ], colWidths=[19*mm, 58*mm, 28*mm, 64*mm], rowHeights=[9*mm, 9*mm])
    info.setStyle(TableStyle([
        ("FONT", (0, 0), (-1, -1), "Helvetica", 8.5),
        ("TEXTCOLOR", (0, 0), (-1, -1), MUTED),
        ("LINEBELOW", (1, 0), (1, -1), .5, colors.HexColor("#9AA7BA")),
        ("LINEBELOW", (3, 0), (3, -1), .5, colors.HexColor("#9AA7BA")),
        ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
    ]))
    story.extend([
        info,
        Spacer(1, 5*mm),
        Paragraph("Instructions", styles["SectionBrand"]),
        Paragraph("Answer every question. Choose the best option in Section A. Show clear reasoning and use complete sentences where appropriate in Section B.", styles["Question"]),
        Paragraph("SECTION A - OBJECTIVE QUESTIONS (10 marks)", styles["SectionBrand"]),
    ])
    for idx, item in enumerate(paper.questions, 1):
        story.append(Paragraph(f"<b>{idx}.</b> {item.text}", styles["Question"]))
        choice_text = "&nbsp;&nbsp;&nbsp;".join(f"<b>{letter}.</b> {value}" for letter, value in zip("ABCD", item.choices))
        story.append(Paragraph(choice_text, styles["Option"]))
        story.append(Spacer(1, 1.7*mm))
    story.extend([PageBreak(), header_table(paper), Spacer(1, 5*mm), Paragraph("SECTION B - STRUCTURED RESPONSE (15 marks)", styles["SectionBrand"])])
    for idx, (prompt, _) in enumerate(paper.structured, 11):
        story.append(Paragraph(f"<b>{idx}.</b> {prompt}", styles["Question"]))
        for _ in range(5):
            line = Table([[""]], colWidths=[165*mm], rowHeights=[7*mm])
            line.setStyle(TableStyle([("LINEBELOW", (0, 0), (-1, -1), .35, colors.HexColor("#B7C1D0"))]))
            story.append(line)
        story.append(Spacer(1, 3*mm))
    story.extend([PageBreak(), header_table(paper), Spacer(1, 7*mm), Paragraph("TEACHER ANSWER KEY AND MARKING GUIDE", styles["TitleBrand"]), Paragraph("Section A", styles["SectionBrand"])])
    key_rows = []
    for start in range(0, 10, 5):
        key_rows.append([f"{i+1}. {paper.questions[i].answer}" for i in range(start, start+5)])
    key = Table(key_rows, colWidths=[33*mm]*5, rowHeights=[11*mm]*2)
    key.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("GRID", (0, 0), (-1, -1), .5, colors.HexColor("#C8D2E0")),
        ("FONT", (0, 0), (-1, -1), "Helvetica-Bold", 10),
        ("TEXTCOLOR", (0, 0), (-1, -1), NAVY),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    story.append(key)
    story.append(Spacer(1, 7*mm))
    story.append(Paragraph("Section B marking guidance", styles["SectionBrand"]))
    for idx, (_, guide) in enumerate(paper.structured, 11):
        story.append(Paragraph(f"<b>{idx}.</b> {guide}", styles["Question"]))
    story.extend([
        Spacer(1, 8*mm),
        Paragraph("Assessment note", styles["SectionBrand"]),
        Paragraph("This downloadable sample illustrates Datalog's assessment approach. Schools can commission curriculum-mapped papers, secure administration, marking frameworks, item analysis and performance reporting tailored to their scheme of work.", styles["Fine"]),
        Spacer(1, 4*mm),
        Paragraph("Request a school consultation: datalogict.com/schools | +234 816 641 4241", styles["Brand"]),
    ])
    doc.build(story)


def main():
    if not LOGO.exists():
        raise FileNotFoundError(f"Logo not found: {LOGO}")
    shutil.rmtree(OUTPUT, ignore_errors=True)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    for old_pdf in PUBLIC.glob("sample-*.pdf"):
        old_pdf.unlink()

    papers = all_papers()
    manifest = []
    for paper in papers:
        filename = f"sample-{paper.number:02d}-{paper.slug}.pdf"
        output_pdf = OUTPUT / filename
        build_pdf(paper, output_pdf)
        shutil.copy2(output_pdf, PUBLIC / filename)
        manifest.append((paper, filename))

    bundle = PUBLIC / "datalog-school-sample-assessments.zip"
    with zipfile.ZipFile(bundle, "w", zipfile.ZIP_DEFLATED) as archive:
        for _, filename in manifest:
            archive.write(PUBLIC / filename, arcname=filename)

    print(f"Created {len(manifest)} branded PDFs and {bundle.name}")
    for paper, filename in manifest:
        print(f"{paper.number:02d} | {paper.subject:11s} | {paper.level:9s} | {filename}")


if __name__ == "__main__":
    main()
