import "./AdviceGenerator.css";
import { useState, useEffect } from "react";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Hanken+Grotesk:wght@500;700;800&family=Manrope:wght@800&family=Poppins:wght@400;500;600;700&display=swap');
</style>;

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
    <>
      <h1>{data.id}</h1>
      <h1>{data.advice}</h1>
      <button onClick={() => getAdvice()}>Get Advice</button>
    </>
  );
};

export default AdviceGenerator;
