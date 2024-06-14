import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const message = [
  "Learn React ⚛️",
  "Apply for a job 👜",
  "Make the world a better place 🌎"
]

export default function App(){

  const [step, setStep] = React.useState(1);
  const [open, setOpen] = React.useState(true);

  function goRight(){
    step <3 && setStep(s => s + 1);
  }

  function goLeft(){
    step >1 && setStep(s => s - 1);
  }

  return (
  <>
    <button className={`open ${open ? "": "ready"}`} onClick= {()=> setOpen(op=> !op)}>&times;</button>
    {open &&
    <div className="steps">
      <div className='numbers'>
        <div className={step>=1 ? "active": ""}>1</div>
        <div className={step>=2 ? "active": ""}>2</div>
        <div className={step>=3 ? "active": ""}>3</div>
      </div>
      <p>Step{step}: {message[step-1]}</p>

      <div className="buttons">
        <button className={step===1 ? "grey": ""} onClick={goLeft}>Previous</button>
        <button className={step===3 ? "grey": ""} onClick={goRight}>Next</button>
      </div>
    </div>
    }
  </>
  )

}
