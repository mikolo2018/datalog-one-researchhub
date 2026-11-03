import type { MathoepediaQuestion } from './mathoepedia-questions';

// Imported from the ten competition assessments created in the shared Mathoepedia project.
// Papers 1–3 map to Bridge; Papers 4–10 map to Competition.
export const sharedCompetitionQuestions: MathoepediaQuestion[] = [
  {
    "id": 2001,
    "topic": "Fractions and decimals",
    "difficulty": "Bridge",
    "prompt": "Evaluate 0.4 × 5/2.",
    "options": [
      "1",
      "2",
      "0",
      "3",
      "-1"
    ],
    "answer": "A",
    "explanation": "Convert the decimal to 2/5; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2002,
    "topic": "Income expenditure and savings",
    "difficulty": "Bridge",
    "prompt": "A family earns ₦2400 and spends 75% of it. Income rises by 20%, while expenditure rises by 10% of its original amount. By what percentage do savings rise?",
    "options": [
      "51%",
      "52%",
      "49%",
      "48%",
      "50%"
    ],
    "answer": "E",
    "explanation": "Original savings = ₦600; new savings = ₦900. Increase/original savings × 100 = 50%."
  },
  {
    "id": 2003,
    "topic": "BODMAS powers and roots",
    "difficulty": "Bridge",
    "prompt": "Evaluate (3 + 4)² − 3 × 3 + 12 ÷ 3.",
    "options": [
      "44",
      "43",
      "46",
      "42",
      "45"
    ],
    "answer": "A",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2004,
    "topic": "Recurring decimals",
    "difficulty": "Bridge",
    "prompt": "Express 0.181818… as a fraction in its lowest terms.",
    "options": [
      "24/11",
      "2/11",
      "13/11",
      "-20/11",
      "-9/11"
    ],
    "answer": "B",
    "explanation": "100x − x = 18, so x = 18/99 = 2/11."
  },
  {
    "id": 2005,
    "topic": "Metric conversion",
    "difficulty": "Bridge",
    "prompt": "A ribbon is 23 cm long. A piece of 45 mm is cut off. What length remains in millimetres?",
    "options": [
      "184 mm",
      "185 mm",
      "183 mm",
      "187 mm",
      "186 mm"
    ],
    "answer": "B",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2006,
    "topic": "Divisibility",
    "difficulty": "Bridge",
    "prompt": "How many digits d make the number 14d6 divisible by 4?",
    "options": [
      "7",
      "6",
      "5",
      "4",
      "3"
    ],
    "answer": "C",
    "explanation": "Only the final two digits matter. Test 06, 16, …, 96."
  },
  {
    "id": 2007,
    "topic": "Ordering representations",
    "difficulty": "Bridge",
    "prompt": "Which is the greatest of 31/20, 9/5 and 1.65?",
    "options": [
      "4/5",
      "19/5",
      "9/5",
      "14/5",
      "-1/5"
    ],
    "answer": "C",
    "explanation": "Write all three in decimals and compare."
  },
  {
    "id": 2008,
    "topic": "Decimal place value",
    "difficulty": "Bridge",
    "prompt": "What is the value of the digit 7 in 3.4076?",
    "options": [
      "7",
      "7/10",
      "7/10000",
      "7/100",
      "7/1000"
    ],
    "answer": "E",
    "explanation": "The 7 is in the thousandths column."
  },
  {
    "id": 2009,
    "topic": "Maximising expressions",
    "difficulty": "Bridge",
    "prompt": "Use each of 2, 4 and 7 once as A, B and C. What is the greatest value of A + B/C?",
    "options": [
      "7",
      "9",
      "10",
      "11",
      "8"
    ],
    "answer": "B",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2010,
    "topic": "Counting multiples",
    "difficulty": "Bridge",
    "prompt": "How many positive multiples of 5 are less than 150?",
    "options": [
      "30",
      "27",
      "29",
      "31",
      "28"
    ],
    "answer": "C",
    "explanation": "Count d, 2d, … up to the largest multiple below 150."
  },
  {
    "id": 2011,
    "topic": "Digits after division",
    "difficulty": "Bridge",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 3th place after the decimal point?",
    "options": [
      "0",
      "2",
      "4",
      "3",
      "1"
    ],
    "answer": "B",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2012,
    "topic": "Digit reversal",
    "difficulty": "Bridge",
    "prompt": "The digits of 235 are reversed. By how much does the number increase?",
    "options": [
      "299",
      "296",
      "295",
      "298",
      "297"
    ],
    "answer": "E",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2013,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Bridge",
    "prompt": "What is the units digit of 4 × 5 × … × 11?",
    "options": [
      "0",
      "-2",
      "1",
      "2",
      "-1"
    ],
    "answer": "A",
    "explanation": "The product contains a multiple of 5 and an even factor, hence a factor of 10."
  },
  {
    "id": 2014,
    "topic": "Signed numbers",
    "difficulty": "Bridge",
    "prompt": "A temperature is −5°C. It rises by 5°C each hour for 3 hours. What is the final temperature?",
    "options": [
      "12°C",
      "8°C",
      "11°C",
      "9°C",
      "10°C"
    ],
    "answer": "E",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2015,
    "topic": "LCM and events",
    "difficulty": "Bridge",
    "prompt": "Two bells ring every 14 and 21 minutes. They ring together now. After how many minutes will they next ring together?",
    "options": [
      "44",
      "40",
      "42",
      "41",
      "43"
    ],
    "answer": "C",
    "explanation": "The next shared time is LCM(14, 21) = 42 minutes. Merge the event times if requested."
  },
  {
    "id": 2016,
    "topic": "Systematic counting",
    "difficulty": "Bridge",
    "prompt": "Using only the digits 0, 1, 2, 3, how many two-digit numbers can be made without repeating a digit?",
    "options": [
      "7",
      "9",
      "8",
      "11",
      "10"
    ],
    "answer": "B",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2017,
    "topic": "Ratio and unitary method",
    "difficulty": "Bridge",
    "prompt": "Flour and sugar are in the ratio 4:3. If flour weighs 20 kg, how much sugar is required?",
    "options": [
      "14 kg",
      "13 kg",
      "15 kg",
      "17 kg",
      "16 kg"
    ],
    "answer": "C",
    "explanation": "One ratio part is 5 kg. Sugar is 3 parts."
  },
  {
    "id": 2018,
    "topic": "Linear growth",
    "difficulty": "Bridge",
    "prompt": "A stack of 4 identical nested cups is 19 cm high. A stack of 7 is 28 cm high. How high is a stack of 10?",
    "options": [
      "39 cm",
      "36 cm",
      "37 cm",
      "38 cm",
      "35 cm"
    ],
    "answer": "C",
    "explanation": "Each added cup contributes 3 cm. One cup is 10 cm high; height for k cups = 10 + (k − 1) × 3."
  },
  {
    "id": 2019,
    "topic": "Powers and square roots",
    "difficulty": "Bridge",
    "prompt": "Evaluate √(5² − 4²) × √(9).",
    "options": [
      "9",
      "11",
      "8",
      "7",
      "10"
    ],
    "answer": "A",
    "explanation": "The difference of the squares is 9. The product is √9 × √9 = 9."
  },
  {
    "id": 2020,
    "topic": "HCF tiling and intersections",
    "difficulty": "Bridge",
    "prompt": "A 24 cm by 32 cm rectangle is tiled with the largest possible equal square tiles. How many tiles are needed?",
    "options": [
      "12",
      "14",
      "10",
      "13",
      "11"
    ],
    "answer": "A",
    "explanation": "Largest tile side = HCF(24, 32) = 8 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2021,
    "topic": "Means and removed values",
    "difficulty": "Bridge",
    "prompt": "The mean age of 7 pupils is 13 years. Two pupils of equal age leave, and the remaining mean is 12 years. How old is each pupil who left?",
    "options": [
      "35/2 years",
      "29/2 years",
      "31/2 years",
      "33/2 years",
      "27/2 years"
    ],
    "answer": "C",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2022,
    "topic": "Parity",
    "difficulty": "Bridge",
    "prompt": "If n is an odd integer greater than 1, which expression is always even?",
    "options": [
      "3n",
      "n × n",
      "2n + 1",
      "n + 1",
      "n + 2"
    ],
    "answer": "D",
    "explanation": "An odd integer plus 1 is even."
  },
  {
    "id": 2023,
    "topic": "Estimation",
    "difficulty": "Bridge",
    "prompt": "Estimate 208 × 50 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "10501",
      "10502",
      "10500",
      "10498",
      "10499"
    ],
    "answer": "C",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2024,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Bridge",
    "prompt": "A clock is correct at 8:00 a.m. It loses 3 minutes per real hour. How many minutes slow is it after 5 real hours?",
    "options": [
      "15 minutes",
      "14 minutes",
      "16 minutes",
      "17 minutes",
      "13 minutes"
    ],
    "answer": "A",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2025,
    "topic": "Fractions on number lines",
    "difficulty": "Bridge",
    "prompt": "The interval from 0 to 1 is divided into 7 equal intervals. What number is at the 3rd tick after 0?",
    "options": [
      "17/7",
      "3/7",
      "-11/7",
      "10/7",
      "-4/7"
    ],
    "answer": "B",
    "explanation": "Each interval is 1/7; take 3 intervals."
  },
  {
    "id": 2026,
    "topic": "Number machines",
    "difficulty": "Bridge",
    "prompt": "A machine multiplies its input by 3, adds 6, multiplies by 4, then subtracts 7. Find the output for input 3.",
    "options": [
      "53",
      "54",
      "52",
      "55",
      "51"
    ],
    "answer": "A",
    "explanation": "The rule is output = (3x + 6) × 4 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2027,
    "topic": "Equations",
    "difficulty": "Bridge",
    "prompt": "Solve 3x + 6 = 18.",
    "options": [
      "6",
      "4",
      "5",
      "3",
      "2"
    ],
    "answer": "B",
    "explanation": "Collect the terms in x on one side, constants on the other, then divide by the coefficient of x."
  },
  {
    "id": 2028,
    "topic": "Roman numerals",
    "difficulty": "Bridge",
    "prompt": "Evaluate XXX ÷ III. Give the answer as an ordinary number.",
    "options": [
      "10",
      "9",
      "8",
      "11",
      "12"
    ],
    "answer": "A",
    "explanation": "XXX = 30; divide by 3."
  },
  {
    "id": 2029,
    "topic": "Column arithmetic and hidden digits",
    "difficulty": "Bridge",
    "prompt": "In the addition 201 + 302 = 5d3, what digit is d?",
    "options": [
      "2",
      "-2",
      "1",
      "0",
      "-1"
    ],
    "answer": "D",
    "explanation": "The sum is 503; d is its tens digit."
  },
  {
    "id": 2030,
    "topic": "Median",
    "difficulty": "Bridge",
    "prompt": "Find the median of 9, 12, 15, 11, 13.",
    "options": [
      "10",
      "14",
      "12",
      "13",
      "11"
    ],
    "answer": "C",
    "explanation": "Arrange the five numbers; take the third."
  },
  {
    "id": 2031,
    "topic": "Speed distance and time",
    "difficulty": "Bridge",
    "prompt": "A bus travels at 35 km/h for 2 hours. How far does it travel?",
    "options": [
      "69 km",
      "70 km",
      "68 km",
      "71 km",
      "72 km"
    ],
    "answer": "B",
    "explanation": "Distance = speed × time."
  },
  {
    "id": 2032,
    "topic": "Simple interest",
    "difficulty": "Bridge",
    "prompt": "Find the simple interest on ₦1200 at 5% per year for 2 years.",
    "options": [
      "120 naira",
      "118 naira",
      "121 naira",
      "119 naira",
      "122 naira"
    ],
    "answer": "A",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2033,
    "topic": "Ages",
    "difficulty": "Bridge",
    "prompt": "A parent is 3 times as old as a child. Their ages differ by 18 years. What is the sum of their ages?",
    "options": [
      "34 years",
      "36 years",
      "37 years",
      "35 years",
      "38 years"
    ],
    "answer": "B",
    "explanation": "2 age-parts = 18; child = 9, parent = 27."
  },
  {
    "id": 2034,
    "topic": "Telescoping products",
    "difficulty": "Bridge",
    "prompt": "Evaluate (2/3) × (3/4) × … × (5/6).",
    "options": [
      "-5/3",
      "4/3",
      "7/3",
      "1/3",
      "-2/3"
    ],
    "answer": "D",
    "explanation": "Cancel every numerator that appears as the next denominator."
  },
  {
    "id": 2035,
    "topic": "Reverse and successive percentages",
    "difficulty": "Bridge",
    "prompt": "After a 25% increase, a quantity becomes 220. What was its original value?",
    "options": [
      "178",
      "174",
      "175",
      "176",
      "177"
    ],
    "answer": "D",
    "explanation": "The final quantity is 125% of the original; divide by 1.25."
  },
  {
    "id": 2036,
    "topic": "Composite areas",
    "difficulty": "Bridge",
    "prompt": "A 14 cm by 9 cm rectangle has a 3 cm by 4 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "115 cm²",
      "112 cm²",
      "116 cm²",
      "114 cm²",
      "113 cm²"
    ],
    "answer": "D",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2037,
    "topic": "Triangle angles",
    "difficulty": "Bridge",
    "prompt": "One acute angle of a right triangle is 26°. Find the other acute angle.",
    "options": [
      "64°",
      "65°",
      "66°",
      "62°",
      "63°"
    ],
    "answer": "A",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2038,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Bridge",
    "prompt": "A rectangle has perimeter 32 cm and length 11 cm. Find its area.",
    "options": [
      "57 cm²",
      "54 cm²",
      "53 cm²",
      "56 cm²",
      "55 cm²"
    ],
    "answer": "E",
    "explanation": "L + W = 16; dimensions are 11 cm and 5 cm."
  },
  {
    "id": 2039,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Bridge",
    "prompt": "Three circles of radius 4 cm have centres A, B and C, each centre lying on both other circles. Find the perimeter of triangle ABC.",
    "options": [
      "10 cm",
      "11 cm",
      "14 cm",
      "12 cm",
      "13 cm"
    ],
    "answer": "D",
    "explanation": "All three centre-to-centre distances equal the common radius."
  },
  {
    "id": 2040,
    "topic": "Shortest distance",
    "difficulty": "Bridge",
    "prompt": "A pupil walks 6 m east and 8 m north. Find the straight-line distance from the starting point.",
    "options": [
      "11 m",
      "9 m",
      "8 m",
      "10 m",
      "12 m"
    ],
    "answer": "D",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2041,
    "topic": "Faces edges and vertices",
    "difficulty": "Bridge",
    "prompt": "A pyramid has a 5-sided polygon as its base. How many faces does it have?",
    "options": [
      "5",
      "8",
      "7",
      "6",
      "4"
    ],
    "answer": "D",
    "explanation": "There is one triangular face per base side, plus the base."
  },
  {
    "id": 2042,
    "topic": "Painted cubes",
    "difficulty": "Bridge",
    "prompt": "A cube is painted on all six outside faces and cut into 4 × 4 × 4 equal small cubes. How many small cubes have exactly two painted faces?",
    "options": [
      "22",
      "23",
      "24",
      "26",
      "25"
    ],
    "answer": "C",
    "explanation": "Choose 12 edges and exclude both corner cubes on each."
  },
  {
    "id": 2043,
    "topic": "Triangle classification",
    "difficulty": "Bridge",
    "prompt": "A triangle has sides 6, 6 and 4 cm. Which description is correct?",
    "options": [
      "Isosceles",
      "Scalene",
      "No equal sides",
      "Impossible triangle",
      "Equilateral"
    ],
    "answer": "A",
    "explanation": "Exactly two sides are equal."
  },
  {
    "id": 2044,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Bridge",
    "prompt": "Two parallel lines are crossed by a transversal. One interior angle is 42°. Find the interior angle on the same side of the transversal.",
    "options": [
      "140°",
      "136°",
      "137°",
      "139°",
      "138°"
    ],
    "answer": "E",
    "explanation": "Same-side interior angles sum to 180°."
  },
  {
    "id": 2045,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Bridge",
    "prompt": "A curved path consists of one semicircular arc of radius 4 cm and two quarter-circle arcs of radius 8 cm. Its total length is kπ cm. Find k.",
    "options": [
      "12",
      "11",
      "13",
      "10",
      "14"
    ],
    "answer": "A",
    "explanation": "Semicircle arc = 4π; two quarter-arcs total 8π, giving 12π."
  },
  {
    "id": 2046,
    "topic": "Isosceles angle cases",
    "difficulty": "Bridge",
    "prompt": "An isosceles triangle contains an angle of 31°. What are all possible values of its vertex angle?",
    "options": [
      "No possible value",
      "31° and 118°",
      "31° only",
      "118° only",
      "149/2° only"
    ],
    "answer": "B",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2047,
    "topic": "Solids and symmetry",
    "difficulty": "Bridge",
    "prompt": "Which solid has one circular flat face, one curved surface and one vertex in the usual primary-school description? (Item 1.)",
    "options": [
      "Triangular prism",
      "Cube",
      "Sphere",
      "Cylinder",
      "Cone"
    ],
    "answer": "E",
    "explanation": "A cone has these properties."
  },
  {
    "id": 2048,
    "topic": "Irregular perimeter",
    "difficulty": "Bridge",
    "prompt": "A 16 cm by 11 cm rectangle has a 4 cm by 5 cm corner cut out, leaving an L shape. Find its perimeter.",
    "options": [
      "55 cm",
      "52 cm",
      "56 cm",
      "53 cm",
      "54 cm"
    ],
    "answer": "E",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2049,
    "topic": "Cylinder volume",
    "difficulty": "Bridge",
    "prompt": "A solid half-cylinder has radius 3 cm and length 7 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "61/2",
      "63/2",
      "67/2",
      "59/2",
      "65/2"
    ],
    "answer": "B",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2050,
    "topic": "Volume and scaling",
    "difficulty": "Bridge",
    "prompt": "A cube has edge 3 cm. Find its volume.",
    "options": [
      "27 cm³",
      "25 cm³",
      "26 cm³",
      "28 cm³",
      "29 cm³"
    ],
    "answer": "A",
    "explanation": "Volume = edge³."
  },
  {
    "id": 2051,
    "topic": "Sets and overlap",
    "difficulty": "Bridge",
    "prompt": "Set A = integers 1 to 10, set B = integers 4 to 14, and set C = integers 7 to 12. How many numbers belong to both A and B but not C?",
    "options": [
      "4",
      "2",
      "1",
      "3",
      "5"
    ],
    "answer": "D",
    "explanation": "Take the overlap of A and B, then remove every member of C."
  },
  {
    "id": 2052,
    "topic": "Number and letter sequences",
    "difficulty": "Bridge",
    "prompt": "Continue both patterns: 2A, 4B, 6C, 8D, …",
    "options": [
      "9E",
      "11E",
      "12E",
      "8E",
      "10E"
    ],
    "answer": "E",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2053,
    "topic": "Family relationships",
    "difficulty": "Bridge",
    "prompt": "Tola has 3 siblings. Kemi is Tola’s mother’s sister. What is Kemi’s relationship to Tola?",
    "options": [
      "Mother",
      "Grandmother",
      "Cousin",
      "Sister",
      "Aunt"
    ],
    "answer": "E",
    "explanation": "A mother’s sister is an aunt."
  },
  {
    "id": 2054,
    "topic": "Paper folding",
    "difficulty": "Bridge",
    "prompt": "A sheet is folded in half 1 times. Then 1 separate hole is punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "0",
      "2",
      "1",
      "4",
      "3"
    ],
    "answer": "B",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2055,
    "topic": "Sibling equations",
    "difficulty": "Bridge",
    "prompt": "A family has 3 boys and 2 girls. How many brothers and sisters does one girl have altogether?",
    "options": [
      "3",
      "5",
      "2",
      "4",
      "6"
    ],
    "answer": "D",
    "explanation": "Exclude the girl herself, then count all other children."
  },
  {
    "id": 2056,
    "topic": "Number-row rules",
    "difficulty": "Bridge",
    "prompt": "For each row, result = first × second + first − second. Find the missing result for first = 3, second = 5.",
    "options": [
      "11",
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": "C",
    "explanation": "Substitute into the stated rule, completing multiplication before addition and subtraction."
  },
  {
    "id": 2057,
    "topic": "Calendar cycles",
    "difficulty": "Bridge",
    "prompt": "What month is 3 months after February?",
    "options": [
      "June",
      "August",
      "May",
      "September",
      "July"
    ],
    "answer": "C",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2058,
    "topic": "Direction and turns",
    "difficulty": "Bridge",
    "prompt": "A pupil faces east and makes these quarter-turns in order: right, left, left. Which direction is the pupil now facing?",
    "options": [
      "The starting direction cannot be known",
      "North",
      "South",
      "East",
      "West"
    ],
    "answer": "B",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2059,
    "topic": "Jug states",
    "difficulty": "Bridge",
    "prompt": "A 7-litre jug is full and a 5-litre jug is empty. Pour from the larger jug into the smaller until the smaller is full. How many litres remain in the larger?",
    "options": [
      "2 litres",
      "0 litres",
      "3 litres",
      "1 litres",
      "4 litres"
    ],
    "answer": "A",
    "explanation": "7 − 5 = 2."
  },
  {
    "id": 2060,
    "topic": "Number pyramids",
    "difficulty": "Bridge",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 2, 4, 5, 3. Find the top entry.",
    "options": [
      "30",
      "32",
      "34",
      "31",
      "33"
    ],
    "answer": "B",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2061,
    "topic": "Handshake counting",
    "difficulty": "Bridge",
    "prompt": "There are 8 people at a meeting. Everyone shakes hands once with every other person. How many handshakes occur?",
    "options": [
      "30",
      "27",
      "28",
      "26",
      "29"
    ],
    "answer": "C",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2062,
    "topic": "Multiplicative patterns",
    "difficulty": "Bridge",
    "prompt": "Start at 2, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 2, 4, 12, 48, 240.",
    "options": [
      "1440",
      "1442",
      "1441",
      "1439",
      "1438"
    ],
    "answer": "A",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2063,
    "topic": "Mirror clocks",
    "difficulty": "Bridge",
    "prompt": "An ordinary 12-hour analogue clock shows 2:10. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "9:50",
      "10:50",
      "10:00",
      "9:55",
      "10:20"
    ],
    "answer": "A",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2064,
    "topic": "Gear ratios",
    "difficulty": "Bridge",
    "prompt": "A gear with 14 teeth turns 6 times and drives a gear with 28 teeth. How many turns does the larger gear make?",
    "options": [
      "3",
      "5",
      "4",
      "2",
      "1"
    ],
    "answer": "A",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2065,
    "topic": "Adjacency constraints",
    "difficulty": "Bridge",
    "prompt": "Place 1, 2, 3, 4, 5 once each in a row. Sums of neighbouring cells from left to right are 9, 7, 5, 3. What is the middle number?",
    "options": [
      "3",
      "4",
      "2",
      "5",
      "1"
    ],
    "answer": "A",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2066,
    "topic": "Cube faces and adjacency",
    "difficulty": "Bridge",
    "prompt": "A cube has faces labelled 2, 3, 4, 5, 6, 7. Face 2 shares an edge with faces 3, 4, 5, 6. Which face is opposite 2?",
    "options": [
      "7",
      "5",
      "8",
      "9",
      "6"
    ],
    "answer": "A",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2067,
    "topic": "Truth and falsehood",
    "difficulty": "Bridge",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 1. Ayo says “The token is with Bisi.” Bisi says “The token is not with me.” Chika says “The token is not with Ayo.” Exactly one statement is true. Who has the token?",
    "options": [
      "Cannot be determined",
      "None of them",
      "Ayo",
      "Chika",
      "Bisi"
    ],
    "answer": "C",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2068,
    "topic": "Ranking",
    "difficulty": "Bridge",
    "prompt": "A pupil is 5th from the front and 4th from the back of a line. How many pupils are in the line?",
    "options": [
      "7",
      "8",
      "6",
      "9",
      "10"
    ],
    "answer": "B",
    "explanation": "Add the two ranks and subtract 1 because the pupil is counted twice."
  },
  {
    "id": 2069,
    "topic": "Minimum swaps",
    "difficulty": "Bridge",
    "prompt": "What is the minimum number of swaps of any two positions needed to change BCAD into ABCD?",
    "options": [
      "1",
      "2",
      "4",
      "0",
      "3"
    ],
    "answer": "B",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2070,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Bridge",
    "prompt": "A 3 by 4 rectangle of unit squares is to be covered by 1 by 2 dominoes. If it can be covered, how many dominoes are needed? Answer 0 if it is impossible.",
    "options": [
      "8",
      "5",
      "7",
      "4",
      "6"
    ],
    "answer": "E",
    "explanation": "Each domino covers two squares. Odd area is impossible; any full rectangle with an even side can be tiled."
  },
  {
    "id": 2071,
    "topic": "Division constraints",
    "difficulty": "Bridge",
    "prompt": "Choose different integers A and B from 1 to 7. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "9",
      "11",
      "10",
      "8",
      "7"
    ],
    "answer": "A",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2072,
    "topic": "Missing-number diagrams",
    "difficulty": "Bridge",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 3, right number is 5, and bottom number is 7. What is the centre?",
    "options": [
      "6",
      "7",
      "10",
      "8",
      "9"
    ],
    "answer": "D",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2073,
    "topic": "Addition tables",
    "difficulty": "Bridge",
    "prompt": "In an addition table, a cell is the sum of its row and column headings. One cell is 13. Moving to a row whose heading is 4 greater, in the same column, what is the new cell?",
    "options": [
      "19",
      "18",
      "17",
      "16",
      "15"
    ],
    "answer": "C",
    "explanation": "The column is unchanged, so the cell increases by the change in row heading."
  },
  {
    "id": 2074,
    "topic": "Unusual operations",
    "difficulty": "Bridge",
    "prompt": "Define a ★ b = a² − b². Find 3 ★ 4.",
    "options": [
      "-9",
      "-7",
      "-6",
      "-8",
      "-5"
    ],
    "answer": "B",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2075,
    "topic": "Counting embedded squares",
    "difficulty": "Bridge",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 2-row by 3-column grid shown?",
    "options": [
      "8",
      "7",
      "10",
      "6",
      "9"
    ],
    "answer": "A",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  },
  {
    "id": 2076,
    "topic": "Fractions and decimals",
    "difficulty": "Bridge",
    "prompt": "Evaluate 0.5 × 5/2.",
    "options": [
      "13/4",
      "5/4",
      "1/4",
      "-3/4",
      "9/4"
    ],
    "answer": "B",
    "explanation": "Convert the decimal to 1/2; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2077,
    "topic": "Income expenditure and savings",
    "difficulty": "Bridge",
    "prompt": "A family earns ₦2800 and spends 75% of it. Income rises by 20%, while expenditure rises by 10% of its original amount. By what percentage do savings rise?",
    "options": [
      "51%",
      "48%",
      "49%",
      "52%",
      "50%"
    ],
    "answer": "E",
    "explanation": "Original savings = ₦700; new savings = ₦1050. Increase/original savings × 100 = 50%."
  },
  {
    "id": 2078,
    "topic": "BODMAS powers and roots",
    "difficulty": "Bridge",
    "prompt": "Evaluate (4 + 4)² − 3 × 4 + 12 ÷ 3.",
    "options": [
      "55",
      "58",
      "56",
      "54",
      "57"
    ],
    "answer": "C",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2079,
    "topic": "Recurring decimals",
    "difficulty": "Bridge",
    "prompt": "Express 0.272727… as a fraction in its lowest terms.",
    "options": [
      "-8/11",
      "25/11",
      "3/11",
      "14/11",
      "-19/11"
    ],
    "answer": "C",
    "explanation": "100x − x = 27, so x = 27/99 = 3/11."
  },
  {
    "id": 2080,
    "topic": "Metric conversion",
    "difficulty": "Bridge",
    "prompt": "A ribbon is 26 cm long. A piece of 50 mm is cut off. What length remains in millimetres?",
    "options": [
      "210 mm",
      "208 mm",
      "211 mm",
      "212 mm",
      "209 mm"
    ],
    "answer": "A",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2081,
    "topic": "Divisibility",
    "difficulty": "Bridge",
    "prompt": "How many digits d make the number 15d6 divisible by 4?",
    "options": [
      "6",
      "4",
      "7",
      "3",
      "5"
    ],
    "answer": "E",
    "explanation": "Only the final two digits matter. Test 06, 16, …, 96."
  },
  {
    "id": 2082,
    "topic": "Ordering representations",
    "difficulty": "Bridge",
    "prompt": "Which is the greatest of 8/5, 37/20 and 1.7?",
    "options": [
      "77/20",
      "37/20",
      "17/20",
      "57/20",
      "-3/20"
    ],
    "answer": "B",
    "explanation": "Write all three in decimals and compare."
  },
  {
    "id": 2083,
    "topic": "Decimal place value",
    "difficulty": "Bridge",
    "prompt": "What is the value of the digit 7 in 4.4076?",
    "options": [
      "7/10000",
      "7/100",
      "7",
      "7/1000",
      "7/10"
    ],
    "answer": "D",
    "explanation": "The 7 is in the thousandths column."
  },
  {
    "id": 2084,
    "topic": "Maximising expressions",
    "difficulty": "Bridge",
    "prompt": "Use each of 3, 5 and 8 once as A, B and C. What is the greatest value of A + B/C?",
    "options": [
      "32/3",
      "23/3",
      "35/3",
      "26/3",
      "29/3"
    ],
    "answer": "E",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2085,
    "topic": "Counting multiples",
    "difficulty": "Bridge",
    "prompt": "How many positive multiples of 6 are less than 180?",
    "options": [
      "28",
      "27",
      "30",
      "29",
      "31"
    ],
    "answer": "D",
    "explanation": "Count d, 2d, … up to the largest multiple below 180."
  },
  {
    "id": 2086,
    "topic": "Digits after division",
    "difficulty": "Bridge",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 4th place after the decimal point?",
    "options": [
      "8",
      "10",
      "7",
      "6",
      "9"
    ],
    "answer": "A",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2087,
    "topic": "Digit reversal",
    "difficulty": "Bridge",
    "prompt": "The digits of 346 are reversed. By how much does the number increase?",
    "options": [
      "299",
      "295",
      "298",
      "297",
      "296"
    ],
    "answer": "D",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2088,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Bridge",
    "prompt": "What is the units digit of 5 × 6 × … × 12?",
    "options": [
      "-1",
      "0",
      "1",
      "2",
      "-2"
    ],
    "answer": "B",
    "explanation": "The product contains a multiple of 5 and an even factor, hence a factor of 10."
  },
  {
    "id": 2089,
    "topic": "Signed numbers",
    "difficulty": "Bridge",
    "prompt": "A temperature is −6°C. It rises by 7°C each hour for 3 hours. What is the final temperature?",
    "options": [
      "16°C",
      "13°C",
      "14°C",
      "15°C",
      "17°C"
    ],
    "answer": "D",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2090,
    "topic": "LCM and events",
    "difficulty": "Bridge",
    "prompt": "Two bells ring every 16 and 24 minutes. They ring together now. After how many minutes will they next ring together?",
    "options": [
      "47",
      "50",
      "48",
      "49",
      "46"
    ],
    "answer": "C",
    "explanation": "The next shared time is LCM(16, 24) = 48 minutes. Merge the event times if requested."
  },
  {
    "id": 2091,
    "topic": "Systematic counting",
    "difficulty": "Bridge",
    "prompt": "Using only the digits 0, 2, 3, 4, how many two-digit numbers can be made without repeating a digit?",
    "options": [
      "8",
      "10",
      "9",
      "7",
      "11"
    ],
    "answer": "C",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2092,
    "topic": "Ratio and unitary method",
    "difficulty": "Bridge",
    "prompt": "Flour and sugar are in the ratio 5:4. If flour weighs 30 kg, how much sugar is required?",
    "options": [
      "24 kg",
      "25 kg",
      "26 kg",
      "23 kg",
      "22 kg"
    ],
    "answer": "A",
    "explanation": "One ratio part is 6 kg. Sugar is 4 parts."
  },
  {
    "id": 2093,
    "topic": "Linear growth",
    "difficulty": "Bridge",
    "prompt": "A stack of 4 identical nested cups is 23 cm high. A stack of 7 is 35 cm high. How high is a stack of 10?",
    "options": [
      "48 cm",
      "49 cm",
      "47 cm",
      "45 cm",
      "46 cm"
    ],
    "answer": "C",
    "explanation": "Each added cup contributes 4 cm. One cup is 11 cm high; height for k cups = 11 + (k − 1) × 4."
  },
  {
    "id": 2094,
    "topic": "Powers and square roots",
    "difficulty": "Bridge",
    "prompt": "Evaluate √(6² − 5²) × √(11).",
    "options": [
      "10",
      "12",
      "11",
      "9",
      "13"
    ],
    "answer": "C",
    "explanation": "The difference of the squares is 11. The product is √11 × √11 = 11."
  },
  {
    "id": 2095,
    "topic": "HCF tiling and intersections",
    "difficulty": "Bridge",
    "prompt": "A 30 cm by 40 cm rectangle is tiled with the largest possible equal square tiles. How many tiles are needed?",
    "options": [
      "11",
      "10",
      "12",
      "13",
      "14"
    ],
    "answer": "C",
    "explanation": "Largest tile side = HCF(30, 40) = 10 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2096,
    "topic": "Means and removed values",
    "difficulty": "Bridge",
    "prompt": "The mean age of 8 pupils is 14 years. Two pupils of equal age leave, and the remaining mean is 13 years. How old is each pupil who left?",
    "options": [
      "15 years",
      "17 years",
      "18 years",
      "16 years",
      "19 years"
    ],
    "answer": "B",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2097,
    "topic": "Parity",
    "difficulty": "Bridge",
    "prompt": "If n is an odd integer greater than 2, which expression is always even?",
    "options": [
      "2n + 1",
      "n × n",
      "n + 2",
      "3n",
      "n + 1"
    ],
    "answer": "E",
    "explanation": "An odd integer plus 1 is even."
  },
  {
    "id": 2098,
    "topic": "Estimation",
    "difficulty": "Bridge",
    "prompt": "Estimate 218 × 51 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "11002",
      "11001",
      "11000",
      "10998",
      "10999"
    ],
    "answer": "C",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2099,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Bridge",
    "prompt": "A clock is correct at 8:00 a.m. It loses 4 minutes per real hour. How many minutes slow is it after 5 real hours?",
    "options": [
      "20 minutes",
      "18 minutes",
      "21 minutes",
      "19 minutes",
      "22 minutes"
    ],
    "answer": "A",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2100,
    "topic": "Fractions on number lines",
    "difficulty": "Bridge",
    "prompt": "The interval from 0 to 1 is divided into 8 equal intervals. What number is at the 4th tick after 0?",
    "options": [
      "3/2",
      "-1/2",
      "-3/2",
      "1/2",
      "5/2"
    ],
    "answer": "D",
    "explanation": "Each interval is 1/8; take 4 intervals."
  },
  {
    "id": 2101,
    "topic": "Number machines",
    "difficulty": "Bridge",
    "prompt": "A machine multiplies its input by 4, adds 7, multiplies by 5, then subtracts 7. Find the output for input 4.",
    "options": [
      "106",
      "107",
      "108",
      "109",
      "110"
    ],
    "answer": "C",
    "explanation": "The rule is output = (4x + 7) × 5 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2102,
    "topic": "Equations",
    "difficulty": "Bridge",
    "prompt": "Solve 4x + 7 = 27.",
    "options": [
      "6",
      "4",
      "3",
      "7",
      "5"
    ],
    "answer": "E",
    "explanation": "Collect the terms in x on one side, constants on the other, then divide by the coefficient of x."
  },
  {
    "id": 2103,
    "topic": "Roman numerals",
    "difficulty": "Bridge",
    "prompt": "Evaluate XXXVI ÷ III. Give the answer as an ordinary number.",
    "options": [
      "10",
      "11",
      "13",
      "12",
      "14"
    ],
    "answer": "D",
    "explanation": "XXXVI = 36; divide by 3."
  },
  {
    "id": 2104,
    "topic": "Column arithmetic and hidden digits",
    "difficulty": "Bridge",
    "prompt": "In the addition 202 + 304 = 5d6, what digit is d?",
    "options": [
      "2",
      "-1",
      "0",
      "-2",
      "1"
    ],
    "answer": "C",
    "explanation": "The sum is 506; d is its tens digit."
  },
  {
    "id": 2105,
    "topic": "Median",
    "difficulty": "Bridge",
    "prompt": "Find the median of 10, 13, 16, 12, 14.",
    "options": [
      "14",
      "13",
      "15",
      "12",
      "11"
    ],
    "answer": "B",
    "explanation": "Arrange the five numbers; take the third."
  },
  {
    "id": 2106,
    "topic": "Speed distance and time",
    "difficulty": "Bridge",
    "prompt": "A bus travels at 40 km/h for 2 hours. How far does it travel?",
    "options": [
      "80 km",
      "79 km",
      "78 km",
      "81 km",
      "82 km"
    ],
    "answer": "A",
    "explanation": "Distance = speed × time."
  },
  {
    "id": 2107,
    "topic": "Simple interest",
    "difficulty": "Bridge",
    "prompt": "Find the simple interest on ₦1400 at 5% per year for 2 years.",
    "options": [
      "139 naira",
      "142 naira",
      "141 naira",
      "138 naira",
      "140 naira"
    ],
    "answer": "E",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2108,
    "topic": "Ages",
    "difficulty": "Bridge",
    "prompt": "A parent is 3 times as old as a child. Their ages differ by 20 years. What is the sum of their ages?",
    "options": [
      "41 years",
      "40 years",
      "39 years",
      "38 years",
      "42 years"
    ],
    "answer": "B",
    "explanation": "2 age-parts = 20; child = 10, parent = 30."
  },
  {
    "id": 2109,
    "topic": "Telescoping products",
    "difficulty": "Bridge",
    "prompt": "Evaluate (2/3) × (3/4) × … × (6/7).",
    "options": [
      "-12/7",
      "16/7",
      "2/7",
      "9/7",
      "-5/7"
    ],
    "answer": "C",
    "explanation": "Cancel every numerator that appears as the next denominator."
  },
  {
    "id": 2110,
    "topic": "Reverse and successive percentages",
    "difficulty": "Bridge",
    "prompt": "After a 25% increase, a quantity becomes 240. What was its original value?",
    "options": [
      "191",
      "194",
      "193",
      "192",
      "190"
    ],
    "answer": "D",
    "explanation": "The final quantity is 125% of the original; divide by 1.25."
  },
  {
    "id": 2111,
    "topic": "Composite areas",
    "difficulty": "Bridge",
    "prompt": "A 16 cm by 10 cm rectangle has a 4 cm by 5 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "142 cm²",
      "139 cm²",
      "141 cm²",
      "140 cm²",
      "138 cm²"
    ],
    "answer": "D",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2112,
    "topic": "Triangle angles",
    "difficulty": "Bridge",
    "prompt": "One acute angle of a right triangle is 27°. Find the other acute angle.",
    "options": [
      "65°",
      "61°",
      "62°",
      "64°",
      "63°"
    ],
    "answer": "E",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2113,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Bridge",
    "prompt": "A rectangle has perimeter 36 cm and length 12 cm. Find its area.",
    "options": [
      "70 cm²",
      "73 cm²",
      "74 cm²",
      "71 cm²",
      "72 cm²"
    ],
    "answer": "E",
    "explanation": "L + W = 18; dimensions are 12 cm and 6 cm."
  },
  {
    "id": 2114,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Bridge",
    "prompt": "Three circles of radius 5 cm have centres A, B and C, each centre lying on both other circles. Find the perimeter of triangle ABC.",
    "options": [
      "15 cm",
      "13 cm",
      "16 cm",
      "17 cm",
      "14 cm"
    ],
    "answer": "A",
    "explanation": "All three centre-to-centre distances equal the common radius."
  },
  {
    "id": 2115,
    "topic": "Shortest distance",
    "difficulty": "Bridge",
    "prompt": "A pupil walks 9 m east and 12 m north. Find the straight-line distance from the starting point.",
    "options": [
      "16 m",
      "17 m",
      "14 m",
      "13 m",
      "15 m"
    ],
    "answer": "E",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2116,
    "topic": "Faces edges and vertices",
    "difficulty": "Bridge",
    "prompt": "A pyramid has a 6-sided polygon as its base. How many faces does it have?",
    "options": [
      "7",
      "6",
      "5",
      "8",
      "9"
    ],
    "answer": "A",
    "explanation": "There is one triangular face per base side, plus the base."
  },
  {
    "id": 2117,
    "topic": "Painted cubes",
    "difficulty": "Bridge",
    "prompt": "A cube is painted on all six outside faces and cut into 5 × 5 × 5 equal small cubes. How many small cubes have exactly two painted faces?",
    "options": [
      "35",
      "38",
      "37",
      "34",
      "36"
    ],
    "answer": "E",
    "explanation": "Choose 12 edges and exclude both corner cubes on each."
  },
  {
    "id": 2118,
    "topic": "Triangle classification",
    "difficulty": "Bridge",
    "prompt": "A triangle has sides 7, 7 and 5 cm. Which description is correct?",
    "options": [
      "Scalene",
      "Impossible triangle",
      "Equilateral",
      "No equal sides",
      "Isosceles"
    ],
    "answer": "E",
    "explanation": "Exactly two sides are equal."
  },
  {
    "id": 2119,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Bridge",
    "prompt": "Two parallel lines are crossed by a transversal. One interior angle is 44°. Find the interior angle on the same side of the transversal.",
    "options": [
      "138°",
      "136°",
      "137°",
      "135°",
      "134°"
    ],
    "answer": "B",
    "explanation": "Same-side interior angles sum to 180°."
  },
  {
    "id": 2120,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Bridge",
    "prompt": "A curved path consists of one semicircular arc of radius 5 cm and two quarter-circle arcs of radius 10 cm. Its total length is kπ cm. Find k.",
    "options": [
      "13",
      "14",
      "17",
      "15",
      "16"
    ],
    "answer": "D",
    "explanation": "Semicircle arc = 5π; two quarter-arcs total 10π, giving 15π."
  },
  {
    "id": 2121,
    "topic": "Isosceles angle cases",
    "difficulty": "Bridge",
    "prompt": "An isosceles triangle contains an angle of 32°. What are all possible values of its vertex angle?",
    "options": [
      "No possible value",
      "116° only",
      "32° and 116°",
      "32° only",
      "74° only"
    ],
    "answer": "C",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2122,
    "topic": "Solids and symmetry",
    "difficulty": "Bridge",
    "prompt": "Which solid has one circular flat face, one curved surface and one vertex in the usual primary-school description? (Item 2.)",
    "options": [
      "Triangular prism",
      "Cube",
      "Sphere",
      "Cone",
      "Cylinder"
    ],
    "answer": "D",
    "explanation": "A cone has these properties."
  },
  {
    "id": 2123,
    "topic": "Irregular perimeter",
    "difficulty": "Bridge",
    "prompt": "A 17 cm by 12 cm rectangle has a 5 cm by 6 cm corner cut out, leaving an L shape. Find its perimeter.",
    "options": [
      "58 cm",
      "57 cm",
      "56 cm",
      "59 cm",
      "60 cm"
    ],
    "answer": "A",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2124,
    "topic": "Cylinder volume",
    "difficulty": "Bridge",
    "prompt": "A solid half-cylinder has radius 4 cm and length 8 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "66",
      "65",
      "62",
      "64",
      "63"
    ],
    "answer": "D",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2125,
    "topic": "Volume and scaling",
    "difficulty": "Bridge",
    "prompt": "A cube has edge 4 cm. Find its volume.",
    "options": [
      "65 cm³",
      "63 cm³",
      "62 cm³",
      "66 cm³",
      "64 cm³"
    ],
    "answer": "E",
    "explanation": "Volume = edge³."
  },
  {
    "id": 2126,
    "topic": "Sets and overlap",
    "difficulty": "Bridge",
    "prompt": "Set A = integers 1 to 11, set B = integers 4 to 15, and set C = integers 7 to 13. How many numbers belong to both A and B but not C?",
    "options": [
      "5",
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": "D",
    "explanation": "Take the overlap of A and B, then remove every member of C."
  },
  {
    "id": 2127,
    "topic": "Number and letter sequences",
    "difficulty": "Bridge",
    "prompt": "Continue both patterns: 3A, 5B, 7C, 9D, …",
    "options": [
      "11E",
      "10E",
      "13E",
      "9E",
      "12E"
    ],
    "answer": "A",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2128,
    "topic": "Family relationships",
    "difficulty": "Bridge",
    "prompt": "Tola has 4 siblings. Kemi is Tola’s mother’s sister. What is Kemi’s relationship to Tola?",
    "options": [
      "Mother",
      "Sister",
      "Grandmother",
      "Aunt",
      "Cousin"
    ],
    "answer": "D",
    "explanation": "A mother’s sister is an aunt."
  },
  {
    "id": 2129,
    "topic": "Paper folding",
    "difficulty": "Bridge",
    "prompt": "A sheet is folded in half 2 times. Then 1 separate hole is punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "4",
      "6",
      "5",
      "3",
      "2"
    ],
    "answer": "A",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2130,
    "topic": "Sibling equations",
    "difficulty": "Bridge",
    "prompt": "A family has 4 boys and 3 girls. How many brothers and sisters does one girl have altogether?",
    "options": [
      "5",
      "4",
      "6",
      "8",
      "7"
    ],
    "answer": "C",
    "explanation": "Exclude the girl herself, then count all other children."
  },
  {
    "id": 2131,
    "topic": "Number-row rules",
    "difficulty": "Bridge",
    "prompt": "For each row, result = first × second + first − second. Find the missing result for first = 4, second = 6.",
    "options": [
      "24",
      "21",
      "23",
      "20",
      "22"
    ],
    "answer": "E",
    "explanation": "Substitute into the stated rule, completing multiplication before addition and subtraction."
  },
  {
    "id": 2132,
    "topic": "Calendar cycles",
    "difficulty": "Bridge",
    "prompt": "What month is 3 months after March?",
    "options": [
      "July",
      "September",
      "October",
      "June",
      "August"
    ],
    "answer": "D",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2133,
    "topic": "Direction and turns",
    "difficulty": "Bridge",
    "prompt": "A pupil faces south and makes these quarter-turns in order: left, right, left. Which direction is the pupil now facing?",
    "options": [
      "The starting direction cannot be known",
      "North",
      "West",
      "South",
      "East"
    ],
    "answer": "E",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2134,
    "topic": "Jug states",
    "difficulty": "Bridge",
    "prompt": "A 9-litre jug is full and a 7-litre jug is empty. Pour from the larger jug into the smaller until the smaller is full. How many litres remain in the larger?",
    "options": [
      "2 litres",
      "0 litres",
      "3 litres",
      "4 litres",
      "1 litres"
    ],
    "answer": "A",
    "explanation": "9 − 7 = 2."
  },
  {
    "id": 2135,
    "topic": "Number pyramids",
    "difficulty": "Bridge",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 3, 5, 6, 4. Find the top entry.",
    "options": [
      "41",
      "38",
      "39",
      "40",
      "42"
    ],
    "answer": "D",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2136,
    "topic": "Handshake counting",
    "difficulty": "Bridge",
    "prompt": "There are 9 people at a meeting. Everyone shakes hands once with every other person. How many handshakes occur?",
    "options": [
      "37",
      "35",
      "34",
      "38",
      "36"
    ],
    "answer": "E",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2137,
    "topic": "Multiplicative patterns",
    "difficulty": "Bridge",
    "prompt": "Start at 3, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 3, 6, 18, 72, 360.",
    "options": [
      "2158",
      "2161",
      "2162",
      "2159",
      "2160"
    ],
    "answer": "E",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2138,
    "topic": "Mirror clocks",
    "difficulty": "Bridge",
    "prompt": "An ordinary 12-hour analogue clock shows 3:15. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "9:45",
      "8:50",
      "9:15",
      "8:45",
      "8:55"
    ],
    "answer": "D",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2139,
    "topic": "Gear ratios",
    "difficulty": "Bridge",
    "prompt": "A gear with 16 teeth turns 6 times and drives a gear with 32 teeth. How many turns does the larger gear make?",
    "options": [
      "2",
      "5",
      "1",
      "3",
      "4"
    ],
    "answer": "D",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2140,
    "topic": "Adjacency constraints",
    "difficulty": "Bridge",
    "prompt": "Place 2, 3, 4, 5, 6 once each in a row. Sums of neighbouring cells from left to right are 8, 9, 7, 9. What is the middle number?",
    "options": [
      "2",
      "3",
      "4",
      "1",
      "5"
    ],
    "answer": "B",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2141,
    "topic": "Cube faces and adjacency",
    "difficulty": "Bridge",
    "prompt": "A cube has faces labelled 3, 4, 5, 6, 7, 8. Face 3 shares an edge with faces 4, 5, 6, 7. Which face is opposite 3?",
    "options": [
      "8",
      "10",
      "9",
      "7",
      "6"
    ],
    "answer": "A",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2142,
    "topic": "Truth and falsehood",
    "difficulty": "Bridge",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 2. Ayo says “The token is not with me.” Bisi says “The token is with Ayo.” Chika says “The token is not with me.” Exactly one statement is true. Who has the token?",
    "options": [
      "Chika",
      "Bisi",
      "None of them",
      "Ayo",
      "Cannot be determined"
    ],
    "answer": "A",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2143,
    "topic": "Ranking",
    "difficulty": "Bridge",
    "prompt": "A pupil is 6th from the front and 5th from the back of a line. How many pupils are in the line?",
    "options": [
      "12",
      "11",
      "10",
      "8",
      "9"
    ],
    "answer": "C",
    "explanation": "Add the two ranks and subtract 1 because the pupil is counted twice."
  },
  {
    "id": 2144,
    "topic": "Minimum swaps",
    "difficulty": "Bridge",
    "prompt": "What is the minimum number of swaps of any two positions needed to change DABC into ABCD?",
    "options": [
      "3",
      "5",
      "1",
      "2",
      "4"
    ],
    "answer": "A",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2145,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Bridge",
    "prompt": "A 4 by 3 rectangle of unit squares is to be covered by 1 by 2 dominoes. If it can be covered, how many dominoes are needed? Answer 0 if it is impossible.",
    "options": [
      "8",
      "5",
      "6",
      "7",
      "4"
    ],
    "answer": "C",
    "explanation": "Each domino covers two squares. Odd area is impossible; any full rectangle with an even side can be tiled."
  },
  {
    "id": 2146,
    "topic": "Division constraints",
    "difficulty": "Bridge",
    "prompt": "Choose different integers A and B from 1 to 8. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "14",
      "11",
      "12",
      "10",
      "13"
    ],
    "answer": "C",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2147,
    "topic": "Missing-number diagrams",
    "difficulty": "Bridge",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 4, right number is 6, and bottom number is 8. What is the centre?",
    "options": [
      "16",
      "15",
      "14",
      "18",
      "17"
    ],
    "answer": "A",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2148,
    "topic": "Addition tables",
    "difficulty": "Bridge",
    "prompt": "In an addition table, a cell is the sum of its row and column headings. One cell is 15. Moving to a row whose heading is 4 greater, in the same column, what is the new cell?",
    "options": [
      "19",
      "21",
      "20",
      "18",
      "17"
    ],
    "answer": "A",
    "explanation": "The column is unchanged, so the cell increases by the change in row heading."
  },
  {
    "id": 2149,
    "topic": "Unusual operations",
    "difficulty": "Bridge",
    "prompt": "Define a ★ b = a² − b². Find 4 ★ 5.",
    "options": [
      "-11",
      "-9",
      "-7",
      "-8",
      "-10"
    ],
    "answer": "B",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2150,
    "topic": "Counting embedded squares",
    "difficulty": "Bridge",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 2-row by 4-column grid shown?",
    "options": [
      "12",
      "13",
      "11",
      "10",
      "9"
    ],
    "answer": "C",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  },
  {
    "id": 2151,
    "topic": "Fractions and decimals",
    "difficulty": "Bridge",
    "prompt": "Evaluate 0.6 × 5/2.",
    "options": [
      "3/2",
      "1/2",
      "7/2",
      "-1/2",
      "5/2"
    ],
    "answer": "A",
    "explanation": "Convert the decimal to 3/5; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2152,
    "topic": "Income expenditure and savings",
    "difficulty": "Bridge",
    "prompt": "A family earns ₦3200 and spends 75% of it. Income rises by 20%, while expenditure rises by 10% of its original amount. By what percentage do savings rise?",
    "options": [
      "51%",
      "48%",
      "49%",
      "50%",
      "52%"
    ],
    "answer": "D",
    "explanation": "Original savings = ₦800; new savings = ₦1200. Increase/original savings × 100 = 50%."
  },
  {
    "id": 2153,
    "topic": "BODMAS powers and roots",
    "difficulty": "Bridge",
    "prompt": "Evaluate (5 + 4)² − 3 × 5 + 12 ÷ 3.",
    "options": [
      "72",
      "70",
      "68",
      "71",
      "69"
    ],
    "answer": "B",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2154,
    "topic": "Recurring decimals",
    "difficulty": "Bridge",
    "prompt": "Express 0.363636… as a fraction in its lowest terms.",
    "options": [
      "26/11",
      "15/11",
      "-7/11",
      "4/11",
      "-18/11"
    ],
    "answer": "D",
    "explanation": "100x − x = 36, so x = 36/99 = 4/11."
  },
  {
    "id": 2155,
    "topic": "Metric conversion",
    "difficulty": "Bridge",
    "prompt": "A ribbon is 29 cm long. A piece of 55 mm is cut off. What length remains in millimetres?",
    "options": [
      "237 mm",
      "236 mm",
      "234 mm",
      "233 mm",
      "235 mm"
    ],
    "answer": "E",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2156,
    "topic": "Divisibility",
    "difficulty": "Bridge",
    "prompt": "How many digits d make the number 16d6 divisible by 4?",
    "options": [
      "7",
      "5",
      "4",
      "3",
      "6"
    ],
    "answer": "B",
    "explanation": "Only the final two digits matter. Test 06, 16, …, 96."
  },
  {
    "id": 2157,
    "topic": "Ordering representations",
    "difficulty": "Bridge",
    "prompt": "Which is the greatest of 33/20, 19/10 and 1.75?",
    "options": [
      "19/10",
      "29/10",
      "9/10",
      "39/10",
      "-1/10"
    ],
    "answer": "A",
    "explanation": "Write all three in decimals and compare."
  },
  {
    "id": 2158,
    "topic": "Decimal place value",
    "difficulty": "Bridge",
    "prompt": "What is the value of the digit 7 in 5.4076?",
    "options": [
      "7/1000",
      "7/10000",
      "7",
      "7/10",
      "7/100"
    ],
    "answer": "A",
    "explanation": "The 7 is in the thousandths column."
  },
  {
    "id": 2159,
    "topic": "Maximising expressions",
    "difficulty": "Bridge",
    "prompt": "Use each of 4, 6 and 9 once as A, B and C. What is the greatest value of A + B/C?",
    "options": [
      "21/2",
      "17/2",
      "25/2",
      "23/2",
      "19/2"
    ],
    "answer": "A",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2160,
    "topic": "Counting multiples",
    "difficulty": "Bridge",
    "prompt": "How many positive multiples of 4 are less than 210?",
    "options": [
      "50",
      "51",
      "54",
      "53",
      "52"
    ],
    "answer": "E",
    "explanation": "Count d, 2d, … up to the largest multiple below 210."
  },
  {
    "id": 2161,
    "topic": "Digits after division",
    "difficulty": "Bridge",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 5th place after the decimal point?",
    "options": [
      "6",
      "4",
      "5",
      "3",
      "7"
    ],
    "answer": "C",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2162,
    "topic": "Digit reversal",
    "difficulty": "Bridge",
    "prompt": "The digits of 457 are reversed. By how much does the number increase?",
    "options": [
      "296",
      "297",
      "298",
      "299",
      "295"
    ],
    "answer": "B",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2163,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Bridge",
    "prompt": "What is the units digit of 6 × 7 × … × 13?",
    "options": [
      "-2",
      "2",
      "1",
      "-1",
      "0"
    ],
    "answer": "E",
    "explanation": "The product contains a multiple of 5 and an even factor, hence a factor of 10."
  },
  {
    "id": 2164,
    "topic": "Signed numbers",
    "difficulty": "Bridge",
    "prompt": "A temperature is −7°C. It rises by 9°C each hour for 3 hours. What is the final temperature?",
    "options": [
      "18°C",
      "22°C",
      "19°C",
      "21°C",
      "20°C"
    ],
    "answer": "E",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2165,
    "topic": "LCM and events",
    "difficulty": "Bridge",
    "prompt": "Two bells ring every 18 and 27 minutes. They ring together now. After how many minutes will they next ring together?",
    "options": [
      "54",
      "52",
      "55",
      "56",
      "53"
    ],
    "answer": "A",
    "explanation": "The next shared time is LCM(18, 27) = 54 minutes. Merge the event times if requested."
  },
  {
    "id": 2166,
    "topic": "Systematic counting",
    "difficulty": "Bridge",
    "prompt": "Using only the digits 0, 1, 3, 5, 7, how many two-digit numbers can be made without repeating a digit?",
    "options": [
      "15",
      "18",
      "16",
      "14",
      "17"
    ],
    "answer": "C",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2167,
    "topic": "Ratio and unitary method",
    "difficulty": "Bridge",
    "prompt": "Flour and sugar are in the ratio 6:2. If flour weighs 42 kg, how much sugar is required?",
    "options": [
      "15 kg",
      "12 kg",
      "13 kg",
      "16 kg",
      "14 kg"
    ],
    "answer": "E",
    "explanation": "One ratio part is 7 kg. Sugar is 2 parts."
  },
  {
    "id": 2168,
    "topic": "Linear growth",
    "difficulty": "Bridge",
    "prompt": "A stack of 4 identical nested cups is 18 cm high. A stack of 7 is 24 cm high. How high is a stack of 10?",
    "options": [
      "29 cm",
      "31 cm",
      "28 cm",
      "30 cm",
      "32 cm"
    ],
    "answer": "D",
    "explanation": "Each added cup contributes 2 cm. One cup is 12 cm high; height for k cups = 12 + (k − 1) × 2."
  },
  {
    "id": 2169,
    "topic": "Powers and square roots",
    "difficulty": "Bridge",
    "prompt": "Evaluate √(7² − 6²) × √(13).",
    "options": [
      "12",
      "13",
      "14",
      "11",
      "15"
    ],
    "answer": "B",
    "explanation": "The difference of the squares is 13. The product is √13 × √13 = 13."
  },
  {
    "id": 2170,
    "topic": "HCF tiling and intersections",
    "difficulty": "Bridge",
    "prompt": "A 36 cm by 48 cm rectangle is tiled with the largest possible equal square tiles. How many tiles are needed?",
    "options": [
      "12",
      "10",
      "11",
      "14",
      "13"
    ],
    "answer": "A",
    "explanation": "Largest tile side = HCF(36, 48) = 12 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2171,
    "topic": "Means and removed values",
    "difficulty": "Bridge",
    "prompt": "The mean age of 6 pupils is 15 years. Two pupils of equal age leave, and the remaining mean is 14 years. How old is each pupil who left?",
    "options": [
      "16 years",
      "19 years",
      "15 years",
      "17 years",
      "18 years"
    ],
    "answer": "D",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2172,
    "topic": "Parity",
    "difficulty": "Bridge",
    "prompt": "If n is an odd integer greater than 3, which expression is always even?",
    "options": [
      "2n + 1",
      "n + 2",
      "n + 1",
      "n × n",
      "3n"
    ],
    "answer": "C",
    "explanation": "An odd integer plus 1 is even."
  },
  {
    "id": 2173,
    "topic": "Estimation",
    "difficulty": "Bridge",
    "prompt": "Estimate 228 × 52 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "11502",
      "11498",
      "11501",
      "11500",
      "11499"
    ],
    "answer": "D",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2174,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Bridge",
    "prompt": "A clock is correct at 8:00 a.m. It loses 5 minutes per real hour. How many minutes slow is it after 5 real hours?",
    "options": [
      "26 minutes",
      "24 minutes",
      "27 minutes",
      "23 minutes",
      "25 minutes"
    ],
    "answer": "E",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2175,
    "topic": "Fractions on number lines",
    "difficulty": "Bridge",
    "prompt": "The interval from 0 to 1 is divided into 9 equal intervals. What number is at the 5th tick after 0?",
    "options": [
      "23/9",
      "-4/9",
      "-13/9",
      "14/9",
      "5/9"
    ],
    "answer": "E",
    "explanation": "Each interval is 1/9; take 5 intervals."
  },
  {
    "id": 2176,
    "topic": "Number machines",
    "difficulty": "Bridge",
    "prompt": "A machine multiplies its input by 5, adds 8, multiplies by 3, then subtracts 7. Find the output for input 5.",
    "options": [
      "94",
      "91",
      "90",
      "92",
      "93"
    ],
    "answer": "D",
    "explanation": "The rule is output = (5x + 8) × 3 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2177,
    "topic": "Equations",
    "difficulty": "Bridge",
    "prompt": "Solve 5x + 8 = 38.",
    "options": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "C",
    "explanation": "Collect the terms in x on one side, constants on the other, then divide by the coefficient of x."
  },
  {
    "id": 2178,
    "topic": "Roman numerals",
    "difficulty": "Bridge",
    "prompt": "Evaluate XLII ÷ III. Give the answer as an ordinary number.",
    "options": [
      "13",
      "16",
      "14",
      "12",
      "15"
    ],
    "answer": "C",
    "explanation": "XLII = 42; divide by 3."
  },
  {
    "id": 2179,
    "topic": "Column arithmetic and hidden digits",
    "difficulty": "Bridge",
    "prompt": "In the addition 203 + 306 = 5d9, what digit is d?",
    "options": [
      "-1",
      "-2",
      "1",
      "0",
      "2"
    ],
    "answer": "D",
    "explanation": "The sum is 509; d is its tens digit."
  },
  {
    "id": 2180,
    "topic": "Median",
    "difficulty": "Bridge",
    "prompt": "Find the median of 11, 14, 17, 13, 15.",
    "options": [
      "13",
      "16",
      "12",
      "14",
      "15"
    ],
    "answer": "D",
    "explanation": "Arrange the five numbers; take the third."
  },
  {
    "id": 2181,
    "topic": "Speed distance and time",
    "difficulty": "Bridge",
    "prompt": "A bus travels at 45 km/h for 2 hours. How far does it travel?",
    "options": [
      "92 km",
      "89 km",
      "88 km",
      "91 km",
      "90 km"
    ],
    "answer": "E",
    "explanation": "Distance = speed × time."
  },
  {
    "id": 2182,
    "topic": "Simple interest",
    "difficulty": "Bridge",
    "prompt": "Find the simple interest on ₦1600 at 5% per year for 2 years.",
    "options": [
      "159 naira",
      "162 naira",
      "161 naira",
      "160 naira",
      "158 naira"
    ],
    "answer": "D",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2183,
    "topic": "Ages",
    "difficulty": "Bridge",
    "prompt": "A parent is 3 times as old as a child. Their ages differ by 22 years. What is the sum of their ages?",
    "options": [
      "44 years",
      "45 years",
      "46 years",
      "42 years",
      "43 years"
    ],
    "answer": "A",
    "explanation": "2 age-parts = 22; child = 11, parent = 33."
  },
  {
    "id": 2184,
    "topic": "Telescoping products",
    "difficulty": "Bridge",
    "prompt": "Evaluate (2/3) × (3/4) × … × (7/8).",
    "options": [
      "5/4",
      "9/4",
      "1/4",
      "-7/4",
      "-3/4"
    ],
    "answer": "C",
    "explanation": "Cancel every numerator that appears as the next denominator."
  },
  {
    "id": 2185,
    "topic": "Reverse and successive percentages",
    "difficulty": "Bridge",
    "prompt": "After a 25% increase, a quantity becomes 260. What was its original value?",
    "options": [
      "208",
      "206",
      "207",
      "210",
      "209"
    ],
    "answer": "A",
    "explanation": "The final quantity is 125% of the original; divide by 1.25."
  },
  {
    "id": 2186,
    "topic": "Composite areas",
    "difficulty": "Bridge",
    "prompt": "A 18 cm by 11 cm rectangle has a 2 cm by 6 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "187 cm²",
      "188 cm²",
      "184 cm²",
      "185 cm²",
      "186 cm²"
    ],
    "answer": "E",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2187,
    "topic": "Triangle angles",
    "difficulty": "Bridge",
    "prompt": "One acute angle of a right triangle is 28°. Find the other acute angle.",
    "options": [
      "64°",
      "61°",
      "60°",
      "62°",
      "63°"
    ],
    "answer": "D",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2188,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Bridge",
    "prompt": "A rectangle has perimeter 40 cm and length 13 cm. Find its area.",
    "options": [
      "93 cm²",
      "90 cm²",
      "89 cm²",
      "92 cm²",
      "91 cm²"
    ],
    "answer": "E",
    "explanation": "L + W = 20; dimensions are 13 cm and 7 cm."
  },
  {
    "id": 2189,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Bridge",
    "prompt": "Three circles of radius 6 cm have centres A, B and C, each centre lying on both other circles. Find the perimeter of triangle ABC.",
    "options": [
      "19 cm",
      "18 cm",
      "17 cm",
      "20 cm",
      "16 cm"
    ],
    "answer": "B",
    "explanation": "All three centre-to-centre distances equal the common radius."
  },
  {
    "id": 2190,
    "topic": "Shortest distance",
    "difficulty": "Bridge",
    "prompt": "A pupil walks 12 m east and 16 m north. Find the straight-line distance from the starting point.",
    "options": [
      "18 m",
      "20 m",
      "22 m",
      "21 m",
      "19 m"
    ],
    "answer": "B",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2191,
    "topic": "Faces edges and vertices",
    "difficulty": "Bridge",
    "prompt": "A pyramid has a 7-sided polygon as its base. How many faces does it have?",
    "options": [
      "7",
      "9",
      "10",
      "8",
      "6"
    ],
    "answer": "D",
    "explanation": "There is one triangular face per base side, plus the base."
  },
  {
    "id": 2192,
    "topic": "Painted cubes",
    "difficulty": "Bridge",
    "prompt": "A cube is painted on all six outside faces and cut into 6 × 6 × 6 equal small cubes. How many small cubes have exactly two painted faces?",
    "options": [
      "50",
      "47",
      "48",
      "46",
      "49"
    ],
    "answer": "C",
    "explanation": "Choose 12 edges and exclude both corner cubes on each."
  },
  {
    "id": 2193,
    "topic": "Triangle classification",
    "difficulty": "Bridge",
    "prompt": "A triangle has sides 8, 8 and 6 cm. Which description is correct?",
    "options": [
      "Equilateral",
      "Scalene",
      "No equal sides",
      "Isosceles",
      "Impossible triangle"
    ],
    "answer": "D",
    "explanation": "Exactly two sides are equal."
  },
  {
    "id": 2194,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Bridge",
    "prompt": "Two parallel lines are crossed by a transversal. One interior angle is 46°. Find the interior angle on the same side of the transversal.",
    "options": [
      "133°",
      "132°",
      "136°",
      "134°",
      "135°"
    ],
    "answer": "D",
    "explanation": "Same-side interior angles sum to 180°."
  },
  {
    "id": 2195,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Bridge",
    "prompt": "A curved path consists of one semicircular arc of radius 6 cm and two quarter-circle arcs of radius 12 cm. Its total length is kπ cm. Find k.",
    "options": [
      "17",
      "18",
      "16",
      "19",
      "20"
    ],
    "answer": "B",
    "explanation": "Semicircle arc = 6π; two quarter-arcs total 12π, giving 18π."
  },
  {
    "id": 2196,
    "topic": "Isosceles angle cases",
    "difficulty": "Bridge",
    "prompt": "An isosceles triangle contains an angle of 33°. What are all possible values of its vertex angle?",
    "options": [
      "33° only",
      "114° only",
      "No possible value",
      "147/2° only",
      "33° and 114°"
    ],
    "answer": "E",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2197,
    "topic": "Solids and symmetry",
    "difficulty": "Bridge",
    "prompt": "Which solid has one circular flat face, one curved surface and one vertex in the usual primary-school description? (Item 3.)",
    "options": [
      "Cylinder",
      "Triangular prism",
      "Cube",
      "Sphere",
      "Cone"
    ],
    "answer": "E",
    "explanation": "A cone has these properties."
  },
  {
    "id": 2198,
    "topic": "Irregular perimeter",
    "difficulty": "Bridge",
    "prompt": "A 18 cm by 13 cm rectangle has a 3 cm by 7 cm corner cut out, leaving an L shape. Find its perimeter.",
    "options": [
      "61 cm",
      "62 cm",
      "60 cm",
      "64 cm",
      "63 cm"
    ],
    "answer": "B",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2199,
    "topic": "Cylinder volume",
    "difficulty": "Bridge",
    "prompt": "A solid half-cylinder has radius 5 cm and length 9 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "229/2",
      "223/2",
      "221/2",
      "227/2",
      "225/2"
    ],
    "answer": "E",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2200,
    "topic": "Volume and scaling",
    "difficulty": "Bridge",
    "prompt": "A cube has edge 5 cm. Find its volume.",
    "options": [
      "126 cm³",
      "127 cm³",
      "124 cm³",
      "123 cm³",
      "125 cm³"
    ],
    "answer": "E",
    "explanation": "Volume = edge³."
  },
  {
    "id": 2201,
    "topic": "Sets and overlap",
    "difficulty": "Bridge",
    "prompt": "Set A = integers 1 to 12, set B = integers 4 to 16, and set C = integers 7 to 14. How many numbers belong to both A and B but not C?",
    "options": [
      "4",
      "3",
      "2",
      "5",
      "1"
    ],
    "answer": "B",
    "explanation": "Take the overlap of A and B, then remove every member of C."
  },
  {
    "id": 2202,
    "topic": "Number and letter sequences",
    "difficulty": "Bridge",
    "prompt": "Continue both patterns: 4A, 6B, 8C, 10D, …",
    "options": [
      "13E",
      "10E",
      "11E",
      "14E",
      "12E"
    ],
    "answer": "E",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2203,
    "topic": "Family relationships",
    "difficulty": "Bridge",
    "prompt": "Tola has 5 siblings. Kemi is Tola’s mother’s sister. What is Kemi’s relationship to Tola?",
    "options": [
      "Cousin",
      "Aunt",
      "Mother",
      "Sister",
      "Grandmother"
    ],
    "answer": "B",
    "explanation": "A mother’s sister is an aunt."
  },
  {
    "id": 2204,
    "topic": "Paper folding",
    "difficulty": "Bridge",
    "prompt": "A sheet is folded in half 3 times. Then 1 separate hole is punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "6",
      "7",
      "9",
      "8",
      "10"
    ],
    "answer": "D",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2205,
    "topic": "Sibling equations",
    "difficulty": "Bridge",
    "prompt": "A family has 2 boys and 1 girls. How many brothers and sisters does one girl have altogether?",
    "options": [
      "2",
      "0",
      "1",
      "4",
      "3"
    ],
    "answer": "A",
    "explanation": "Exclude the girl herself, then count all other children."
  },
  {
    "id": 2206,
    "topic": "Number-row rules",
    "difficulty": "Bridge",
    "prompt": "For each row, result = first × second + first − second. Find the missing result for first = 5, second = 7.",
    "options": [
      "34",
      "33",
      "31",
      "35",
      "32"
    ],
    "answer": "B",
    "explanation": "Substitute into the stated rule, completing multiplication before addition and subtraction."
  },
  {
    "id": 2207,
    "topic": "Calendar cycles",
    "difficulty": "Bridge",
    "prompt": "What month is 3 months after April?",
    "options": [
      "August",
      "October",
      "November",
      "July",
      "September"
    ],
    "answer": "D",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2208,
    "topic": "Direction and turns",
    "difficulty": "Bridge",
    "prompt": "A pupil faces west and makes these quarter-turns in order: right, right, left. Which direction is the pupil now facing?",
    "options": [
      "South",
      "East",
      "West",
      "North",
      "The starting direction cannot be known"
    ],
    "answer": "D",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2209,
    "topic": "Jug states",
    "difficulty": "Bridge",
    "prompt": "A 11-litre jug is full and a 9-litre jug is empty. Pour from the larger jug into the smaller until the smaller is full. How many litres remain in the larger?",
    "options": [
      "0 litres",
      "4 litres",
      "2 litres",
      "3 litres",
      "1 litres"
    ],
    "answer": "C",
    "explanation": "11 − 9 = 2."
  },
  {
    "id": 2210,
    "topic": "Number pyramids",
    "difficulty": "Bridge",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 4, 6, 7, 5. Find the top entry.",
    "options": [
      "48",
      "50",
      "47",
      "49",
      "46"
    ],
    "answer": "A",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2211,
    "topic": "Handshake counting",
    "difficulty": "Bridge",
    "prompt": "There are 10 people at a meeting. Everyone shakes hands once with every other person. How many handshakes occur?",
    "options": [
      "46",
      "43",
      "47",
      "44",
      "45"
    ],
    "answer": "E",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2212,
    "topic": "Multiplicative patterns",
    "difficulty": "Bridge",
    "prompt": "Start at 4, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 4, 8, 24, 96, 480.",
    "options": [
      "2879",
      "2881",
      "2882",
      "2880",
      "2878"
    ],
    "answer": "D",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2213,
    "topic": "Mirror clocks",
    "difficulty": "Bridge",
    "prompt": "An ordinary 12-hour analogue clock shows 4:20. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "8:40",
      "7:50",
      "7:40",
      "8:10",
      "7:45"
    ],
    "answer": "C",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2214,
    "topic": "Gear ratios",
    "difficulty": "Bridge",
    "prompt": "A gear with 18 teeth turns 6 times and drives a gear with 36 teeth. How many turns does the larger gear make?",
    "options": [
      "3",
      "4",
      "5",
      "2",
      "1"
    ],
    "answer": "A",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2215,
    "topic": "Adjacency constraints",
    "difficulty": "Bridge",
    "prompt": "Place 3, 4, 5, 6, 7 once each in a row. Sums of neighbouring cells from left to right are 9, 11, 9, 10. What is the middle number?",
    "options": [
      "7",
      "5",
      "8",
      "4",
      "6"
    ],
    "answer": "E",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2216,
    "topic": "Cube faces and adjacency",
    "difficulty": "Bridge",
    "prompt": "A cube has faces labelled 4, 5, 6, 7, 8, 9. Face 4 shares an edge with faces 5, 6, 7, 8. Which face is opposite 4?",
    "options": [
      "8",
      "7",
      "10",
      "9",
      "11"
    ],
    "answer": "D",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2217,
    "topic": "Truth and falsehood",
    "difficulty": "Bridge",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 3. Ayo says “The token is with Bisi.” Bisi says “The token is not with me.” Chika says “The token is not with Ayo.” Exactly one statement is true. Who has the token?",
    "options": [
      "Ayo",
      "Chika",
      "Bisi",
      "Cannot be determined",
      "None of them"
    ],
    "answer": "A",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2218,
    "topic": "Ranking",
    "difficulty": "Bridge",
    "prompt": "A pupil is 7th from the front and 6th from the back of a line. How many pupils are in the line?",
    "options": [
      "11",
      "10",
      "13",
      "14",
      "12"
    ],
    "answer": "E",
    "explanation": "Add the two ranks and subtract 1 because the pupil is counted twice."
  },
  {
    "id": 2219,
    "topic": "Minimum swaps",
    "difficulty": "Bridge",
    "prompt": "What is the minimum number of swaps of any two positions needed to change DCAB into ABCD?",
    "options": [
      "1",
      "5",
      "3",
      "4",
      "2"
    ],
    "answer": "C",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2220,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Bridge",
    "prompt": "A 2 by 4 rectangle of unit squares is to be covered by 1 by 2 dominoes. If it can be covered, how many dominoes are needed? Answer 0 if it is impossible.",
    "options": [
      "5",
      "2",
      "4",
      "3",
      "6"
    ],
    "answer": "C",
    "explanation": "Each domino covers two squares. Odd area is impossible; any full rectangle with an even side can be tiled."
  },
  {
    "id": 2221,
    "topic": "Division constraints",
    "difficulty": "Bridge",
    "prompt": "Choose different integers A and B from 1 to 9. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "16",
      "15",
      "12",
      "13",
      "14"
    ],
    "answer": "E",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2222,
    "topic": "Missing-number diagrams",
    "difficulty": "Bridge",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 5, right number is 7, and bottom number is 9. What is the centre?",
    "options": [
      "25",
      "26",
      "28",
      "24",
      "27"
    ],
    "answer": "B",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2223,
    "topic": "Addition tables",
    "difficulty": "Bridge",
    "prompt": "In an addition table, a cell is the sum of its row and column headings. One cell is 17. Moving to a row whose heading is 4 greater, in the same column, what is the new cell?",
    "options": [
      "21",
      "22",
      "20",
      "19",
      "23"
    ],
    "answer": "A",
    "explanation": "The column is unchanged, so the cell increases by the change in row heading."
  },
  {
    "id": 2224,
    "topic": "Unusual operations",
    "difficulty": "Bridge",
    "prompt": "Define a ★ b = a² − b². Find 5 ★ 6.",
    "options": [
      "-11",
      "-12",
      "-13",
      "-9",
      "-10"
    ],
    "answer": "A",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2225,
    "topic": "Counting embedded squares",
    "difficulty": "Bridge",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 2-row by 5-column grid shown?",
    "options": [
      "13",
      "14",
      "12",
      "15",
      "16"
    ],
    "answer": "B",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  },
  {
    "id": 2226,
    "topic": "Fractions and decimals",
    "difficulty": "Competition",
    "prompt": "Evaluate (0.7 + 3/5) × 5/2.",
    "options": [
      "5/4",
      "9/4",
      "13/4",
      "17/4",
      "21/4"
    ],
    "answer": "C",
    "explanation": "Convert the decimal to 7/10; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2227,
    "topic": "Income expenditure and savings",
    "difficulty": "Competition",
    "prompt": "A family earns ₦3600 and spends 75% of it. Income rises by 20%, while expenditure rises by 10% of its original amount. By what percentage do savings rise?",
    "options": [
      "49%",
      "52%",
      "48%",
      "50%",
      "51%"
    ],
    "answer": "D",
    "explanation": "Original savings = ₦900; new savings = ₦1350. Increase/original savings × 100 = 50%."
  },
  {
    "id": 2228,
    "topic": "BODMAS powers and roots",
    "difficulty": "Competition",
    "prompt": "Evaluate (6 + 4)² − 3 × 6 + 24 ÷ 4.",
    "options": [
      "89",
      "87",
      "88",
      "90",
      "86"
    ],
    "answer": "C",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2229,
    "topic": "Recurring decimals",
    "difficulty": "Competition",
    "prompt": "Express 0.454545… as a fraction in its lowest terms.",
    "options": [
      "-17/11",
      "16/11",
      "-6/11",
      "27/11",
      "5/11"
    ],
    "answer": "E",
    "explanation": "100x − x = 45, so x = 45/99 = 5/11."
  },
  {
    "id": 2230,
    "topic": "Metric conversion",
    "difficulty": "Competition",
    "prompt": "A ribbon is 32 cm long. Pieces of 60 mm and 0.5 dm are cut off. What length remains in millimetres?",
    "options": [
      "210 mm",
      "212 mm",
      "209 mm",
      "208 mm",
      "211 mm"
    ],
    "answer": "A",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2231,
    "topic": "Divisibility",
    "difficulty": "Competition",
    "prompt": "The number 24d5 is divisible by both 5 and 9. Find the digit d.",
    "options": [
      "8",
      "6",
      "7",
      "9",
      "5"
    ],
    "answer": "C",
    "explanation": "The digit sum must be divisible by 9. The only digit that works is 7."
  },
  {
    "id": 2232,
    "topic": "Ordering representations",
    "difficulty": "Competition",
    "prompt": "Find the difference between the greatest and least of 17/10, 39/20 and 1.8.",
    "options": [
      "5/4",
      "9/4",
      "-7/4",
      "-3/4",
      "1/4"
    ],
    "answer": "E",
    "explanation": "Greatest − least = 39/20 − 17/10 = 1/4."
  },
  {
    "id": 2233,
    "topic": "Decimal place value",
    "difficulty": "Competition",
    "prompt": "By how much does the value of the digit 4 exceed the value of the digit 7 in 6.4076?",
    "options": [
      "393/1000",
      "2393/1000",
      "1393/1000",
      "-1607/1000",
      "-607/1000"
    ],
    "answer": "A",
    "explanation": "4 tenths − 7 thousandths = 0.400 − 0.007 = 0.393."
  },
  {
    "id": 2234,
    "topic": "Maximising expressions",
    "difficulty": "Competition",
    "prompt": "Use each of 5, 7 and 10 once as A, B and C. Find the difference between the greatest and least possible values of A + B/C.",
    "options": [
      "57/10",
      "37/10",
      "67/10",
      "47/10",
      "77/10"
    ],
    "answer": "A",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2235,
    "topic": "Counting multiples",
    "difficulty": "Competition",
    "prompt": "How many positive integers below 240 are divisible by 5 or 6, or both?",
    "options": [
      "81",
      "77",
      "79",
      "78",
      "80"
    ],
    "answer": "C",
    "explanation": "Add the two multiple counts, then subtract the common multiples counted twice."
  },
  {
    "id": 2236,
    "topic": "Digits after division",
    "difficulty": "Competition",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 6th place after the decimal point?",
    "options": [
      "5",
      "6",
      "8",
      "9",
      "7"
    ],
    "answer": "E",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2237,
    "topic": "Digit reversal",
    "difficulty": "Competition",
    "prompt": "A three-digit number has tens digit 6, digit sum 11, and increases by 297 when reversed. What is the sum of its hundreds and units digits?",
    "options": [
      "6",
      "5",
      "4",
      "3",
      "7"
    ],
    "answer": "B",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2238,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Competition",
    "prompt": "How many zeros occur at the end of the integer 7 × 8 × … × 17?",
    "options": [
      "1",
      "3",
      "2",
      "4",
      "0"
    ],
    "answer": "C",
    "explanation": "Count factors of 2 and 5 in the product. Each pair gives one trailing zero."
  },
  {
    "id": 2239,
    "topic": "Signed numbers",
    "difficulty": "Competition",
    "prompt": "A temperature is −8°C. It rises by 11°C each hour for 3 hours, then falls by 4°C. What is the final temperature?",
    "options": [
      "21°C",
      "22°C",
      "19°C",
      "20°C",
      "23°C"
    ],
    "answer": "A",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2240,
    "topic": "LCM and events",
    "difficulty": "Competition",
    "prompt": "Two bells ring every 20 and 30 minutes, starting together now. Count all distinct ringing times after now up to and including their next simultaneous ringing.",
    "options": [
      "4",
      "2",
      "5",
      "3",
      "6"
    ],
    "answer": "A",
    "explanation": "The next shared time is LCM(20, 30) = 60 minutes. Merge the event times if requested."
  },
  {
    "id": 2241,
    "topic": "Systematic counting",
    "difficulty": "Competition",
    "prompt": "Using only the digits 0, 1, 2, 4, 6, how many two-digit even numbers can be made without repeating a digit?",
    "options": [
      "11",
      "15",
      "14",
      "13",
      "12"
    ],
    "answer": "D",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2242,
    "topic": "Ratio and unitary method",
    "difficulty": "Competition",
    "prompt": "Flour and sugar are in the ratio 3:3. Flour weighs 0 kg more than sugar. Find the mass of sugar.",
    "options": [
      "26 kg",
      "24 kg",
      "23 kg",
      "25 kg",
      "22 kg"
    ],
    "answer": "B",
    "explanation": "One ratio part is 8 kg. Sugar is 3 parts."
  },
  {
    "id": 2243,
    "topic": "Linear growth",
    "difficulty": "Competition",
    "prompt": "A stack of 4 nested cups is 22 cm high, and a stack of 7 is 31 cm high. What is the greatest number of cups in a stack no higher than 51 cm?",
    "options": [
      "15",
      "13",
      "12",
      "14",
      "11"
    ],
    "answer": "B",
    "explanation": "Each added cup contributes 3 cm. One cup is 13 cm high; height for k cups = 13 + (k − 1) × 3."
  },
  {
    "id": 2244,
    "topic": "Powers and square roots",
    "difficulty": "Competition",
    "prompt": "Evaluate √(8² − 7²) × √(15).",
    "options": [
      "14",
      "17",
      "13",
      "15",
      "16"
    ],
    "answer": "D",
    "explanation": "The difference of the squares is 15. The product is √15 × √15 = 15."
  },
  {
    "id": 2245,
    "topic": "HCF tiling and intersections",
    "difficulty": "Competition",
    "prompt": "A 42 cm by 56 cm rectangle is tiled with the largest possible equal square tiles. How many tile-grid intersections are there, including boundary intersections?",
    "options": [
      "21",
      "20",
      "19",
      "22",
      "18"
    ],
    "answer": "B",
    "explanation": "Largest tile side = HCF(42, 56) = 14 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2246,
    "topic": "Means and removed values",
    "difficulty": "Competition",
    "prompt": "The mean age of 7 pupils is 16 years. Two pupils of equal age leave, and the remaining mean is 15 years. How old is each pupil who left?",
    "options": [
      "37/2 years",
      "35/2 years",
      "41/2 years",
      "39/2 years",
      "33/2 years"
    ],
    "answer": "A",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2247,
    "topic": "Parity",
    "difficulty": "Competition",
    "prompt": "For every odd integer n greater than 4, which expression is always odd?",
    "options": [
      "2n²",
      "n + 3",
      "n² + 1",
      "n(n + 1)",
      "n² + 2n"
    ],
    "answer": "E",
    "explanation": "Odd squared is odd; adding an even term keeps it odd."
  },
  {
    "id": 2248,
    "topic": "Estimation",
    "difficulty": "Competition",
    "prompt": "Estimate 238 × 53 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "12000",
      "12002",
      "11999",
      "12001",
      "11998"
    ],
    "answer": "A",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2249,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Competition",
    "prompt": "A clock is correct at 8:00 a.m. It loses 6 minutes per real hour. How many minutes slow is it after 6 real hours?",
    "options": [
      "35 minutes",
      "38 minutes",
      "34 minutes",
      "36 minutes",
      "37 minutes"
    ],
    "answer": "D",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2250,
    "topic": "Fractions on number lines",
    "difficulty": "Competition",
    "prompt": "The interval from 1/3 to 5/6 is divided into 10 equal intervals. What number is at the 2nd tick after 1/3?",
    "options": [
      "73/30",
      "43/30",
      "13/30",
      "-17/30",
      "-47/30"
    ],
    "answer": "C",
    "explanation": "Interval length = (5/6 − 1/3)/10; add 2 such intervals to 1/3."
  },
  {
    "id": 2251,
    "topic": "Number machines",
    "difficulty": "Competition",
    "prompt": "A machine multiplies its input by 2, adds 9, multiplies by 4, then subtracts 7. Its output is 77. What was the input?",
    "options": [
      "6",
      "7",
      "4",
      "8",
      "5"
    ],
    "answer": "A",
    "explanation": "The rule is output = (2x + 9) × 4 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2252,
    "topic": "Equations",
    "difficulty": "Competition",
    "prompt": "Solve 6(x + 2) = 40 + 2x.",
    "options": [
      "5",
      "8",
      "7",
      "6",
      "9"
    ],
    "answer": "C",
    "explanation": "Collect the terms in x on one side, constants on the other, then divide by the coefficient of x."
  },
  {
    "id": 2253,
    "topic": "Roman numerals",
    "difficulty": "Competition",
    "prompt": "Evaluate (LX ÷ III) + IV. Give the answer in Roman numerals.",
    "options": [
      "XXI",
      "XXII",
      "XXV",
      "XXIII",
      "XXIV"
    ],
    "answer": "E",
    "explanation": "60/3 + 4 = 24, written XXIV."
  },
  {
    "id": 2254,
    "topic": "Mode and frequency",
    "difficulty": "Competition",
    "prompt": "The scores are 3, 4, 4, 6, 6, 6, 8. One score of 4 is added and one score of 6 is removed. What is the new mode?",
    "options": [
      "6",
      "4",
      "3",
      "5",
      "2"
    ],
    "answer": "B",
    "explanation": "After the changes, 4 occurs three times and 6 occurs twice."
  },
  {
    "id": 2255,
    "topic": "Median",
    "difficulty": "Competition",
    "prompt": "The ordered list 10, 12, x, 16, 20, 22 has median 15. Find x.",
    "options": [
      "16",
      "14",
      "15",
      "13",
      "12"
    ],
    "answer": "B",
    "explanation": "The middle pair is x and 16. Their mean is 15; solve for x."
  },
  {
    "id": 2256,
    "topic": "Speed distance and time",
    "difficulty": "Competition",
    "prompt": "A bus covers 150 km at 50 km/h. How many hours would the same trip take at 45 km/h?",
    "options": [
      "7/3 hours",
      "16/3 hours",
      "10/3 hours",
      "4/3 hours",
      "13/3 hours"
    ],
    "answer": "C",
    "explanation": "Time = distance/new speed = 150/45 hours."
  },
  {
    "id": 2257,
    "topic": "Simple interest",
    "difficulty": "Competition",
    "prompt": "A sum earns ₦270 simple interest at 5% per year for 3 years. Find the principal.",
    "options": [
      "1798 naira",
      "1799 naira",
      "1800 naira",
      "1801 naira",
      "1802 naira"
    ],
    "answer": "C",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2258,
    "topic": "Ages",
    "difficulty": "Competition",
    "prompt": "A parent is 3 times as old as a child. Their ages differ by 24 years. What is the sum of their ages?",
    "options": [
      "48 years",
      "47 years",
      "50 years",
      "49 years",
      "46 years"
    ],
    "answer": "A",
    "explanation": "2 age-parts = 24; child = 12, parent = 36."
  },
  {
    "id": 2259,
    "topic": "Telescoping products",
    "difficulty": "Competition",
    "prompt": "Evaluate (2/3) × (3/4) × … × (8/9) × (10/11).",
    "options": [
      "-178/99",
      "-79/99",
      "218/99",
      "119/99",
      "20/99"
    ],
    "answer": "E",
    "explanation": "The consecutive section cancels to 2/9; multiply the final fraction."
  },
  {
    "id": 2260,
    "topic": "Reverse and successive percentages",
    "difficulty": "Competition",
    "prompt": "A price of ₦280 rises by 10% and then falls by 10% of the new price. Find the final price.",
    "options": [
      "1376/5",
      "1381/5",
      "1396/5",
      "1391/5",
      "1386/5"
    ],
    "answer": "E",
    "explanation": "Multiply the original price by 1.10 × 0.90 = 0.99."
  },
  {
    "id": 2261,
    "topic": "Composite areas",
    "difficulty": "Competition",
    "prompt": "A 20 cm by 12 cm rectangle has a 3 cm by 3 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "232 cm²",
      "230 cm²",
      "231 cm²",
      "229 cm²",
      "233 cm²"
    ],
    "answer": "C",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2262,
    "topic": "Triangle angles",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle has each base angle equal to 29°. Find its exterior angle adjacent to the vertex angle.",
    "options": [
      "56°",
      "60°",
      "59°",
      "58°",
      "57°"
    ],
    "answer": "D",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2263,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 44 cm. Its length exceeds its width by 6 cm. Find its area.",
    "options": [
      "110 cm²",
      "111 cm²",
      "112 cm²",
      "114 cm²",
      "113 cm²"
    ],
    "answer": "C",
    "explanation": "L + W = 22; dimensions are 14 cm and 8 cm."
  },
  {
    "id": 2264,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Competition",
    "prompt": "A small circle has radius 1/7 of a larger circle. What fraction of the larger circle is covered by the smaller one?",
    "options": [
      "50/49",
      "-97/49",
      "-48/49",
      "1/49",
      "99/49"
    ],
    "answer": "D",
    "explanation": "Area scales with the square of the radius ratio."
  },
  {
    "id": 2265,
    "topic": "Shortest distance",
    "difficulty": "Competition",
    "prompt": "A pupil walks 30 m east, 20 m north, then 15 m west. Find the straight-line distance from the starting point.",
    "options": [
      "25 m",
      "27 m",
      "26 m",
      "24 m",
      "23 m"
    ],
    "answer": "A",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2266,
    "topic": "Faces edges and vertices",
    "difficulty": "Competition",
    "prompt": "A prism has a 8-sided polygon as each base. How many vertices does it have?",
    "options": [
      "15",
      "17",
      "18",
      "16",
      "14"
    ],
    "answer": "D",
    "explanation": "Each of its two bases contributes n vertices."
  },
  {
    "id": 2267,
    "topic": "Painted cubes",
    "difficulty": "Competition",
    "prompt": "A cube is painted on all six outside faces and cut into 7 × 7 × 7 equal small cubes. How many small cubes have exactly one painted faces?",
    "options": [
      "150",
      "151",
      "149",
      "152",
      "148"
    ],
    "answer": "A",
    "explanation": "Six face interiors each contain (n − 2)² cubes."
  },
  {
    "id": 2268,
    "topic": "Triangle classification",
    "difficulty": "Competition",
    "prompt": "A triangle has angles 39°, 64° and 77°. Which description is correct?",
    "options": [
      "Acute equilateral",
      "Obtuse scalene",
      "Right scalene",
      "Acute scalene",
      "Right isosceles"
    ],
    "answer": "D",
    "explanation": "All angles are less than 90° and unequal."
  },
  {
    "id": 2269,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Competition",
    "prompt": "In triangle ABC, AB is extended through B to D. Angle CBD = 73° and angle A = 25°. Find angle C.",
    "options": [
      "48°",
      "46°",
      "47°",
      "49°",
      "50°"
    ],
    "answer": "A",
    "explanation": "Exterior angle CBD = angle A + angle C."
  },
  {
    "id": 2270,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Competition",
    "prompt": "The boundary of a figure contains one semicircular arc of radius 7 cm, two quarter-circle arcs of radius 14 cm, and straight portions totalling 28 cm. Its perimeter is (28 + kπ) cm. Find k.",
    "options": [
      "19",
      "23",
      "22",
      "20",
      "21"
    ],
    "answer": "E",
    "explanation": "Semicircle arc = 7π; two quarter-arcs total 14π, giving 21π."
  },
  {
    "id": 2271,
    "topic": "Isosceles angle cases",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle contains an angle of 34°. What are all possible values of its vertex angle?",
    "options": [
      "73° only",
      "34° and 112°",
      "No possible value",
      "112° only",
      "34° only"
    ],
    "answer": "B",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2272,
    "topic": "Polygons and symmetry",
    "difficulty": "Competition",
    "prompt": "A regular 9-sided polygon has how many lines of symmetry?",
    "options": [
      "10",
      "8",
      "11",
      "9",
      "7"
    ],
    "answer": "D",
    "explanation": "A regular polygon has as many symmetry lines as sides."
  },
  {
    "id": 2273,
    "topic": "Irregular perimeter",
    "difficulty": "Competition",
    "prompt": "A 19 cm by 14 cm rectangle has a 4 cm wide, 4 cm deep rectangular notch cut from the middle of its top side. Find the new perimeter.",
    "options": [
      "72 cm",
      "76 cm",
      "73 cm",
      "74 cm",
      "75 cm"
    ],
    "answer": "D",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2274,
    "topic": "Cylinder volume",
    "difficulty": "Competition",
    "prompt": "A solid half-cylinder has radius 6 cm and length 10 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "181",
      "178",
      "179",
      "180",
      "182"
    ],
    "answer": "D",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2275,
    "topic": "Volume and scaling",
    "difficulty": "Competition",
    "prompt": "Every edge of a cube is multiplied by 3. By what factor is its volume multiplied?",
    "options": [
      "29",
      "26",
      "25",
      "27",
      "28"
    ],
    "answer": "D",
    "explanation": "All three dimensions scale, so cube the linear factor."
  },
  {
    "id": 2276,
    "topic": "Sets and overlap",
    "difficulty": "Competition",
    "prompt": "Set A = integers 1 to 13, set B = integers 4 to 17, and set C = integers 7 to 15. How many numbers belong to A or B (or both), but not C?",
    "options": [
      "9",
      "10",
      "8",
      "7",
      "6"
    ],
    "answer": "C",
    "explanation": "Form the union of A and B, then remove C."
  },
  {
    "id": 2277,
    "topic": "Number and letter sequences",
    "difficulty": "Competition",
    "prompt": "Continue both patterns: 5A, 8C, 11E, 14G, …",
    "options": [
      "16I",
      "19I",
      "18I",
      "17I",
      "15I"
    ],
    "answer": "D",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2278,
    "topic": "Family relationships",
    "difficulty": "Competition",
    "prompt": "Femi has 4 cousins. Ada is the daughter of Femi’s father’s only sister. What is Ada’s relationship to Femi?",
    "options": [
      "Aunt",
      "Niece",
      "Cousin",
      "Sister",
      "Mother"
    ],
    "answer": "C",
    "explanation": "A parent’s sibling’s child is a cousin."
  },
  {
    "id": 2279,
    "topic": "Paper folding",
    "difficulty": "Competition",
    "prompt": "A sheet is folded in half 1 times. Then 2 separate holes are punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "3",
      "4",
      "5",
      "2",
      "6"
    ],
    "answer": "B",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2280,
    "topic": "Sibling equations",
    "difficulty": "Competition",
    "prompt": "In a family, each girl has 5 brothers. Every boy has as many brothers as sisters. How many children are in the family?",
    "options": [
      "11",
      "9",
      "8",
      "7",
      "10"
    ],
    "answer": "B",
    "explanation": "B = 5; B − 1 = G, so G = 4 and total children = 9."
  },
  {
    "id": 2281,
    "topic": "Number-row rules",
    "difficulty": "Competition",
    "prompt": "For each row, result = first × second + first − second. Find the missing result for first = 6, second = 8.",
    "options": [
      "44",
      "47",
      "48",
      "45",
      "46"
    ],
    "answer": "E",
    "explanation": "Substitute into the stated rule, completing multiplication before addition and subtraction."
  },
  {
    "id": 2282,
    "topic": "Calendar cycles",
    "difficulty": "Competition",
    "prompt": "What month is 4 months after May?",
    "options": [
      "October",
      "September",
      "December",
      "January",
      "November"
    ],
    "answer": "B",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2283,
    "topic": "Direction and turns",
    "difficulty": "Competition",
    "prompt": "A pupil faces north and makes these quarter-turns in order: left, left, right, left. Which direction is the pupil now facing?",
    "options": [
      "North",
      "The starting direction cannot be known",
      "West",
      "East",
      "South"
    ],
    "answer": "E",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2284,
    "topic": "Jug states",
    "difficulty": "Competition",
    "prompt": "A 13-litre jug is full and a 11-litre jug is empty. Fill the smaller from the larger, empty the smaller, pour the remainder of the larger into it, then refill the larger and top up the smaller. How many litres remain in the larger now?",
    "options": [
      "5 litres",
      "6 litres",
      "2 litres",
      "3 litres",
      "4 litres"
    ],
    "answer": "E",
    "explanation": "Record amounts after each pour. First remainder is 2 L; after the second topping-up, 4 L remain in the large jug."
  },
  {
    "id": 2285,
    "topic": "Number pyramids",
    "difficulty": "Competition",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 5, x, 8, 6, and the top entry is 56. Find x.",
    "options": [
      "6",
      "5",
      "8",
      "9",
      "7"
    ],
    "answer": "E",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2286,
    "topic": "Handshake counting",
    "difficulty": "Competition",
    "prompt": "There are 11 people at a meeting. Everyone shakes hands once with every other person except that two particular people do not shake hands with each other. How many handshakes occur?",
    "options": [
      "53",
      "52",
      "56",
      "55",
      "54"
    ],
    "answer": "E",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2287,
    "topic": "Multiplicative patterns",
    "difficulty": "Competition",
    "prompt": "Start at 5, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 5, 10, 30, 120, 600.",
    "options": [
      "3602",
      "3599",
      "3600",
      "3598",
      "3601"
    ],
    "answer": "C",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2288,
    "topic": "Mirror clocks",
    "difficulty": "Competition",
    "prompt": "An ordinary 12-hour analogue clock shows 5:25. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "7:05",
      "6:35",
      "7:35",
      "6:45",
      "6:40"
    ],
    "answer": "B",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2289,
    "topic": "Gear ratios",
    "difficulty": "Competition",
    "prompt": "A gear with 20 teeth turns 8 times and drives a gear with 40 teeth. How many turns does the larger gear make?",
    "options": [
      "5",
      "2",
      "4",
      "3",
      "6"
    ],
    "answer": "C",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2290,
    "topic": "Adjacency constraints",
    "difficulty": "Competition",
    "prompt": "Place 4, 5, 6, 7, 8 once each in a row. Sums of neighbouring cells from left to right are 14, 10, 9, 12. What is the middle number?",
    "options": [
      "6",
      "4",
      "5",
      "2",
      "3"
    ],
    "answer": "B",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2291,
    "topic": "Cube faces and adjacency",
    "difficulty": "Competition",
    "prompt": "A cube has faces labelled 5, 6, 7, 8, 9, 10. Face 5 shares an edge with faces 6, 7, 8, 9. Which face is opposite 5?",
    "options": [
      "11",
      "8",
      "9",
      "12",
      "10"
    ],
    "answer": "E",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2292,
    "topic": "Truth and falsehood",
    "difficulty": "Competition",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 4. Ayo says “The token is not with me.” Bisi says “The token is with Ayo.” Chika says “The token is not with me.” Exactly one statement is true. Who has the token?",
    "options": [
      "Bisi",
      "Chika",
      "None of them",
      "Cannot be determined",
      "Ayo"
    ],
    "answer": "B",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2293,
    "topic": "Ranking",
    "difficulty": "Competition",
    "prompt": "A pupil is 8th from the front and 3th from the back of a line. How many pupils are in the line?",
    "options": [
      "9",
      "12",
      "11",
      "8",
      "10"
    ],
    "answer": "E",
    "explanation": "Add the two ranks and subtract 1 because the pupil is counted twice."
  },
  {
    "id": 2294,
    "topic": "Minimum swaps",
    "difficulty": "Competition",
    "prompt": "What is the minimum number of swaps of any two positions needed to change EDBCA into ABCDE?",
    "options": [
      "5",
      "1",
      "4",
      "2",
      "3"
    ],
    "answer": "E",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2295,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Competition",
    "prompt": "A 10 by 10 checkerboard has its top-left and bottom-right corner squares removed. How many complete coverings by 1 by 2 dominoes are possible?",
    "options": [
      "0",
      "-2",
      "2",
      "1",
      "-1"
    ],
    "answer": "A",
    "explanation": "The removed corners have the same colour. Dominoes always cover one square of each colour, so no covering exists."
  },
  {
    "id": 2296,
    "topic": "Division constraints",
    "difficulty": "Competition",
    "prompt": "Choose different integers A and B from 1 to 10. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "17",
      "18",
      "19",
      "15",
      "16"
    ],
    "answer": "A",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2297,
    "topic": "Missing-number diagrams",
    "difficulty": "Competition",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 6, right number is 8, and bottom number is 10. What is the centre?",
    "options": [
      "36",
      "38",
      "39",
      "37",
      "40"
    ],
    "answer": "B",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2298,
    "topic": "Addition tables",
    "difficulty": "Competition",
    "prompt": "In a 2 by 2 addition table, each cell is its row heading plus its column heading. The top-left, top-right and bottom-left cells are 16, 23 and 21. Find the bottom-right cell.",
    "options": [
      "28",
      "27",
      "29",
      "26",
      "30"
    ],
    "answer": "A",
    "explanation": "Bottom-right = top-right + bottom-left − top-left."
  },
  {
    "id": 2299,
    "topic": "Unusual operations",
    "difficulty": "Competition",
    "prompt": "Define a ★ b = a² − b² and a ◆ b = a + b. Find (6 ★ 3) + 3 × (6 ◆ 3).",
    "options": [
      "56",
      "55",
      "53",
      "52",
      "54"
    ],
    "answer": "E",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2300,
    "topic": "Counting embedded squares",
    "difficulty": "Competition",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 3-row by 4-column grid shown?",
    "options": [
      "21",
      "22",
      "19",
      "20",
      "18"
    ],
    "answer": "D",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  },
  {
    "id": 2301,
    "topic": "Fractions and decimals",
    "difficulty": "Competition",
    "prompt": "Evaluate (0.8 + 3/5) × 5/2.",
    "options": [
      "11/2",
      "7/2",
      "9/2",
      "3/2",
      "5/2"
    ],
    "answer": "B",
    "explanation": "Convert the decimal to 4/5; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2302,
    "topic": "Income expenditure and savings",
    "difficulty": "Competition",
    "prompt": "A family earns ₦4000 and spends 75% of it. Income rises by 20%, while expenditure rises by 10% of its original amount. By what percentage do savings rise?",
    "options": [
      "48%",
      "51%",
      "49%",
      "50%",
      "52%"
    ],
    "answer": "D",
    "explanation": "Original savings = ₦1000; new savings = ₦1500. Increase/original savings × 100 = 50%."
  },
  {
    "id": 2303,
    "topic": "BODMAS powers and roots",
    "difficulty": "Competition",
    "prompt": "Evaluate (7 + 4)² − 3 × 7 + 24 ÷ 4.",
    "options": [
      "106",
      "108",
      "107",
      "105",
      "104"
    ],
    "answer": "A",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2304,
    "topic": "Recurring decimals",
    "difficulty": "Competition",
    "prompt": "Express 0.545454… as a fraction in its lowest terms.",
    "options": [
      "-16/11",
      "-5/11",
      "28/11",
      "6/11",
      "17/11"
    ],
    "answer": "D",
    "explanation": "100x − x = 54, so x = 54/99 = 6/11."
  },
  {
    "id": 2305,
    "topic": "Metric conversion",
    "difficulty": "Competition",
    "prompt": "A ribbon is 35 cm long. Pieces of 65 mm and 0.5 dm are cut off. What length remains in millimetres?",
    "options": [
      "233 mm",
      "234 mm",
      "235 mm",
      "237 mm",
      "236 mm"
    ],
    "answer": "C",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2306,
    "topic": "Divisibility",
    "difficulty": "Competition",
    "prompt": "The number 25d5 is divisible by both 5 and 9. Find the digit d.",
    "options": [
      "8",
      "4",
      "7",
      "6",
      "5"
    ],
    "answer": "D",
    "explanation": "The digit sum must be divisible by 9. The only digit that works is 6."
  },
  {
    "id": 2307,
    "topic": "Ordering representations",
    "difficulty": "Competition",
    "prompt": "Find the difference between the greatest and least of 7/4, 2 and 1.85.",
    "options": [
      "5/4",
      "9/4",
      "1/4",
      "-3/4",
      "-7/4"
    ],
    "answer": "C",
    "explanation": "Greatest − least = 2 − 7/4 = 1/4."
  },
  {
    "id": 2308,
    "topic": "Decimal place value",
    "difficulty": "Competition",
    "prompt": "By how much does the value of the digit 4 exceed the value of the digit 7 in 7.4076?",
    "options": [
      "393/1000",
      "-1607/1000",
      "1393/1000",
      "-607/1000",
      "2393/1000"
    ],
    "answer": "A",
    "explanation": "4 tenths − 7 thousandths = 0.400 − 0.007 = 0.393."
  },
  {
    "id": 2309,
    "topic": "Maximising expressions",
    "difficulty": "Competition",
    "prompt": "Use each of 6, 8 and 11 once as A, B and C. Find the difference between the greatest and least possible values of A + B/C.",
    "options": [
      "119/33",
      "185/33",
      "218/33",
      "251/33",
      "152/33"
    ],
    "answer": "B",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2310,
    "topic": "Counting multiples",
    "difficulty": "Competition",
    "prompt": "How many positive integers below 270 are divisible by 6 or 7, or both?",
    "options": [
      "76",
      "78",
      "74",
      "77",
      "75"
    ],
    "answer": "A",
    "explanation": "Add the two multiple counts, then subtract the common multiples counted twice."
  },
  {
    "id": 2311,
    "topic": "Digits after division",
    "difficulty": "Competition",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 7th place after the decimal point?",
    "options": [
      "3",
      "-1",
      "1",
      "2",
      "0"
    ],
    "answer": "C",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2312,
    "topic": "Digit reversal",
    "difficulty": "Competition",
    "prompt": "A three-digit number has tens digit 7, digit sum 14, and increases by 297 when reversed. What is the sum of its hundreds and units digits?",
    "options": [
      "9",
      "5",
      "8",
      "6",
      "7"
    ],
    "answer": "E",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2313,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Competition",
    "prompt": "How many zeros occur at the end of the integer 8 × 9 × … × 18?",
    "options": [
      "2",
      "3",
      "1",
      "0",
      "4"
    ],
    "answer": "A",
    "explanation": "Count factors of 2 and 5 in the product. Each pair gives one trailing zero."
  },
  {
    "id": 2314,
    "topic": "Signed numbers",
    "difficulty": "Competition",
    "prompt": "A temperature is −9°C. It rises by 13°C each hour for 3 hours, then falls by 5°C. What is the final temperature?",
    "options": [
      "26°C",
      "27°C",
      "24°C",
      "23°C",
      "25°C"
    ],
    "answer": "E",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2315,
    "topic": "LCM and events",
    "difficulty": "Competition",
    "prompt": "Two bells ring every 22 and 33 minutes, starting together now. Count all distinct ringing times after now up to and including their next simultaneous ringing.",
    "options": [
      "5",
      "3",
      "6",
      "2",
      "4"
    ],
    "answer": "E",
    "explanation": "The next shared time is LCM(22, 33) = 66 minutes. Merge the event times if requested."
  },
  {
    "id": 2316,
    "topic": "Systematic counting",
    "difficulty": "Competition",
    "prompt": "Using only the digits 0, 2, 3, 5, 8, how many two-digit even numbers can be made without repeating a digit?",
    "options": [
      "12",
      "10",
      "9",
      "8",
      "11"
    ],
    "answer": "B",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2317,
    "topic": "Ratio and unitary method",
    "difficulty": "Competition",
    "prompt": "Flour and sugar are in the ratio 4:4. Flour weighs 0 kg more than sugar. Find the mass of sugar.",
    "options": [
      "35 kg",
      "38 kg",
      "37 kg",
      "36 kg",
      "34 kg"
    ],
    "answer": "D",
    "explanation": "One ratio part is 9 kg. Sugar is 4 parts."
  },
  {
    "id": 2318,
    "topic": "Linear growth",
    "difficulty": "Competition",
    "prompt": "A stack of 4 nested cups is 26 cm high, and a stack of 7 is 38 cm high. What is the greatest number of cups in a stack no higher than 65 cm?",
    "options": [
      "11",
      "14",
      "12",
      "15",
      "13"
    ],
    "answer": "E",
    "explanation": "Each added cup contributes 4 cm. One cup is 14 cm high; height for k cups = 14 + (k − 1) × 4."
  },
  {
    "id": 2319,
    "topic": "Powers and square roots",
    "difficulty": "Competition",
    "prompt": "Evaluate √(9² − 8²) × √(17).",
    "options": [
      "19",
      "18",
      "16",
      "15",
      "17"
    ],
    "answer": "E",
    "explanation": "The difference of the squares is 17. The product is √17 × √17 = 17."
  },
  {
    "id": 2320,
    "topic": "HCF tiling and intersections",
    "difficulty": "Competition",
    "prompt": "A 48 cm by 64 cm rectangle is tiled with the largest possible equal square tiles. How many tile-grid intersections are there, including boundary intersections?",
    "options": [
      "22",
      "18",
      "20",
      "21",
      "19"
    ],
    "answer": "C",
    "explanation": "Largest tile side = HCF(48, 64) = 16 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2321,
    "topic": "Means and removed values",
    "difficulty": "Competition",
    "prompt": "The mean age of 8 pupils is 17 years. Two pupils of equal age leave, and the remaining mean is 16 years. How old is each pupil who left?",
    "options": [
      "18 years",
      "22 years",
      "20 years",
      "21 years",
      "19 years"
    ],
    "answer": "C",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2322,
    "topic": "Parity",
    "difficulty": "Competition",
    "prompt": "For every odd integer n greater than 5, which expression is always odd?",
    "options": [
      "n + 3",
      "n² + 2n",
      "2n²",
      "n(n + 1)",
      "n² + 1"
    ],
    "answer": "B",
    "explanation": "Odd squared is odd; adding an even term keeps it odd."
  },
  {
    "id": 2323,
    "topic": "Estimation",
    "difficulty": "Competition",
    "prompt": "Estimate 248 × 54 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "12502",
      "12499",
      "12500",
      "12498",
      "12501"
    ],
    "answer": "C",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2324,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Competition",
    "prompt": "A clock is correct at 8:00 a.m. It loses 7 minutes per real hour. How many minutes slow is it after 6 real hours?",
    "options": [
      "42 minutes",
      "44 minutes",
      "40 minutes",
      "41 minutes",
      "43 minutes"
    ],
    "answer": "A",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2325,
    "topic": "Fractions on number lines",
    "difficulty": "Competition",
    "prompt": "The interval from 1/3 to 5/6 is divided into 11 equal intervals. What number is at the 3rd tick after 1/3?",
    "options": [
      "97/66",
      "31/66",
      "-35/66",
      "-101/66",
      "163/66"
    ],
    "answer": "B",
    "explanation": "Interval length = (5/6 − 1/3)/11; add 3 such intervals to 1/3."
  },
  {
    "id": 2326,
    "topic": "Number machines",
    "difficulty": "Competition",
    "prompt": "A machine multiplies its input by 3, adds 10, multiplies by 5, then subtracts 7. Its output is 148. What was the input?",
    "options": [
      "8",
      "6",
      "5",
      "7",
      "9"
    ],
    "answer": "D",
    "explanation": "The rule is output = (3x + 10) × 5 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2327,
    "topic": "Equations",
    "difficulty": "Competition",
    "prompt": "Solve 7(x + 2) = 54 + 2x.",
    "options": [
      "10",
      "6",
      "8",
      "7",
      "9"
    ],
    "answer": "C",
    "explanation": "Collect the terms in x on one side, constants on the other, then divide by the coefficient of x."
  },
  {
    "id": 2328,
    "topic": "Roman numerals",
    "difficulty": "Competition",
    "prompt": "Evaluate (LXVI ÷ III) + IV. Give the answer in Roman numerals.",
    "options": [
      "XXIV",
      "XXVII",
      "XXVI",
      "XXV",
      "XXIII"
    ],
    "answer": "C",
    "explanation": "66/3 + 4 = 26, written XXVI."
  },
  {
    "id": 2329,
    "topic": "Survey proportions",
    "difficulty": "Competition",
    "prompt": "A survey records 18 votes for blue, 12 for green, 9 for red and 6 for yellow. What fraction of all votes are for blue?",
    "options": [
      "2/5",
      "-3/5",
      "-8/5",
      "7/5",
      "12/5"
    ],
    "answer": "A",
    "explanation": "Total = 45; blue fraction = 18/45 = 2/5."
  },
  {
    "id": 2330,
    "topic": "Median",
    "difficulty": "Competition",
    "prompt": "The ordered list 11, 13, x, 17, 21, 23 has median 16. Find x.",
    "options": [
      "13",
      "16",
      "15",
      "14",
      "17"
    ],
    "answer": "C",
    "explanation": "The middle pair is x and 17. Their mean is 16; solve for x."
  },
  {
    "id": 2331,
    "topic": "Speed distance and time",
    "difficulty": "Competition",
    "prompt": "A bus covers 165 km at 55 km/h. How many hours would the same trip take at 50 km/h?",
    "options": [
      "43/10 hours",
      "53/10 hours",
      "23/10 hours",
      "33/10 hours",
      "13/10 hours"
    ],
    "answer": "D",
    "explanation": "Time = distance/new speed = 165/50 hours."
  },
  {
    "id": 2332,
    "topic": "Simple interest",
    "difficulty": "Competition",
    "prompt": "A sum earns ₦300 simple interest at 5% per year for 3 years. Find the principal.",
    "options": [
      "2001 naira",
      "2002 naira",
      "1999 naira",
      "1998 naira",
      "2000 naira"
    ],
    "answer": "E",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2333,
    "topic": "Ages",
    "difficulty": "Competition",
    "prompt": "A parent is 3 times as old as a child. Their ages differ by 26 years. What is the sum of their ages?",
    "options": [
      "51 years",
      "53 years",
      "52 years",
      "54 years",
      "50 years"
    ],
    "answer": "C",
    "explanation": "2 age-parts = 26; child = 13, parent = 39."
  },
  {
    "id": 2334,
    "topic": "Telescoping products",
    "difficulty": "Competition",
    "prompt": "Evaluate (2/3) × (3/4) × … × (9/10) × (11/12).",
    "options": [
      "-49/60",
      "11/60",
      "131/60",
      "71/60",
      "-109/60"
    ],
    "answer": "B",
    "explanation": "The consecutive section cancels to 2/10; multiply the final fraction."
  },
  {
    "id": 2335,
    "topic": "Reverse and successive percentages",
    "difficulty": "Competition",
    "prompt": "A price of ₦300 rises by 10% and then falls by 10% of the new price. Find the final price.",
    "options": [
      "299",
      "297",
      "298",
      "295",
      "296"
    ],
    "answer": "B",
    "explanation": "Multiply the original price by 1.10 × 0.90 = 0.99."
  },
  {
    "id": 2336,
    "topic": "Composite areas",
    "difficulty": "Competition",
    "prompt": "A 22 cm by 13 cm rectangle has a 4 cm by 4 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "269 cm²",
      "272 cm²",
      "270 cm²",
      "268 cm²",
      "271 cm²"
    ],
    "answer": "C",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2337,
    "topic": "Triangle angles",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle has each base angle equal to 30°. Find its exterior angle adjacent to the vertex angle.",
    "options": [
      "59°",
      "61°",
      "62°",
      "58°",
      "60°"
    ],
    "answer": "E",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2338,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 48 cm. Its length exceeds its width by 6 cm. Find its area.",
    "options": [
      "134 cm²",
      "133 cm²",
      "135 cm²",
      "136 cm²",
      "137 cm²"
    ],
    "answer": "C",
    "explanation": "L + W = 24; dimensions are 15 cm and 9 cm."
  },
  {
    "id": 2339,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Competition",
    "prompt": "A small circle has radius 1/8 of a larger circle. What fraction of the larger circle is covered by the smaller one?",
    "options": [
      "-63/64",
      "65/64",
      "129/64",
      "-127/64",
      "1/64"
    ],
    "answer": "E",
    "explanation": "Area scales with the square of the radius ratio."
  },
  {
    "id": 2340,
    "topic": "Shortest distance",
    "difficulty": "Competition",
    "prompt": "A pupil walks 36 m east, 24 m north, then 18 m west. Find the straight-line distance from the starting point.",
    "options": [
      "28 m",
      "32 m",
      "30 m",
      "29 m",
      "31 m"
    ],
    "answer": "C",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2341,
    "topic": "Faces edges and vertices",
    "difficulty": "Competition",
    "prompt": "A prism has a 9-sided polygon as each base. How many vertices does it have?",
    "options": [
      "20",
      "17",
      "18",
      "19",
      "16"
    ],
    "answer": "C",
    "explanation": "Each of its two bases contributes n vertices."
  },
  {
    "id": 2342,
    "topic": "Painted cubes",
    "difficulty": "Competition",
    "prompt": "A cube is painted on all six outside faces and cut into 8 × 8 × 8 equal small cubes. How many small cubes have exactly one painted faces?",
    "options": [
      "215",
      "216",
      "214",
      "218",
      "217"
    ],
    "answer": "B",
    "explanation": "Six face interiors each contain (n − 2)² cubes."
  },
  {
    "id": 2343,
    "topic": "Triangle classification",
    "difficulty": "Competition",
    "prompt": "A triangle has angles 40°, 65° and 75°. Which description is correct?",
    "options": [
      "Right scalene",
      "Acute scalene",
      "Right isosceles",
      "Obtuse scalene",
      "Acute equilateral"
    ],
    "answer": "B",
    "explanation": "All angles are less than 90° and unequal."
  },
  {
    "id": 2344,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Competition",
    "prompt": "In triangle ABC, AB is extended through B to D. Angle CBD = 75° and angle A = 25°. Find angle C.",
    "options": [
      "51°",
      "52°",
      "50°",
      "48°",
      "49°"
    ],
    "answer": "C",
    "explanation": "Exterior angle CBD = angle A + angle C."
  },
  {
    "id": 2345,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Competition",
    "prompt": "The boundary of a figure contains one semicircular arc of radius 8 cm, two quarter-circle arcs of radius 16 cm, and straight portions totalling 32 cm. Its perimeter is (32 + kπ) cm. Find k.",
    "options": [
      "25",
      "23",
      "22",
      "24",
      "26"
    ],
    "answer": "D",
    "explanation": "Semicircle arc = 8π; two quarter-arcs total 16π, giving 24π."
  },
  {
    "id": 2346,
    "topic": "Isosceles angle cases",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle contains an angle of 35°. What are all possible values of its vertex angle?",
    "options": [
      "35° and 110°",
      "35° only",
      "No possible value",
      "110° only",
      "145/2° only"
    ],
    "answer": "A",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2347,
    "topic": "Polygons and symmetry",
    "difficulty": "Competition",
    "prompt": "A regular 10-sided polygon has how many lines of symmetry?",
    "options": [
      "11",
      "8",
      "12",
      "9",
      "10"
    ],
    "answer": "E",
    "explanation": "A regular polygon has as many symmetry lines as sides."
  },
  {
    "id": 2348,
    "topic": "Irregular perimeter",
    "difficulty": "Competition",
    "prompt": "A 20 cm by 15 cm rectangle has a 5 cm wide, 5 cm deep rectangular notch cut from the middle of its top side. Find the new perimeter.",
    "options": [
      "78 cm",
      "80 cm",
      "82 cm",
      "81 cm",
      "79 cm"
    ],
    "answer": "B",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2349,
    "topic": "Cylinder volume",
    "difficulty": "Competition",
    "prompt": "A solid half-cylinder has radius 7 cm and length 11 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "543/2",
      "539/2",
      "537/2",
      "535/2",
      "541/2"
    ],
    "answer": "B",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2350,
    "topic": "Volume and scaling",
    "difficulty": "Competition",
    "prompt": "Every edge of a cube is multiplied by 4. By what factor is its volume multiplied?",
    "options": [
      "63",
      "65",
      "62",
      "64",
      "66"
    ],
    "answer": "D",
    "explanation": "All three dimensions scale, so cube the linear factor."
  },
  {
    "id": 2351,
    "topic": "Sets and overlap",
    "difficulty": "Competition",
    "prompt": "Set A = integers 1 to 14, set B = integers 4 to 18, and set C = integers 7 to 16. How many numbers belong to A or B (or both), but not C?",
    "options": [
      "10",
      "6",
      "8",
      "9",
      "7"
    ],
    "answer": "C",
    "explanation": "Form the union of A and B, then remove C."
  },
  {
    "id": 2352,
    "topic": "Number and letter sequences",
    "difficulty": "Competition",
    "prompt": "Continue both patterns: 6A, 9C, 12E, 15G, …",
    "options": [
      "16I",
      "19I",
      "18I",
      "17I",
      "20I"
    ],
    "answer": "C",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2353,
    "topic": "Family relationships",
    "difficulty": "Competition",
    "prompt": "Femi has 5 cousins. Ada is the daughter of Femi’s father’s only sister. What is Ada’s relationship to Femi?",
    "options": [
      "Mother",
      "Sister",
      "Aunt",
      "Niece",
      "Cousin"
    ],
    "answer": "E",
    "explanation": "A parent’s sibling’s child is a cousin."
  },
  {
    "id": 2354,
    "topic": "Paper folding",
    "difficulty": "Competition",
    "prompt": "A sheet is folded in half 2 times. Then 2 separate holes are punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "8",
      "10",
      "7",
      "9",
      "6"
    ],
    "answer": "A",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2355,
    "topic": "Sibling equations",
    "difficulty": "Competition",
    "prompt": "In a family, each girl has 6 brothers. Every boy has as many brothers as sisters. How many children are in the family?",
    "options": [
      "9",
      "11",
      "13",
      "12",
      "10"
    ],
    "answer": "B",
    "explanation": "B = 6; B − 1 = G, so G = 5 and total children = 11."
  },
  {
    "id": 2356,
    "topic": "Balance equations",
    "difficulty": "Competition",
    "prompt": "Three circles balance one circle and one triangle. Two triangles balance one square and one circle. A circle has mass 5 g. Find the mass of a square.",
    "options": [
      "13 g",
      "14 g",
      "16 g",
      "15 g",
      "17 g"
    ],
    "answer": "D",
    "explanation": "First, triangle = 2 circles = 10 g. Then square = 2 triangles − circle = 15 g."
  },
  {
    "id": 2357,
    "topic": "Calendar cycles",
    "difficulty": "Competition",
    "prompt": "What month is 4 months after June?",
    "options": [
      "October",
      "January",
      "December",
      "November",
      "February"
    ],
    "answer": "A",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2358,
    "topic": "Direction and turns",
    "difficulty": "Competition",
    "prompt": "A pupil faces east and makes these quarter-turns in order: right, left, right, left. Which direction is the pupil now facing?",
    "options": [
      "South",
      "North",
      "The starting direction cannot be known",
      "East",
      "West"
    ],
    "answer": "D",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2359,
    "topic": "Jug states",
    "difficulty": "Competition",
    "prompt": "A 15-litre jug is full and a 13-litre jug is empty. Fill the smaller from the larger, empty the smaller, pour the remainder of the larger into it, then refill the larger and top up the smaller. How many litres remain in the larger now?",
    "options": [
      "3 litres",
      "5 litres",
      "6 litres",
      "2 litres",
      "4 litres"
    ],
    "answer": "E",
    "explanation": "Record amounts after each pour. First remainder is 2 L; after the second topping-up, 4 L remain in the large jug."
  },
  {
    "id": 2360,
    "topic": "Number pyramids",
    "difficulty": "Competition",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 6, x, 9, 7, and the top entry is 64. Find x.",
    "options": [
      "7",
      "8",
      "10",
      "9",
      "6"
    ],
    "answer": "B",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2361,
    "topic": "Handshake counting",
    "difficulty": "Competition",
    "prompt": "There are 12 people at a meeting. Everyone shakes hands once with every other person except that two particular people do not shake hands with each other. How many handshakes occur?",
    "options": [
      "64",
      "66",
      "63",
      "65",
      "67"
    ],
    "answer": "D",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2362,
    "topic": "Multiplicative patterns",
    "difficulty": "Competition",
    "prompt": "Start at 6, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 6, 12, 36, 144, 720.",
    "options": [
      "4320",
      "4322",
      "4319",
      "4321",
      "4318"
    ],
    "answer": "A",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2363,
    "topic": "Mirror clocks",
    "difficulty": "Competition",
    "prompt": "An ordinary 12-hour analogue clock shows 6:30. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "5:40",
      "5:30",
      "5:35",
      "6:30",
      "6:00"
    ],
    "answer": "B",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2364,
    "topic": "Gear ratios",
    "difficulty": "Competition",
    "prompt": "A gear with 22 teeth turns 8 times and drives a gear with 44 teeth. How many turns does the larger gear make?",
    "options": [
      "6",
      "4",
      "2",
      "5",
      "3"
    ],
    "answer": "B",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2365,
    "topic": "Adjacency constraints",
    "difficulty": "Competition",
    "prompt": "Place 5, 6, 7, 8, 9 once each in a row. Sums of neighbouring cells from left to right are 14, 15, 13, 15. What is the middle number?",
    "options": [
      "5",
      "6",
      "4",
      "7",
      "8"
    ],
    "answer": "B",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2366,
    "topic": "Cube faces and adjacency",
    "difficulty": "Competition",
    "prompt": "A cube has faces labelled 6, 7, 8, 9, 10, 11. Face 6 shares an edge with faces 7, 8, 9, 10. Which face is opposite 6?",
    "options": [
      "10",
      "9",
      "11",
      "12",
      "13"
    ],
    "answer": "C",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2367,
    "topic": "Truth and falsehood",
    "difficulty": "Competition",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 5. Ayo says “The token is with Bisi.” Bisi says “The token is not with me.” Chika says “The token is not with Ayo.” Exactly one statement is true. Who has the token?",
    "options": [
      "None of them",
      "Cannot be determined",
      "Ayo",
      "Chika",
      "Bisi"
    ],
    "answer": "C",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2368,
    "topic": "Ranking",
    "difficulty": "Competition",
    "prompt": "A pupil is 9th from the front and 4th from the back of a line. How many pupils are in the line?",
    "options": [
      "10",
      "12",
      "13",
      "14",
      "11"
    ],
    "answer": "B",
    "explanation": "Add the two ranks and subtract 1 because the pupil is counted twice."
  },
  {
    "id": 2369,
    "topic": "Minimum swaps",
    "difficulty": "Competition",
    "prompt": "What is the minimum number of swaps of any two positions needed to change CABED into ABCDE?",
    "options": [
      "2",
      "3",
      "1",
      "5",
      "4"
    ],
    "answer": "B",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2370,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Competition",
    "prompt": "A 12 by 12 checkerboard has its top-left and bottom-right corner squares removed. How many complete coverings by 1 by 2 dominoes are possible?",
    "options": [
      "-1",
      "2",
      "1",
      "0",
      "-2"
    ],
    "answer": "D",
    "explanation": "The removed corners have the same colour. Dominoes always cover one square of each colour, so no covering exists."
  },
  {
    "id": 2371,
    "topic": "Division constraints",
    "difficulty": "Competition",
    "prompt": "Choose different integers A and B from 1 to 11. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "17",
      "20",
      "18",
      "16",
      "19"
    ],
    "answer": "C",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2372,
    "topic": "Missing-number diagrams",
    "difficulty": "Competition",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 7, right number is 9, and bottom number is 11. What is the centre?",
    "options": [
      "54",
      "51",
      "53",
      "50",
      "52"
    ],
    "answer": "E",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2373,
    "topic": "Addition tables",
    "difficulty": "Competition",
    "prompt": "In a 2 by 2 addition table, each cell is its row heading plus its column heading. The top-left, top-right and bottom-left cells are 18, 25 and 23. Find the bottom-right cell.",
    "options": [
      "30",
      "31",
      "29",
      "32",
      "28"
    ],
    "answer": "A",
    "explanation": "Bottom-right = top-right + bottom-left − top-left."
  },
  {
    "id": 2374,
    "topic": "Unusual operations",
    "difficulty": "Competition",
    "prompt": "Define a ★ b = a² − b² and a ◆ b = a + b. Find (7 ★ 4) + 4 × (7 ◆ 4).",
    "options": [
      "77",
      "76",
      "79",
      "75",
      "78"
    ],
    "answer": "A",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2375,
    "topic": "Counting embedded squares",
    "difficulty": "Competition",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 3-row by 5-column grid shown?",
    "options": [
      "27",
      "24",
      "28",
      "26",
      "25"
    ],
    "answer": "D",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  },
  {
    "id": 2376,
    "topic": "Fractions and decimals",
    "difficulty": "Competition",
    "prompt": "Evaluate (0.9 + 3/5) × 5/2.",
    "options": [
      "23/4",
      "19/4",
      "7/4",
      "15/4",
      "11/4"
    ],
    "answer": "D",
    "explanation": "Convert the decimal to 9/10; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2377,
    "topic": "Income expenditure and savings",
    "difficulty": "Competition",
    "prompt": "A family earns ₦4400 and spends 75% of it. Income rises by 20%, while expenditure rises by 10% of its original amount. By what percentage do savings rise?",
    "options": [
      "48%",
      "50%",
      "51%",
      "49%",
      "52%"
    ],
    "answer": "B",
    "explanation": "Original savings = ₦1100; new savings = ₦1650. Increase/original savings × 100 = 50%."
  },
  {
    "id": 2378,
    "topic": "BODMAS powers and roots",
    "difficulty": "Competition",
    "prompt": "Evaluate (8 + 4)² − 3 × 8 + 24 ÷ 4.",
    "options": [
      "126",
      "128",
      "127",
      "125",
      "124"
    ],
    "answer": "A",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2379,
    "topic": "Recurring decimals",
    "difficulty": "Competition",
    "prompt": "Express 0.636363… as a fraction in its lowest terms.",
    "options": [
      "-4/11",
      "18/11",
      "-15/11",
      "29/11",
      "7/11"
    ],
    "answer": "E",
    "explanation": "100x − x = 63, so x = 63/99 = 7/11."
  },
  {
    "id": 2380,
    "topic": "Metric conversion",
    "difficulty": "Competition",
    "prompt": "A ribbon is 38 cm long. Pieces of 70 mm and 0.5 dm are cut off. What length remains in millimetres?",
    "options": [
      "261 mm",
      "259 mm",
      "258 mm",
      "260 mm",
      "262 mm"
    ],
    "answer": "D",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2381,
    "topic": "Divisibility",
    "difficulty": "Competition",
    "prompt": "The number 26d5 is divisible by both 5 and 9. Find the digit d.",
    "options": [
      "3",
      "6",
      "7",
      "4",
      "5"
    ],
    "answer": "E",
    "explanation": "The digit sum must be divisible by 9. The only digit that works is 5."
  },
  {
    "id": 2382,
    "topic": "Ordering representations",
    "difficulty": "Competition",
    "prompt": "Find the difference between the greatest and least of 9/5, 41/20 and 1.9.",
    "options": [
      "1/4",
      "5/4",
      "-3/4",
      "9/4",
      "-7/4"
    ],
    "answer": "A",
    "explanation": "Greatest − least = 41/20 − 9/5 = 1/4."
  },
  {
    "id": 2383,
    "topic": "Decimal place value",
    "difficulty": "Competition",
    "prompt": "By how much does the value of the digit 4 exceed the value of the digit 7 in 8.4076?",
    "options": [
      "393/1000",
      "1393/1000",
      "-607/1000",
      "2393/1000",
      "-1607/1000"
    ],
    "answer": "A",
    "explanation": "4 tenths − 7 thousandths = 0.400 − 0.007 = 0.393."
  },
  {
    "id": 2384,
    "topic": "Maximising expressions",
    "difficulty": "Competition",
    "prompt": "Use each of 7, 9 and 12 once as A, B and C. Find the difference between the greatest and least possible values of A + B/C.",
    "options": [
      "99/28",
      "155/28",
      "127/28",
      "211/28",
      "183/28"
    ],
    "answer": "B",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2385,
    "topic": "Counting multiples",
    "difficulty": "Competition",
    "prompt": "How many positive integers below 300 are divisible by 4 or 5, or both?",
    "options": [
      "120",
      "118",
      "119",
      "117",
      "121"
    ],
    "answer": "C",
    "explanation": "Add the two multiple counts, then subtract the common multiples counted twice."
  },
  {
    "id": 2386,
    "topic": "Digits after division",
    "difficulty": "Competition",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 8th place after the decimal point?",
    "options": [
      "4",
      "2",
      "6",
      "3",
      "5"
    ],
    "answer": "A",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2387,
    "topic": "Digit reversal",
    "difficulty": "Competition",
    "prompt": "A three-digit number has tens digit 2, digit sum 11, and increases by 297 when reversed. What is the sum of its hundreds and units digits?",
    "options": [
      "9",
      "10",
      "7",
      "8",
      "11"
    ],
    "answer": "A",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2388,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Competition",
    "prompt": "How many zeros occur at the end of the integer 9 × 10 × … × 19?",
    "options": [
      "1",
      "4",
      "2",
      "3",
      "0"
    ],
    "answer": "C",
    "explanation": "Count factors of 2 and 5 in the product. Each pair gives one trailing zero."
  },
  {
    "id": 2389,
    "topic": "Signed numbers",
    "difficulty": "Competition",
    "prompt": "A temperature is −10°C. It rises by 15°C each hour for 3 hours, then falls by 6°C. What is the final temperature?",
    "options": [
      "31°C",
      "30°C",
      "27°C",
      "28°C",
      "29°C"
    ],
    "answer": "E",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2390,
    "topic": "LCM and events",
    "difficulty": "Competition",
    "prompt": "Two bells ring every 24 and 36 minutes, starting together now. Count all distinct ringing times after now up to and including their next simultaneous ringing.",
    "options": [
      "6",
      "3",
      "2",
      "4",
      "5"
    ],
    "answer": "D",
    "explanation": "The next shared time is LCM(24, 36) = 72 minutes. Merge the event times if requested."
  },
  {
    "id": 2391,
    "topic": "Systematic counting",
    "difficulty": "Competition",
    "prompt": "Using only the digits 0, 1, 4, 6, 9, how many two-digit even numbers can be made without repeating a digit?",
    "options": [
      "11",
      "9",
      "10",
      "8",
      "12"
    ],
    "answer": "C",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2392,
    "topic": "Ratio and unitary method",
    "difficulty": "Competition",
    "prompt": "Flour and sugar are in the ratio 5:2. Flour weighs 30 kg more than sugar. Find the mass of sugar.",
    "options": [
      "19 kg",
      "21 kg",
      "22 kg",
      "18 kg",
      "20 kg"
    ],
    "answer": "E",
    "explanation": "One ratio part is 10 kg. Sugar is 2 parts."
  },
  {
    "id": 2393,
    "topic": "Linear growth",
    "difficulty": "Competition",
    "prompt": "A stack of 4 nested cups is 21 cm high, and a stack of 7 is 27 cm high. What is the greatest number of cups in a stack no higher than 40 cm?",
    "options": [
      "11",
      "14",
      "15",
      "12",
      "13"
    ],
    "answer": "E",
    "explanation": "Each added cup contributes 2 cm. One cup is 15 cm high; height for k cups = 15 + (k − 1) × 2."
  },
  {
    "id": 2394,
    "topic": "Powers and square roots",
    "difficulty": "Competition",
    "prompt": "Evaluate √(10² − 9²) × √(19).",
    "options": [
      "17",
      "19",
      "18",
      "21",
      "20"
    ],
    "answer": "B",
    "explanation": "The difference of the squares is 19. The product is √19 × √19 = 19."
  },
  {
    "id": 2395,
    "topic": "HCF tiling and intersections",
    "difficulty": "Competition",
    "prompt": "A 54 cm by 72 cm rectangle is tiled with the largest possible equal square tiles. How many tile-grid intersections are there, including boundary intersections?",
    "options": [
      "18",
      "21",
      "20",
      "19",
      "22"
    ],
    "answer": "C",
    "explanation": "Largest tile side = HCF(54, 72) = 18 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2396,
    "topic": "Means and removed values",
    "difficulty": "Competition",
    "prompt": "The mean age of 6 pupils is 18 years. Two pupils of equal age leave, and the remaining mean is 17 years. How old is each pupil who left?",
    "options": [
      "21 years",
      "18 years",
      "19 years",
      "22 years",
      "20 years"
    ],
    "answer": "E",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2397,
    "topic": "Parity",
    "difficulty": "Competition",
    "prompt": "For every odd integer n greater than 6, which expression is always odd?",
    "options": [
      "2n²",
      "n + 3",
      "n² + 2n",
      "n² + 1",
      "n(n + 1)"
    ],
    "answer": "C",
    "explanation": "Odd squared is odd; adding an even term keeps it odd."
  },
  {
    "id": 2398,
    "topic": "Estimation",
    "difficulty": "Competition",
    "prompt": "Estimate 258 × 55 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "15599",
      "15601",
      "15600",
      "15602",
      "15598"
    ],
    "answer": "C",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2399,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Competition",
    "prompt": "A clock is correct at 8:00 a.m. It loses 8 minutes per real hour. How many minutes slow is it after 6 real hours?",
    "options": [
      "46 minutes",
      "47 minutes",
      "48 minutes",
      "50 minutes",
      "49 minutes"
    ],
    "answer": "C",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2400,
    "topic": "Fractions on number lines",
    "difficulty": "Competition",
    "prompt": "The interval from 1/3 to 5/6 is divided into 12 equal intervals. What number is at the 4th tick after 1/3?",
    "options": [
      "-3/2",
      "5/2",
      "3/2",
      "-1/2",
      "1/2"
    ],
    "answer": "E",
    "explanation": "Interval length = (5/6 − 1/3)/12; add 4 such intervals to 1/3."
  },
  {
    "id": 2401,
    "topic": "Number machines",
    "difficulty": "Competition",
    "prompt": "A machine multiplies its input by 4, adds 11, multiplies by 3, then subtracts 7. Its output is 122. What was the input?",
    "options": [
      "6",
      "7",
      "9",
      "8",
      "10"
    ],
    "answer": "D",
    "explanation": "The rule is output = (4x + 11) × 3 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2402,
    "topic": "Equations",
    "difficulty": "Competition",
    "prompt": "Solve 8(x + 2) = 70 + 2x.",
    "options": [
      "11",
      "7",
      "8",
      "10",
      "9"
    ],
    "answer": "E",
    "explanation": "Collect the terms in x on one side, constants on the other, then divide by the coefficient of x."
  },
  {
    "id": 2403,
    "topic": "Roman numerals",
    "difficulty": "Competition",
    "prompt": "Evaluate (LXXII ÷ III) + IV. Give the answer in Roman numerals.",
    "options": [
      "XXVI",
      "XXVII",
      "XXVIII",
      "XXV",
      "XXIX"
    ],
    "answer": "C",
    "explanation": "72/3 + 4 = 28, written XXVIII."
  },
  {
    "id": 2404,
    "topic": "Probability without replacement",
    "difficulty": "Competition",
    "prompt": "A bag has 4 red and 3 blue counters. Two counters are chosen at random without replacement. What is the probability that both are red?",
    "options": [
      "9/7",
      "-12/7",
      "16/7",
      "-5/7",
      "2/7"
    ],
    "answer": "E",
    "explanation": "Probability = (4/7) × (3/6) = 2/7."
  },
  {
    "id": 2405,
    "topic": "Median",
    "difficulty": "Competition",
    "prompt": "The ordered list 12, 14, x, 18, 22, 24 has median 17. Find x.",
    "options": [
      "17",
      "16",
      "18",
      "15",
      "14"
    ],
    "answer": "B",
    "explanation": "The middle pair is x and 18. Their mean is 17; solve for x."
  },
  {
    "id": 2406,
    "topic": "Speed distance and time",
    "difficulty": "Competition",
    "prompt": "A bus covers 180 km at 60 km/h. How many hours would the same trip take at 55 km/h?",
    "options": [
      "14/11 hours",
      "47/11 hours",
      "25/11 hours",
      "58/11 hours",
      "36/11 hours"
    ],
    "answer": "E",
    "explanation": "Time = distance/new speed = 180/55 hours."
  },
  {
    "id": 2407,
    "topic": "Simple interest",
    "difficulty": "Competition",
    "prompt": "A sum earns ₦330 simple interest at 5% per year for 3 years. Find the principal.",
    "options": [
      "2199 naira",
      "2202 naira",
      "2200 naira",
      "2201 naira",
      "2198 naira"
    ],
    "answer": "C",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2408,
    "topic": "Ages",
    "difficulty": "Competition",
    "prompt": "A parent is 3 times as old as a child. Their ages differ by 28 years. What is the sum of their ages?",
    "options": [
      "54 years",
      "55 years",
      "57 years",
      "58 years",
      "56 years"
    ],
    "answer": "E",
    "explanation": "2 age-parts = 28; child = 14, parent = 42."
  },
  {
    "id": 2409,
    "topic": "Telescoping products",
    "difficulty": "Competition",
    "prompt": "Evaluate (2/3) × (3/4) × … × (10/11) × (12/13).",
    "options": [
      "310/143",
      "-262/143",
      "24/143",
      "-119/143",
      "167/143"
    ],
    "answer": "C",
    "explanation": "The consecutive section cancels to 2/11; multiply the final fraction."
  },
  {
    "id": 2410,
    "topic": "Reverse and successive percentages",
    "difficulty": "Competition",
    "prompt": "A price of ₦320 rises by 10% and then falls by 10% of the new price. Find the final price.",
    "options": [
      "1589/5",
      "1584/5",
      "1594/5",
      "1574/5",
      "1579/5"
    ],
    "answer": "B",
    "explanation": "Multiply the original price by 1.10 × 0.90 = 0.99."
  },
  {
    "id": 2411,
    "topic": "Composite areas",
    "difficulty": "Competition",
    "prompt": "A 24 cm by 14 cm rectangle has a 2 cm by 5 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "327 cm²",
      "325 cm²",
      "326 cm²",
      "328 cm²",
      "324 cm²"
    ],
    "answer": "C",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2412,
    "topic": "Triangle angles",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle has each base angle equal to 31°. Find its exterior angle adjacent to the vertex angle.",
    "options": [
      "64°",
      "61°",
      "63°",
      "62°",
      "60°"
    ],
    "answer": "D",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2413,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 52 cm. Its length exceeds its width by 6 cm. Find its area.",
    "options": [
      "159 cm²",
      "160 cm²",
      "162 cm²",
      "161 cm²",
      "158 cm²"
    ],
    "answer": "B",
    "explanation": "L + W = 26; dimensions are 16 cm and 10 cm."
  },
  {
    "id": 2414,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Competition",
    "prompt": "A small circle has radius 1/9 of a larger circle. What fraction of the larger circle is covered by the smaller one?",
    "options": [
      "163/81",
      "-161/81",
      "82/81",
      "1/81",
      "-80/81"
    ],
    "answer": "D",
    "explanation": "Area scales with the square of the radius ratio."
  },
  {
    "id": 2415,
    "topic": "Shortest distance",
    "difficulty": "Competition",
    "prompt": "A pupil walks 42 m east, 28 m north, then 21 m west. Find the straight-line distance from the starting point.",
    "options": [
      "34 m",
      "37 m",
      "33 m",
      "36 m",
      "35 m"
    ],
    "answer": "E",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2416,
    "topic": "Faces edges and vertices",
    "difficulty": "Competition",
    "prompt": "A prism has a 10-sided polygon as each base. How many vertices does it have?",
    "options": [
      "22",
      "18",
      "21",
      "20",
      "19"
    ],
    "answer": "D",
    "explanation": "Each of its two bases contributes n vertices."
  },
  {
    "id": 2417,
    "topic": "Painted cubes",
    "difficulty": "Competition",
    "prompt": "A cube is painted on all six outside faces and cut into 9 × 9 × 9 equal small cubes. How many small cubes have exactly one painted faces?",
    "options": [
      "293",
      "292",
      "294",
      "295",
      "296"
    ],
    "answer": "C",
    "explanation": "Six face interiors each contain (n − 2)² cubes."
  },
  {
    "id": 2418,
    "topic": "Triangle classification",
    "difficulty": "Competition",
    "prompt": "A triangle has angles 41°, 66° and 73°. Which description is correct?",
    "options": [
      "Right isosceles",
      "Right scalene",
      "Acute scalene",
      "Obtuse scalene",
      "Acute equilateral"
    ],
    "answer": "C",
    "explanation": "All angles are less than 90° and unequal."
  },
  {
    "id": 2419,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Competition",
    "prompt": "In triangle ABC, AB is extended through B to D. Angle CBD = 77° and angle A = 25°. Find angle C.",
    "options": [
      "52°",
      "53°",
      "50°",
      "51°",
      "54°"
    ],
    "answer": "A",
    "explanation": "Exterior angle CBD = angle A + angle C."
  },
  {
    "id": 2420,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Competition",
    "prompt": "The boundary of a figure contains one semicircular arc of radius 9 cm, two quarter-circle arcs of radius 18 cm, and straight portions totalling 36 cm. Its perimeter is (36 + kπ) cm. Find k.",
    "options": [
      "27",
      "25",
      "26",
      "29",
      "28"
    ],
    "answer": "A",
    "explanation": "Semicircle arc = 9π; two quarter-arcs total 18π, giving 27π."
  },
  {
    "id": 2421,
    "topic": "Isosceles angle cases",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle contains an angle of 36°. What are all possible values of its vertex angle?",
    "options": [
      "108° only",
      "72° only",
      "36° only",
      "36° and 108°",
      "No possible value"
    ],
    "answer": "D",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2422,
    "topic": "Polygons and symmetry",
    "difficulty": "Competition",
    "prompt": "A regular 11-sided polygon has how many lines of symmetry?",
    "options": [
      "9",
      "12",
      "11",
      "13",
      "10"
    ],
    "answer": "C",
    "explanation": "A regular polygon has as many symmetry lines as sides."
  },
  {
    "id": 2423,
    "topic": "Irregular perimeter",
    "difficulty": "Competition",
    "prompt": "A 21 cm by 16 cm rectangle has a 3 cm wide, 6 cm deep rectangular notch cut from the middle of its top side. Find the new perimeter.",
    "options": [
      "88 cm",
      "86 cm",
      "84 cm",
      "85 cm",
      "87 cm"
    ],
    "answer": "B",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2424,
    "topic": "Cylinder volume",
    "difficulty": "Competition",
    "prompt": "A solid half-cylinder has radius 8 cm and length 12 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "386",
      "382",
      "384",
      "385",
      "383"
    ],
    "answer": "C",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2425,
    "topic": "Volume and scaling",
    "difficulty": "Competition",
    "prompt": "Every edge of a cube is multiplied by 5. By what factor is its volume multiplied?",
    "options": [
      "126",
      "125",
      "127",
      "124",
      "123"
    ],
    "answer": "B",
    "explanation": "All three dimensions scale, so cube the linear factor."
  },
  {
    "id": 2426,
    "topic": "Sets and overlap",
    "difficulty": "Competition",
    "prompt": "Set A = integers 1 to 15, set B = integers 4 to 19, and set C = integers 7 to 17. How many numbers belong to A or B (or both), but not C?",
    "options": [
      "9",
      "6",
      "8",
      "7",
      "10"
    ],
    "answer": "C",
    "explanation": "Form the union of A and B, then remove C."
  },
  {
    "id": 2427,
    "topic": "Number and letter sequences",
    "difficulty": "Competition",
    "prompt": "Continue both patterns: 7A, 10C, 13E, 16G, …",
    "options": [
      "21I",
      "17I",
      "18I",
      "19I",
      "20I"
    ],
    "answer": "D",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2428,
    "topic": "Family relationships",
    "difficulty": "Competition",
    "prompt": "Femi has 6 cousins. Ada is the daughter of Femi’s father’s only sister. What is Ada’s relationship to Femi?",
    "options": [
      "Aunt",
      "Sister",
      "Cousin",
      "Niece",
      "Mother"
    ],
    "answer": "C",
    "explanation": "A parent’s sibling’s child is a cousin."
  },
  {
    "id": 2429,
    "topic": "Paper folding",
    "difficulty": "Competition",
    "prompt": "A sheet is folded in half 3 times. Then 2 separate holes are punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "14",
      "16",
      "15",
      "17",
      "18"
    ],
    "answer": "B",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2430,
    "topic": "Sibling equations",
    "difficulty": "Competition",
    "prompt": "In a family, each girl has 7 brothers. Every boy has as many brothers as sisters. How many children are in the family?",
    "options": [
      "14",
      "13",
      "12",
      "11",
      "15"
    ],
    "answer": "B",
    "explanation": "B = 7; B − 1 = G, so G = 6 and total children = 13."
  },
  {
    "id": 2431,
    "topic": "Number-row rules",
    "difficulty": "Competition",
    "prompt": "For each row, result = first × second + first − second. Find the missing result for first = 8, second = 10.",
    "options": [
      "76",
      "77",
      "78",
      "79",
      "80"
    ],
    "answer": "C",
    "explanation": "Substitute into the stated rule, completing multiplication before addition and subtraction."
  },
  {
    "id": 2432,
    "topic": "Calendar cycles",
    "difficulty": "Competition",
    "prompt": "What month is 4 months after July?",
    "options": [
      "February",
      "January",
      "March",
      "December",
      "November"
    ],
    "answer": "E",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2433,
    "topic": "Direction and turns",
    "difficulty": "Competition",
    "prompt": "A pupil faces south and makes these quarter-turns in order: left, right, right, left. Which direction is the pupil now facing?",
    "options": [
      "West",
      "The starting direction cannot be known",
      "North",
      "East",
      "South"
    ],
    "answer": "E",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2434,
    "topic": "Jug states",
    "difficulty": "Competition",
    "prompt": "A 17-litre jug is full and a 15-litre jug is empty. Fill the smaller from the larger, empty the smaller, pour the remainder of the larger into it, then refill the larger and top up the smaller. How many litres remain in the larger now?",
    "options": [
      "2 litres",
      "6 litres",
      "4 litres",
      "3 litres",
      "5 litres"
    ],
    "answer": "C",
    "explanation": "Record amounts after each pour. First remainder is 2 L; after the second topping-up, 4 L remain in the large jug."
  },
  {
    "id": 2435,
    "topic": "Number pyramids",
    "difficulty": "Competition",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 7, x, 10, 8, and the top entry is 72. Find x.",
    "options": [
      "10",
      "9",
      "11",
      "7",
      "8"
    ],
    "answer": "B",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2436,
    "topic": "Handshake counting",
    "difficulty": "Competition",
    "prompt": "There are 13 people at a meeting. Everyone shakes hands once with every other person except that two particular people do not shake hands with each other. How many handshakes occur?",
    "options": [
      "76",
      "79",
      "77",
      "75",
      "78"
    ],
    "answer": "C",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2437,
    "topic": "Multiplicative patterns",
    "difficulty": "Competition",
    "prompt": "Start at 7, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 7, 14, 42, 168, 840.",
    "options": [
      "5039",
      "5038",
      "5041",
      "5040",
      "5042"
    ],
    "answer": "D",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2438,
    "topic": "Mirror clocks",
    "difficulty": "Competition",
    "prompt": "An ordinary 12-hour analogue clock shows 7:35. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "4:35",
      "4:30",
      "4:55",
      "5:25",
      "4:25"
    ],
    "answer": "E",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2439,
    "topic": "Gear ratios",
    "difficulty": "Competition",
    "prompt": "A gear with 24 teeth turns 8 times and drives a gear with 48 teeth. How many turns does the larger gear make?",
    "options": [
      "6",
      "4",
      "2",
      "3",
      "5"
    ],
    "answer": "B",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2440,
    "topic": "Adjacency constraints",
    "difficulty": "Competition",
    "prompt": "Place 6, 7, 8, 9, 10 once each in a row. Sums of neighbouring cells from left to right are 16, 18, 17, 16. What is the middle number?",
    "options": [
      "9",
      "6",
      "10",
      "7",
      "8"
    ],
    "answer": "E",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2441,
    "topic": "Cube faces and adjacency",
    "difficulty": "Competition",
    "prompt": "A cube has faces labelled 7, 8, 9, 10, 11, 12. Face 7 shares an edge with faces 8, 9, 10, 11. Which face is opposite 7?",
    "options": [
      "10",
      "13",
      "14",
      "11",
      "12"
    ],
    "answer": "E",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2442,
    "topic": "Truth and falsehood",
    "difficulty": "Competition",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 6. Ayo says “The token is not with me.” Bisi says “The token is with Ayo.” Chika says “The token is not with me.” Exactly one statement is true. Who has the token?",
    "options": [
      "Chika",
      "Ayo",
      "Cannot be determined",
      "Bisi",
      "None of them"
    ],
    "answer": "A",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2443,
    "topic": "Ranking",
    "difficulty": "Competition",
    "prompt": "A pupil is 10th from the front and 5th from the back of a line. How many pupils are in the line?",
    "options": [
      "16",
      "15",
      "14",
      "13",
      "12"
    ],
    "answer": "C",
    "explanation": "Add the two ranks and subtract 1 because the pupil is counted twice."
  },
  {
    "id": 2444,
    "topic": "Minimum swaps",
    "difficulty": "Competition",
    "prompt": "What is the minimum number of swaps of any two positions needed to change DEBCA into ABCDE?",
    "options": [
      "3",
      "2",
      "6",
      "5",
      "4"
    ],
    "answer": "E",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2445,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Competition",
    "prompt": "A 14 by 14 checkerboard has its top-left and bottom-right corner squares removed. How many complete coverings by 1 by 2 dominoes are possible?",
    "options": [
      "2",
      "0",
      "1",
      "-2",
      "-1"
    ],
    "answer": "B",
    "explanation": "The removed corners have the same colour. Dominoes always cover one square of each colour, so no covering exists."
  },
  {
    "id": 2446,
    "topic": "Division constraints",
    "difficulty": "Competition",
    "prompt": "Choose different integers A and B from 1 to 12. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "24",
      "22",
      "25",
      "23",
      "21"
    ],
    "answer": "D",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2447,
    "topic": "Missing-number diagrams",
    "difficulty": "Competition",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 8, right number is 10, and bottom number is 12. What is the centre?",
    "options": [
      "66",
      "70",
      "69",
      "67",
      "68"
    ],
    "answer": "E",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2448,
    "topic": "Addition tables",
    "difficulty": "Competition",
    "prompt": "In a 2 by 2 addition table, each cell is its row heading plus its column heading. The top-left, top-right and bottom-left cells are 20, 27 and 25. Find the bottom-right cell.",
    "options": [
      "31",
      "30",
      "34",
      "32",
      "33"
    ],
    "answer": "D",
    "explanation": "Bottom-right = top-right + bottom-left − top-left."
  },
  {
    "id": 2449,
    "topic": "Unusual operations",
    "difficulty": "Competition",
    "prompt": "Define a ★ b = a² − b² and a ◆ b = a + b. Find (8 ★ 5) + 2 × (8 ◆ 5).",
    "options": [
      "65",
      "67",
      "63",
      "64",
      "66"
    ],
    "answer": "A",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2450,
    "topic": "Counting embedded squares",
    "difficulty": "Competition",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 3-row by 6-column grid shown?",
    "options": [
      "34",
      "31",
      "33",
      "30",
      "32"
    ],
    "answer": "E",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  },
  {
    "id": 2451,
    "topic": "Fractions and decimals",
    "difficulty": "Competition",
    "prompt": "Evaluate (1 + 3/5) × 5/2.",
    "options": [
      "5",
      "6",
      "3",
      "4",
      "2"
    ],
    "answer": "D",
    "explanation": "Convert the decimal to 1; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2452,
    "topic": "Income expenditure and savings",
    "difficulty": "Competition",
    "prompt": "A family earns ₦4800 and spends 75% of it. Income rises by 20%, while expenditure rises by 10% of its original amount. By what percentage do savings rise?",
    "options": [
      "52%",
      "49%",
      "51%",
      "50%",
      "48%"
    ],
    "answer": "D",
    "explanation": "Original savings = ₦1200; new savings = ₦1800. Increase/original savings × 100 = 50%."
  },
  {
    "id": 2453,
    "topic": "BODMAS powers and roots",
    "difficulty": "Competition",
    "prompt": "Evaluate (9 + 4)² − 3 × 9 + 24 ÷ 4.",
    "options": [
      "150",
      "147",
      "149",
      "146",
      "148"
    ],
    "answer": "E",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2454,
    "topic": "Recurring decimals",
    "difficulty": "Competition",
    "prompt": "Express 0.727272… as a fraction in its lowest terms.",
    "options": [
      "-3/11",
      "8/11",
      "-14/11",
      "19/11",
      "30/11"
    ],
    "answer": "B",
    "explanation": "100x − x = 72, so x = 72/99 = 8/11."
  },
  {
    "id": 2455,
    "topic": "Metric conversion",
    "difficulty": "Competition",
    "prompt": "A ribbon is 41 cm long. Pieces of 75 mm and 0.5 dm are cut off. What length remains in millimetres?",
    "options": [
      "287 mm",
      "285 mm",
      "286 mm",
      "283 mm",
      "284 mm"
    ],
    "answer": "B",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2456,
    "topic": "Divisibility",
    "difficulty": "Competition",
    "prompt": "The number 27d5 is divisible by both 5 and 9. Find the digit d.",
    "options": [
      "6",
      "5",
      "2",
      "3",
      "4"
    ],
    "answer": "E",
    "explanation": "The digit sum must be divisible by 9. The only digit that works is 4."
  },
  {
    "id": 2457,
    "topic": "Ordering representations",
    "difficulty": "Competition",
    "prompt": "Find the difference between the greatest and least of 37/20, 21/10 and 1.95.",
    "options": [
      "-3/4",
      "5/4",
      "-7/4",
      "9/4",
      "1/4"
    ],
    "answer": "E",
    "explanation": "Greatest − least = 21/10 − 37/20 = 1/4."
  },
  {
    "id": 2458,
    "topic": "Decimal place value",
    "difficulty": "Competition",
    "prompt": "By how much does the value of the digit 4 exceed the value of the digit 7 in 9.4076?",
    "options": [
      "393/1000",
      "1393/1000",
      "-1607/1000",
      "2393/1000",
      "-607/1000"
    ],
    "answer": "A",
    "explanation": "4 tenths − 7 thousandths = 0.400 − 0.007 = 0.393."
  },
  {
    "id": 2459,
    "topic": "Maximising expressions",
    "difficulty": "Competition",
    "prompt": "Use each of 8, 10 and 13 once as A, B and C. Find the difference between the greatest and least possible values of A + B/C.",
    "options": [
      "233/52",
      "285/52",
      "181/52",
      "389/52",
      "337/52"
    ],
    "answer": "B",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2460,
    "topic": "Counting multiples",
    "difficulty": "Competition",
    "prompt": "How many positive integers below 330 are divisible by 5 or 6, or both?",
    "options": [
      "110",
      "107",
      "108",
      "111",
      "109"
    ],
    "answer": "E",
    "explanation": "Add the two multiple counts, then subtract the common multiples counted twice."
  },
  {
    "id": 2461,
    "topic": "Digits after division",
    "difficulty": "Competition",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 9th place after the decimal point?",
    "options": [
      "2",
      "1",
      "3",
      "0",
      "4"
    ],
    "answer": "A",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2462,
    "topic": "Digit reversal",
    "difficulty": "Competition",
    "prompt": "A three-digit number has tens digit 3, digit sum 14, and increases by 297 when reversed. What is the sum of its hundreds and units digits?",
    "options": [
      "10",
      "9",
      "11",
      "13",
      "12"
    ],
    "answer": "C",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2463,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Competition",
    "prompt": "How many zeros occur at the end of the integer 10 × 11 × … × 20?",
    "options": [
      "4",
      "3",
      "1",
      "2",
      "5"
    ],
    "answer": "B",
    "explanation": "Count factors of 2 and 5 in the product. Each pair gives one trailing zero."
  },
  {
    "id": 2464,
    "topic": "Signed numbers",
    "difficulty": "Competition",
    "prompt": "A temperature is −11°C. It rises by 17°C each hour for 3 hours, then falls by 7°C. What is the final temperature?",
    "options": [
      "33°C",
      "34°C",
      "35°C",
      "32°C",
      "31°C"
    ],
    "answer": "A",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2465,
    "topic": "LCM and events",
    "difficulty": "Competition",
    "prompt": "Two bells ring every 26 and 39 minutes, starting together now. Count all distinct ringing times after now up to and including their next simultaneous ringing.",
    "options": [
      "2",
      "4",
      "3",
      "6",
      "5"
    ],
    "answer": "B",
    "explanation": "The next shared time is LCM(26, 39) = 78 minutes. Merge the event times if requested."
  },
  {
    "id": 2466,
    "topic": "Systematic counting",
    "difficulty": "Competition",
    "prompt": "Using only the digits 0, 2, 4, 5, 7, how many two-digit even numbers can be made without repeating a digit?",
    "options": [
      "9",
      "8",
      "12",
      "10",
      "11"
    ],
    "answer": "D",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2467,
    "topic": "Ratio and unitary method",
    "difficulty": "Competition",
    "prompt": "Flour and sugar are in the ratio 6:3. Flour weighs 33 kg more than sugar. Find the mass of sugar.",
    "options": [
      "33 kg",
      "31 kg",
      "34 kg",
      "32 kg",
      "35 kg"
    ],
    "answer": "A",
    "explanation": "One ratio part is 11 kg. Sugar is 3 parts."
  },
  {
    "id": 2468,
    "topic": "Linear growth",
    "difficulty": "Competition",
    "prompt": "A stack of 4 nested cups is 25 cm high, and a stack of 7 is 34 cm high. What is the greatest number of cups in a stack no higher than 54 cm?",
    "options": [
      "13",
      "11",
      "15",
      "14",
      "12"
    ],
    "answer": "A",
    "explanation": "Each added cup contributes 3 cm. One cup is 16 cm high; height for k cups = 16 + (k − 1) × 3."
  },
  {
    "id": 2469,
    "topic": "Powers and square roots",
    "difficulty": "Competition",
    "prompt": "Evaluate √(11² − 10²) × √(21).",
    "options": [
      "22",
      "19",
      "20",
      "23",
      "21"
    ],
    "answer": "E",
    "explanation": "The difference of the squares is 21. The product is √21 × √21 = 21."
  },
  {
    "id": 2470,
    "topic": "HCF tiling and intersections",
    "difficulty": "Competition",
    "prompt": "A 60 cm by 80 cm rectangle is tiled with the largest possible equal square tiles. How many tile-grid intersections are there, including boundary intersections?",
    "options": [
      "20",
      "21",
      "22",
      "19",
      "18"
    ],
    "answer": "A",
    "explanation": "Largest tile side = HCF(60, 80) = 20 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2471,
    "topic": "Means and removed values",
    "difficulty": "Competition",
    "prompt": "The mean age of 7 pupils is 19 years. Two pupils of equal age leave, and the remaining mean is 18 years. How old is each pupil who left?",
    "options": [
      "43/2 years",
      "47/2 years",
      "39/2 years",
      "45/2 years",
      "41/2 years"
    ],
    "answer": "A",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2472,
    "topic": "Parity",
    "difficulty": "Competition",
    "prompt": "For every odd integer n greater than 7, which expression is always odd?",
    "options": [
      "n(n + 1)",
      "n² + 2n",
      "2n²",
      "n + 3",
      "n² + 1"
    ],
    "answer": "B",
    "explanation": "Odd squared is odd; adding an even term keeps it odd."
  },
  {
    "id": 2473,
    "topic": "Estimation",
    "difficulty": "Competition",
    "prompt": "Estimate 268 × 56 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "16200",
      "16201",
      "16198",
      "16202",
      "16199"
    ],
    "answer": "A",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2474,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Competition",
    "prompt": "A clock is correct at 8:00 a.m. It loses 9 minutes per real hour. How many minutes slow is it after 6 real hours?",
    "options": [
      "55 minutes",
      "56 minutes",
      "53 minutes",
      "54 minutes",
      "52 minutes"
    ],
    "answer": "D",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2475,
    "topic": "Fractions on number lines",
    "difficulty": "Competition",
    "prompt": "The interval from 1/3 to 5/6 is divided into 13 equal intervals. What number is at the 5th tick after 1/3?",
    "options": [
      "-37/78",
      "41/78",
      "119/78",
      "197/78",
      "-115/78"
    ],
    "answer": "B",
    "explanation": "Interval length = (5/6 − 1/3)/13; add 5 such intervals to 1/3."
  },
  {
    "id": 2476,
    "topic": "Number machines",
    "difficulty": "Competition",
    "prompt": "A machine multiplies its input by 5, adds 12, multiplies by 4, then subtracts 7. Its output is 221. What was the input?",
    "options": [
      "10",
      "11",
      "9",
      "8",
      "7"
    ],
    "answer": "C",
    "explanation": "The rule is output = (5x + 12) × 4 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2477,
    "topic": "Equations",
    "difficulty": "Competition",
    "prompt": "Solve 9(x + 2) = 88 + 2x.",
    "options": [
      "11",
      "12",
      "9",
      "10",
      "8"
    ],
    "answer": "D",
    "explanation": "Collect the terms in x on one side, constants on the other, then divide by the coefficient of x."
  },
  {
    "id": 2478,
    "topic": "Roman numerals",
    "difficulty": "Competition",
    "prompt": "Evaluate (LXXVIII ÷ III) + IV. Give the answer in Roman numerals.",
    "options": [
      "XXXI",
      "XXX",
      "XXVIII",
      "XXIX",
      "XXVII"
    ],
    "answer": "B",
    "explanation": "78/3 + 4 = 30, written XXX."
  },
  {
    "id": 2479,
    "topic": "Prime numbers and divisors",
    "difficulty": "Competition",
    "prompt": "How many prime numbers divide 2 × 3 × 4 × 5 × 6 × 7 × 8 × 9 × 10 × 11?",
    "options": [
      "5",
      "4",
      "3",
      "6",
      "7"
    ],
    "answer": "A",
    "explanation": "The distinct primes in the product are 2, 3, 5, 7 and 11."
  },
  {
    "id": 2480,
    "topic": "Median",
    "difficulty": "Competition",
    "prompt": "The ordered list 13, 15, x, 19, 23, 25 has median 18. Find x.",
    "options": [
      "17",
      "18",
      "19",
      "15",
      "16"
    ],
    "answer": "A",
    "explanation": "The middle pair is x and 19. Their mean is 18; solve for x."
  },
  {
    "id": 2481,
    "topic": "Speed distance and time",
    "difficulty": "Competition",
    "prompt": "A bus covers 195 km at 65 km/h. How many hours would the same trip take at 60 km/h?",
    "options": [
      "17/4 hours",
      "5/4 hours",
      "9/4 hours",
      "21/4 hours",
      "13/4 hours"
    ],
    "answer": "E",
    "explanation": "Time = distance/new speed = 195/60 hours."
  },
  {
    "id": 2482,
    "topic": "Simple interest",
    "difficulty": "Competition",
    "prompt": "A sum earns ₦360 simple interest at 5% per year for 3 years. Find the principal.",
    "options": [
      "2401 naira",
      "2399 naira",
      "2398 naira",
      "2402 naira",
      "2400 naira"
    ],
    "answer": "E",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2483,
    "topic": "Ages",
    "difficulty": "Competition",
    "prompt": "A parent is 3 times as old as a child. Their ages differ by 30 years. What is the sum of their ages?",
    "options": [
      "60 years",
      "62 years",
      "61 years",
      "58 years",
      "59 years"
    ],
    "answer": "A",
    "explanation": "2 age-parts = 30; child = 15, parent = 45."
  },
  {
    "id": 2484,
    "topic": "Telescoping products",
    "difficulty": "Competition",
    "prompt": "Evaluate (2/3) × (3/4) × … × (11/12) × (13/14).",
    "options": [
      "97/84",
      "-71/84",
      "-155/84",
      "181/84",
      "13/84"
    ],
    "answer": "E",
    "explanation": "The consecutive section cancels to 2/12; multiply the final fraction."
  },
  {
    "id": 2485,
    "topic": "Reverse and successive percentages",
    "difficulty": "Competition",
    "prompt": "A price of ₦340 rises by 10% and then falls by 10% of the new price. Find the final price.",
    "options": [
      "1683/5",
      "1678/5",
      "1693/5",
      "1673/5",
      "1688/5"
    ],
    "answer": "A",
    "explanation": "Multiply the original price by 1.10 × 0.90 = 0.99."
  },
  {
    "id": 2486,
    "topic": "Composite areas",
    "difficulty": "Competition",
    "prompt": "A 26 cm by 15 cm rectangle has a 3 cm by 6 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "371 cm²",
      "372 cm²",
      "370 cm²",
      "374 cm²",
      "373 cm²"
    ],
    "answer": "B",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2487,
    "topic": "Triangle angles",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle has each base angle equal to 32°. Find its exterior angle adjacent to the vertex angle.",
    "options": [
      "64°",
      "66°",
      "65°",
      "63°",
      "62°"
    ],
    "answer": "A",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2488,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 56 cm. Its length exceeds its width by 6 cm. Find its area.",
    "options": [
      "187 cm²",
      "186 cm²",
      "185 cm²",
      "189 cm²",
      "188 cm²"
    ],
    "answer": "A",
    "explanation": "L + W = 28; dimensions are 17 cm and 11 cm."
  },
  {
    "id": 2489,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Competition",
    "prompt": "A small circle has radius 1/10 of a larger circle. What fraction of the larger circle is covered by the smaller one?",
    "options": [
      "201/100",
      "101/100",
      "1/100",
      "-199/100",
      "-99/100"
    ],
    "answer": "C",
    "explanation": "Area scales with the square of the radius ratio."
  },
  {
    "id": 2490,
    "topic": "Shortest distance",
    "difficulty": "Competition",
    "prompt": "A pupil walks 48 m east, 32 m north, then 24 m west. Find the straight-line distance from the starting point.",
    "options": [
      "42 m",
      "39 m",
      "41 m",
      "40 m",
      "38 m"
    ],
    "answer": "D",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2491,
    "topic": "Faces edges and vertices",
    "difficulty": "Competition",
    "prompt": "A prism has a 11-sided polygon as each base. How many vertices does it have?",
    "options": [
      "23",
      "22",
      "20",
      "21",
      "24"
    ],
    "answer": "B",
    "explanation": "Each of its two bases contributes n vertices."
  },
  {
    "id": 2492,
    "topic": "Painted cubes",
    "difficulty": "Competition",
    "prompt": "A cube is painted on all six outside faces and cut into 10 × 10 × 10 equal small cubes. How many small cubes have exactly one painted faces?",
    "options": [
      "382",
      "384",
      "383",
      "385",
      "386"
    ],
    "answer": "B",
    "explanation": "Six face interiors each contain (n − 2)² cubes."
  },
  {
    "id": 2493,
    "topic": "Triangle classification",
    "difficulty": "Competition",
    "prompt": "A triangle has angles 42°, 67° and 71°. Which description is correct?",
    "options": [
      "Right scalene",
      "Obtuse scalene",
      "Right isosceles",
      "Acute scalene",
      "Acute equilateral"
    ],
    "answer": "D",
    "explanation": "All angles are less than 90° and unequal."
  },
  {
    "id": 2494,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Competition",
    "prompt": "In triangle ABC, AB is extended through B to D. Angle CBD = 79° and angle A = 25°. Find angle C.",
    "options": [
      "54°",
      "55°",
      "52°",
      "53°",
      "56°"
    ],
    "answer": "A",
    "explanation": "Exterior angle CBD = angle A + angle C."
  },
  {
    "id": 2495,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Competition",
    "prompt": "The boundary of a figure contains one semicircular arc of radius 10 cm, two quarter-circle arcs of radius 20 cm, and straight portions totalling 40 cm. Its perimeter is (40 + kπ) cm. Find k.",
    "options": [
      "30",
      "28",
      "32",
      "31",
      "29"
    ],
    "answer": "A",
    "explanation": "Semicircle arc = 10π; two quarter-arcs total 20π, giving 30π."
  },
  {
    "id": 2496,
    "topic": "Isosceles angle cases",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle contains an angle of 37°. What are all possible values of its vertex angle?",
    "options": [
      "106° only",
      "37° only",
      "37° and 106°",
      "143/2° only",
      "No possible value"
    ],
    "answer": "C",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2497,
    "topic": "Polygons and symmetry",
    "difficulty": "Competition",
    "prompt": "A regular 12-sided polygon has how many lines of symmetry?",
    "options": [
      "10",
      "13",
      "14",
      "11",
      "12"
    ],
    "answer": "E",
    "explanation": "A regular polygon has as many symmetry lines as sides."
  },
  {
    "id": 2498,
    "topic": "Irregular perimeter",
    "difficulty": "Competition",
    "prompt": "A 22 cm by 17 cm rectangle has a 4 cm wide, 7 cm deep rectangular notch cut from the middle of its top side. Find the new perimeter.",
    "options": [
      "93 cm",
      "90 cm",
      "94 cm",
      "92 cm",
      "91 cm"
    ],
    "answer": "D",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2499,
    "topic": "Cylinder volume",
    "difficulty": "Competition",
    "prompt": "A solid half-cylinder has radius 9 cm and length 13 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "1053/2",
      "1049/2",
      "1051/2",
      "1055/2",
      "1057/2"
    ],
    "answer": "A",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2500,
    "topic": "Volume and scaling",
    "difficulty": "Competition",
    "prompt": "Every edge of a cube is multiplied by 6. By what factor is its volume multiplied?",
    "options": [
      "218",
      "216",
      "217",
      "214",
      "215"
    ],
    "answer": "B",
    "explanation": "All three dimensions scale, so cube the linear factor."
  },
  {
    "id": 2501,
    "topic": "Sets and overlap",
    "difficulty": "Competition",
    "prompt": "Set A = integers 1 to 16, set B = integers 4 to 20, and set C = integers 7 to 18. How many numbers belong to A or B (or both), but not C?",
    "options": [
      "9",
      "10",
      "7",
      "8",
      "6"
    ],
    "answer": "D",
    "explanation": "Form the union of A and B, then remove C."
  },
  {
    "id": 2502,
    "topic": "Number and letter sequences",
    "difficulty": "Competition",
    "prompt": "Continue both patterns: 8A, 11C, 14E, 17G, …",
    "options": [
      "19I",
      "22I",
      "18I",
      "20I",
      "21I"
    ],
    "answer": "D",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2503,
    "topic": "Family relationships",
    "difficulty": "Competition",
    "prompt": "Femi has 7 cousins. Ada is the daughter of Femi’s father’s only sister. What is Ada’s relationship to Femi?",
    "options": [
      "Cousin",
      "Niece",
      "Aunt",
      "Mother",
      "Sister"
    ],
    "answer": "A",
    "explanation": "A parent’s sibling’s child is a cousin."
  },
  {
    "id": 2504,
    "topic": "Paper folding",
    "difficulty": "Competition",
    "prompt": "A sheet is folded in half 1 times. Then 3 separate holes are punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "6",
      "5",
      "7",
      "4",
      "8"
    ],
    "answer": "A",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2505,
    "topic": "Sibling equations",
    "difficulty": "Competition",
    "prompt": "In a family, each girl has 8 brothers. Every boy has as many brothers as sisters. How many children are in the family?",
    "options": [
      "14",
      "13",
      "15",
      "16",
      "17"
    ],
    "answer": "C",
    "explanation": "B = 8; B − 1 = G, so G = 7 and total children = 15."
  },
  {
    "id": 2506,
    "topic": "Number-row rules",
    "difficulty": "Competition",
    "prompt": "For each row, result = first × second + first − second. Find the missing result for first = 9, second = 11.",
    "options": [
      "99",
      "97",
      "96",
      "95",
      "98"
    ],
    "answer": "B",
    "explanation": "Substitute into the stated rule, completing multiplication before addition and subtraction."
  },
  {
    "id": 2507,
    "topic": "Calendar cycles",
    "difficulty": "Competition",
    "prompt": "What month is 4 months after August?",
    "options": [
      "February",
      "April",
      "January",
      "December",
      "March"
    ],
    "answer": "D",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2508,
    "topic": "Direction and turns",
    "difficulty": "Competition",
    "prompt": "A pupil faces west and makes these quarter-turns in order: right, right, right, left. Which direction is the pupil now facing?",
    "options": [
      "South",
      "North",
      "West",
      "East",
      "The starting direction cannot be known"
    ],
    "answer": "D",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2509,
    "topic": "Jug states",
    "difficulty": "Competition",
    "prompt": "A 19-litre jug is full and a 17-litre jug is empty. Fill the smaller from the larger, empty the smaller, pour the remainder of the larger into it, then refill the larger and top up the smaller. How many litres remain in the larger now?",
    "options": [
      "5 litres",
      "6 litres",
      "2 litres",
      "3 litres",
      "4 litres"
    ],
    "answer": "E",
    "explanation": "Record amounts after each pour. First remainder is 2 L; after the second topping-up, 4 L remain in the large jug."
  },
  {
    "id": 2510,
    "topic": "Number pyramids",
    "difficulty": "Competition",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 8, x, 11, 9, and the top entry is 80. Find x.",
    "options": [
      "10",
      "11",
      "12",
      "8",
      "9"
    ],
    "answer": "A",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2511,
    "topic": "Handshake counting",
    "difficulty": "Competition",
    "prompt": "There are 14 people at a meeting. Everyone shakes hands once with every other person except that two particular people do not shake hands with each other. How many handshakes occur?",
    "options": [
      "88",
      "92",
      "91",
      "89",
      "90"
    ],
    "answer": "E",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2512,
    "topic": "Multiplicative patterns",
    "difficulty": "Competition",
    "prompt": "Start at 8, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 8, 16, 48, 192, 960.",
    "options": [
      "5761",
      "5762",
      "5759",
      "5760",
      "5758"
    ],
    "answer": "D",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2513,
    "topic": "Mirror clocks",
    "difficulty": "Competition",
    "prompt": "An ordinary 12-hour analogue clock shows 8:05. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "4:25",
      "3:55",
      "4:00",
      "4:55",
      "4:05"
    ],
    "answer": "B",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2514,
    "topic": "Gear ratios",
    "difficulty": "Competition",
    "prompt": "A gear with 26 teeth turns 8 times and drives a gear with 52 teeth. How many turns does the larger gear make?",
    "options": [
      "6",
      "3",
      "5",
      "2",
      "4"
    ],
    "answer": "E",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2515,
    "topic": "Adjacency constraints",
    "difficulty": "Competition",
    "prompt": "Place 7, 8, 9, 10, 11 once each in a row. Sums of neighbouring cells from left to right are 18, 19, 20, 18. What is the middle number?",
    "options": [
      "10",
      "11",
      "8",
      "9",
      "7"
    ],
    "answer": "D",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2516,
    "topic": "Cube faces and adjacency",
    "difficulty": "Competition",
    "prompt": "A cube has faces labelled 8, 9, 10, 11, 12, 13. Face 8 shares an edge with faces 9, 10, 11, 12. Which face is opposite 8?",
    "options": [
      "11",
      "15",
      "13",
      "12",
      "14"
    ],
    "answer": "C",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2517,
    "topic": "Truth and falsehood",
    "difficulty": "Competition",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 7. Ayo says “The token is with Bisi.” Bisi says “The token is not with me.” Chika says “The token is not with Ayo.” Exactly one statement is true. Who has the token?",
    "options": [
      "None of them",
      "Bisi",
      "Chika",
      "Cannot be determined",
      "Ayo"
    ],
    "answer": "E",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2518,
    "topic": "Ranking",
    "difficulty": "Competition",
    "prompt": "A pupil is 11th from the front and 6th from the back of a line. How many pupils are in the line?",
    "options": [
      "17",
      "18",
      "14",
      "15",
      "16"
    ],
    "answer": "E",
    "explanation": "Add the two ranks and subtract 1 because the pupil is counted twice."
  },
  {
    "id": 2519,
    "topic": "Minimum swaps",
    "difficulty": "Competition",
    "prompt": "What is the minimum number of swaps of any two positions needed to change EBADC into ABCDE?",
    "options": [
      "1",
      "4",
      "3",
      "2",
      "0"
    ],
    "answer": "D",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2520,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Competition",
    "prompt": "A 16 by 16 checkerboard has its top-left and bottom-right corner squares removed. How many complete coverings by 1 by 2 dominoes are possible?",
    "options": [
      "0",
      "-1",
      "2",
      "-2",
      "1"
    ],
    "answer": "A",
    "explanation": "The removed corners have the same colour. Dominoes always cover one square of each colour, so no covering exists."
  },
  {
    "id": 2521,
    "topic": "Division constraints",
    "difficulty": "Competition",
    "prompt": "Choose different integers A and B from 1 to 13. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "22",
      "26",
      "25",
      "23",
      "24"
    ],
    "answer": "E",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2522,
    "topic": "Missing-number diagrams",
    "difficulty": "Competition",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 9, right number is 11, and bottom number is 13. What is the centre?",
    "options": [
      "85",
      "86",
      "88",
      "84",
      "87"
    ],
    "answer": "B",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2523,
    "topic": "Addition tables",
    "difficulty": "Competition",
    "prompt": "In a 2 by 2 addition table, each cell is its row heading plus its column heading. The top-left, top-right and bottom-left cells are 22, 29 and 27. Find the bottom-right cell.",
    "options": [
      "35",
      "33",
      "34",
      "36",
      "32"
    ],
    "answer": "C",
    "explanation": "Bottom-right = top-right + bottom-left − top-left."
  },
  {
    "id": 2524,
    "topic": "Unusual operations",
    "difficulty": "Competition",
    "prompt": "Define a ★ b = a² − b² and a ◆ b = a + b. Find (9 ★ 6) + 3 × (9 ◆ 6).",
    "options": [
      "89",
      "92",
      "88",
      "91",
      "90"
    ],
    "answer": "E",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2525,
    "topic": "Counting embedded squares",
    "difficulty": "Competition",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 4-row by 5-column grid shown?",
    "options": [
      "41",
      "38",
      "42",
      "40",
      "39"
    ],
    "answer": "D",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  },
  {
    "id": 2526,
    "topic": "Fractions and decimals",
    "difficulty": "Competition",
    "prompt": "Evaluate (1.1 + 3/5) × 5/2 − 1/4.",
    "options": [
      "2",
      "4",
      "3",
      "6",
      "5"
    ],
    "answer": "B",
    "explanation": "Convert the decimal to 11/10; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2527,
    "topic": "Income expenditure and savings",
    "difficulty": "Competition",
    "prompt": "A family earns ₦5200 and spends 80% of it. Income rises by 20%, while expenditure rises by 15% of its original amount. By what percentage do savings rise?",
    "options": [
      "42%",
      "40%",
      "38%",
      "39%",
      "41%"
    ],
    "answer": "B",
    "explanation": "Original savings = ₦1040; new savings = ₦1456. Increase/original savings × 100 = 40%."
  },
  {
    "id": 2528,
    "topic": "BODMAS powers and roots",
    "difficulty": "Competition",
    "prompt": "Evaluate (10 + 4)² − 3 × 10 + 24 ÷ 4.",
    "options": [
      "172",
      "173",
      "170",
      "174",
      "171"
    ],
    "answer": "A",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2529,
    "topic": "Recurring decimals",
    "difficulty": "Competition",
    "prompt": "Express 0.3909090… as a fraction in its lowest terms.",
    "options": [
      "263/110",
      "-67/110",
      "153/110",
      "43/110",
      "-177/110"
    ],
    "answer": "D",
    "explanation": "10x = 3 + 90/99, so x = 43/110."
  },
  {
    "id": 2530,
    "topic": "Metric conversion",
    "difficulty": "Competition",
    "prompt": "A ribbon is 44 cm long. Pieces of 80 mm and 0.5 dm are cut off. What length remains in millimetres?",
    "options": [
      "311 mm",
      "312 mm",
      "309 mm",
      "308 mm",
      "310 mm"
    ],
    "answer": "E",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2531,
    "topic": "Divisibility",
    "difficulty": "Competition",
    "prompt": "The number 28d5 is divisible by both 5 and 9. Find the digit d.",
    "options": [
      "3",
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": "A",
    "explanation": "The digit sum must be divisible by 9. The only digit that works is 3."
  },
  {
    "id": 2532,
    "topic": "Ordering representations",
    "difficulty": "Competition",
    "prompt": "Find the difference between the greatest and least of 19/10, 43/20 and 2.",
    "options": [
      "1/4",
      "-3/4",
      "5/4",
      "-7/4",
      "9/4"
    ],
    "answer": "A",
    "explanation": "Greatest − least = 43/20 − 19/10 = 1/4."
  },
  {
    "id": 2533,
    "topic": "Decimal place value",
    "difficulty": "Competition",
    "prompt": "By how much does the value of the digit 4 exceed the value of the digit 7 in 10.4076?",
    "options": [
      "-607/1000",
      "393/1000",
      "-1607/1000",
      "1393/1000",
      "2393/1000"
    ],
    "answer": "B",
    "explanation": "4 tenths − 7 thousandths = 0.400 − 0.007 = 0.393."
  },
  {
    "id": 2534,
    "topic": "Maximising expressions",
    "difficulty": "Competition",
    "prompt": "Use each of 9, 11 and 14 once as A, B and C. Find the difference between the greatest and least possible values of A + B/C.",
    "options": [
      "433/126",
      "559/126",
      "685/126",
      "811/126",
      "937/126"
    ],
    "answer": "C",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2535,
    "topic": "Counting multiples",
    "difficulty": "Competition",
    "prompt": "How many positive integers below 360 are divisible by 6 or 7, or both?",
    "options": [
      "103",
      "104",
      "102",
      "101",
      "100"
    ],
    "answer": "C",
    "explanation": "Add the two multiple counts, then subtract the common multiples counted twice."
  },
  {
    "id": 2536,
    "topic": "Digits after division",
    "difficulty": "Competition",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 10th place after the decimal point?",
    "options": [
      "9",
      "8",
      "6",
      "7",
      "10"
    ],
    "answer": "B",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2537,
    "topic": "Digit reversal",
    "difficulty": "Competition",
    "prompt": "A three-digit number has tens digit 4, digit sum 9, and increases by 297 when reversed. What is the sum of its hundreds and units digits?",
    "options": [
      "4",
      "5",
      "6",
      "3",
      "7"
    ],
    "answer": "B",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2538,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Competition",
    "prompt": "How many zeros occur at the end of the integer 11 × 12 × … × 24?",
    "options": [
      "2",
      "0",
      "1",
      "4",
      "3"
    ],
    "answer": "A",
    "explanation": "Count factors of 2 and 5 in the product. Each pair gives one trailing zero."
  },
  {
    "id": 2539,
    "topic": "Signed numbers",
    "difficulty": "Competition",
    "prompt": "A temperature is −12°C. It rises by 19°C each hour for 3 hours, then falls by 8°C. What is the final temperature?",
    "options": [
      "36°C",
      "35°C",
      "37°C",
      "38°C",
      "39°C"
    ],
    "answer": "C",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2540,
    "topic": "LCM and events",
    "difficulty": "Competition",
    "prompt": "Two bells ring every 28 and 42 minutes, starting together now. Count all distinct ringing times after now up to and including their next simultaneous ringing.",
    "options": [
      "6",
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "D",
    "explanation": "The next shared time is LCM(28, 42) = 84 minutes. Merge the event times if requested."
  },
  {
    "id": 2541,
    "topic": "Systematic counting",
    "difficulty": "Competition",
    "prompt": "Using only the digits 0, 1, 2, 5, 7, 9, how many two-digit even numbers can be made without repeating a digit?",
    "options": [
      "9",
      "7",
      "8",
      "10",
      "11"
    ],
    "answer": "A",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2542,
    "topic": "Ratio and unitary method",
    "difficulty": "Competition",
    "prompt": "Flour and sugar are in the ratio 3:4. Flour weighs -12 kg more than sugar. Find the mass of sugar.",
    "options": [
      "48 kg",
      "50 kg",
      "47 kg",
      "49 kg",
      "46 kg"
    ],
    "answer": "A",
    "explanation": "One ratio part is 12 kg. Sugar is 4 parts."
  },
  {
    "id": 2543,
    "topic": "Linear growth",
    "difficulty": "Competition",
    "prompt": "A stack of 4 nested cups is 29 cm high, and a stack of 7 is 41 cm high. What is the greatest number of cups in a stack no higher than 68 cm?",
    "options": [
      "11",
      "13",
      "14",
      "15",
      "12"
    ],
    "answer": "B",
    "explanation": "Each added cup contributes 4 cm. One cup is 17 cm high; height for k cups = 17 + (k − 1) × 4."
  },
  {
    "id": 2544,
    "topic": "Powers and square roots",
    "difficulty": "Competition",
    "prompt": "What is the smallest positive whole number that must multiply 1452 to make a perfect square?",
    "options": [
      "5",
      "3",
      "2",
      "4",
      "1"
    ],
    "answer": "B",
    "explanation": "1452 = 3 × (22)², so multiply by 3."
  },
  {
    "id": 2545,
    "topic": "HCF tiling and intersections",
    "difficulty": "Competition",
    "prompt": "A 66 cm by 88 cm rectangle is tiled with the largest possible equal square tiles. How many tile-grid intersections are there, including boundary intersections?",
    "options": [
      "19",
      "21",
      "22",
      "20",
      "18"
    ],
    "answer": "D",
    "explanation": "Largest tile side = HCF(66, 88) = 22 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2546,
    "topic": "Means and removed values",
    "difficulty": "Competition",
    "prompt": "The mean age of 8 pupils is 20 years. Two pupils of equal age leave, and the remaining mean is 19 years. How old is each pupil who left?",
    "options": [
      "25 years",
      "23 years",
      "22 years",
      "24 years",
      "21 years"
    ],
    "answer": "B",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2547,
    "topic": "Parity",
    "difficulty": "Competition",
    "prompt": "For every odd integer n greater than 8, which expression is always odd?",
    "options": [
      "n² + 2n",
      "2n²",
      "n(n + 1)",
      "n + 3",
      "n² + 1"
    ],
    "answer": "A",
    "explanation": "Odd squared is odd; adding an even term keeps it odd."
  },
  {
    "id": 2548,
    "topic": "Estimation",
    "difficulty": "Competition",
    "prompt": "Estimate 278 × 57 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "16801",
      "16802",
      "16798",
      "16799",
      "16800"
    ],
    "answer": "E",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2549,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Competition",
    "prompt": "A clock is correct at 8:00 a.m. It loses 10 minutes per real hour. How many minutes slow is it after 7 real hours?",
    "options": [
      "68 minutes",
      "70 minutes",
      "69 minutes",
      "72 minutes",
      "71 minutes"
    ],
    "answer": "B",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2550,
    "topic": "Fractions on number lines",
    "difficulty": "Competition",
    "prompt": "The interval from 1/3 to 5/6 is divided into 14 equal intervals. What number is at the 2nd tick after 1/3?",
    "options": [
      "17/42",
      "-67/42",
      "59/42",
      "101/42",
      "-25/42"
    ],
    "answer": "A",
    "explanation": "Interval length = (5/6 − 1/3)/14; add 2 such intervals to 1/3."
  },
  {
    "id": 2551,
    "topic": "Number machines",
    "difficulty": "Competition",
    "prompt": "A machine multiplies its input by 2, adds 13, multiplies by 5, then subtracts 7. Its output is 158. What was the input?",
    "options": [
      "10",
      "8",
      "12",
      "9",
      "11"
    ],
    "answer": "A",
    "explanation": "The rule is output = (2x + 13) × 5 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2552,
    "topic": "Equations",
    "difficulty": "Competition",
    "prompt": "Solve (3x + 8)/(2x + 19) = 1.",
    "options": [
      "13",
      "10",
      "12",
      "9",
      "11"
    ],
    "answer": "E",
    "explanation": "3x + 8 = 2x + 19; hence x = 11. The denominator is nonzero at this value."
  },
  {
    "id": 2553,
    "topic": "Roman numerals",
    "difficulty": "Competition",
    "prompt": "Evaluate (LXXXIV ÷ III) + IV. Give the answer in Roman numerals.",
    "options": [
      "XXIX",
      "XXXIII",
      "XXXI",
      "XXXII",
      "XXX"
    ],
    "answer": "D",
    "explanation": "84/3 + 4 = 32, written XXXII."
  },
  {
    "id": 2554,
    "topic": "Consecutive integers",
    "difficulty": "Competition",
    "prompt": "The sum of five consecutive positive integers is 85. Find the sum of the squares of the two largest integers.",
    "options": [
      "687",
      "683",
      "686",
      "684",
      "685"
    ],
    "answer": "E",
    "explanation": "The middle number is 85/5 = 17. The two largest are 18 and 19; 324 + 361 = 685."
  },
  {
    "id": 2555,
    "topic": "Median",
    "difficulty": "Competition",
    "prompt": "The ordered list 14, 16, x, 20, 24, 26 has median 19. Find x.",
    "options": [
      "19",
      "16",
      "17",
      "20",
      "18"
    ],
    "answer": "E",
    "explanation": "The middle pair is x and 20. Their mean is 19; solve for x."
  },
  {
    "id": 2556,
    "topic": "Speed distance and time",
    "difficulty": "Competition",
    "prompt": "A bus covers 280 km at 70 km/h. How many hours would the same trip take at 65 km/h?",
    "options": [
      "43/13 hours",
      "82/13 hours",
      "30/13 hours",
      "69/13 hours",
      "56/13 hours"
    ],
    "answer": "E",
    "explanation": "Time = distance/new speed = 280/65 hours."
  },
  {
    "id": 2557,
    "topic": "Simple interest",
    "difficulty": "Competition",
    "prompt": "A sum earns ₦520 simple interest at 5% per year for 4 years. Find the principal.",
    "options": [
      "2600 naira",
      "2602 naira",
      "2599 naira",
      "2601 naira",
      "2598 naira"
    ],
    "answer": "A",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2558,
    "topic": "Ages",
    "difficulty": "Competition",
    "prompt": "A parent is 4 times as old as a child. Their ages differ by 48 years. What is the sum of their ages?",
    "options": [
      "82 years",
      "80 years",
      "81 years",
      "78 years",
      "79 years"
    ],
    "answer": "B",
    "explanation": "3 age-parts = 48; child = 16, parent = 64."
  },
  {
    "id": 2559,
    "topic": "Telescoping products",
    "difficulty": "Competition",
    "prompt": "Evaluate (2/3) × (3/4) × … × (12/13) × (14/15).",
    "options": [
      "28/195",
      "418/195",
      "-167/195",
      "223/195",
      "-362/195"
    ],
    "answer": "A",
    "explanation": "The consecutive section cancels to 2/13; multiply the final fraction."
  },
  {
    "id": 2560,
    "topic": "Reverse and successive percentages",
    "difficulty": "Competition",
    "prompt": "A price of ₦360 rises by 10% and then falls by 10% of the new price. Find the final price.",
    "options": [
      "1777/5",
      "1792/5",
      "1787/5",
      "1782/5",
      "1772/5"
    ],
    "answer": "D",
    "explanation": "Multiply the original price by 1.10 × 0.90 = 0.99."
  },
  {
    "id": 2561,
    "topic": "Composite areas",
    "difficulty": "Competition",
    "prompt": "A 28 cm by 16 cm rectangle has a 4 cm by 3 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "437 cm²",
      "435 cm²",
      "434 cm²",
      "438 cm²",
      "436 cm²"
    ],
    "answer": "E",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2562,
    "topic": "Triangle angles",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle has each base angle equal to 33°. Find its exterior angle adjacent to the vertex angle.",
    "options": [
      "64°",
      "67°",
      "66°",
      "68°",
      "65°"
    ],
    "answer": "C",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2563,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 60 cm. Its length exceeds its width by 6 cm. Find its area.",
    "options": [
      "216 cm²",
      "215 cm²",
      "218 cm²",
      "217 cm²",
      "214 cm²"
    ],
    "answer": "A",
    "explanation": "L + W = 30; dimensions are 18 cm and 12 cm."
  },
  {
    "id": 2564,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Competition",
    "prompt": "A small circle has radius 1/11 of a larger circle. What fraction of the larger circle is covered by the smaller one?",
    "options": [
      "122/121",
      "-241/121",
      "1/121",
      "243/121",
      "-120/121"
    ],
    "answer": "C",
    "explanation": "Area scales with the square of the radius ratio."
  },
  {
    "id": 2565,
    "topic": "Shortest distance",
    "difficulty": "Competition",
    "prompt": "A pupil walks 54 m east, 36 m north, then 27 m west. Find the straight-line distance from the starting point.",
    "options": [
      "47 m",
      "46 m",
      "43 m",
      "44 m",
      "45 m"
    ],
    "answer": "E",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2566,
    "topic": "Faces edges and vertices",
    "difficulty": "Competition",
    "prompt": "A prism has a 12-sided polygon as each base. How many vertices does it have?",
    "options": [
      "25",
      "22",
      "23",
      "24",
      "26"
    ],
    "answer": "D",
    "explanation": "Each of its two bases contributes n vertices."
  },
  {
    "id": 2567,
    "topic": "Painted cubes",
    "difficulty": "Competition",
    "prompt": "A cube is painted on all six outside faces and cut into 11 × 11 × 11 equal small cubes. How many small cubes have no painted faces?",
    "options": [
      "730",
      "731",
      "727",
      "729",
      "728"
    ],
    "answer": "D",
    "explanation": "Only the internal (n − 2) × (n − 2) × (n − 2) cubes have no paint."
  },
  {
    "id": 2568,
    "topic": "Triangle classification",
    "difficulty": "Competition",
    "prompt": "A triangle has angles 43°, 68° and 69°. Which description is correct?",
    "options": [
      "Acute scalene",
      "Right isosceles",
      "Obtuse scalene",
      "Acute equilateral",
      "Right scalene"
    ],
    "answer": "A",
    "explanation": "All angles are less than 90° and unequal."
  },
  {
    "id": 2569,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Competition",
    "prompt": "In triangle ABC, AB is extended through B to D. Angle CBD = 81° and angle A = 25°. Find angle C.",
    "options": [
      "57°",
      "58°",
      "54°",
      "56°",
      "55°"
    ],
    "answer": "D",
    "explanation": "Exterior angle CBD = angle A + angle C."
  },
  {
    "id": 2570,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Competition",
    "prompt": "The boundary of a figure contains one semicircular arc of radius 11 cm, two quarter-circle arcs of radius 22 cm, and straight portions totalling 44 cm. Its perimeter is (44 + kπ) cm. Find k.",
    "options": [
      "31",
      "32",
      "34",
      "33",
      "35"
    ],
    "answer": "D",
    "explanation": "Semicircle arc = 11π; two quarter-arcs total 22π, giving 33π."
  },
  {
    "id": 2571,
    "topic": "Isosceles angle cases",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle contains an angle of 38°. What are all possible values of its vertex angle?",
    "options": [
      "38° only",
      "No possible value",
      "38° and 104°",
      "71° only",
      "104° only"
    ],
    "answer": "C",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2572,
    "topic": "Polygons and symmetry",
    "difficulty": "Competition",
    "prompt": "A regular 13-sided polygon has how many lines of symmetry?",
    "options": [
      "12",
      "15",
      "14",
      "11",
      "13"
    ],
    "answer": "E",
    "explanation": "A regular polygon has as many symmetry lines as sides."
  },
  {
    "id": 2573,
    "topic": "Irregular perimeter",
    "difficulty": "Competition",
    "prompt": "A 23 cm by 18 cm rectangle has a 5 cm wide, 4 cm deep rectangular notch cut from the middle of its top side. Find the new perimeter.",
    "options": [
      "91 cm",
      "88 cm",
      "89 cm",
      "92 cm",
      "90 cm"
    ],
    "answer": "E",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2574,
    "topic": "Cylinder volume",
    "difficulty": "Competition",
    "prompt": "A solid half-cylinder has radius 10 cm and length 14 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "702",
      "701",
      "700",
      "698",
      "699"
    ],
    "answer": "C",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2575,
    "topic": "Volume and scaling",
    "difficulty": "Competition",
    "prompt": "A hemispherical bowl has internal radius 8 cm. Use V = (2/3)πr³. Its capacity is kπ cm³. Find k.",
    "options": [
      "1021/3",
      "1024/3",
      "1027/3",
      "1018/3",
      "1030/3"
    ],
    "answer": "B",
    "explanation": "Substitute the radius in the supplied hemisphere formula."
  },
  {
    "id": 2576,
    "topic": "Sets and overlap",
    "difficulty": "Competition",
    "prompt": "Set A = integers 1 to 17, set B = integers 4 to 21, and set C = integers 7 to 19. How many numbers belong to A or B (or both), but not C?",
    "options": [
      "10",
      "7",
      "9",
      "8",
      "6"
    ],
    "answer": "D",
    "explanation": "Form the union of A and B, then remove C."
  },
  {
    "id": 2577,
    "topic": "Number and letter sequences",
    "difficulty": "Competition",
    "prompt": "Continue both patterns: 9A, 12D, 15G, 18J, …",
    "options": [
      "20M",
      "21M",
      "19M",
      "22M",
      "23M"
    ],
    "answer": "B",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2578,
    "topic": "Family relationships",
    "difficulty": "Competition",
    "prompt": "Femi has 8 cousins. Ada is the daughter of Femi’s father’s only sister. What is Ada’s relationship to Femi?",
    "options": [
      "Sister",
      "Aunt",
      "Mother",
      "Niece",
      "Cousin"
    ],
    "answer": "E",
    "explanation": "A parent’s sibling’s child is a cousin."
  },
  {
    "id": 2579,
    "topic": "Paper folding",
    "difficulty": "Competition",
    "prompt": "A sheet is folded in half 2 times. Then 3 separate holes are punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "10",
      "14",
      "11",
      "13",
      "12"
    ],
    "answer": "E",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2580,
    "topic": "Sibling equations",
    "difficulty": "Competition",
    "prompt": "In a family, each girl has 9 brothers. Every boy has as many brothers as sisters. If every child writes down the name of each of their siblings once, how many names are written altogether?",
    "options": [
      "271",
      "272",
      "270",
      "274",
      "273"
    ],
    "answer": "B",
    "explanation": "B = 9; B − 1 = G, so G = 8 and total children = 17. Each of these children lists all the other children."
  },
  {
    "id": 2581,
    "topic": "Balance equations",
    "difficulty": "Competition",
    "prompt": "Three circles balance one circle and one triangle. Two triangles balance one square and one circle. A circle has mass 8 g. Find the mass of a square.",
    "options": [
      "22 g",
      "23 g",
      "24 g",
      "26 g",
      "25 g"
    ],
    "answer": "C",
    "explanation": "First, triangle = 2 circles = 16 g. Then square = 2 triangles − circle = 24 g."
  },
  {
    "id": 2582,
    "topic": "Calendar cycles",
    "difficulty": "Competition",
    "prompt": "What month is 5 months after September?",
    "options": [
      "May",
      "March",
      "June",
      "April",
      "February"
    ],
    "answer": "E",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2583,
    "topic": "Direction and turns",
    "difficulty": "Competition",
    "prompt": "A pupil faces north and makes these quarter-turns in order: left, left, left, right, left. Which direction is the pupil now facing?",
    "options": [
      "The starting direction cannot be known",
      "West",
      "East",
      "South",
      "North"
    ],
    "answer": "C",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2584,
    "topic": "Jug states",
    "difficulty": "Competition",
    "prompt": "A 21-litre jug is full and a 19-litre jug is empty. Fill the smaller from the larger, empty the smaller, pour the remainder of the larger into it, then refill the larger and top up the smaller. How many litres remain in the larger now?",
    "options": [
      "3 litres",
      "2 litres",
      "6 litres",
      "5 litres",
      "4 litres"
    ],
    "answer": "E",
    "explanation": "Record amounts after each pour. First remainder is 2 L; after the second topping-up, 4 L remain in the large jug."
  },
  {
    "id": 2585,
    "topic": "Number pyramids",
    "difficulty": "Competition",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 9, x, 12, 10, and the top entry is 88. Find x.",
    "options": [
      "11",
      "9",
      "10",
      "12",
      "13"
    ],
    "answer": "A",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2586,
    "topic": "Handshake counting",
    "difficulty": "Competition",
    "prompt": "There are 15 people at a meeting. Everyone shakes hands once with every other person except that two particular people do not shake hands with each other. How many handshakes occur?",
    "options": [
      "106",
      "104",
      "102",
      "103",
      "105"
    ],
    "answer": "B",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2587,
    "topic": "Multiplicative patterns",
    "difficulty": "Competition",
    "prompt": "Start at 9, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 9, 18, 54, 216, 1080.",
    "options": [
      "6479",
      "6478",
      "6482",
      "6480",
      "6481"
    ],
    "answer": "D",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2588,
    "topic": "Mirror clocks",
    "difficulty": "Competition",
    "prompt": "An ordinary 12-hour analogue clock shows 9:10. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "3:20",
      "3:50",
      "2:55",
      "2:50",
      "3:00"
    ],
    "answer": "D",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2589,
    "topic": "Gear ratios",
    "difficulty": "Competition",
    "prompt": "A 28-tooth gear drives a 56-tooth idler, which drives another 28-tooth gear. The first makes 10 turns. How many turns does the last gear make?",
    "options": [
      "12",
      "10",
      "8",
      "9",
      "11"
    ],
    "answer": "B",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2590,
    "topic": "Adjacency constraints",
    "difficulty": "Competition",
    "prompt": "Place 8, 9, 10, 11, 12 once each in a row. Sums of neighbouring cells from left to right are 17, 19, 21, 22. What is the middle number?",
    "options": [
      "10",
      "12",
      "9",
      "13",
      "11"
    ],
    "answer": "E",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2591,
    "topic": "Cube faces and adjacency",
    "difficulty": "Competition",
    "prompt": "A cube has faces labelled 9, 10, 11, 12, 13, 14. Face 9 shares an edge with faces 10, 11, 12, 13. Which face is opposite 9?",
    "options": [
      "12",
      "14",
      "15",
      "13",
      "16"
    ],
    "answer": "B",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2592,
    "topic": "Truth and falsehood",
    "difficulty": "Competition",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 8. Ayo says “The token is not with me.” Bisi says “The token is with Ayo.” Chika says “The token is not with me.” Exactly one statement is true. Who has the token?",
    "options": [
      "Bisi",
      "Cannot be determined",
      "Chika",
      "Ayo",
      "None of them"
    ],
    "answer": "C",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2593,
    "topic": "Ordering constraints",
    "difficulty": "Competition",
    "prompt": "Five pupils have different ranks 1 to 5, with 1 highest. Ayo is above Dara; Dara is above Efe; Efe is above Chika; Chika is above Bisi. Who is ranked 1?",
    "options": [
      "Dara",
      "Efe",
      "Bisi",
      "Ayo",
      "Chika"
    ],
    "answer": "D",
    "explanation": "Combine the comparisons into one complete order, then read the requested position."
  },
  {
    "id": 2594,
    "topic": "Minimum swaps",
    "difficulty": "Competition",
    "prompt": "What is the minimum number of swaps of any two positions needed to change DAFBCE into ABCDEF?",
    "options": [
      "3",
      "6",
      "4",
      "2",
      "5"
    ],
    "answer": "C",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2595,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Competition",
    "prompt": "A 18 by 18 checkerboard has its top-left and bottom-right corner squares removed. How many complete coverings by 1 by 2 dominoes are possible?",
    "options": [
      "-2",
      "0",
      "1",
      "-1",
      "2"
    ],
    "answer": "B",
    "explanation": "The removed corners have the same colour. Dominoes always cover one square of each colour, so no covering exists."
  },
  {
    "id": 2596,
    "topic": "Division constraints",
    "difficulty": "Competition",
    "prompt": "Choose different integers A and B from 1 to 14. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "28",
      "26",
      "27",
      "29",
      "25"
    ],
    "answer": "C",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2597,
    "topic": "Missing-number diagrams",
    "difficulty": "Competition",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 10, right number is 12, and bottom number is 14. What is the centre?",
    "options": [
      "104",
      "105",
      "106",
      "107",
      "108"
    ],
    "answer": "C",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2598,
    "topic": "Addition tables",
    "difficulty": "Competition",
    "prompt": "In a 2 by 2 addition table, each cell is its row heading plus its column heading. The top-left, top-right and bottom-left cells are 24, 31 and 29. Find the bottom-right cell.",
    "options": [
      "38",
      "36",
      "35",
      "37",
      "34"
    ],
    "answer": "B",
    "explanation": "Bottom-right = top-right + bottom-left − top-left."
  },
  {
    "id": 2599,
    "topic": "Unusual operations",
    "difficulty": "Competition",
    "prompt": "Define a ★ b = a² − b² and a ◆ b = a + b. Find (10 ★ 3) + 4 × (10 ◆ 3).",
    "options": [
      "145",
      "143",
      "144",
      "141",
      "142"
    ],
    "answer": "B",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2600,
    "topic": "Counting embedded squares",
    "difficulty": "Competition",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 4-row by 6-column grid shown?",
    "options": [
      "52",
      "51",
      "49",
      "48",
      "50"
    ],
    "answer": "E",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  },
  {
    "id": 2601,
    "topic": "Fractions and decimals",
    "difficulty": "Competition",
    "prompt": "Evaluate (1.2 + 3/5) × 5/2 − 1/4.",
    "options": [
      "17/4",
      "9/4",
      "13/4",
      "21/4",
      "25/4"
    ],
    "answer": "A",
    "explanation": "Convert the decimal to 6/5; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2602,
    "topic": "Income expenditure and savings",
    "difficulty": "Competition",
    "prompt": "A family earns ₦5600 and spends 80% of it. Income rises by 20%, while expenditure rises by 15% of its original amount. By what percentage do savings rise?",
    "options": [
      "41%",
      "38%",
      "42%",
      "39%",
      "40%"
    ],
    "answer": "E",
    "explanation": "Original savings = ₦1120; new savings = ₦1568. Increase/original savings × 100 = 40%."
  },
  {
    "id": 2603,
    "topic": "BODMAS powers and roots",
    "difficulty": "Competition",
    "prompt": "Evaluate (11 + 4)² − 3 × 11 + 24 ÷ 4.",
    "options": [
      "200",
      "199",
      "197",
      "196",
      "198"
    ],
    "answer": "E",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2604,
    "topic": "Recurring decimals",
    "difficulty": "Competition",
    "prompt": "Express 0.4999999… as a fraction in its lowest terms.",
    "options": [
      "-3/2",
      "1/2",
      "3/2",
      "-1/2",
      "5/2"
    ],
    "answer": "B",
    "explanation": "10x = 4 + 99/99, so x = 1/2."
  },
  {
    "id": 2605,
    "topic": "Metric conversion",
    "difficulty": "Competition",
    "prompt": "A ribbon is 47 cm long. Pieces of 85 mm and 0.5 dm are cut off. What length remains in millimetres?",
    "options": [
      "333 mm",
      "336 mm",
      "335 mm",
      "337 mm",
      "334 mm"
    ],
    "answer": "C",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2606,
    "topic": "Divisibility",
    "difficulty": "Competition",
    "prompt": "The number 29d5 is divisible by both 5 and 9. Find the digit d.",
    "options": [
      "3",
      "4",
      "1",
      "0",
      "2"
    ],
    "answer": "E",
    "explanation": "The digit sum must be divisible by 9. The only digit that works is 2."
  },
  {
    "id": 2607,
    "topic": "Ordering representations",
    "difficulty": "Competition",
    "prompt": "Find the difference between the greatest and least of 39/20, 11/5 and 2.05.",
    "options": [
      "5/4",
      "-7/4",
      "-3/4",
      "9/4",
      "1/4"
    ],
    "answer": "E",
    "explanation": "Greatest − least = 11/5 − 39/20 = 1/4."
  },
  {
    "id": 2608,
    "topic": "Decimal place value",
    "difficulty": "Competition",
    "prompt": "By how much does the value of the digit 4 exceed the value of the digit 7 in 11.4076?",
    "options": [
      "-607/1000",
      "393/1000",
      "1393/1000",
      "-1607/1000",
      "2393/1000"
    ],
    "answer": "B",
    "explanation": "4 tenths − 7 thousandths = 0.400 − 0.007 = 0.393."
  },
  {
    "id": 2609,
    "topic": "Maximising expressions",
    "difficulty": "Competition",
    "prompt": "Use each of 10, 12 and 15 once as A, B and C. Find the difference between the greatest and least possible values of A + B/C.",
    "options": [
      "27/5",
      "37/5",
      "22/5",
      "32/5",
      "17/5"
    ],
    "answer": "A",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2610,
    "topic": "Counting multiples",
    "difficulty": "Competition",
    "prompt": "How many positive integers below 390 are divisible by 4 or 5, or both?",
    "options": [
      "155",
      "153",
      "157",
      "154",
      "156"
    ],
    "answer": "A",
    "explanation": "Add the two multiple counts, then subtract the common multiples counted twice."
  },
  {
    "id": 2611,
    "topic": "Digits after division",
    "difficulty": "Competition",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 11th place after the decimal point?",
    "options": [
      "7",
      "4",
      "5",
      "6",
      "3"
    ],
    "answer": "C",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2612,
    "topic": "Digit reversal",
    "difficulty": "Competition",
    "prompt": "A three-digit number has tens digit 5, digit sum 12, and increases by 297 when reversed. What is the sum of its hundreds and units digits?",
    "options": [
      "6",
      "8",
      "7",
      "5",
      "9"
    ],
    "answer": "C",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2613,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Competition",
    "prompt": "How many zeros occur at the end of the integer 12 × 13 × … × 25?",
    "options": [
      "4",
      "6",
      "5",
      "2",
      "3"
    ],
    "answer": "A",
    "explanation": "Count factors of 2 and 5 in the product. Each pair gives one trailing zero."
  },
  {
    "id": 2614,
    "topic": "Signed numbers",
    "difficulty": "Competition",
    "prompt": "A temperature is −13°C. It rises by 21°C each hour for 3 hours, then falls by 9°C. What is the final temperature?",
    "options": [
      "42°C",
      "41°C",
      "43°C",
      "39°C",
      "40°C"
    ],
    "answer": "B",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2615,
    "topic": "LCM and events",
    "difficulty": "Competition",
    "prompt": "Two bells ring every 30 and 45 minutes, starting together now. Count all distinct ringing times after now up to and including their next simultaneous ringing.",
    "options": [
      "6",
      "5",
      "4",
      "2",
      "3"
    ],
    "answer": "C",
    "explanation": "The next shared time is LCM(30, 45) = 90 minutes. Merge the event times if requested."
  },
  {
    "id": 2616,
    "topic": "Systematic counting",
    "difficulty": "Competition",
    "prompt": "Using only the digits 0, 2, 3, 4, 7, 8, how many two-digit even numbers can be made without repeating a digit?",
    "options": [
      "15",
      "17",
      "16",
      "19",
      "18"
    ],
    "answer": "B",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2617,
    "topic": "Ratio and unitary method",
    "difficulty": "Competition",
    "prompt": "Flour and sugar are in the ratio 4:2. Flour weighs 26 kg more than sugar. Find the mass of sugar.",
    "options": [
      "28 kg",
      "24 kg",
      "27 kg",
      "25 kg",
      "26 kg"
    ],
    "answer": "E",
    "explanation": "One ratio part is 13 kg. Sugar is 2 parts."
  },
  {
    "id": 2618,
    "topic": "Linear growth",
    "difficulty": "Competition",
    "prompt": "A stack of 4 nested cups is 24 cm high, and a stack of 7 is 30 cm high. What is the greatest number of cups in a stack no higher than 43 cm?",
    "options": [
      "15",
      "11",
      "12",
      "13",
      "14"
    ],
    "answer": "D",
    "explanation": "Each added cup contributes 2 cm. One cup is 18 cm high; height for k cups = 18 + (k − 1) × 2."
  },
  {
    "id": 2619,
    "topic": "Powers and square roots",
    "difficulty": "Competition",
    "prompt": "What is the smallest positive whole number that must multiply 1728 to make a perfect square?",
    "options": [
      "3",
      "5",
      "4",
      "1",
      "2"
    ],
    "answer": "A",
    "explanation": "1728 = 3 × (24)², so multiply by 3."
  },
  {
    "id": 2620,
    "topic": "HCF tiling and intersections",
    "difficulty": "Competition",
    "prompt": "A 72 cm by 96 cm rectangle is tiled with the largest possible equal square tiles. How many tile-grid intersections are there, including boundary intersections?",
    "options": [
      "19",
      "22",
      "20",
      "21",
      "18"
    ],
    "answer": "C",
    "explanation": "Largest tile side = HCF(72, 96) = 24 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2621,
    "topic": "Means and removed values",
    "difficulty": "Competition",
    "prompt": "The mean age of 6 pupils is 21 years. Two pupils of equal age leave, and the remaining mean is 20 years. How old is each pupil who left?",
    "options": [
      "22 years",
      "24 years",
      "25 years",
      "21 years",
      "23 years"
    ],
    "answer": "E",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2622,
    "topic": "Parity",
    "difficulty": "Competition",
    "prompt": "For every odd integer n greater than 9, which expression is always odd?",
    "options": [
      "n² + 1",
      "n² + 2n",
      "n(n + 1)",
      "2n²",
      "n + 3"
    ],
    "answer": "B",
    "explanation": "Odd squared is odd; adding an even term keeps it odd."
  },
  {
    "id": 2623,
    "topic": "Estimation",
    "difficulty": "Competition",
    "prompt": "Estimate 288 × 58 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "17399",
      "17398",
      "17402",
      "17400",
      "17401"
    ],
    "answer": "D",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2624,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Competition",
    "prompt": "A clock is correct at 8:00 a.m. It loses 11 minutes per real hour. How many minutes slow is it after 7 real hours?",
    "options": [
      "79 minutes",
      "77 minutes",
      "78 minutes",
      "76 minutes",
      "75 minutes"
    ],
    "answer": "B",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2625,
    "topic": "Fractions on number lines",
    "difficulty": "Competition",
    "prompt": "The interval from 1/3 to 5/6 is divided into 15 equal intervals. What number is at the 3rd tick after 1/3?",
    "options": [
      "43/30",
      "-47/30",
      "13/30",
      "-17/30",
      "73/30"
    ],
    "answer": "C",
    "explanation": "Interval length = (5/6 − 1/3)/15; add 3 such intervals to 1/3."
  },
  {
    "id": 2626,
    "topic": "Number machines",
    "difficulty": "Competition",
    "prompt": "A machine multiplies its input by 3, adds 14, multiplies by 3, then subtracts 7. Its output is 134. What was the input?",
    "options": [
      "10",
      "11",
      "13",
      "9",
      "12"
    ],
    "answer": "B",
    "explanation": "The rule is output = (3x + 14) × 3 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2627,
    "topic": "Equations",
    "difficulty": "Competition",
    "prompt": "Solve (3x + 9)/(2x + 21) = 1.",
    "options": [
      "11",
      "10",
      "14",
      "12",
      "13"
    ],
    "answer": "D",
    "explanation": "3x + 9 = 2x + 21; hence x = 12. The denominator is nonzero at this value."
  },
  {
    "id": 2628,
    "topic": "Roman numerals",
    "difficulty": "Competition",
    "prompt": "Evaluate (XC ÷ III) + IV. Give the answer in Roman numerals.",
    "options": [
      "XXXI",
      "XXXIV",
      "XXXII",
      "XXXIII",
      "XXXV"
    ],
    "answer": "B",
    "explanation": "90/3 + 4 = 34, written XXXIV."
  },
  {
    "id": 2629,
    "topic": "Wrapper exchanges",
    "difficulty": "Competition",
    "prompt": "A pupil buys 35 sweets. Every 4 empty wrappers can be exchanged for one more sweet, which also has a wrapper. No wrappers may be borrowed. What is the greatest total number of sweets the pupil can eat?",
    "options": [
      "44",
      "48",
      "45",
      "46",
      "47"
    ],
    "answer": "D",
    "explanation": "35 wrappers give 8 sweets and 3 wrappers left; 11 give 2 sweets and 3 left; 5 give 1 sweet and 2 left. Total 35 + 8 + 2 + 1 = 46."
  },
  {
    "id": 2630,
    "topic": "Median",
    "difficulty": "Competition",
    "prompt": "The ordered list 15, 17, x, 21, 25, 27 has median 20. Find x.",
    "options": [
      "17",
      "18",
      "20",
      "19",
      "21"
    ],
    "answer": "D",
    "explanation": "The middle pair is x and 21. Their mean is 20; solve for x."
  },
  {
    "id": 2631,
    "topic": "Speed distance and time",
    "difficulty": "Competition",
    "prompt": "A bus covers 300 km at 75 km/h. How many hours would the same trip take at 70 km/h?",
    "options": [
      "30/7 hours",
      "44/7 hours",
      "16/7 hours",
      "23/7 hours",
      "37/7 hours"
    ],
    "answer": "A",
    "explanation": "Time = distance/new speed = 300/70 hours."
  },
  {
    "id": 2632,
    "topic": "Simple interest",
    "difficulty": "Competition",
    "prompt": "A sum earns ₦560 simple interest at 5% per year for 4 years. Find the principal.",
    "options": [
      "2800 naira",
      "2798 naira",
      "2799 naira",
      "2802 naira",
      "2801 naira"
    ],
    "answer": "A",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2633,
    "topic": "Ages",
    "difficulty": "Competition",
    "prompt": "A parent is 4 times as old as a child. Their ages differ by 51 years. What is the sum of their ages?",
    "options": [
      "86 years",
      "87 years",
      "83 years",
      "85 years",
      "84 years"
    ],
    "answer": "D",
    "explanation": "3 age-parts = 51; child = 17, parent = 68."
  },
  {
    "id": 2634,
    "topic": "Telescoping products",
    "difficulty": "Competition",
    "prompt": "Evaluate (2/3) × (3/4) × … × (13/14) × (15/16).",
    "options": [
      "127/112",
      "15/112",
      "-209/112",
      "-97/112",
      "239/112"
    ],
    "answer": "B",
    "explanation": "The consecutive section cancels to 2/14; multiply the final fraction."
  },
  {
    "id": 2635,
    "topic": "Reverse and successive percentages",
    "difficulty": "Competition",
    "prompt": "A price of ₦380 rises by 10% and then falls by 10% of the new price. Find the final price.",
    "options": [
      "1871/5",
      "1881/5",
      "1891/5",
      "1886/5",
      "1876/5"
    ],
    "answer": "B",
    "explanation": "Multiply the original price by 1.10 × 0.90 = 0.99."
  },
  {
    "id": 2636,
    "topic": "Composite areas",
    "difficulty": "Competition",
    "prompt": "A 30 cm by 17 cm rectangle has a 2 cm by 4 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "502 cm²",
      "500 cm²",
      "501 cm²",
      "504 cm²",
      "503 cm²"
    ],
    "answer": "A",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2637,
    "topic": "Triangle angles",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle has each base angle equal to 34°. Find its exterior angle adjacent to the vertex angle.",
    "options": [
      "68°",
      "67°",
      "70°",
      "69°",
      "66°"
    ],
    "answer": "A",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2638,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 64 cm. Its length exceeds its width by 6 cm. Find its area.",
    "options": [
      "246 cm²",
      "248 cm²",
      "245 cm²",
      "247 cm²",
      "249 cm²"
    ],
    "answer": "D",
    "explanation": "L + W = 32; dimensions are 19 cm and 13 cm."
  },
  {
    "id": 2639,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Competition",
    "prompt": "A small circle has radius 1/12 of a larger circle. What fraction of the larger circle is covered by the smaller one?",
    "options": [
      "-287/144",
      "-143/144",
      "145/144",
      "1/144",
      "289/144"
    ],
    "answer": "D",
    "explanation": "Area scales with the square of the radius ratio."
  },
  {
    "id": 2640,
    "topic": "Shortest distance",
    "difficulty": "Competition",
    "prompt": "A pupil walks 60 m east, 40 m north, then 30 m west. Find the straight-line distance from the starting point.",
    "options": [
      "52 m",
      "50 m",
      "48 m",
      "51 m",
      "49 m"
    ],
    "answer": "B",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2641,
    "topic": "Faces edges and vertices",
    "difficulty": "Competition",
    "prompt": "A prism has a 13-sided polygon as each base. How many vertices does it have?",
    "options": [
      "27",
      "28",
      "25",
      "24",
      "26"
    ],
    "answer": "E",
    "explanation": "Each of its two bases contributes n vertices."
  },
  {
    "id": 2642,
    "topic": "Painted cubes",
    "difficulty": "Competition",
    "prompt": "A cube is painted on all six outside faces and cut into 12 × 12 × 12 equal small cubes. How many small cubes have no painted faces?",
    "options": [
      "1002",
      "999",
      "1001",
      "1000",
      "998"
    ],
    "answer": "D",
    "explanation": "Only the internal (n − 2) × (n − 2) × (n − 2) cubes have no paint."
  },
  {
    "id": 2643,
    "topic": "Triangle classification",
    "difficulty": "Competition",
    "prompt": "A triangle has angles 44°, 69° and 67°. Which description is correct?",
    "options": [
      "Acute scalene",
      "Acute equilateral",
      "Obtuse scalene",
      "Right isosceles",
      "Right scalene"
    ],
    "answer": "A",
    "explanation": "All angles are less than 90° and unequal."
  },
  {
    "id": 2644,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Competition",
    "prompt": "In triangle ABC, AB is extended through B to D. Angle CBD = 83° and angle A = 25°. Find angle C.",
    "options": [
      "60°",
      "57°",
      "59°",
      "58°",
      "56°"
    ],
    "answer": "D",
    "explanation": "Exterior angle CBD = angle A + angle C."
  },
  {
    "id": 2645,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Competition",
    "prompt": "The boundary of a figure contains one semicircular arc of radius 12 cm, two quarter-circle arcs of radius 24 cm, and straight portions totalling 48 cm. Its perimeter is (48 + kπ) cm. Find k.",
    "options": [
      "37",
      "35",
      "36",
      "34",
      "38"
    ],
    "answer": "C",
    "explanation": "Semicircle arc = 12π; two quarter-arcs total 24π, giving 36π."
  },
  {
    "id": 2646,
    "topic": "Isosceles angle cases",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle contains an angle of 39°. What are all possible values of its vertex angle?",
    "options": [
      "141/2° only",
      "No possible value",
      "39° and 102°",
      "39° only",
      "102° only"
    ],
    "answer": "C",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2647,
    "topic": "Polygons and symmetry",
    "difficulty": "Competition",
    "prompt": "A regular 14-sided polygon has how many lines of symmetry?",
    "options": [
      "16",
      "14",
      "12",
      "15",
      "13"
    ],
    "answer": "B",
    "explanation": "A regular polygon has as many symmetry lines as sides."
  },
  {
    "id": 2648,
    "topic": "Irregular perimeter",
    "difficulty": "Competition",
    "prompt": "A 24 cm by 19 cm rectangle has a 3 cm wide, 5 cm deep rectangular notch cut from the middle of its top side. Find the new perimeter.",
    "options": [
      "98 cm",
      "94 cm",
      "97 cm",
      "95 cm",
      "96 cm"
    ],
    "answer": "E",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2649,
    "topic": "Cylinder volume",
    "difficulty": "Competition",
    "prompt": "A solid half-cylinder has radius 11 cm and length 15 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "1811/2",
      "1815/2",
      "1813/2",
      "1817/2",
      "1819/2"
    ],
    "answer": "B",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2650,
    "topic": "Volume and scaling",
    "difficulty": "Competition",
    "prompt": "A hemispherical bowl has internal radius 9 cm. Use V = (2/3)πr³. Its capacity is kπ cm³. Find k.",
    "options": [
      "488",
      "485",
      "484",
      "486",
      "487"
    ],
    "answer": "D",
    "explanation": "Substitute the radius in the supplied hemisphere formula."
  },
  {
    "id": 2651,
    "topic": "Sets and overlap",
    "difficulty": "Competition",
    "prompt": "Set A = integers 1 to 18, set B = integers 4 to 22, and set C = integers 7 to 20. How many numbers belong to A or B (or both), but not C?",
    "options": [
      "8",
      "7",
      "9",
      "10",
      "6"
    ],
    "answer": "A",
    "explanation": "Form the union of A and B, then remove C."
  },
  {
    "id": 2652,
    "topic": "Number and letter sequences",
    "difficulty": "Competition",
    "prompt": "Continue both patterns: 10A, 13D, 16G, 19J, …",
    "options": [
      "21M",
      "22M",
      "20M",
      "23M",
      "24M"
    ],
    "answer": "B",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2653,
    "topic": "Family relationships",
    "difficulty": "Competition",
    "prompt": "Femi has 9 cousins. Ada is the daughter of Femi’s father’s only sister. What is Ada’s relationship to Femi?",
    "options": [
      "Mother",
      "Sister",
      "Niece",
      "Aunt",
      "Cousin"
    ],
    "answer": "E",
    "explanation": "A parent’s sibling’s child is a cousin."
  },
  {
    "id": 2654,
    "topic": "Paper folding",
    "difficulty": "Competition",
    "prompt": "A sheet is folded in half 3 times. Then 3 separate holes are punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "25",
      "26",
      "23",
      "22",
      "24"
    ],
    "answer": "E",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2655,
    "topic": "Sibling equations",
    "difficulty": "Competition",
    "prompt": "In a family, each girl has 10 brothers. Every boy has as many brothers as sisters. If every child writes down the name of each of their siblings once, how many names are written altogether?",
    "options": [
      "344",
      "343",
      "340",
      "342",
      "341"
    ],
    "answer": "D",
    "explanation": "B = 10; B − 1 = G, so G = 9 and total children = 19. Each of these children lists all the other children."
  },
  {
    "id": 2656,
    "topic": "Number-row rules",
    "difficulty": "Competition",
    "prompt": "For each row, result = first × second + first − second. Find the missing result for first = 11, second = 13.",
    "options": [
      "139",
      "140",
      "143",
      "142",
      "141"
    ],
    "answer": "E",
    "explanation": "Substitute into the stated rule, completing multiplication before addition and subtraction."
  },
  {
    "id": 2657,
    "topic": "Calendar cycles",
    "difficulty": "Competition",
    "prompt": "What month is 5 months after October?",
    "options": [
      "May",
      "June",
      "March",
      "April",
      "July"
    ],
    "answer": "C",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2658,
    "topic": "Direction and turns",
    "difficulty": "Competition",
    "prompt": "A pupil faces east and makes these quarter-turns in order: right, left, left, right, left. Which direction is the pupil now facing?",
    "options": [
      "North",
      "East",
      "The starting direction cannot be known",
      "West",
      "South"
    ],
    "answer": "A",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2659,
    "topic": "Jug states",
    "difficulty": "Competition",
    "prompt": "A 23-litre jug is full and a 21-litre jug is empty. Fill the smaller from the larger, empty the smaller, pour the remainder of the larger into it, then refill the larger and top up the smaller. How many litres remain in the larger now?",
    "options": [
      "4 litres",
      "3 litres",
      "5 litres",
      "2 litres",
      "6 litres"
    ],
    "answer": "A",
    "explanation": "Record amounts after each pour. First remainder is 2 L; after the second topping-up, 4 L remain in the large jug."
  },
  {
    "id": 2660,
    "topic": "Number pyramids",
    "difficulty": "Competition",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 10, x, 13, 11, and the top entry is 96. Find x.",
    "options": [
      "10",
      "12",
      "11",
      "13",
      "14"
    ],
    "answer": "B",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2661,
    "topic": "Handshake counting",
    "difficulty": "Competition",
    "prompt": "There are 16 people at a meeting. Everyone shakes hands once with every other person except that two particular people do not shake hands with each other. How many handshakes occur?",
    "options": [
      "121",
      "117",
      "118",
      "120",
      "119"
    ],
    "answer": "E",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2662,
    "topic": "Multiplicative patterns",
    "difficulty": "Competition",
    "prompt": "Start at 10, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 10, 20, 60, 240, 1200.",
    "options": [
      "7200",
      "7201",
      "7202",
      "7199",
      "7198"
    ],
    "answer": "A",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2663,
    "topic": "Mirror clocks",
    "difficulty": "Competition",
    "prompt": "An ordinary 12-hour analogue clock shows 1:15. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "10:45",
      "11:15",
      "10:55",
      "11:45",
      "10:50"
    ],
    "answer": "A",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2664,
    "topic": "Gear ratios",
    "difficulty": "Competition",
    "prompt": "A 30-tooth gear drives a 60-tooth idler, which drives another 30-tooth gear. The first makes 10 turns. How many turns does the last gear make?",
    "options": [
      "10",
      "12",
      "8",
      "9",
      "11"
    ],
    "answer": "A",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2665,
    "topic": "Adjacency constraints",
    "difficulty": "Competition",
    "prompt": "Place 9, 10, 11, 12, 13 once each in a row. Sums of neighbouring cells from left to right are 25, 22, 19, 21. What is the middle number?",
    "options": [
      "11",
      "8",
      "10",
      "7",
      "9"
    ],
    "answer": "E",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2666,
    "topic": "Cube faces and adjacency",
    "difficulty": "Competition",
    "prompt": "A cube has faces labelled 10, 11, 12, 13, 14, 15. Face 10 shares an edge with faces 11, 12, 13, 14. Which face is opposite 10?",
    "options": [
      "15",
      "17",
      "13",
      "16",
      "14"
    ],
    "answer": "A",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2667,
    "topic": "Truth and falsehood",
    "difficulty": "Competition",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 9. Ayo says “The token is with Bisi.” Bisi says “The token is not with me.” Chika says “The token is not with Ayo.” Exactly one statement is true. Who has the token?",
    "options": [
      "Chika",
      "Bisi",
      "Cannot be determined",
      "None of them",
      "Ayo"
    ],
    "answer": "E",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2668,
    "topic": "Ordering constraints",
    "difficulty": "Competition",
    "prompt": "Five pupils have different ranks 1 to 5, with 1 highest. Efe is above Ayo; Ayo is above Dara; Dara is above Bisi; Bisi is above Chika. Who is ranked 2?",
    "options": [
      "Bisi",
      "Ayo",
      "Efe",
      "Chika",
      "Dara"
    ],
    "answer": "B",
    "explanation": "Combine the comparisons into one complete order, then read the requested position."
  },
  {
    "id": 2669,
    "topic": "Minimum swaps",
    "difficulty": "Competition",
    "prompt": "What is the minimum number of swaps of any two positions needed to change BCFEDA into ABCDEF?",
    "options": [
      "2",
      "5",
      "6",
      "3",
      "4"
    ],
    "answer": "E",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2670,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Competition",
    "prompt": "A 20 by 20 checkerboard has its top-left and bottom-right corner squares removed. How many complete coverings by 1 by 2 dominoes are possible?",
    "options": [
      "-2",
      "1",
      "0",
      "2",
      "-1"
    ],
    "answer": "C",
    "explanation": "The removed corners have the same colour. Dominoes always cover one square of each colour, so no covering exists."
  },
  {
    "id": 2671,
    "topic": "Division constraints",
    "difficulty": "Competition",
    "prompt": "Choose different integers A and B from 1 to 15. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "28",
      "30",
      "32",
      "31",
      "29"
    ],
    "answer": "B",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2672,
    "topic": "Missing-number diagrams",
    "difficulty": "Competition",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 11, right number is 13, and bottom number is 15. What is the centre?",
    "options": [
      "128",
      "129",
      "127",
      "126",
      "130"
    ],
    "answer": "A",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2673,
    "topic": "Addition tables",
    "difficulty": "Competition",
    "prompt": "In a 2 by 2 addition table, each cell is its row heading plus its column heading. The top-left, top-right and bottom-left cells are 26, 33 and 31. Find the bottom-right cell.",
    "options": [
      "37",
      "40",
      "39",
      "36",
      "38"
    ],
    "answer": "E",
    "explanation": "Bottom-right = top-right + bottom-left − top-left."
  },
  {
    "id": 2674,
    "topic": "Unusual operations",
    "difficulty": "Competition",
    "prompt": "Define a ★ b = a² − b² and a ◆ b = a + b. Find (11 ★ 4) + 2 × (11 ◆ 4).",
    "options": [
      "133",
      "134",
      "137",
      "136",
      "135"
    ],
    "answer": "E",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2675,
    "topic": "Counting embedded squares",
    "difficulty": "Competition",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 4-row by 7-column grid shown?",
    "options": [
      "58",
      "62",
      "61",
      "60",
      "59"
    ],
    "answer": "D",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  },
  {
    "id": 2676,
    "topic": "Fractions and decimals",
    "difficulty": "Competition",
    "prompt": "Evaluate (1.3 + 3/5) × 5/2 − 1/4.",
    "options": [
      "9/2",
      "11/2",
      "13/2",
      "7/2",
      "5/2"
    ],
    "answer": "A",
    "explanation": "Convert the decimal to 13/10; apply brackets, multiplication and then subtraction where present."
  },
  {
    "id": 2677,
    "topic": "Income expenditure and savings",
    "difficulty": "Competition",
    "prompt": "A family earns ₦6000 and spends 80% of it. Income rises by 20%, while expenditure rises by 15% of its original amount. By what percentage do savings rise?",
    "options": [
      "38%",
      "42%",
      "40%",
      "39%",
      "41%"
    ],
    "answer": "C",
    "explanation": "Original savings = ₦1200; new savings = ₦1680. Increase/original savings × 100 = 40%."
  },
  {
    "id": 2678,
    "topic": "BODMAS powers and roots",
    "difficulty": "Competition",
    "prompt": "Evaluate (12 + 4)² − 3 × 12 + 24 ÷ 4.",
    "options": [
      "228",
      "226",
      "225",
      "224",
      "227"
    ],
    "answer": "B",
    "explanation": "Square the bracket first, complete multiplication and division, then add and subtract."
  },
  {
    "id": 2679,
    "topic": "Recurring decimals",
    "difficulty": "Competition",
    "prompt": "Express 0.5108108108… as a fraction in its lowest terms.",
    "options": [
      "-551/370",
      "189/370",
      "559/370",
      "929/370",
      "-181/370"
    ],
    "answer": "B",
    "explanation": "10x = 5 + 108/999, so x = 189/370."
  },
  {
    "id": 2680,
    "topic": "Metric conversion",
    "difficulty": "Competition",
    "prompt": "A ribbon is 50 cm long. Pieces of 90 mm and 0.5 dm are cut off. What length remains in millimetres?",
    "options": [
      "361 mm",
      "360 mm",
      "362 mm",
      "358 mm",
      "359 mm"
    ],
    "answer": "B",
    "explanation": "Convert all lengths to millimetres before subtracting."
  },
  {
    "id": 2681,
    "topic": "Divisibility",
    "difficulty": "Competition",
    "prompt": "The number 30d5 is divisible by both 5 and 9. Find the digit d.",
    "options": [
      "-1",
      "1",
      "0",
      "3",
      "2"
    ],
    "answer": "B",
    "explanation": "The digit sum must be divisible by 9. The only digit that works is 1."
  },
  {
    "id": 2682,
    "topic": "Ordering representations",
    "difficulty": "Competition",
    "prompt": "Find the difference between the greatest and least of 2, 9/4 and 2.1.",
    "options": [
      "-3/4",
      "-7/4",
      "5/4",
      "9/4",
      "1/4"
    ],
    "answer": "E",
    "explanation": "Greatest − least = 9/4 − 2 = 1/4."
  },
  {
    "id": 2683,
    "topic": "Decimal place value",
    "difficulty": "Competition",
    "prompt": "By how much does the value of the digit 4 exceed the value of the digit 7 in 12.4076?",
    "options": [
      "-607/1000",
      "-1607/1000",
      "393/1000",
      "2393/1000",
      "1393/1000"
    ],
    "answer": "C",
    "explanation": "4 tenths − 7 thousandths = 0.400 − 0.007 = 0.393."
  },
  {
    "id": 2684,
    "topic": "Maximising expressions",
    "difficulty": "Competition",
    "prompt": "Use each of 11, 13 and 16 once as A, B and C. Find the difference between the greatest and least possible values of A + B/C.",
    "options": [
      "769/176",
      "945/176",
      "593/176",
      "1297/176",
      "1121/176"
    ],
    "answer": "B",
    "explanation": "Evaluate the six possible arrangements; compare their exact fractions."
  },
  {
    "id": 2685,
    "topic": "Counting multiples",
    "difficulty": "Competition",
    "prompt": "How many positive integers below 420 are divisible by 5 or 6, or both?",
    "options": [
      "140",
      "141",
      "137",
      "139",
      "138"
    ],
    "answer": "D",
    "explanation": "Add the two multiple counts, then subtract the common multiples counted twice."
  },
  {
    "id": 2686,
    "topic": "Digits after division",
    "difficulty": "Competition",
    "prompt": "In the decimal expansion of 1/7, what is the digit in the 12th place after the decimal point?",
    "options": [
      "6",
      "7",
      "9",
      "5",
      "8"
    ],
    "answer": "B",
    "explanation": "The repeating block is 142857. Positions repeat every six digits."
  },
  {
    "id": 2687,
    "topic": "Digit reversal",
    "difficulty": "Competition",
    "prompt": "A three-digit number has tens digit 6, digit sum 15, and increases by 297 when reversed. What is the sum of its hundreds and units digits?",
    "options": [
      "7",
      "9",
      "11",
      "8",
      "10"
    ],
    "answer": "B",
    "explanation": "Reversed number − original number = 99 × (units digit − hundreds digit). Use the digit sum if needed."
  },
  {
    "id": 2688,
    "topic": "Last digits and trailing zeros",
    "difficulty": "Competition",
    "prompt": "How many zeros occur at the end of the integer 13 × 14 × … × 26?",
    "options": [
      "2",
      "5",
      "3",
      "6",
      "4"
    ],
    "answer": "E",
    "explanation": "Count factors of 2 and 5 in the product. Each pair gives one trailing zero."
  },
  {
    "id": 2689,
    "topic": "Signed numbers",
    "difficulty": "Competition",
    "prompt": "A temperature is −14°C. It rises by 23°C each hour for 3 hours, then falls by 10°C. What is the final temperature?",
    "options": [
      "44°C",
      "47°C",
      "43°C",
      "45°C",
      "46°C"
    ],
    "answer": "D",
    "explanation": "Start below zero, add the total rise, and subtract any final fall."
  },
  {
    "id": 2690,
    "topic": "LCM and events",
    "difficulty": "Competition",
    "prompt": "Two bells ring every 32 and 48 minutes, starting together now. Count all distinct ringing times after now up to and including their next simultaneous ringing.",
    "options": [
      "5",
      "6",
      "3",
      "2",
      "4"
    ],
    "answer": "E",
    "explanation": "The next shared time is LCM(32, 48) = 96 minutes. Merge the event times if requested."
  },
  {
    "id": 2691,
    "topic": "Systematic counting",
    "difficulty": "Competition",
    "prompt": "Using only the digits 0, 1, 3, 4, 6, 8, how many two-digit even numbers can be made without repeating a digit?",
    "options": [
      "19",
      "17",
      "18",
      "16",
      "15"
    ],
    "answer": "B",
    "explanation": "List possible nonzero tens digits, then count allowed units digits for each."
  },
  {
    "id": 2692,
    "topic": "Ratio and unitary method",
    "difficulty": "Competition",
    "prompt": "Flour and sugar are in the ratio 5:3. Flour weighs 28 kg more than sugar. Find the mass of sugar.",
    "options": [
      "41 kg",
      "44 kg",
      "40 kg",
      "42 kg",
      "43 kg"
    ],
    "answer": "D",
    "explanation": "One ratio part is 14 kg. Sugar is 3 parts."
  },
  {
    "id": 2693,
    "topic": "Linear growth",
    "difficulty": "Competition",
    "prompt": "A stack of 4 nested cups is 28 cm high, and a stack of 7 is 37 cm high. What is the greatest number of cups in a stack no higher than 57 cm?",
    "options": [
      "12",
      "15",
      "13",
      "14",
      "11"
    ],
    "answer": "C",
    "explanation": "Each added cup contributes 3 cm. One cup is 19 cm high; height for k cups = 19 + (k − 1) × 3."
  },
  {
    "id": 2694,
    "topic": "Powers and square roots",
    "difficulty": "Competition",
    "prompt": "What is the smallest positive whole number that must multiply 2028 to make a perfect square?",
    "options": [
      "1",
      "4",
      "5",
      "3",
      "2"
    ],
    "answer": "D",
    "explanation": "2028 = 3 × (26)², so multiply by 3."
  },
  {
    "id": 2695,
    "topic": "HCF tiling and intersections",
    "difficulty": "Competition",
    "prompt": "A 78 cm by 104 cm rectangle is tiled with the largest possible equal square tiles. How many tile-grid intersections are there, including boundary intersections?",
    "options": [
      "22",
      "20",
      "19",
      "21",
      "18"
    ],
    "answer": "B",
    "explanation": "Largest tile side = HCF(78, 104) = 26 cm. The grid is 3 by 4 tiles."
  },
  {
    "id": 2696,
    "topic": "Means and removed values",
    "difficulty": "Competition",
    "prompt": "The mean age of 7 pupils is 22 years. Two pupils of equal age leave, and the remaining mean is 21 years. How old is each pupil who left?",
    "options": [
      "47/2 years",
      "49/2 years",
      "51/2 years",
      "45/2 years",
      "53/2 years"
    ],
    "answer": "B",
    "explanation": "Subtract the remaining total from the original total and divide by 2."
  },
  {
    "id": 2697,
    "topic": "Parity",
    "difficulty": "Competition",
    "prompt": "For every odd integer n greater than 10, which expression is always odd?",
    "options": [
      "n(n + 1)",
      "n² + 1",
      "n² + 2n",
      "2n²",
      "n + 3"
    ],
    "answer": "C",
    "explanation": "Odd squared is odd; adding an even term keeps it odd."
  },
  {
    "id": 2698,
    "topic": "Estimation",
    "difficulty": "Competition",
    "prompt": "Estimate 298 × 59 by rounding each factor to the nearest ten before multiplying.",
    "options": [
      "18001",
      "17998",
      "18000",
      "17999",
      "18002"
    ],
    "answer": "C",
    "explanation": "Round each factor separately, then multiply the rounded values."
  },
  {
    "id": 2699,
    "topic": "Clock loss and elapsed time",
    "difficulty": "Competition",
    "prompt": "A clock is correct at 8:00 a.m. It loses 12 minutes per real hour. How many minutes slow is it after 7 real hours?",
    "options": [
      "83 minutes",
      "86 minutes",
      "84 minutes",
      "82 minutes",
      "85 minutes"
    ],
    "answer": "C",
    "explanation": "Multiply loss per real hour by real elapsed hours."
  },
  {
    "id": 2700,
    "topic": "Fractions on number lines",
    "difficulty": "Competition",
    "prompt": "The interval from 1/3 to 5/6 is divided into 16 equal intervals. What number is at the 4th tick after 1/3?",
    "options": [
      "-37/24",
      "59/24",
      "-13/24",
      "35/24",
      "11/24"
    ],
    "answer": "E",
    "explanation": "Interval length = (5/6 − 1/3)/16; add 4 such intervals to 1/3."
  },
  {
    "id": 2701,
    "topic": "Number machines",
    "difficulty": "Competition",
    "prompt": "A machine multiplies its input by 4, adds 15, multiplies by 4, then subtracts 7. Its output is 245. What was the input?",
    "options": [
      "12",
      "11",
      "14",
      "10",
      "13"
    ],
    "answer": "A",
    "explanation": "The rule is output = (4x + 15) × 4 − 7. Substitute or undo the operations in reverse order."
  },
  {
    "id": 2702,
    "topic": "Equations",
    "difficulty": "Competition",
    "prompt": "Solve (3x + 10)/(2x + 23) = 1.",
    "options": [
      "14",
      "11",
      "15",
      "13",
      "12"
    ],
    "answer": "D",
    "explanation": "3x + 10 = 2x + 23; hence x = 13. The denominator is nonzero at this value."
  },
  {
    "id": 2703,
    "topic": "Roman numerals",
    "difficulty": "Competition",
    "prompt": "Evaluate (XCVI ÷ III) + IV. Give the answer in Roman numerals.",
    "options": [
      "XXXIII",
      "XXXVI",
      "XXXVII",
      "XXXIV",
      "XXXV"
    ],
    "answer": "B",
    "explanation": "96/3 + 4 = 36, written XXXVI."
  },
  {
    "id": 2704,
    "topic": "Factor pairs and minimum sum",
    "difficulty": "Competition",
    "prompt": "Two positive integers have product 360. What is their smallest possible sum?",
    "options": [
      "36",
      "39",
      "37",
      "40",
      "38"
    ],
    "answer": "E",
    "explanation": "Test factor pairs nearest √360: 18 and 20 give the minimum sum, 38."
  },
  {
    "id": 2705,
    "topic": "Median",
    "difficulty": "Competition",
    "prompt": "The ordered list 16, 18, x, 22, 26, 28 has median 21. Find x.",
    "options": [
      "18",
      "22",
      "21",
      "20",
      "19"
    ],
    "answer": "D",
    "explanation": "The middle pair is x and 22. Their mean is 21; solve for x."
  },
  {
    "id": 2706,
    "topic": "Speed distance and time",
    "difficulty": "Competition",
    "prompt": "A bus covers 320 km at 80 km/h. How many hours would the same trip take at 75 km/h?",
    "options": [
      "34/15 hours",
      "79/15 hours",
      "49/15 hours",
      "94/15 hours",
      "64/15 hours"
    ],
    "answer": "E",
    "explanation": "Time = distance/new speed = 320/75 hours."
  },
  {
    "id": 2707,
    "topic": "Simple interest",
    "difficulty": "Competition",
    "prompt": "A sum earns ₦600 simple interest at 5% per year for 4 years. Find the principal.",
    "options": [
      "3000 naira",
      "3002 naira",
      "2999 naira",
      "2998 naira",
      "3001 naira"
    ],
    "answer": "A",
    "explanation": "Use interest = principal × rate × time / 100; rearrange if principal is unknown."
  },
  {
    "id": 2708,
    "topic": "Ages",
    "difficulty": "Competition",
    "prompt": "A parent is 4 times as old as a child. Their ages differ by 54 years. What is the sum of their ages?",
    "options": [
      "90 years",
      "88 years",
      "92 years",
      "89 years",
      "91 years"
    ],
    "answer": "A",
    "explanation": "3 age-parts = 54; child = 18, parent = 72."
  },
  {
    "id": 2709,
    "topic": "Telescoping products",
    "difficulty": "Competition",
    "prompt": "Evaluate (2/3) × (3/4) × … × (14/15) × (16/17).",
    "options": [
      "287/255",
      "-478/255",
      "-223/255",
      "32/255",
      "542/255"
    ],
    "answer": "D",
    "explanation": "The consecutive section cancels to 2/15; multiply the final fraction."
  },
  {
    "id": 2710,
    "topic": "Reverse and successive percentages",
    "difficulty": "Competition",
    "prompt": "A price of ₦400 rises by 10% and then falls by 10% of the new price. Find the final price.",
    "options": [
      "398",
      "397",
      "394",
      "396",
      "395"
    ],
    "answer": "D",
    "explanation": "Multiply the original price by 1.10 × 0.90 = 0.99."
  },
  {
    "id": 2711,
    "topic": "Composite areas",
    "difficulty": "Competition",
    "prompt": "A 32 cm by 18 cm rectangle has a 3 cm by 5 cm rectangle removed from its top-right corner. Find the remaining area.",
    "options": [
      "559 cm²",
      "562 cm²",
      "561 cm²",
      "563 cm²",
      "560 cm²"
    ],
    "answer": "C",
    "explanation": "Subtract the area of the removed corner from the full rectangle."
  },
  {
    "id": 2712,
    "topic": "Triangle angles",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle has each base angle equal to 35°. Find its exterior angle adjacent to the vertex angle.",
    "options": [
      "71°",
      "72°",
      "69°",
      "70°",
      "68°"
    ],
    "answer": "D",
    "explanation": "Triangle angles total 180°; an exterior angle equals the sum of the two opposite interior angles."
  },
  {
    "id": 2713,
    "topic": "Rectangle perimeter and area",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 68 cm. Its length exceeds its width by 6 cm. Find its area.",
    "options": [
      "278 cm²",
      "282 cm²",
      "281 cm²",
      "279 cm²",
      "280 cm²"
    ],
    "answer": "E",
    "explanation": "L + W = 34; dimensions are 20 cm and 14 cm."
  },
  {
    "id": 2714,
    "topic": "Circles equal radii and area ratios",
    "difficulty": "Competition",
    "prompt": "A small circle has radius 1/13 of a larger circle. What fraction of the larger circle is covered by the smaller one?",
    "options": [
      "170/169",
      "1/169",
      "-168/169",
      "339/169",
      "-337/169"
    ],
    "answer": "B",
    "explanation": "Area scales with the square of the radius ratio."
  },
  {
    "id": 2715,
    "topic": "Shortest distance",
    "difficulty": "Competition",
    "prompt": "A pupil walks 66 m east, 44 m north, then 33 m west. Find the straight-line distance from the starting point.",
    "options": [
      "54 m",
      "55 m",
      "57 m",
      "53 m",
      "56 m"
    ],
    "answer": "B",
    "explanation": "Find net horizontal and vertical displacement; use the 3–4–5 right-triangle relationship."
  },
  {
    "id": 2716,
    "topic": "Faces edges and vertices",
    "difficulty": "Competition",
    "prompt": "A prism has a 14-sided polygon as each base. How many vertices does it have?",
    "options": [
      "28",
      "27",
      "29",
      "30",
      "26"
    ],
    "answer": "A",
    "explanation": "Each of its two bases contributes n vertices."
  },
  {
    "id": 2717,
    "topic": "Painted cubes",
    "difficulty": "Competition",
    "prompt": "A cube is painted on all six outside faces and cut into 13 × 13 × 13 equal small cubes. How many small cubes have no painted faces?",
    "options": [
      "1332",
      "1330",
      "1333",
      "1331",
      "1329"
    ],
    "answer": "D",
    "explanation": "Only the internal (n − 2) × (n − 2) × (n − 2) cubes have no paint."
  },
  {
    "id": 2718,
    "topic": "Triangle classification",
    "difficulty": "Competition",
    "prompt": "A triangle has angles 45°, 70° and 65°. Which description is correct?",
    "options": [
      "Right isosceles",
      "Right scalene",
      "Acute scalene",
      "Acute equilateral",
      "Obtuse scalene"
    ],
    "answer": "C",
    "explanation": "All angles are less than 90° and unequal."
  },
  {
    "id": 2719,
    "topic": "Parallel lines and exterior angles",
    "difficulty": "Competition",
    "prompt": "In triangle ABC, AB is extended through B to D. Angle CBD = 85° and angle A = 25°. Find angle C.",
    "options": [
      "58°",
      "60°",
      "59°",
      "62°",
      "61°"
    ],
    "answer": "B",
    "explanation": "Exterior angle CBD = angle A + angle C."
  },
  {
    "id": 2720,
    "topic": "Circle arcs and perimeter",
    "difficulty": "Competition",
    "prompt": "The boundary of a figure contains one semicircular arc of radius 13 cm, two quarter-circle arcs of radius 26 cm, and straight portions totalling 52 cm. Its perimeter is (52 + kπ) cm. Find k.",
    "options": [
      "40",
      "37",
      "41",
      "39",
      "38"
    ],
    "answer": "D",
    "explanation": "Semicircle arc = 13π; two quarter-arcs total 26π, giving 39π."
  },
  {
    "id": 2721,
    "topic": "Isosceles angle cases",
    "difficulty": "Competition",
    "prompt": "An isosceles triangle contains an angle of 40°. What are all possible values of its vertex angle?",
    "options": [
      "40° and 100°",
      "40° only",
      "70° only",
      "100° only",
      "No possible value"
    ],
    "answer": "A",
    "explanation": "Either the given angle is the vertex angle, or it is a base angle and the vertex is 180° minus twice that angle."
  },
  {
    "id": 2722,
    "topic": "Polygons and symmetry",
    "difficulty": "Competition",
    "prompt": "A regular 15-sided polygon has how many lines of symmetry?",
    "options": [
      "14",
      "16",
      "17",
      "15",
      "13"
    ],
    "answer": "D",
    "explanation": "A regular polygon has as many symmetry lines as sides."
  },
  {
    "id": 2723,
    "topic": "Irregular perimeter",
    "difficulty": "Competition",
    "prompt": "A 25 cm by 20 cm rectangle has a 4 cm wide, 6 cm deep rectangular notch cut from the middle of its top side. Find the new perimeter.",
    "options": [
      "104 cm",
      "101 cm",
      "102 cm",
      "103 cm",
      "100 cm"
    ],
    "answer": "C",
    "explanation": "Trace every boundary. A corner cut preserves perimeter; a middle notch adds twice its depth."
  },
  {
    "id": 2724,
    "topic": "Cylinder volume",
    "difficulty": "Competition",
    "prompt": "A solid half-cylinder has radius 12 cm and length 16 cm. Its volume is kπ cm³. Find k.",
    "options": [
      "1151",
      "1150",
      "1154",
      "1152",
      "1153"
    ],
    "answer": "D",
    "explanation": "Half-cylinder volume = (1/2) × π × radius² × length."
  },
  {
    "id": 2725,
    "topic": "Volume and scaling",
    "difficulty": "Competition",
    "prompt": "A hemispherical bowl has internal radius 10 cm. Use V = (2/3)πr³. Its capacity is kπ cm³. Find k.",
    "options": [
      "1994/3",
      "2003/3",
      "2000/3",
      "2006/3",
      "1997/3"
    ],
    "answer": "C",
    "explanation": "Substitute the radius in the supplied hemisphere formula."
  },
  {
    "id": 2726,
    "topic": "Sets and overlap",
    "difficulty": "Competition",
    "prompt": "Set A = integers 1 to 19, set B = integers 4 to 23, and set C = integers 7 to 21. How many numbers belong to A or B (or both), but not C?",
    "options": [
      "9",
      "7",
      "10",
      "6",
      "8"
    ],
    "answer": "E",
    "explanation": "Form the union of A and B, then remove C."
  },
  {
    "id": 2727,
    "topic": "Number and letter sequences",
    "difficulty": "Competition",
    "prompt": "Continue both patterns: 11A, 14D, 17G, 20J, …",
    "options": [
      "22M",
      "21M",
      "23M",
      "25M",
      "24M"
    ],
    "answer": "C",
    "explanation": "Numbers increase by a fixed step; letters move forward by the same number of alphabet places each time."
  },
  {
    "id": 2728,
    "topic": "Family relationships",
    "difficulty": "Competition",
    "prompt": "Femi has 10 cousins. Ada is the daughter of Femi’s father’s only sister. What is Ada’s relationship to Femi?",
    "options": [
      "Sister",
      "Cousin",
      "Niece",
      "Aunt",
      "Mother"
    ],
    "answer": "B",
    "explanation": "A parent’s sibling’s child is a cousin."
  },
  {
    "id": 2729,
    "topic": "Paper folding",
    "difficulty": "Competition",
    "prompt": "A sheet is folded in half 1 times. Then 4 separate holes are punched through all layers, away from every fold and edge. Assume all holes are distinct when unfolded. How many holes appear?",
    "options": [
      "6",
      "9",
      "10",
      "8",
      "7"
    ],
    "answer": "D",
    "explanation": "Each fold doubles the layers; multiply the number of punches by 2 to the number of folds."
  },
  {
    "id": 2730,
    "topic": "Sibling equations",
    "difficulty": "Competition",
    "prompt": "In a family, each girl has 11 brothers. Every boy has as many brothers as sisters. If every child writes down the name of each of their siblings once, how many names are written altogether?",
    "options": [
      "419",
      "418",
      "422",
      "420",
      "421"
    ],
    "answer": "D",
    "explanation": "B = 11; B − 1 = G, so G = 10 and total children = 21. Each of these children lists all the other children."
  },
  {
    "id": 2731,
    "topic": "Balance equations",
    "difficulty": "Competition",
    "prompt": "Three circles balance one circle and one triangle. Two triangles balance one square and one circle. A circle has mass 10 g. Find the mass of a square.",
    "options": [
      "29 g",
      "30 g",
      "32 g",
      "31 g",
      "28 g"
    ],
    "answer": "B",
    "explanation": "First, triangle = 2 circles = 20 g. Then square = 2 triangles − circle = 30 g."
  },
  {
    "id": 2732,
    "topic": "Calendar cycles",
    "difficulty": "Competition",
    "prompt": "What month is 5 months after November?",
    "options": [
      "August",
      "May",
      "July",
      "June",
      "April"
    ],
    "answer": "E",
    "explanation": "Move forward the stated number of months, wrapping from December to January."
  },
  {
    "id": 2733,
    "topic": "Direction and turns",
    "difficulty": "Competition",
    "prompt": "A pupil faces south and makes these quarter-turns in order: left, right, left, right, left. Which direction is the pupil now facing?",
    "options": [
      "West",
      "East",
      "South",
      "North",
      "The starting direction cannot be known"
    ],
    "answer": "B",
    "explanation": "Update the facing direction after every turn."
  },
  {
    "id": 2734,
    "topic": "Jug states",
    "difficulty": "Competition",
    "prompt": "A 25-litre jug is full and a 23-litre jug is empty. Fill the smaller from the larger, empty the smaller, pour the remainder of the larger into it, then refill the larger and top up the smaller. How many litres remain in the larger now?",
    "options": [
      "6 litres",
      "3 litres",
      "4 litres",
      "2 litres",
      "5 litres"
    ],
    "answer": "C",
    "explanation": "Record amounts after each pour. First remainder is 2 L; after the second topping-up, 4 L remain in the large jug."
  },
  {
    "id": 2735,
    "topic": "Number pyramids",
    "difficulty": "Competition",
    "prompt": "In an addition pyramid, each entry is the sum of the two directly below it. The bottom row is 11, x, 14, 12, and the top entry is 104. Find x.",
    "options": [
      "12",
      "13",
      "15",
      "14",
      "11"
    ],
    "answer": "B",
    "explanation": "For bottom entries a, b, c, d the top is a + 3b + 3c + d."
  },
  {
    "id": 2736,
    "topic": "Handshake counting",
    "difficulty": "Competition",
    "prompt": "There are 17 people at a meeting. Everyone shakes hands once with every other person except that two particular people do not shake hands with each other. How many handshakes occur?",
    "options": [
      "134",
      "136",
      "137",
      "133",
      "135"
    ],
    "answer": "E",
    "explanation": "Count unordered pairs using n(n − 1)/2; subtract the one excluded pair if applicable."
  },
  {
    "id": 2737,
    "topic": "Multiplicative patterns",
    "difficulty": "Competition",
    "prompt": "Start at 11, then multiply successively by 2, 3, 4, 5, 6, … . Find the term after 11, 22, 66, 264, 1320.",
    "options": [
      "7921",
      "7920",
      "7922",
      "7918",
      "7919"
    ],
    "answer": "B",
    "explanation": "The next multiplier is 6."
  },
  {
    "id": 2738,
    "topic": "Mirror clocks",
    "difficulty": "Competition",
    "prompt": "An ordinary 12-hour analogue clock shows 2:20. What time would its reflection in a vertical mirror appear to show?",
    "options": [
      "10:40",
      "9:45",
      "9:40",
      "9:50",
      "10:10"
    ],
    "answer": "C",
    "explanation": "Subtract the actual time from 12:00, treating 12:00 as zero modulo 12 hours."
  },
  {
    "id": 2739,
    "topic": "Gear ratios",
    "difficulty": "Competition",
    "prompt": "A 32-tooth gear drives a 64-tooth idler, which drives another 32-tooth gear. The first makes 10 turns. How many turns does the last gear make?",
    "options": [
      "11",
      "10",
      "8",
      "12",
      "9"
    ],
    "answer": "B",
    "explanation": "Teeth × rotations is constant between meshing gears; the middle gear cancels in a chain."
  },
  {
    "id": 2740,
    "topic": "Adjacency constraints",
    "difficulty": "Competition",
    "prompt": "Place 10, 11, 12, 13, 14 once each in a row. Sums of neighbouring cells from left to right are 22, 24, 27, 24. What is the middle number?",
    "options": [
      "16",
      "14",
      "12",
      "15",
      "13"
    ],
    "answer": "B",
    "explanation": "Use each adjacent sum to express the next cell in terms of the previous cell; reject repeated or out-of-range entries."
  },
  {
    "id": 2741,
    "topic": "Cube faces and adjacency",
    "difficulty": "Competition",
    "prompt": "A cube has faces labelled 11, 12, 13, 14, 15, 16. Face 11 shares an edge with faces 12, 13, 14, 15. Which face is opposite 11?",
    "options": [
      "18",
      "15",
      "16",
      "17",
      "14"
    ],
    "answer": "C",
    "explanation": "A face has four neighbours; the one remaining face is opposite."
  },
  {
    "id": 2742,
    "topic": "Truth and falsehood",
    "difficulty": "Competition",
    "prompt": "One of Ayo, Bisi and Chika holds a token numbered 10. Ayo says “The token is not with me.” Bisi says “The token is with Ayo.” Chika says “The token is not with me.” Exactly one statement is true. Who has the token?",
    "options": [
      "Ayo",
      "Cannot be determined",
      "Chika",
      "None of them",
      "Bisi"
    ],
    "answer": "C",
    "explanation": "Test each possible holder and retain only the case with exactly one true statement."
  },
  {
    "id": 2743,
    "topic": "Ordering constraints",
    "difficulty": "Competition",
    "prompt": "Five pupils have different ranks 1 to 5, with 1 highest. Chika is above Bisi; Bisi is above Ayo; Ayo is above Efe; Efe is above Dara. Who is ranked 3?",
    "options": [
      "Chika",
      "Ayo",
      "Dara",
      "Efe",
      "Bisi"
    ],
    "answer": "B",
    "explanation": "Combine the comparisons into one complete order, then read the requested position."
  },
  {
    "id": 2744,
    "topic": "Minimum swaps",
    "difficulty": "Competition",
    "prompt": "What is the minimum number of swaps of any two positions needed to change DCEFAB into ABCDEF?",
    "options": [
      "7",
      "5",
      "4",
      "3",
      "6"
    ],
    "answer": "B",
    "explanation": "Break the permutation into cycles; a cycle of length k takes k − 1 swaps."
  },
  {
    "id": 2745,
    "topic": "Spatial construction and dominoes",
    "difficulty": "Competition",
    "prompt": "A 22 by 22 checkerboard has its top-left and bottom-right corner squares removed. How many complete coverings by 1 by 2 dominoes are possible?",
    "options": [
      "-1",
      "0",
      "-2",
      "1",
      "2"
    ],
    "answer": "B",
    "explanation": "The removed corners have the same colour. Dominoes always cover one square of each colour, so no covering exists."
  },
  {
    "id": 2746,
    "topic": "Division constraints",
    "difficulty": "Competition",
    "prompt": "Choose different integers A and B from 1 to 16. How many ordered pairs (A, B) make A ÷ B a whole number?",
    "options": [
      "32",
      "36",
      "35",
      "34",
      "33"
    ],
    "answer": "D",
    "explanation": "For each denominator B, count its multiples A up to the limit, excluding A = B."
  },
  {
    "id": 2747,
    "topic": "Missing-number diagrams",
    "difficulty": "Competition",
    "prompt": "A triangle puzzle uses the rule centre = left × right − bottom. Its left number is 12, right number is 14, and bottom number is 16. What is the centre?",
    "options": [
      "151",
      "153",
      "150",
      "152",
      "154"
    ],
    "answer": "D",
    "explanation": "Apply the given relationship: multiply the left and right values, then subtract the bottom value."
  },
  {
    "id": 2748,
    "topic": "Addition tables",
    "difficulty": "Competition",
    "prompt": "In a 2 by 2 addition table, each cell is its row heading plus its column heading. The top-left, top-right and bottom-left cells are 28, 35 and 33. Find the bottom-right cell.",
    "options": [
      "41",
      "38",
      "40",
      "42",
      "39"
    ],
    "answer": "C",
    "explanation": "Bottom-right = top-right + bottom-left − top-left."
  },
  {
    "id": 2749,
    "topic": "Unusual operations",
    "difficulty": "Competition",
    "prompt": "Define a ★ b = a² − b² and a ◆ b = a + b. Find (12 ★ 5) + 3 × (12 ◆ 5).",
    "options": [
      "169",
      "172",
      "170",
      "168",
      "171"
    ],
    "answer": "C",
    "explanation": "Replace every symbol by its definition before calculating."
  },
  {
    "id": 2750,
    "topic": "Counting embedded squares",
    "difficulty": "Competition",
    "prompt": "How many squares of all sizes have sides along the grid lines in the 5-row by 6-column grid shown?",
    "options": [
      "71",
      "68",
      "72",
      "70",
      "69"
    ],
    "answer": "D",
    "explanation": "For side length k, count (rows − k + 1)(columns − k + 1), then add over all possible k."
  }
];
