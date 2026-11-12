import { useState } from "react";
import "./App.css";
import ATM from "./components/ATM";

function App() {
  const [showAtm, setShowAtm] = useState(false);
  const [showSaldo, setShowSaldo] = useState(1000);
  const [uttag, setUttag] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setShowAtm(!showAtm);
        }}
      >
        Visa/dölj saldo
      </button>
      <ATM bankomat={showAtm} pengar={showSaldo} />

      <h3>Gör en insättning</h3>

      <button
        onClick={() => {
          setShowSaldo(showSaldo + 100);
        }}
      >
        Sätt in 100kr!
      </button>
      <button
        onClick={() => {
          setShowSaldo(showSaldo + 200);
        }}
      >
        Sätt in 200kr!
      </button>
      <button
        onClick={() => {
          setShowSaldo(showSaldo + 500);
        }}
      >
        Sätt in 500kr!
      </button>
      <h3>Gör ett uttag</h3>
      <input
        type="number"
        onChange={(e) => {
          setUttag(e.target.value);
        }}
      />
      <button
        onClick={() => {
          {
            uttag <= showSaldo
              ? setShowSaldo(showSaldo - uttag)
              : alert("Otillräckligt med saldo");
          }
        }}
      >
        Ta ut belopp
      </button>
    </>
  );
}

export default App;
