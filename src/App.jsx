import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  async function generateAnswer() {
    setAnswer("loading")
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCEGzih0vohu2v9TskxshQAJWhent2g0VE",
      method: "post",
      data: { "contents": [{ "parts": [{ "text": question }] }] }
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }

  return (
    <>
      <h1>Med AI</h1>
      <textarea value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="30"
        rows="10">

      </textarea>


      <div className='res'>
        <button className="btn" onClick={generateAnswer}>Generate response</button>
        <pre>{answer}</pre>

      </div>


    </>
  )
}

export default App
