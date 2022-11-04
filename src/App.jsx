import { useState,useEffect} from 'react'
import axios from 'axios';
import got from './got.jpg';
import Quote from './Quote.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'

function App() {
  let [quote,setQuote] = useState({
    sentence:"",
    actor:""
  });
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])
  const getQuote = async ()=>{
    await axios.get('https://api.gameofthronesquotes.xyz/v1/random').then((res)=>{
      setQuote({
        sentence:res.data.sentence,
        actor:res.data.character.name
      })
    })
  }
  return (
    <div className="App">
      <div className="box-img">
        <img src={got} alt="got"   data-aos="fade-down" />
      </div>
      {quote.sentence && <Quote quote={quote} />}
    
    <button  data-aos="fade-up" onClick={getQuote}>Get Quote</button>
    </div>
  )
}

export default App
