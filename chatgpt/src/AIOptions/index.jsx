export const arrayItems = [
    {
        name:'Q&A',
id:'q&a',
description:'Answer questions based on existing knowledge.',
option:{
 model: "text-davinci-003",
  temperature: 0,
  max_tokens: 100,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["\n"],

   
}
},
    {
        name:'Grammer Correction',
id:'grammerCorrection',
description:'Correct sentence into English.',
},
    {
        name:'Summarize for a 2nd grader',
id:'summary',
description:'Transalates difficults text into simple concepts.'
},
    {
        name:'English to other languages',
id:'transalate',
description:'Transalate English text into French,Spanish and Japanese.'
},
    {
        name:'Movie to Emoji',
id:'movieToEmoji',
description:'Convert movie title into emoji/'
},
    {
        name:'Explain code',
id:'explainCode',
description:'Explain a complicated piece of code.'
},
    {
        name:'Javascript to Python',
id:'jstopy',
description:'convert simple JS expressions into Python.'
},


]