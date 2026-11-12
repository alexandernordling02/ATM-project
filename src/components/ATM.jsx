import { useEffect } from "react";

function ATM({ bankomat, pengar }) {
  useEffect(() => {
    <>
      {bankomat
        ? console.log("ATM is now ready to use")
        : console.log("ATM shutting down.")}
    </>;
  }, [bankomat]);

  return <>{bankomat ? <p>Disponibelt saldo: {pengar}kr</p> : ""}</>;
}

export default ATM;
