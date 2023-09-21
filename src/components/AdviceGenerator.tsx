import "./AdviceGenerator.css";
import { useState, useEffect } from "react";
import desktopDivider from "../assets/images/pattern-divider-desktop.svg";
import dice from "../assets/images/icon-dice.svg";

{
  /* <style>
  @import
  url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Hanken+Grotesk:wght@500;700;800&family=Manrope:wght@800&family=Poppins:wght@400;500;600;700&display=swap');
</style>; */
}

const AdviceGenerator = () => {
  const [data, setData] = useState({
    id: "",
    advice: "",
  });

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      //   .then((data) => console.log(data));
      .then((data) =>
        setData({
          advice: data.slip.advice,
          id: data.slip.id,
        })
      )
      .catch((error) => console.error("Error: ", error));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    // <>
    //   <h1>{data.id}</h1>
    //   <h1>{data.advice}</h1>
    //   <button onClick={() => getAdvice()}>Get Advice</button>
    // </>
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <div className="id">
            <p>ADVICE # {data.id}</p>
          </div>
          <div className="advice">
            <p>{data.advice}</p>
          </div>
          <div className="image">
            <img src={desktopDivider} alt="divider" />
          </div>
        </div>
        <div className="dice">
          <img src={dice} alt="dice" onClick={() => getAdvice()} />
        </div>
      </div>
    </div>
  );
};

export default AdviceGenerator;
