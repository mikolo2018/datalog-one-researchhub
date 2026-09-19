export type CatalogKind='digital_product'|'course'|'membership'|'service'|'diagnostic'|'topic_pack';

export type CatalogItem={
  slug:string;
  name:string;
  kind:CatalogKind;
  priceNaira:number;
  summary:string;
  features:string[];
  badge?:string;
  recurring?:'monthly'|'annual';
};

export const catalog:CatalogItem[]=[
  {slug:'research-proposal-template',name:'Research Proposal Template',kind:'digital_product',priceNaira:2500,summary:'An editable structure for clear, properly aligned proposals.',features:['Chapter One structure','Objectives and questions guide','Methodology checklist']},
  {slug:'chapter-four-reporting-pack',name:'Chapter Four Reporting Pack',kind:'digital_product',priceNaira:3500,summary:'Reporting layouts for quantitative and qualitative findings.',features:['APA-ready table patterns','Interpretation prompts','Discussion checklist'],badge:'Popular'},
  {slug:'apa7-toolkit',name:'APA 7 Referencing Toolkit',kind:'digital_product',priceNaira:2000,summary:'Practical citation, reference and formatting checklists.',features:['Common source examples','Reference audit sheet','Formatting checklist']},
  {slug:'questionnaire-design-pack',name:'Questionnaire Design Pack',kind:'digital_product',priceNaira:3000,summary:'Templates for defensible survey instruments and validation.',features:['Likert item planner','Expert validation form','Pilot-test checklist']},
  {slug:'sample-size-workbook',name:'Sample Size Workbook',kind:'digital_product',priceNaira:2500,summary:'A guided workbook for common survey sample calculations.',features:['Cochran and finite correction','Non-response allowance','Decision notes']},
  {slug:'defence-slide-template',name:'Dissertation Defence Slides',kind:'digital_product',priceNaira:3000,summary:'A clean presentation structure for a focused academic defence.',features:['15-minute sequence','Results layouts','Viva preparation prompts']},
  {slug:'premium-diagnostic',name:'Premium Research Diagnostic',kind:'diagnostic',priceNaira:3000,summary:'A detailed alignment report covering topic, objectives, method, sampling and analysis.',features:['Downloadable report','Priority corrections','Recommended next steps'],badge:'Fast result'},
  {slug:'premium-topic-pack',name:'Premium Topic Development Pack',kind:'topic_pack',priceNaira:5000,summary:'Turn a broad interest into a defensible, research-ready direction.',features:['Refined title','Objectives and variables','Method and data suggestions']},
  {slug:'excel-data-analysis',name:'Excel for Data Analysis',kind:'course',priceNaira:15000,summary:'Practical cleaning, analysis, charts and reporting workflows.',features:['Recorded lessons','Practice datasets','Certificate']},
  {slug:'spss-beginners',name:'SPSS for Beginners',kind:'course',priceNaira:25000,summary:'From coding a dataset to selecting and reporting common tests.',features:['Guided exercises','Interpretation templates','Certificate'],badge:'Best seller'},
  {slug:'research-methodology',name:'Research Methodology & Interpretation',kind:'course',priceNaira:20000,summary:'Build aligned questions, methods, sampling and analysis plans.',features:['Templates','Worked examples','Certificate']},
  {slug:'power-bi-tableau',name:'Power BI & Tableau Foundations',kind:'course',priceNaira:30000,summary:'Create useful dashboards and communicate evidence clearly.',features:['Dashboard projects','Data preparation','Certificate']},
  {slug:'student-membership',name:'Student Membership',kind:'membership',priceNaira:3500,summary:'Affordable research tools and resources for students.',features:['Template library','Monthly group clinic','Member discounts'],recurring:'monthly'},
  {slug:'researcher-membership',name:'Researcher Membership',kind:'membership',priceNaira:8500,summary:'Advanced tools and priority support for active researchers.',features:['Everything in Student','Premium diagnostics','Priority support'],recurring:'monthly',badge:'Recommended'},
  {slug:'professional-membership',name:'Professional Membership',kind:'membership',priceNaira:15000,summary:'Ongoing analytics and research support for professionals.',features:['Advanced resource library','Quarterly expert review','Higher service discounts'],recurring:'monthly'},
  {slug:'data-analysis-deposit',name:'Data Analysis Project Deposit',kind:'service',priceNaira:15000,summary:'Begin a scoped SPSS, Stata, Excel, R, Python, NVivo or dashboard project.',features:['Needs assessment','Secure project record','Balance quoted after review']},
  {slug:'proposal-review',name:'Proposal Review',kind:'service',priceNaira:15000,summary:'Expert review of alignment, feasibility and methodological clarity.',features:['Structured feedback','Priority corrections','One follow-up']},
  {slug:'publication-readiness',name:'Publication Readiness Review',kind:'service',priceNaira:20000,summary:'A structured manuscript check before journal submission.',features:['Structure review','Reporting checklist','Journal-readiness notes']},
  {slug:'dashboard-consultation',name:'Business Analytics Consultation',kind:'service',priceNaira:25000,summary:'Scope an evidence dashboard or organisational analysis project.',features:['Discovery session','Requirements summary','Project quotation']}
];

export const kindLabels:Record<CatalogKind,string>={digital_product:'Digital resource',course:'Course',membership:'Membership',service:'Professional service',diagnostic:'Research diagnostic',topic_pack:'Topic pack'};
export function getCatalogItem(slug:string){return catalog.find(item=>item.slug===slug);}
export function getCatalogByKind(kind:CatalogKind){return catalog.filter(item=>item.kind===kind);}
export function formatNaira(amount:number){return `₦${amount.toLocaleString('en-NG')}`;}
