export function generateTopics(input:{level:string;discipline:string;interest:string;method:string;location:string}){
 const {level,discipline,interest,method,location}=input; const loc=location||'Nigeria';
 return [
  `Assessing ${interest} and its relationship with key outcomes among ${discipline} stakeholders in ${loc}: a ${method} study`,
  `${interest} adoption, barriers and performance implications in ${discipline}: evidence from ${loc}`,
  `Exploring predictors of ${interest} among ${discipline} participants in ${loc}: implications for policy and practice`,
  `${interest} and digital transformation in ${discipline}: a comparative ${method} investigation`,
  `From awareness to adoption: determinants of ${interest} within ${discipline} in ${loc}`
 ].map((title,i)=>({id:i+1,title,level}));
}