export type DiagnosticInput={topic:string;objectives:string;questions:string;methodology:string;sample:string;analysis:string};
function quality(s:string,min:number){const n=s.trim().length;if(!n)return 0;return Math.min(100,Math.round((n/min)*100));}
export function scoreDiagnostic(x:DiagnosticInput){
 const topic=Math.round((quality(x.topic,80)*.7)+(x.topic.includes(':')?20:10));
 const objectives=Math.min(100,quality(x.objectives,220)); const questions=Math.min(100,quality(x.questions,180));
 const methodology=Math.min(100,quality(x.methodology,260)); const sample=Math.min(100,quality(x.sample,180)); const analysis=Math.min(100,quality(x.analysis,220));
 const alignment=Math.round((objectives+questions+analysis)/3); const total=Math.round(topic*.15+alignment*.25+methodology*.20+sample*.15+analysis*.25);
 const issues=[] as string[]; if(topic<65)issues.push('Clarify scope, population, variables and context in the topic.'); if(alignment<65)issues.push('Objectives, research questions and analysis plan need stronger alignment.'); if(methodology<65)issues.push('Methodology needs clearer design, procedures and justification.'); if(sample<65)issues.push('Sampling strategy and sample-size justification require more detail.'); if(analysis<65)issues.push('Analysis plan should explicitly map tests/techniques to each objective.');
 return {total,topic,alignment,methodology,sample,analysis,issues};
}