import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import "./style.css";

export const Test = () => {
  const questions = [
    "Soru 1: Sanat yönünüzün olduğunu düşünüyor musunuz?",
    "Soru 2: Fiziksel olarak kendinizi geliştirmeyi seviyor musunuz?",
    "Soru 3: Asosyal misiniz?",
    "Soru 4: Dışarıda Vakit geçirmeyi seviyor musunuz?",
    "Soru 5: Yemek hazırlamayı sever misiniz?",
    "Soru 6: Estetik algınız sizce yeterli mi?",
    "Soru 7: Bahçe ile uğraşmayı sever misiniz?",
    "Soru 8: Video oyunlarını sever misiniz?",
    "Soru 9: Uzun yol sever misiniz?",
    "Soru 10: Belirli sürelerde insanlardan uzak yaşamayı sever misiniz?",
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleButtonClick = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      handleNextQuestion();
    }
  };

  const calculateResult = () => {
    var degerler = {
      Resim: 0,
      bahce: 0,
      yemek: 0,
      fitness: 0,
      fotografcilik: 0,
      oyun: 0,
      dans: 0,
      seyahat: 0,
      kamp: 0,
    };
  
    if (answers[0] === "Evet") {
      degerler.Resim += 10;
      degerler.fotografcilik += 10;
      degerler.dans += 10;
    }
    if (answers[1] === "Evet") {
      degerler.fitness += 20;
      degerler.oyun -= 5;
    }
    if (answers[2] === "Evet") {
      degerler.oyun += 10;
    }
    if (answers[3] === "Evet") {
      degerler.kamp += 5;
      degerler.bahce += 5;
    }
    if (answers[4] === "Evet") {
      degerler.yemek += 10;
    }
    if (answers[5] === "Evet") {
      degerler.fotografcilik += 10;
      degerler.Resim += 10;
    }
    if (answers[6] === "Evet") {
      degerler.bahce += 10;
    }
    if (answers[7] === "Evet") {
      degerler.oyun += 20;
    }
    if (answers[8] === "Evet") {
      degerler.seyahat += 20;
      degerler.kamp += 10;
    }
    if (answers[9] === "Evet") {
      degerler.seyahat += 10;
      degerler.kamp += 10;
    }

    const sortedResults = Object.entries(degerler).sort((a, b) => b[1] - a[1]).slice(0, 5);
    // Tüm değerleri göster
    console.log("Tüm Değerler:", degerler);
  
    //bu fonksiyonda tüm hobileri gezip baş harflerini büyük harfe çevirip + hobisi yazoyrum
    const formattedResults = sortedResults.map(([key]) => {
      const hobbyString = key.charAt(0).toUpperCase() + key.slice(1) + " Hobisi: " ;
      return hobbyString + " ";
    });
  
    console.log("Sonuçlar:", formattedResults);
    
  
    const result = answers.filter((answer) => answer === "Evet").length;
  
    return formattedResults;
  };
  

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRestartTest = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };

  return (
    <div className="test-container">
      {showResult ? (
        <>
          <p className="test-result">
            En Yakın Olduğunuz 5 Hobi:<br/> {calculateResult().join(", ")}
          </p>
          <button className="test-restart" onClick={handleRestartTest}>
            Testi Yeniden Başlat
          </button>
        </>
      ) : (
        <>
          <p className="test-question">{questions[currentQuestionIndex]}</p>
          <div className="test-buttons">
            <button
              className="test-single-button"
              onClick={() => handleButtonClick("Evet")}
            >
              Evet
            </button>
            <button
              className="test-single-button"
              onClick={() => handleButtonClick("Hayır")}
            >
              Hayır
            </button>
          </div>
          <div className="test-buttons">
            <button className="test-prev" onClick={handlePrevQuestion}>
              {" "}
              <HiArrowLeft size="20" />
            </button>
            <button className="test-next" onClick={handleNextQuestion}>
              {" "}
              <HiArrowRight size="20" />{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
