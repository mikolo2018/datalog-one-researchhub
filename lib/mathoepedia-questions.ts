import { sharedCompetitionQuestions } from './mathoepedia-shared-competition-questions';

export type Difficulty = 'Foundation' | 'Bridge' | 'Competition';
export type MathoepediaQuestion = { id: number; topic: string; difficulty: Difficulty; prompt: string; options: string[]; answer: string; explanation: string };

export const mathoepediaQuestions: MathoepediaQuestion[] = [
  {id:1,topic:'Number sense',difficulty:'Foundation',prompt:'What is the value of the digit 7 in 4,782,315?',options:['7,000','70,000','700,000','700'],answer:'C',explanation:'The 7 is in the hundred-thousands place, so its value is 700,000.'},
  {id:2,topic:'Number sense',difficulty:'Bridge',prompt:'Round 684,951 to the nearest ten thousand.',options:['680,000','685,000','690,000','700,000'],answer:'A',explanation:'The thousands digit is 4, so the ten-thousands digit stays 8.'},
  {id:3,topic:'Number sense',difficulty:'Competition',prompt:'A number gives quotient 37 remainder 5 when divided by 8. What is the number?',options:['291','296','301','309'],answer:'C',explanation:'Number = 8 × 37 + 5 = 301.'},
  {id:4,topic:'Number sense',difficulty:'Competition',prompt:'Which number is exactly halfway between 38,475 and 52,925?',options:['45,600','45,700','45,800','45,900'],answer:'B',explanation:'Add the numbers and divide by 2: 91,400 ÷ 2 = 45,700.'},

  {id:5,topic:'Factors & multiples',difficulty:'Foundation',prompt:'Which number is a factor of 84?',options:['5','7','9','11'],answer:'B',explanation:'84 ÷ 7 = 12 exactly.'},
  {id:6,topic:'Factors & multiples',difficulty:'Bridge',prompt:'Find the HCF of 36 and 54.',options:['6','9','18','27'],answer:'C',explanation:'The greatest common factor is 18.'},
  {id:7,topic:'Factors & multiples',difficulty:'Bridge',prompt:'Find the LCM of 12 and 18.',options:['24','30','36','72'],answer:'C',explanation:'36 is the smallest number divisible by both 12 and 18.'},
  {id:8,topic:'Factors & multiples',difficulty:'Competition',prompt:'Two bells ring every 18 minutes and 24 minutes. If they ring together at 8:00 a.m., when will they next ring together?',options:['8:42 a.m.','8:48 a.m.','9:00 a.m.','9:12 a.m.'],answer:'D',explanation:'LCM(18,24) = 72 minutes, so the next time is 9:12 a.m.'},

  {id:9,topic:'Fractions & decimals',difficulty:'Foundation',prompt:'Write 0.375 as a fraction in its simplest form.',options:['3/5','3/8','5/8','375/10'],answer:'B',explanation:'0.375 = 375/1000 = 3/8.'},
  {id:10,topic:'Fractions & decimals',difficulty:'Bridge',prompt:'Which is greatest: 5/8, 0.61, 62%, or 3/5?',options:['5/8','0.61','62%','3/5'],answer:'A',explanation:'5/8 = 0.625, which is greater than 0.62, 0.61 and 0.60.'},
  {id:11,topic:'Fractions & decimals',difficulty:'Bridge',prompt:'Calculate 2 1/4 − 5/8.',options:['1 3/8','1 5/8','1 7/8','2 3/8'],answer:'B',explanation:'2 1/4 = 18/8; 18/8 − 5/8 = 13/8 = 1 5/8.'},
  {id:12,topic:'Fractions & decimals',difficulty:'Competition',prompt:'A tank is 3/5 full. After 24 litres are added, it is 3/4 full. What is the capacity?',options:['120 L','140 L','160 L','180 L'],answer:'C',explanation:'The increase is 3/4 − 3/5 = 3/20. If 3/20 is 24 L, the full capacity is 160 L.'},

  {id:13,topic:'Percentages & ratio',difficulty:'Foundation',prompt:'A pupil earns ₦1,000 and spends 75%. How much is saved?',options:['₦150','₦200','₦250','₦750'],answer:'C',explanation:'25% is saved, and 25% of ₦1,000 is ₦250.'},
  {id:14,topic:'Percentages & ratio',difficulty:'Bridge',prompt:'Flour and sugar are mixed in the ratio 5:2. How much sugar is needed for 35 kg of flour?',options:['10 kg','12 kg','14 kg','17.5 kg'],answer:'C',explanation:'35 kg represents 5 parts, so 1 part is 7 kg and 2 parts is 14 kg.'},
  {id:15,topic:'Percentages & ratio',difficulty:'Bridge',prompt:'A bag costs ₦1,600. Its price rises by 20%, then the new price is reduced by 25%. What is the final price?',options:['₦1,440','₦1,500','₦1,600','₦1,920'],answer:'A',explanation:'₦1,600 × 1.20 × 0.75 = ₦1,440.'},
  {id:16,topic:'Percentages & ratio',difficulty:'Competition',prompt:'Income rises by 20% while spending rises by 10% of its original value. Originally, 75% of income was spent. By what percentage do savings increase?',options:['20%','30%','40%','50%'],answer:'D',explanation:'Let income be 100: saving is 25. New income is 120; new spending is 82.5; new saving is 37.5. Increase = 12.5/25 = 50%.'},

  {id:17,topic:'Algebra',difficulty:'Foundation',prompt:'If x = 3, find 4x − 3.',options:['8','9','10','11'],answer:'B',explanation:'4(3) − 3 = 12 − 3 = 9.'},
  {id:18,topic:'Algebra',difficulty:'Foundation',prompt:'Simplify 5x + 3x + 3.',options:['8x + 3','8x + 6','9x + 3','15x + 3'],answer:'A',explanation:'Combine the like terms 5x and 3x.'},
  {id:19,topic:'Algebra',difficulty:'Bridge',prompt:'Expand and simplify 5(2x − 3) + 4x.',options:['10x − 15','14x − 15','14x + 15','9x − 3'],answer:'B',explanation:'5(2x − 3) + 4x = 10x − 15 + 4x = 14x − 15.'},
  {id:20,topic:'Algebra',difficulty:'Competition',prompt:'A taxi charges ₦500 plus ₦150 per kilometre. Which expression gives the fare for k kilometres?',options:['500k + 150','150(k + 500)','500 + 150k','650k'],answer:'C',explanation:'The fixed fee is ₦500 and the distance charge is ₦150k.'},

  {id:21,topic:'Equations',difficulty:'Foundation',prompt:'Solve x + 9 = 17.',options:['6','7','8','9'],answer:'C',explanation:'Subtract 9 from both sides: x = 8.'},
  {id:22,topic:'Equations',difficulty:'Bridge',prompt:'Solve 3x + 5 = 26.',options:['5','6','7','8'],answer:'C',explanation:'3x = 21, so x = 7.'},
  {id:23,topic:'Equations',difficulty:'Bridge',prompt:'Three notebooks cost ₦450 each. Rulers cost ₦200 each. If the total is ₦1,750, how many rulers were bought?',options:['1','2','3','4'],answer:'B',explanation:'3(450) + 200r = 1,750, so 200r = 400 and r = 2.'},
  {id:24,topic:'Equations',difficulty:'Competition',prompt:'Solve 4(2x − 3) = 3x + 18.',options:['5','6','7','8'],answer:'B',explanation:'8x − 12 = 3x + 18; 5x = 30; x = 6.'},

  {id:25,topic:'Geometry & measure',difficulty:'Foundation',prompt:'Find the perimeter of a rectangle 18 m long and 11 m wide.',options:['29 m','58 m','99 m','198 m'],answer:'B',explanation:'Perimeter = 2(18 + 11) = 58 m.'},
  {id:26,topic:'Geometry & measure',difficulty:'Bridge',prompt:'A 2 m gate is left in a 58 m rectangular boundary. Three rows of wire are used. How much wire is needed?',options:['112 m','168 m','174 m','180 m'],answer:'B',explanation:'Fence length per row is 58 − 2 = 56 m; three rows require 168 m.'},
  {id:27,topic:'Geometry & measure',difficulty:'Bridge',prompt:'A rectangle has length x + 5 cm and width 4 cm. Which expression gives its perimeter?',options:['2x + 9','2x + 13','2x + 18','4x + 18'],answer:'C',explanation:'P = 2[(x + 5) + 4] = 2x + 18.'},
  {id:28,topic:'Geometry & measure',difficulty:'Competition',prompt:'The area of a square is 324 cm². A rectangle has the same perimeter and width 12 cm. Find its length.',options:['18 cm','20 cm','24 cm','30 cm'],answer:'C',explanation:'Square side is 18 cm, perimeter is 72 cm. For the rectangle, 2(L + 12) = 72, so L = 24 cm.'},

  {id:29,topic:'Rates, time & data',difficulty:'Foundation',prompt:'What is −7 + 12?',options:['−19','−5','5','19'],answer:'C',explanation:'Moving 12 steps right from −7 lands at 5.'},
  {id:30,topic:'Rates, time & data',difficulty:'Bridge',prompt:'A car travels 180 km in 3 hours. What is its average speed?',options:['45 km/h','55 km/h','60 km/h','90 km/h'],answer:'C',explanation:'Speed = distance ÷ time = 180 ÷ 3 = 60 km/h.'},
  {id:31,topic:'Rates, time & data',difficulty:'Bridge',prompt:'Convert 2.75 hours to hours and minutes.',options:['2 h 15 min','2 h 30 min','2 h 45 min','2 h 75 min'],answer:'C',explanation:'0.75 hour = 0.75 × 60 = 45 minutes.'},
  {id:32,topic:'Rates, time & data',difficulty:'Competition',prompt:'A tap fills 3/8 of a tank in 15 minutes at a constant rate. How long will it take to fill the whole tank?',options:['35 min','40 min','45 min','48 min'],answer:'B',explanation:'15 minutes corresponds to 3 parts, so 1/8 takes 5 minutes and 8/8 takes 40 minutes.'},

  {id:33,topic:'Mixed word problems',difficulty:'Foundation',prompt:'Books cost 3 × ₦2,400 and pens cost 2 × ₦350. What is the change from ₦10,000?',options:['₦1,900','₦2,000','₦2,100','₦2,300'],answer:'C',explanation:'Total = ₦7,200 + ₦700 = ₦7,900; change is ₦2,100.'},
  {id:34,topic:'Mixed word problems',difficulty:'Bridge',prompt:'3/8 of 48 pupils are girls. What is the ratio of girls to boys in simplest form?',options:['3:5','3:8','5:3','8:5'],answer:'A',explanation:'Girls = 18 and boys = 30, so 18:30 simplifies to 3:5.'},
  {id:35,topic:'Mixed word problems',difficulty:'Bridge',prompt:'A recipe uses 300 g of flour for 4 trays. How much flour is needed for 10 trays?',options:['600 g','700 g','750 g','800 g'],answer:'C',explanation:'300 ÷ 4 = 75 g per tray; 75 × 10 = 750 g.'},
  {id:36,topic:'Mixed word problems',difficulty:'Competition',prompt:'Flour is sold in 500 g bags. If 750 g is needed, how many bags must be bought and how much will remain?',options:['1 bag, 250 g left','2 bags, 250 g left','2 bags, 500 g left','3 bags, 750 g left'],answer:'B',explanation:'Two bags provide 1,000 g; 1,000 − 750 = 250 g remains.'},
];

mathoepediaQuestions.push(...[
  {
    "id": 1001,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A club buys 16 exercise books at N750 each and 12 geometry sets at N1,250 each. The seller gives 10% off the total bill. If the club pays N25,000, how much change should it receive?",
    "options": [
      "N1,200",
      "N700",
      "N24,300",
      "N2,700"
    ],
    "answer": "B",
    "explanation": "Find the two costs and add them: N12,000 + N15,000 = N27,000. The discount is N2,700, so the bill is N24,300. Change = N25,000 - N24,300 = N700."
  },
  {
    "id": 1002,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A club buys 14 exercise books at N800 each and 9 geometry sets at N1,400 each. The seller gives 15% off the total bill. If the club pays N26,000, how much change should it receive?",
    "options": [
      "N6,270",
      "N5,770",
      "N3,570",
      "N20,230"
    ],
    "answer": "B",
    "explanation": "Find the two costs and add them: N11,200 + N12,600 = N23,800. The discount is N3,570, so the bill is N20,230. Change = N26,000 - N20,230 = N5,770."
  },
  {
    "id": 1003,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A club buys 18 exercise books at N650 each and 10 geometry sets at N1,350 each. The seller gives 10% off the total bill. If the club pays N25,000, how much change should it receive?",
    "options": [
      "N2,820",
      "N22,680",
      "N2,320",
      "N2,520"
    ],
    "answer": "C",
    "explanation": "Find the two costs and add them: N11,700 + N13,500 = N25,200. The discount is N2,520, so the bill is N22,680. Change = N25,000 - N22,680 = N2,320."
  },
  {
    "id": 1004,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A club buys 12 exercise books at N900 each and 8 geometry sets at N1,750 each. The seller gives 12.5% off the total bill. If the club pays N30,000, how much change should it receive?",
    "options": [
      "N3,100",
      "N8,300",
      "N21,700",
      "N8,800"
    ],
    "answer": "B",
    "explanation": "Find the two costs and add them: N10,800 + N14,000 = N24,800. The discount is N3,100, so the bill is N21,700. Change = N30,000 - N21,700 = N8,300."
  },
  {
    "id": 1005,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A club buys 20 exercise books at N700 each and 15 geometry sets at N1,100 each. The seller gives 20% off the total bill. If the club pays N30,000, how much change should it receive?",
    "options": [
      "N6,100",
      "N5,601",
      "N24,400",
      "N5,600"
    ],
    "answer": "D",
    "explanation": "Find the two costs and add them: N14,000 + N16,500 = N30,500. The discount is N6,100, so the bill is N24,400. Change = N30,000 - N24,400 = N5,600."
  },
  {
    "id": 1006,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "After a 15% discount, a bicycle costs N25,500. What was its price before the discount?",
    "options": [
      "N30,000",
      "N27,000",
      "N33,000",
      "N25,500"
    ],
    "answer": "A",
    "explanation": "The sale price is 85% of the original. Original price = N25,500 / 0.85 = N30,000."
  },
  {
    "id": 1007,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "After a 12.5% discount, a bicycle costs N28,000. What was its price before the discount?",
    "options": [
      "N32,000",
      "N35,000",
      "N28,000",
      "N29,000"
    ],
    "answer": "A",
    "explanation": "The sale price is 87.5% of the original. Original price = N28,000 / 0.875 = N32,000."
  },
  {
    "id": 1008,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "After a 20% discount, a bicycle costs N36,000. What was its price before the discount?",
    "options": [
      "N48,000",
      "N45,000",
      "N42,000",
      "N36,000"
    ],
    "answer": "B",
    "explanation": "The sale price is 80% of the original. Original price = N36,000 / 0.8 = N45,000."
  },
  {
    "id": 1009,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "After a 10% discount, a bicycle costs N29,700. What was its price before the discount?",
    "options": [
      "N30,000",
      "N36,000",
      "N29,700",
      "N33,000"
    ],
    "answer": "D",
    "explanation": "The sale price is 90% of the original. Original price = N29,700 / 0.9 = N33,000."
  },
  {
    "id": 1010,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "After a 15% discount, a bicycle costs N34,000. What was its price before the discount?",
    "options": [
      "N37,000",
      "N40,000",
      "N43,000",
      "N34,000"
    ],
    "answer": "B",
    "explanation": "The sale price is 85% of the original. Original price = N34,000 / 0.85 = N40,000."
  },
  {
    "id": 1011,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A trader buys 40 items for N50 each. The rest are sold for N75 each. What is the trader's total profit or loss?",
    "options": [
      "loss N1,000",
      "profit N1,000",
      "profit N2,000",
      "profit N0"
    ],
    "answer": "B",
    "explanation": "Cost = 40 x N50 = N2,000. Sales = 40 x N75 = N3,000. Net result = N3,000 - N2,000 = profit N1,000."
  },
  {
    "id": 1012,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A trader buys 36 items for N400 each. 2 items are spoiled and cannot be sold. The rest are sold for N550 each. What is the trader's total profit or loss?",
    "options": [
      "loss N4,300",
      "profit N5,300",
      "profit N3,300",
      "profit N4,300"
    ],
    "answer": "D",
    "explanation": "Cost = 36 x N400 = N14,400. Sales = 34 x N550 = N18,700. Net result = N18,700 - N14,400 = profit N4,300."
  },
  {
    "id": 1013,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A trader buys 25 items for N1,200 each. 1 items are spoiled and cannot be sold. The rest are sold for N1,500 each. What is the trader's total profit or loss?",
    "options": [
      "profit N5,000",
      "profit N6,000",
      "profit N7,000",
      "loss N6,000"
    ],
    "answer": "B",
    "explanation": "Cost = 25 x N1,200 = N30,000. Sales = 24 x N1,500 = N36,000. Net result = N36,000 - N30,000 = profit N6,000."
  },
  {
    "id": 1014,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A trader buys 48 items for N250 each. 4 items are spoiled and cannot be sold. The rest are sold for N325 each. What is the trader's total profit or loss?",
    "options": [
      "profit N2,300",
      "profit N3,300",
      "loss N2,300",
      "profit N1,300"
    ],
    "answer": "A",
    "explanation": "Cost = 48 x N250 = N12,000. Sales = 44 x N325 = N14,300. Net result = N14,300 - N12,000 = profit N2,300."
  },
  {
    "id": 1015,
    "topic": "Money",
    "difficulty": "Competition",
    "prompt": "A trader buys 30 items for N800 each. 3 items are spoiled and cannot be sold. The rest are sold for N1,000 each. What is the trader's total profit or loss?",
    "options": [
      "profit N4,000",
      "profit N3,000",
      "profit N2,000",
      "loss N3,000"
    ],
    "answer": "B",
    "explanation": "Cost = 30 x N800 = N24,000. Sales = 27 x N1,000 = N27,000. Net result = N27,000 - N24,000 = profit N3,000."
  },
  {
    "id": 1016,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "N36,000 is shared between two teams in the ratio 2:4. How much more does the larger share receive than the smaller share?",
    "options": [
      "N18,000",
      "N24,000",
      "N12,000",
      "N6,000"
    ],
    "answer": "C",
    "explanation": "Total parts = 6. One part = N6,000. The difference is 2 parts: 2 x N6,000 = N12,000."
  },
  {
    "id": 1017,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "N72,000 is shared between two teams in the ratio 5:7. How much more does the larger share receive than the smaller share?",
    "options": [
      "N6,000",
      "N18,000",
      "N42,000",
      "N12,000"
    ],
    "answer": "D",
    "explanation": "Total parts = 12. One part = N6,000. The difference is 2 parts: 2 x N6,000 = N12,000."
  },
  {
    "id": 1018,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "N90,000 is shared between two teams in the ratio 2:5. How much more does the larger share receive than the smaller share?",
    "options": [
      "N12,857",
      "N64,285",
      "N38,571",
      "N51,428"
    ],
    "answer": "C",
    "explanation": "Total parts = 7. One part = N12,857. The difference is 3 parts: 3 x N12,857 = N38,571."
  },
  {
    "id": 1019,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "N54,000 is shared between two teams in the ratio 3:6. How much more does the larger share receive than the smaller share?",
    "options": [
      "N6,000",
      "N36,000",
      "N24,000",
      "N18,000"
    ],
    "answer": "D",
    "explanation": "Total parts = 9. One part = N6,000. The difference is 3 parts: 3 x N6,000 = N18,000."
  },
  {
    "id": 1020,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "N96,000 is shared between two teams in the ratio 3:5. How much more does the larger share receive than the smaller share?",
    "options": [
      "N36,000",
      "N12,000",
      "N60,000",
      "N24,000"
    ],
    "answer": "D",
    "explanation": "Total parts = 8. One part = N12,000. The difference is 2 parts: 2 x N12,000 = N24,000."
  },
  {
    "id": 1021,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "In a club, girls and boys are in the ratio 4:5. There are 54 pupils. Then 3 girls join and 6 boys leave. What is the new girls-to-boys ratio in simplest form?",
    "options": [
      "10:8",
      "27:24",
      "9:8",
      "8:9"
    ],
    "answer": "C",
    "explanation": "Total ratio parts = 9; one part = 54/9 = 6. Initially there are 24 girls and 30 boys. New counts: 27 girls and 24 boys. Simplify 27:24 to 9:8."
  },
  {
    "id": 1022,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "In a club, girls and boys are in the ratio 3:5. There are 64 pupils. Then 4 girls join and 2 boys leave. What is the new girls-to-boys ratio in simplest form?",
    "options": [
      "15:19",
      "14:19",
      "19:14",
      "28:38"
    ],
    "answer": "B",
    "explanation": "Total ratio parts = 8; one part = 64/8 = 8. Initially there are 24 girls and 40 boys. New counts: 28 girls and 38 boys. Simplify 28:38 to 14:19."
  },
  {
    "id": 1023,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "In a club, girls and boys are in the ratio 5:7. There are 60 pupils. Then 3 girls join and 5 boys leave. What is the new girls-to-boys ratio in simplest form?",
    "options": [
      "14:15",
      "15:15",
      "15:14",
      "28:30"
    ],
    "answer": "A",
    "explanation": "Total ratio parts = 12; one part = 60/12 = 5. Initially there are 25 girls and 35 boys. New counts: 28 girls and 30 boys. Simplify 28:30 to 14:15."
  },
  {
    "id": 1024,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "In a club, girls and boys are in the ratio 2:3. There are 20 pupils. Then 5 girls join and 4 boys leave. What is the new girls-to-boys ratio in simplest form?",
    "options": [
      "8:13",
      "14:8",
      "13:8",
      "12:8"
    ],
    "answer": "C",
    "explanation": "Total ratio parts = 5; one part = 20/5 = 4. Initially there are 8 girls and 12 boys. New counts: 13 girls and 8 boys. Simplify 13:8 to 13:8."
  },
  {
    "id": 1025,
    "topic": "Ratio",
    "difficulty": "Competition",
    "prompt": "In a club, girls and boys are in the ratio 4:7. There are 44 pupils. Then 2 girls join and 6 boys leave. What is the new girls-to-boys ratio in simplest form?",
    "options": [
      "18:22",
      "9:11",
      "10:11",
      "11:9"
    ],
    "answer": "B",
    "explanation": "Total ratio parts = 11; one part = 44/11 = 4. Initially there are 16 girls and 28 boys. New counts: 18 girls and 22 boys. Simplify 18:22 to 9:11."
  },
  {
    "id": 1026,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "A drink is mixed using concentrate and water in the ratio 1:4. How many litres of concentrate are needed to make 70 litres of drink?",
    "options": [
      "15 L",
      "56 L",
      "28 L",
      "14 L"
    ],
    "answer": "D",
    "explanation": "Total parts = 5; concentrate is 1/5 of the finished drink. 70 x 1/5 = 14 L."
  },
  {
    "id": 1027,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "A drink is mixed using concentrate and water in the ratio 2:5. How many litres of concentrate are needed to make 42 litres of drink?",
    "options": [
      "14 L",
      "30 L",
      "24 L",
      "12 L"
    ],
    "answer": "D",
    "explanation": "Total parts = 7; concentrate is 2/7 of the finished drink. 42 x 2/7 = 12 L."
  },
  {
    "id": 1028,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "A drink is mixed using concentrate and water in the ratio 3:7. How many litres of concentrate are needed to make 60 litres of drink?",
    "options": [
      "18 L",
      "42 L",
      "36 L",
      "21 L"
    ],
    "answer": "A",
    "explanation": "Total parts = 10; concentrate is 3/10 of the finished drink. 60 x 3/10 = 18 L."
  },
  {
    "id": 1029,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "A drink is mixed using concentrate and water in the ratio 2:3. How many litres of concentrate are needed to make 75 litres of drink?",
    "options": [
      "30 L",
      "32 L",
      "60 L",
      "45 L"
    ],
    "answer": "A",
    "explanation": "Total parts = 5; concentrate is 2/5 of the finished drink. 75 x 2/5 = 30 L."
  },
  {
    "id": 1030,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "A drink is mixed using concentrate and water in the ratio 5:11. How many litres of concentrate are needed to make 96 litres of drink?",
    "options": [
      "60 L",
      "66 L",
      "35 L",
      "30 L"
    ],
    "answer": "D",
    "explanation": "Total parts = 16; concentrate is 5/16 of the finished drink. 96 x 5/16 = 30 L."
  },
  {
    "id": 1031,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "8 workers pack 240 books in 5 hours. At the same rate, how many books can 12 workers pack in 7 hours?",
    "options": [
      "492 books",
      "528 books",
      "504 books",
      "360 books"
    ],
    "answer": "C",
    "explanation": "Rate per worker-hour = 240 / (8 x 5) = 6 books. Output = 12 x 7 x 6 = 504 books."
  },
  {
    "id": 1032,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "6 workers pack 180 books in 4 hours. At the same rate, how many books can 10 workers pack in 6 hours?",
    "options": [
      "440 books",
      "450 books",
      "300 books",
      "474 books"
    ],
    "answer": "B",
    "explanation": "Rate per worker-hour = 180 / (6 x 4) = 7.5 books. Output = 10 x 6 x 7.5 = 450 books."
  },
  {
    "id": 1033,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "9 workers pack 270 books in 3 hours. At the same rate, how many books can 8 workers pack in 5 hours?",
    "options": [
      "240 books",
      "400 books",
      "392 books",
      "424 books"
    ],
    "answer": "B",
    "explanation": "Rate per worker-hour = 270 / (9 x 3) = 10 books. Output = 8 x 5 x 10 = 400 books."
  },
  {
    "id": 1034,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "5 workers pack 210 books in 6 hours. At the same rate, how many books can 12 workers pack in 4 hours?",
    "options": [
      "504 books",
      "324 books",
      "360 books",
      "336 books"
    ],
    "answer": "D",
    "explanation": "Rate per worker-hour = 210 / (5 x 6) = 7 books. Output = 12 x 4 x 7 = 336 books."
  },
  {
    "id": 1035,
    "topic": "Proportion",
    "difficulty": "Competition",
    "prompt": "7 workers pack 196 books in 4 hours. At the same rate, how many books can 9 workers pack in 6 hours?",
    "options": [
      "402 books",
      "378 books",
      "252 books",
      "369 books"
    ],
    "answer": "B",
    "explanation": "Rate per worker-hour = 196 / (7 x 4) = 7 books. Output = 9 x 6 x 7 = 378 books."
  },
  {
    "id": 1036,
    "topic": "Variation",
    "difficulty": "Competition",
    "prompt": "8 workers can finish a job in 15 days. They work for 5 days, then 2 workers leave. How many more days will the remaining workers need?",
    "options": [
      "10 days",
      "15.333333333333334 days",
      "80 days",
      "13.333333333333334 days"
    ],
    "answer": "D",
    "explanation": "Total work = 8 x 15 = 120 worker-days. Work completed = 8 x 5 = 40; remaining work = 80. With 6 workers left, time = 80/6 = 13.333333333333334 days."
  },
  {
    "id": 1037,
    "topic": "Variation",
    "difficulty": "Competition",
    "prompt": "12 workers can finish a job in 20 days. They work for 8 days, then 3 workers leave. How many more days will the remaining workers need?",
    "options": [
      "12 days",
      "144 days",
      "18 days",
      "16 days"
    ],
    "answer": "D",
    "explanation": "Total work = 12 x 20 = 240 worker-days. Work completed = 12 x 8 = 96; remaining work = 144. With 9 workers left, time = 144/9 = 16 days."
  },
  {
    "id": 1038,
    "topic": "Variation",
    "difficulty": "Competition",
    "prompt": "10 workers can finish a job in 18 days. They work for 6 days, then 2 workers leave. How many more days will the remaining workers need?",
    "options": [
      "17 days",
      "120 days",
      "15 days",
      "12 days"
    ],
    "answer": "C",
    "explanation": "Total work = 10 x 18 = 180 worker-days. Work completed = 10 x 6 = 60; remaining work = 120. With 8 workers left, time = 120/8 = 15 days."
  },
  {
    "id": 1039,
    "topic": "Variation",
    "difficulty": "Competition",
    "prompt": "9 workers can finish a job in 16 days. They work for 4 days, then 3 workers leave. How many more days will the remaining workers need?",
    "options": [
      "108 days",
      "18 days",
      "12 days",
      "20 days"
    ],
    "answer": "B",
    "explanation": "Total work = 9 x 16 = 144 worker-days. Work completed = 9 x 4 = 36; remaining work = 108. With 6 workers left, time = 108/6 = 18 days."
  },
  {
    "id": 1040,
    "topic": "Variation",
    "difficulty": "Competition",
    "prompt": "15 workers can finish a job in 12 days. They work for 4 days, then 5 workers leave. How many more days will the remaining workers need?",
    "options": [
      "14 days",
      "8 days",
      "12 days",
      "120 days"
    ],
    "answer": "C",
    "explanation": "Total work = 15 x 12 = 180 worker-days. Work completed = 15 x 4 = 60; remaining work = 120. With 10 workers left, time = 120/10 = 12 days."
  },
  {
    "id": 1041,
    "topic": "Fractions & Number",
    "difficulty": "Competition",
    "prompt": "A school has 240 exercise books. It gives away 3/5 of them, then uses 25% of the remainder for a display. How many books are used for the display?",
    "options": [
      "60",
      "46",
      "56",
      "36"
    ],
    "answer": "D",
    "explanation": "After giving away 3/5, the remainder is 96. 25% of 96 = 36."
  },
  {
    "id": 1042,
    "topic": "Fractions & Number",
    "difficulty": "Competition",
    "prompt": "A school has 360 exercise books. It gives away 5/8 of them, then uses 20% of the remainder for a display. How many books are used for the display?",
    "options": [
      "90",
      "65",
      "55",
      "45"
    ],
    "answer": "D",
    "explanation": "After giving away 5/8, the remainder is 135. 20% of 135 = 45."
  },
  {
    "id": 1043,
    "topic": "Fractions & Number",
    "difficulty": "Competition",
    "prompt": "A school has 420 exercise books. It gives away 2/7 of them, then uses 50% of the remainder for a display. How many books are used for the display?",
    "options": [
      "240",
      "60",
      "70",
      "80"
    ],
    "answer": "B",
    "explanation": "After giving away 2/7, the remainder is 300. 50% of 300 = 60."
  },
  {
    "id": 1044,
    "topic": "Fractions & Number",
    "difficulty": "Competition",
    "prompt": "A school has 300 exercise books. It gives away 4/5 of them, then uses 15% of the remainder for a display. How many books are used for the display?",
    "options": [
      "36",
      "56",
      "46",
      "24"
    ],
    "answer": "A",
    "explanation": "After giving away 4/5, the remainder is 60. 15% of 60 = 36."
  },
  {
    "id": 1045,
    "topic": "Fractions & Number",
    "difficulty": "Competition",
    "prompt": "A school has 480 exercise books. It gives away 7/12 of them, then uses 25% of the remainder for a display. How many books are used for the display?",
    "options": [
      "80",
      "70",
      "130",
      "90"
    ],
    "answer": "B",
    "explanation": "After giving away 7/12, the remainder is 200. 25% of 200 = 70."
  },
  {
    "id": 1046,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "3 times a number plus 17 equals 71. What is the number?",
    "options": [
      "20",
      "54",
      "18",
      "16"
    ],
    "answer": "C",
    "explanation": "Let the number be x. 3x + 17 = 71; 3x = 54; x = 18."
  },
  {
    "id": 1047,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "5 times a number plus 9 equals 84. What is the number?",
    "options": [
      "15",
      "13",
      "75",
      "17"
    ],
    "answer": "A",
    "explanation": "Let the number be x. 5x + 9 = 84; 5x = 75; x = 15."
  },
  {
    "id": 1048,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "4 times a number plus 12 equals 76. What is the number?",
    "options": [
      "18",
      "64",
      "16",
      "14"
    ],
    "answer": "C",
    "explanation": "Let the number be x. 4x + 12 = 76; 4x = 64; x = 16."
  },
  {
    "id": 1049,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "7 times a number plus 5 equals 89. What is the number?",
    "options": [
      "10",
      "12",
      "84",
      "14"
    ],
    "answer": "B",
    "explanation": "Let the number be x. 7x + 5 = 89; 7x = 84; x = 12."
  },
  {
    "id": 1050,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "6 times a number plus 14 equals 92. What is the number?",
    "options": [
      "11",
      "78",
      "15",
      "13"
    ],
    "answer": "D",
    "explanation": "Let the number be x. 6x + 14 = 92; 6x = 78; x = 13."
  },
  {
    "id": 1051,
    "topic": "Algebra & Patterns",
    "difficulty": "Competition",
    "prompt": "Find the next number in the sequence: 2, 6, 12, 20, 30, ...",
    "options": [
      "42",
      "46",
      "44",
      "40"
    ],
    "answer": "A",
    "explanation": "The differences increase by 2: 4, 6, 8, 10, 12. Add the next difference, 12, to 30 to get 42."
  },
  {
    "id": 1052,
    "topic": "Algebra & Patterns",
    "difficulty": "Competition",
    "prompt": "Find the next number in the sequence: 5, 11, 19, 29, 41, ...",
    "options": [
      "59",
      "57",
      "55",
      "53"
    ],
    "answer": "C",
    "explanation": "The differences increase by 2: 6, 8, 10, 12, 14. Add the next difference, 14, to 41 to get 55."
  },
  {
    "id": 1053,
    "topic": "Algebra & Patterns",
    "difficulty": "Competition",
    "prompt": "Find the next number in the sequence: 3, 11, 21, 33, 47, ...",
    "options": [
      "63",
      "65",
      "67",
      "61"
    ],
    "answer": "A",
    "explanation": "The differences increase by 2: 8, 10, 12, 14, 16. Add the next difference, 16, to 47 to get 63."
  },
  {
    "id": 1054,
    "topic": "Algebra & Patterns",
    "difficulty": "Competition",
    "prompt": "Find the next number in the sequence: 7, 12, 19, 28, 39, ...",
    "options": [
      "54",
      "50",
      "52",
      "56"
    ],
    "answer": "C",
    "explanation": "The differences increase by 2: 5, 7, 9, 11, 13. Add the next difference, 13, to 39 to get 52."
  },
  {
    "id": 1055,
    "topic": "Algebra & Patterns",
    "difficulty": "Competition",
    "prompt": "Find the next number in the sequence: 4, 11, 21, 34, 50, ...",
    "options": [
      "72",
      "69",
      "75",
      "66"
    ],
    "answer": "B",
    "explanation": "The differences increase by 3: 7, 10, 13, 16, 19. Add the next difference, 19, to 50 to get 69."
  },
  {
    "id": 1056,
    "topic": "Rate & Time",
    "difficulty": "Competition",
    "prompt": "A bus travels 156 km in 52 minutes. What is its average speed in kilometres per hour?",
    "options": [
      "3 km/h",
      "174 km/h",
      "186 km/h",
      "180 km/h"
    ],
    "answer": "D",
    "explanation": "52 minutes = 52/60 hour. Speed = 156 / (52/60) = 180 km/h."
  },
  {
    "id": 1057,
    "topic": "Rate & Time",
    "difficulty": "Competition",
    "prompt": "A bus travels 210 km in 70 minutes. What is its average speed in kilometres per hour?",
    "options": [
      "174 km/h",
      "180 km/h",
      "3 km/h",
      "186 km/h"
    ],
    "answer": "B",
    "explanation": "70 minutes = 70/60 hour. Speed = 210 / (70/60) = 180 km/h."
  },
  {
    "id": 1058,
    "topic": "Rate & Time",
    "difficulty": "Competition",
    "prompt": "A bus travels 180 km in 45 minutes. What is its average speed in kilometres per hour?",
    "options": [
      "240 km/h",
      "246 km/h",
      "4 km/h",
      "234 km/h"
    ],
    "answer": "A",
    "explanation": "45 minutes = 45/60 hour. Speed = 180 / (45/60) = 240 km/h."
  },
  {
    "id": 1059,
    "topic": "Rate & Time",
    "difficulty": "Competition",
    "prompt": "A bus travels 144 km in 48 minutes. What is its average speed in kilometres per hour?",
    "options": [
      "3 km/h",
      "174 km/h",
      "180 km/h",
      "186 km/h"
    ],
    "answer": "C",
    "explanation": "48 minutes = 48/60 hour. Speed = 144 / (48/60) = 180 km/h."
  },
  {
    "id": 1060,
    "topic": "Rate & Time",
    "difficulty": "Competition",
    "prompt": "A bus travels 252 km in 63 minutes. What is its average speed in kilometres per hour?",
    "options": [
      "240 km/h",
      "4 km/h",
      "246 km/h",
      "234 km/h"
    ],
    "answer": "A",
    "explanation": "63 minutes = 63/60 hour. Speed = 252 / (63/60) = 240 km/h."
  },
  {
    "id": 1061,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "The angles of a triangle are in the ratio 2:3:4. What is the largest angle?",
    "options": [
      "100 degrees",
      "40 degrees",
      "60 degrees",
      "80 degrees"
    ],
    "answer": "D",
    "explanation": "Triangle angles total 180 degrees. One ratio part = 180/9 = 20 degrees. Largest angle = 4 parts = 80 degrees."
  },
  {
    "id": 1062,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "The angles of a triangle are in the ratio 3:4:5. What is the largest angle?",
    "options": [
      "45 degrees",
      "75 degrees",
      "60 degrees",
      "105 degrees"
    ],
    "answer": "B",
    "explanation": "Triangle angles total 180 degrees. One ratio part = 180/12 = 15 degrees. Largest angle = 5 parts = 75 degrees."
  },
  {
    "id": 1063,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "The angles of a triangle are in the ratio 1:2:3. What is the largest angle?",
    "options": [
      "90 degrees",
      "30 degrees",
      "91 degrees",
      "60 degrees"
    ],
    "answer": "A",
    "explanation": "Triangle angles total 180 degrees. One ratio part = 180/6 = 30 degrees. Largest angle = 3 parts = 90 degrees."
  },
  {
    "id": 1064,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "The angles of a triangle are in the ratio 2:2:5. What is the largest angle?",
    "options": [
      "100 degrees",
      "80 degrees",
      "40 degrees",
      "101 degrees"
    ],
    "answer": "A",
    "explanation": "Triangle angles total 180 degrees. One ratio part = 180/9 = 20 degrees. Largest angle = 5 parts = 100 degrees."
  },
  {
    "id": 1065,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "The angles of a triangle are in the ratio 3:5:7. What is the largest angle?",
    "options": [
      "36 degrees",
      "84 degrees",
      "60 degrees",
      "96 degrees"
    ],
    "answer": "B",
    "explanation": "Triangle angles total 180 degrees. One ratio part = 180/15 = 12 degrees. Largest angle = 7 parts = 84 degrees."
  },
  {
    "id": 1066,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 52 cm and length 16 cm. What is its area?",
    "options": [
      "192 cm2",
      "100 cm2",
      "520 cm2",
      "160 cm2"
    ],
    "answer": "D",
    "explanation": "Perimeter = 2(L+W), so L+W = 26. Width = 26 - 16 = 10 cm. Area = 16 x 10 = 160 cm2."
  },
  {
    "id": 1067,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 64 cm and length 22 cm. What is its area?",
    "options": [
      "100 cm2",
      "264 cm2",
      "640 cm2",
      "220 cm2"
    ],
    "answer": "D",
    "explanation": "Perimeter = 2(L+W), so L+W = 32. Width = 32 - 22 = 10 cm. Area = 22 x 10 = 220 cm2."
  },
  {
    "id": 1068,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 80 cm and length 26 cm. What is its area?",
    "options": [
      "1,120 cm2",
      "364 cm2",
      "196 cm2",
      "416 cm2"
    ],
    "answer": "B",
    "explanation": "Perimeter = 2(L+W), so L+W = 40. Width = 40 - 26 = 14 cm. Area = 26 x 14 = 364 cm2."
  },
  {
    "id": 1069,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 70 cm and length 20 cm. What is its area?",
    "options": [
      "340 cm2",
      "300 cm2",
      "225 cm2",
      "1,050 cm2"
    ],
    "answer": "B",
    "explanation": "Perimeter = 2(L+W), so L+W = 35. Width = 35 - 20 = 15 cm. Area = 20 x 15 = 300 cm2."
  },
  {
    "id": 1070,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A rectangle has perimeter 96 cm and length 31 cm. What is its area?",
    "options": [
      "527 cm2",
      "589 cm2",
      "289 cm2",
      "1,632 cm2"
    ],
    "answer": "A",
    "explanation": "Perimeter = 2(L+W), so L+W = 48. Width = 48 - 31 = 17 cm. Area = 31 x 17 = 527 cm2."
  },
  {
    "id": 1071,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "Around a point, two angles are 70 and 90 degrees. The other two are 3x and 2x. What is the larger unknown angle?",
    "options": [
      "130 degrees",
      "40 degrees",
      "120 degrees",
      "240 degrees"
    ],
    "answer": "C",
    "explanation": "Angles around a point total 360 degrees. (3+2)x = 360 - 70 - 90 = 200. So x = 40; the larger unknown angle is 3 x 40 = 120 degrees."
  },
  {
    "id": 1072,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "Around a point, two angles are 115 and 45 degrees. The other two are 4x and 2x. What is the larger unknown angle?",
    "options": [
      "142 degrees",
      "33 degrees",
      "228 degrees",
      "132 degrees"
    ],
    "answer": "D",
    "explanation": "Angles around a point total 360 degrees. (4+2)x = 360 - 115 - 45 = 200. So x = 33; the larger unknown angle is 4 x 33 = 132 degrees."
  },
  {
    "id": 1073,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "Around a point, two angles are 80 and 120 degrees. The other two are 5x and 3x. What is the larger unknown angle?",
    "options": [
      "100 degrees",
      "260 degrees",
      "110 degrees",
      "20 degrees"
    ],
    "answer": "A",
    "explanation": "Angles around a point total 360 degrees. (5+3)x = 360 - 80 - 120 = 160. So x = 20; the larger unknown angle is 5 x 20 = 100 degrees."
  },
  {
    "id": 1074,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "Around a point, two angles are 135 and 55 degrees. The other two are 2x and 1x. What is the larger unknown angle?",
    "options": [
      "248 degrees",
      "56 degrees",
      "122 degrees",
      "112 degrees"
    ],
    "answer": "D",
    "explanation": "Angles around a point total 360 degrees. (2+1)x = 360 - 135 - 55 = 170. So x = 56; the larger unknown angle is 2 x 56 = 112 degrees."
  },
  {
    "id": 1075,
    "topic": "Geometry",
    "difficulty": "Competition",
    "prompt": "Around a point, two angles are 60 and 150 degrees. The other two are 3x and 4x. What is the larger unknown angle?",
    "options": [
      "276 degrees",
      "84 degrees",
      "21 degrees",
      "94 degrees"
    ],
    "answer": "B",
    "explanation": "Angles around a point total 360 degrees. (3+4)x = 360 - 60 - 150 = 150. So x = 21; the larger unknown angle is 4 x 21 = 84 degrees."
  },
  {
    "id": 1076,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A 18 cm by 12 cm rectangle has a 4 cm by 3 cm rectangle cut from one corner. What area remains?",
    "options": [
      "228 cm2",
      "204 cm2",
      "12 cm2",
      "216 cm2"
    ],
    "answer": "B",
    "explanation": "Original area = 18 x 12 = 216 cm2. Cut-out area = 4 x 3 = 12 cm2. Remaining area = 216 - 12 = 204 cm2."
  },
  {
    "id": 1077,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A 20 cm by 15 cm rectangle has a 5 cm by 4 cm rectangle cut from one corner. What area remains?",
    "options": [
      "320 cm2",
      "300 cm2",
      "280 cm2",
      "20 cm2"
    ],
    "answer": "C",
    "explanation": "Original area = 20 x 15 = 300 cm2. Cut-out area = 5 x 4 = 20 cm2. Remaining area = 300 - 20 = 280 cm2."
  },
  {
    "id": 1078,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A 24 cm by 16 cm rectangle has a 6 cm by 5 cm rectangle cut from one corner. What area remains?",
    "options": [
      "354 cm2",
      "30 cm2",
      "414 cm2",
      "384 cm2"
    ],
    "answer": "A",
    "explanation": "Original area = 24 x 16 = 384 cm2. Cut-out area = 6 x 5 = 30 cm2. Remaining area = 384 - 30 = 354 cm2."
  },
  {
    "id": 1079,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A 21 cm by 14 cm rectangle has a 3 cm by 4 cm rectangle cut from one corner. What area remains?",
    "options": [
      "294 cm2",
      "306 cm2",
      "12 cm2",
      "282 cm2"
    ],
    "answer": "D",
    "explanation": "Original area = 21 x 14 = 294 cm2. Cut-out area = 3 x 4 = 12 cm2. Remaining area = 294 - 12 = 282 cm2."
  },
  {
    "id": 1080,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A 25 cm by 18 cm rectangle has a 7 cm by 6 cm rectangle cut from one corner. What area remains?",
    "options": [
      "42 cm2",
      "492 cm2",
      "408 cm2",
      "450 cm2"
    ],
    "answer": "C",
    "explanation": "Original area = 25 x 18 = 450 cm2. Cut-out area = 7 x 6 = 42 cm2. Remaining area = 450 - 42 = 408 cm2."
  },
  {
    "id": 1081,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A cuboid measures 12 cm by 8 cm by 5 cm. What is its volume?",
    "options": [
      "25 cm3",
      "480 cm3",
      "384 cm3",
      "576 cm3"
    ],
    "answer": "B",
    "explanation": "Volume = length x width x height = 12 x 8 x 5 = 480 cm3."
  },
  {
    "id": 1082,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A cuboid measures 15 cm by 10 cm by 6 cm. What is its volume?",
    "options": [
      "1,050 cm3",
      "750 cm3",
      "31 cm3",
      "900 cm3"
    ],
    "answer": "D",
    "explanation": "Volume = length x width x height = 15 x 10 x 6 = 900 cm3."
  },
  {
    "id": 1083,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A cuboid measures 18 cm by 12 cm by 4 cm. What is its volume?",
    "options": [
      "864 cm3",
      "648 cm3",
      "1,080 cm3",
      "34 cm3"
    ],
    "answer": "A",
    "explanation": "Volume = length x width x height = 18 x 12 x 4 = 864 cm3."
  },
  {
    "id": 1084,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A cuboid measures 14 cm by 9 cm by 7 cm. What is its volume?",
    "options": [
      "756 cm3",
      "30 cm3",
      "882 cm3",
      "1,008 cm3"
    ],
    "answer": "C",
    "explanation": "Volume = length x width x height = 14 x 9 x 7 = 882 cm3."
  },
  {
    "id": 1085,
    "topic": "Geometry & Measurement",
    "difficulty": "Competition",
    "prompt": "A cuboid measures 20 cm by 8 cm by 5 cm. What is its volume?",
    "options": [
      "33 cm3",
      "960 cm3",
      "800 cm3",
      "640 cm3"
    ],
    "answer": "C",
    "explanation": "Volume = length x width x height = 20 x 8 x 5 = 800 cm3."
  },
  {
    "id": 1086,
    "topic": "Measurement",
    "difficulty": "Competition",
    "prompt": "A ribbon is 2.4 metres long. Another piece of 85 cm is joined to it. What is the total length in centimetres?",
    "options": [
      "225 cm",
      "425 cm",
      "2,485 cm",
      "325 cm"
    ],
    "answer": "D",
    "explanation": "2.4 m = 240 cm. Add 85 cm: 240 + 85 = 325 cm."
  },
  {
    "id": 1087,
    "topic": "Measurement",
    "difficulty": "Competition",
    "prompt": "A ribbon is 3.75 metres long. Another piece of 60 cm is joined to it. What is the total length in centimetres?",
    "options": [
      "3,810 cm",
      "535 cm",
      "335 cm",
      "435 cm"
    ],
    "answer": "D",
    "explanation": "3.75 m = 375 cm. Add 60 cm: 375 + 60 = 435 cm."
  },
  {
    "id": 1088,
    "topic": "Measurement",
    "difficulty": "Competition",
    "prompt": "A ribbon is 1.8 metres long. Another piece of 245 cm is joined to it. What is the total length in centimetres?",
    "options": [
      "2,045 cm",
      "525 cm",
      "425 cm",
      "325 cm"
    ],
    "answer": "C",
    "explanation": "1.8 m = 180 cm. Add 245 cm: 180 + 245 = 425 cm."
  },
  {
    "id": 1089,
    "topic": "Measurement",
    "difficulty": "Competition",
    "prompt": "A ribbon is 5.25 metres long. Another piece of 75 cm is joined to it. What is the total length in centimetres?",
    "options": [
      "5,325 cm",
      "500 cm",
      "600 cm",
      "700 cm"
    ],
    "answer": "C",
    "explanation": "5.25 m = 525 cm. Add 75 cm: 525 + 75 = 600 cm."
  },
  {
    "id": 1090,
    "topic": "Measurement",
    "difficulty": "Competition",
    "prompt": "A ribbon is 4.6 metres long. Another piece of 135 cm is joined to it. What is the total length in centimetres?",
    "options": [
      "495 cm",
      "595 cm",
      "695 cm",
      "4,735 cm"
    ],
    "answer": "B",
    "explanation": "4.6 m = 459.99999999999994 cm. Add 135 cm: 459.99999999999994 + 135 = 595 cm."
  },
  {
    "id": 1091,
    "topic": "Proportion & Scale",
    "difficulty": "Competition",
    "prompt": "A map scale is 1:50,000. Two towns are 7.2 cm apart on the map. What is the actual distance in kilometres?",
    "options": [
      "2.6 km",
      "3.6 km",
      "0.36 km",
      "4.6 km"
    ],
    "answer": "B",
    "explanation": "Actual distance = 7.2 x 50,000 = 360,000 cm. Since 100,000 cm = 1 km, the distance is 3.6 km."
  },
  {
    "id": 1092,
    "topic": "Proportion & Scale",
    "difficulty": "Competition",
    "prompt": "A map scale is 1:25,000. Two towns are 12 cm apart on the map. What is the actual distance in kilometres?",
    "options": [
      "30 km",
      "0.3 km",
      "3 km",
      "4 km"
    ],
    "answer": "C",
    "explanation": "Actual distance = 12 x 25,000 = 300,000 cm. Since 100,000 cm = 1 km, the distance is 3 km."
  },
  {
    "id": 1093,
    "topic": "Proportion & Scale",
    "difficulty": "Competition",
    "prompt": "A map scale is 1:40,000. Two towns are 8.5 cm apart on the map. What is the actual distance in kilometres?",
    "options": [
      "4.4 km",
      "2.4 km",
      "3.4 km",
      "0.33999999999999997 km"
    ],
    "answer": "C",
    "explanation": "Actual distance = 8.5 x 40,000 = 340,000 cm. Since 100,000 cm = 1 km, the distance is 3.4 km."
  },
  {
    "id": 1094,
    "topic": "Proportion & Scale",
    "difficulty": "Competition",
    "prompt": "A map scale is 1:75,000. Two towns are 4 cm apart on the map. What is the actual distance in kilometres?",
    "options": [
      "4 km",
      "0.3 km",
      "3 km",
      "30 km"
    ],
    "answer": "C",
    "explanation": "Actual distance = 4 x 75,000 = 300,000 cm. Since 100,000 cm = 1 km, the distance is 3 km."
  },
  {
    "id": 1095,
    "topic": "Proportion & Scale",
    "difficulty": "Competition",
    "prompt": "A map scale is 1:20,000. Two towns are 15 cm apart on the map. What is the actual distance in kilometres?",
    "options": [
      "30 km",
      "4 km",
      "0.3 km",
      "3 km"
    ],
    "answer": "D",
    "explanation": "Actual distance = 15 x 20,000 = 300,000 cm. Since 100,000 cm = 1 km, the distance is 3 km."
  },
  {
    "id": 1096,
    "topic": "Money & Percentages",
    "difficulty": "Competition",
    "prompt": "An item costs N12,000. Its price increases by 25%, then the new price is reduced by 10%. What is the final price?",
    "options": [
      "N15,000",
      "N12,000",
      "N14,500",
      "N13,500"
    ],
    "answer": "D",
    "explanation": "After the increase: N12,000 x 1.25 = N15,000. After the reduction: N15,000 x 0.9 = N13,500. The final price is N1,500 greater the original."
  },
  {
    "id": 1097,
    "topic": "Money & Percentages",
    "difficulty": "Competition",
    "prompt": "An item costs N20,000. Its price increases by 15%, then the new price is reduced by 20%. What is the final price?",
    "options": [
      "N19,400",
      "N20,000",
      "N18,400",
      "N23,000"
    ],
    "answer": "C",
    "explanation": "After the increase: N20,000 x 1.15 = N23,000. After the reduction: N23,000 x 0.8 = N18,400. The final price is N1,600 less the original."
  },
  {
    "id": 1098,
    "topic": "Money & Percentages",
    "difficulty": "Competition",
    "prompt": "An item costs N16,000. Its price increases by 20%, then the new price is reduced by 25%. What is the final price?",
    "options": [
      "N15,400",
      "N19,200",
      "N16,000",
      "N14,400"
    ],
    "answer": "D",
    "explanation": "After the increase: N16,000 x 1.2 = N19,200. After the reduction: N19,200 x 0.75 = N14,400. The final price is N1,600 less the original."
  },
  {
    "id": 1099,
    "topic": "Money & Percentages",
    "difficulty": "Competition",
    "prompt": "An item costs N24,000. Its price increases by 10%, then the new price is reduced by 10%. What is the final price?",
    "options": [
      "N26,400",
      "N24,000",
      "N23,760",
      "N24,760"
    ],
    "answer": "C",
    "explanation": "After the increase: N24,000 x 1.1 = N26,400. After the reduction: N26,400 x 0.9 = N23,760. The final price is N240 less the original."
  },
  {
    "id": 1100,
    "topic": "Money & Percentages",
    "difficulty": "Competition",
    "prompt": "An item costs N8,000. Its price increases by 50%, then the new price is reduced by 20%. What is the final price?",
    "options": [
      "N10,600",
      "N9,600",
      "N8,000",
      "N12,000"
    ],
    "answer": "B",
    "explanation": "After the increase: N8,000 x 1.5 = N12,000. After the reduction: N12,000 x 0.8 = N9,600. The final price is N1,600 greater the original."
  },
  {
    "id": 1101,
    "topic": "Money & Ratio",
    "difficulty": "Competition",
    "prompt": "5 classes share equally the cost of 15 geometry sets at N1,200 each. The seller gives N3,000 off the bill. How much does each class pay?",
    "options": [
      "N3,000",
      "N15,000",
      "N2,700",
      "N3,300"
    ],
    "answer": "A",
    "explanation": "Item total = 15 x N1,200 = N18,000. Discounted total = N18,000 - N3,000 = N15,000. Each class pays N15,000 / 5 = N3,000."
  },
  {
    "id": 1102,
    "topic": "Money & Ratio",
    "difficulty": "Competition",
    "prompt": "6 classes share equally the cost of 18 geometry sets at N1,500 each. The seller gives N4,500 off the bill. How much does each class pay?",
    "options": [
      "N3,450",
      "N4,050",
      "N22,500",
      "N3,750"
    ],
    "answer": "D",
    "explanation": "Item total = 18 x N1,500 = N27,000. Discounted total = N27,000 - N4,500 = N22,500. Each class pays N22,500 / 6 = N3,750."
  },
  {
    "id": 1103,
    "topic": "Money & Ratio",
    "difficulty": "Competition",
    "prompt": "4 classes share equally the cost of 12 geometry sets at N2,200 each. The seller gives N2,400 off the bill. How much does each class pay?",
    "options": [
      "N6,000",
      "N5,700",
      "N6,300",
      "N24,000"
    ],
    "answer": "A",
    "explanation": "Item total = 12 x N2,200 = N26,400. Discounted total = N26,400 - N2,400 = N24,000. Each class pays N24,000 / 4 = N6,000."
  },
  {
    "id": 1104,
    "topic": "Money & Ratio",
    "difficulty": "Competition",
    "prompt": "8 classes share equally the cost of 20 geometry sets at N900 each. The seller gives N3,600 off the bill. How much does each class pay?",
    "options": [
      "N2,100",
      "N1,800",
      "N1,500",
      "N14,400"
    ],
    "answer": "B",
    "explanation": "Item total = 20 x N900 = N18,000. Discounted total = N18,000 - N3,600 = N14,400. Each class pays N14,400 / 8 = N1,800."
  },
  {
    "id": 1105,
    "topic": "Money & Ratio",
    "difficulty": "Competition",
    "prompt": "7 classes share equally the cost of 14 geometry sets at N1,750 each. The seller gives N2,450 off the bill. How much does each class pay?",
    "options": [
      "N2,850",
      "N3,450",
      "N22,050",
      "N3,150"
    ],
    "answer": "D",
    "explanation": "Item total = 14 x N1,750 = N24,500. Discounted total = N24,500 - N2,450 = N22,050. Each class pays N22,050 / 7 = N3,150."
  },
  {
    "id": 1106,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "4 times a number, increased by 9, equals 65. What is the number?",
    "options": [
      "16",
      "15",
      "14",
      "13"
    ],
    "answer": "C",
    "explanation": "Let the number be x. 4x + 9 = 65; subtract 9, then divide by 4: x = (65-9)/4 = 14."
  },
  {
    "id": 1107,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "5 times a number, increased by 12, equals 87. What is the number?",
    "options": [
      "15",
      "17",
      "16",
      "14"
    ],
    "answer": "A",
    "explanation": "Let the number be x. 5x + 12 = 87; subtract 12, then divide by 5: x = (87-12)/5 = 15."
  },
  {
    "id": 1108,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "3 times a number, increased by 18, equals 72. What is the number?",
    "options": [
      "24",
      "18",
      "17",
      "19"
    ],
    "answer": "B",
    "explanation": "Let the number be x. 3x + 18 = 72; subtract 18, then divide by 3: x = (72-18)/3 = 18."
  },
  {
    "id": 1109,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "7 times a number, increased by 5, equals 96. What is the number?",
    "options": [
      "13",
      "15",
      "14",
      "12"
    ],
    "answer": "A",
    "explanation": "Let the number be x. 7x + 5 = 96; subtract 5, then divide by 7: x = (96-5)/7 = 13."
  },
  {
    "id": 1110,
    "topic": "Algebra",
    "difficulty": "Competition",
    "prompt": "6 times a number, increased by 14, equals 104. What is the number?",
    "options": [
      "16",
      "17",
      "14",
      "15"
    ],
    "answer": "D",
    "explanation": "Let the number be x. 6x + 14 = 104; subtract 14, then divide by 6: x = (104-14)/6 = 15."
  },
  {
    "id": 1111,
    "topic": "Data & Reasoning",
    "difficulty": "Competition",
    "prompt": "Three scores are 14, 19 and 21. What fourth score gives an average of 20?",
    "options": [
      "24",
      "26",
      "20",
      "28"
    ],
    "answer": "B",
    "explanation": "Total for four scores = 4 x 20 = 80. The first three total 54. Fourth score = 80 - 54 = 26."
  },
  {
    "id": 1112,
    "topic": "Data & Reasoning",
    "difficulty": "Competition",
    "prompt": "Three scores are 32, 28 and 35. What fourth score gives an average of 34?",
    "options": [
      "41",
      "39",
      "34",
      "43"
    ],
    "answer": "A",
    "explanation": "Total for four scores = 4 x 34 = 136. The first three total 95. Fourth score = 136 - 95 = 41."
  },
  {
    "id": 1113,
    "topic": "Data & Reasoning",
    "difficulty": "Competition",
    "prompt": "Three scores are 72, 68 and 81. What fourth score gives an average of 75?",
    "options": [
      "79",
      "75",
      "81",
      "77"
    ],
    "answer": "A",
    "explanation": "Total for four scores = 4 x 75 = 300. The first three total 221. Fourth score = 300 - 221 = 79."
  },
  {
    "id": 1114,
    "topic": "Data & Reasoning",
    "difficulty": "Competition",
    "prompt": "Three scores are 16, 24 and 29. What fourth score gives an average of 25?",
    "options": [
      "29",
      "33",
      "25",
      "31"
    ],
    "answer": "D",
    "explanation": "Total for four scores = 4 x 25 = 100. The first three total 69. Fourth score = 100 - 69 = 31."
  },
  {
    "id": 1115,
    "topic": "Data & Reasoning",
    "difficulty": "Competition",
    "prompt": "Three scores are 45, 52 and 61. What fourth score gives an average of 55?",
    "options": [
      "60",
      "64",
      "62",
      "55"
    ],
    "answer": "C",
    "explanation": "Total for four scores = 4 x 55 = 220. The first three total 158. Fourth score = 220 - 158 = 62."
  },
  {
    "id": 1116,
    "topic": "Measurement & Factors",
    "difficulty": "Competition",
    "prompt": "A rectangular floor is 8 m by 6 m. It is tiled with square tiles of side 0.5 m, with no cutting or gaps. How many tiles are needed?",
    "options": [
      "28",
      "204",
      "192",
      "176"
    ],
    "answer": "C",
    "explanation": "Tiles along the length = 8/0.5 = 16. Tiles along the width = 6/0.5 = 12. Total = 16 x 12 = 192."
  },
  {
    "id": 1117,
    "topic": "Measurement & Factors",
    "difficulty": "Competition",
    "prompt": "A rectangular floor is 9 m by 6 m. It is tiled with square tiles of side 0.75 m, with no cutting or gaps. How many tiles are needed?",
    "options": [
      "104",
      "96",
      "84",
      "20"
    ],
    "answer": "B",
    "explanation": "Tiles along the length = 9/0.75 = 12. Tiles along the width = 6/0.75 = 8. Total = 12 x 8 = 96."
  },
  {
    "id": 1118,
    "topic": "Measurement & Factors",
    "difficulty": "Competition",
    "prompt": "A rectangular floor is 10 m by 7.5 m. It is tiled with square tiles of side 0.5 m, with no cutting or gaps. How many tiles are needed?",
    "options": [
      "280",
      "300",
      "35",
      "315"
    ],
    "answer": "B",
    "explanation": "Tiles along the length = 10/0.5 = 20. Tiles along the width = 7.5/0.5 = 15. Total = 20 x 15 = 300."
  },
  {
    "id": 1119,
    "topic": "Measurement & Factors",
    "difficulty": "Competition",
    "prompt": "A rectangular floor is 12 m by 8 m. It is tiled with square tiles of side 0.4 m, with no cutting or gaps. How many tiles are needed?",
    "options": [
      "620",
      "600",
      "570",
      "50"
    ],
    "answer": "B",
    "explanation": "Tiles along the length = 12/0.4 = 30. Tiles along the width = 8/0.4 = 20. Total = 30 x 20 = 600."
  },
  {
    "id": 1120,
    "topic": "Measurement & Factors",
    "difficulty": "Competition",
    "prompt": "A rectangular floor is 7.2 m by 4.8 m. It is tiled with square tiles of side 0.6 m, with no cutting or gaps. How many tiles are needed?",
    "options": [
      "84",
      "96",
      "104",
      "20"
    ],
    "answer": "B",
    "explanation": "Tiles along the length = 7.2/0.6 = 12. Tiles along the width = 4.8/0.6 = 8. Total = 12 x 8 = 96."
  }
] as MathoepediaQuestion[]);

mathoepediaQuestions.push(...sharedCompetitionQuestions);

export const mathoepediaTopics = Array.from(new Set(mathoepediaQuestions.map((question) => question.topic)));
export function publicQuestion(question: MathoepediaQuestion) {
  return { id: question.id, topic: question.topic, difficulty: question.difficulty, prompt: question.prompt, options: question.options };
}
