export type ArticleSection={heading:string;paragraphs:string[];points?:string[]};

export type Article={
  slug:string;
  title:string;
  excerpt:string;
  category:string;
  published:string;
  readTime:string;
  author:string;
  sections:ArticleSection[];
  references:{label:string;url:string}[];
};

export const articles:Article[]=[
  {
    slug:'how-to-choose-a-research-topic',
    title:'How to Choose a Focused and Researchable Topic',
    excerpt:'A practical framework for moving from a broad interest to a clear topic with feasible variables, participants and data.',
    category:'Research Methods',published:'18 September 2026',readTime:'6 min read',author:'Datalog ICT Research Team',
    sections:[
      {heading:'Begin with a problem, not only a subject',paragraphs:['A subject such as digital learning, financial inclusion or mathematics anxiety is still too broad. A research topic becomes useful when it identifies a problem, the people or units affected, the setting and the relationship that will be examined.','Start by writing one sentence about what is unknown, inconsistent or practically difficult. That gap gives the study a reason to exist and helps prevent a title that merely combines popular keywords.']},
      {heading:'Use the five-part focus test',paragraphs:['A workable topic normally clarifies the main concept or variables, the population, the location or context, the intended design and a realistic time or data boundary.'],points:['Concept: What exactly will be measured or understood?','Population: Who or what supplies the evidence?','Context: Where does the problem occur?','Method: Can the question be answered with available data?','Feasibility: Can access, time, ethics and cost be managed?']},
      {heading:'Check contribution and evidence access',paragraphs:['Search recent peer-reviewed literature to see what is already known and how similar studies were designed. A gap should not be claimed merely because a study has not used the same town or institution; explain why the new context, population, method or evidence could change understanding.','Before seeking approval, confirm that the proposed variables can be measured, the participants or dataset are accessible, and the planned analysis matches the research questions.']}
    ],
    references:[
      {label:'USC Libraries — Organizing Your Social Sciences Research Paper',url:'https://libguides.usc.edu/writingguide'},
      {label:'EQUATOR Network — Reporting Guidelines',url:'https://www.equator-network.org/reporting-guidelines/'}
    ]
  },
  {
    slug:'choosing-the-right-statistical-test',
    title:'Choosing the Right Statistical Test: A Practical Starting Guide',
    excerpt:'Match your research question, variable types and study design to an appropriate statistical procedure.',
    category:'Data Analysis',published:'18 September 2026',readTime:'7 min read',author:'Datalog ICT Analytics Team',
    sections:[
      {heading:'Let the research question lead',paragraphs:['Do not select a test because it is familiar or appears advanced. First decide whether the study aims to compare groups, examine association, estimate a relationship or predict an outcome. The analytical method must answer that specific question.']},
      {heading:'Identify the design and measurement level',paragraphs:['Ask whether observations are independent or paired, how many groups are compared, and whether the outcome is continuous, ordinal or categorical. These choices narrow the suitable tests considerably.'],points:['Two independent groups with a continuous outcome: independent-samples t-test.','The same participants measured twice: paired-samples t-test.','Three or more independent groups with a continuous outcome: one-way ANOVA.','Two categorical variables: chi-square test of independence.','A continuous outcome with several predictors: multiple linear regression.','A binary outcome with predictors: binary logistic regression.']},
      {heading:'Check assumptions before interpreting results',paragraphs:['A test recommendation is only a starting point. Examine missing data, outliers, independence, distribution, expected cell counts and model diagnostics. When assumptions are not reasonable, a transformation, robust method, non-parametric alternative or redesigned model may be needed.','Report effect sizes and confidence intervals alongside p-values. Statistical significance alone does not establish practical importance, good measurement or a credible causal claim.']}
    ],
    references:[
      {label:'NIST/SEMATECH — e-Handbook of Statistical Methods',url:'https://www.itl.nist.gov/div898/handbook/'},
      {label:'American Statistical Association — Statement on Statistical Significance and P-Values',url:'https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf'}
    ]
  },
  {
    slug:'primary-versus-secondary-data',
    title:'Primary or Secondary Data? How to Make a Defensible Choice',
    excerpt:'Compare control, cost, coverage and validity before deciding whether to collect new data or analyse an existing source.',
    category:'Research Planning',published:'18 September 2026',readTime:'5 min read',author:'Datalog ICT Research Team',
    sections:[
      {heading:'Choose data that can answer the question',paragraphs:['Primary data are collected specifically for the current study through surveys, interviews, observation, experiments or measurements. Secondary data already exist, often as administrative records, national surveys, organisational databases or open repositories. Neither option is automatically stronger.','The defensible choice is the source that best represents the constructs, population, period and level of detail required by the research question.']},
      {heading:'Compare the trade-offs',paragraphs:['Primary data provide greater control over instruments, sampling and timing, but collection can be expensive, slow and vulnerable to low response. Secondary data can offer wider coverage, long time series and lower cost, but the researcher inherits the original definitions, sampling decisions, missing values and quality limitations.'],points:['Use primary data when the required variables or experiences are not already captured.','Use secondary data when credible sources already cover the needed population, period and indicators.','Combine both when new contextual evidence is needed to explain patterns found in an existing dataset.']},
      {heading:'Audit the source before analysis',paragraphs:['Document who collected the data, why it was collected, how units were sampled, how variables were defined and whether revisions occurred. Check licences, confidentiality rules, geographic and temporal coverage, missingness and comparability.','A large dataset does not correct weak measurement. State limitations openly and avoid conclusions that exceed the design or variables available.']}
    ],
    references:[
      {label:'World Bank Microdata Library',url:'https://microdata.worldbank.org/'},
      {label:'UK Data Service — Using Secondary Data',url:'https://ukdataservice.ac.uk/learning-hub/secondary-analysis/'}
    ]
  }
];

export function getArticle(slug:string){return articles.find(article=>article.slug===slug);}
