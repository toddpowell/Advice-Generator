import "./AdviceGenerator.css";
import React, { useState, useEffect } from "react";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Hanken+Grotesk:wght@500;700;800&family=Manrope:wght@800&family=Poppins:wght@400;500;600;700&display=swap');
</style>;

const AdviceGenerator = () => {
  const [data, setData] = useState({
    id: "",
    advice: "",
  });

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      //   .then((data) => console.log(data));
      .then((data) =>
        setData({
          id: data.slip.id,
          advice: data.slip.advice,
        })
      )
      .catch((error) => console.error("Error: ", error));
  }, []);

  return (
    <>
      <h1>
        {data.id} - {data.advice}
      </h1>
    </>
  );
};

export default AdviceGenerator;
