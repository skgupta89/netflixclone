import React,{useState} from 'react';
import './App.css';
import { OpenAIApi } from 'openai';
import { Configuration } from 'openai';
import OptionSelection from './component/OptionSelection';
import { arrayItems } from './AIOptions';
import Translation from './component/Translation';
function App() {

const key = 'eter your key'
  const data = new Configuration({
    apiKey:key,
  })

  console.log(data);

  const openai = new OpenAIApi(data)

  const [option, setOption] = useState({});

  const [response, setResponse] = useState('')

  const [input, setInput] = useState('')
 const selectOption = (option)=>{
  console.log(option)
  setOption(option)
}


const doStuff =async ()=>{

let object = {...option,prompt:input};
console.log(object)

var pmt = object.prompt

// const response = await openai.createCompletion(object);
  
console.log(response);

fetch('https://api.openai.com/v1/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  },
  body: JSON.stringify({
    prompt: {pmt},
    max_tokens: 5,
    model: 'davinci'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


}
  
openai.apiKey =process.env.VITE_Open_AI_Key;


  console.log(Object.values(option).length)
  return (
    <div className="App">
    
    {
      Object.values(option).length === 0 ?    <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
: <Translation  doStuff={doStuff} setInput={setInput}/>
    }
    {/* <Translation /> */}
    </div>
  );
}

export default App;

