import React, { useState } from "react";
// import styles from "./styles/Problem4.module.css";
import ProblemText from "../component/ProblemText";
import ProblemContainer from "../component/ProblemContainer";
import ToolTips from "../component/ToolTips";
import ProblemTitle from "../component/ProblemTitle";
import styles from "./styles/problem4.module.css";
import chickenImg from "./img/chicken.png";
import bicycleImg from "./img/bicycle.png";
import glassesImg from "./img/glasses.png";

// 배열 만들고, 초기화, 랜덤함수를 사용해서, 나눈 값으로 초기화
// 그에 맞는 이미지를 생성, 인풋에 배열 안에 값의 개수를 세어서, 정확히 입력하면, 정답!

function Problem4(props) {
  const [isCorrect, setIsCorret] = useState(false);

  function generateRandomArray(length, maxValue) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * maxValue) + 1);
    }
    return array;
  }

  function countNumbers(array) {
    const counts = {};
    for (const num of array) {
      if (counts[num]) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }
    }
    return counts;
  }

  // const [userInput, setUserInput] = useState({
  //   chicken: 0,
  //   glasses: 0,
  //   bicycle: 0,
  // });

  var userInput = {
    chicken: 0,
    glasses: 0,
    bicycle: 0,
  };

  const handleInputChange = (event) => {
    const id = event.target.id;
    // const value = event.target.value.parseInt();
    const value = parseInt(event.target.value);
    // const valueInt = value.parseInt(value);

    userInput = { ...userInput, [id]: value };
    console.log(userInput);

    checkDataMatch();
  };

  const checkDataMatch = () => {
    const chicken = imgAnswers["1"];
    const glasses = imgAnswers["2"];
    const bicycle = imgAnswers["3"];

    console.log('imgAnswers["1"]) :', typeof imgAnswers["1"]);
    console.log('imgAnswers["2"]) :', typeof imgAnswers["2"]);
    console.log('imgAnswers["3"]) :', typeof imgAnswers["3"]);

    console.log("userInput.chicken : ", typeof userInput.chicken);
    console.log("userInput.glasses : ", typeof userInput.glasses);
    console.log("userInput.bicycle : ", typeof userInput.bicycle);

    if (
      chicken === userInput.chicken &&
      glasses === userInput.glasses &&
      bicycle === userInput.bicycle
    ) {
      console.log("정답");
      setIsCorret(true);
    } else {
      console.log("오류");
      setIsCorret(false);
    }
  };

  const imgNumbers = generateRandomArray(16, 3);
  console.log(imgNumbers);

  const imgAnswers = countNumbers(imgNumbers);
  console.log(imgAnswers);

  return (
    <ProblemContainer>
      <ProblemTitle text="생활정보 기억하기" />
      <ProblemText
        text="다음의 여러 가지 모양들 중, 각 모양의 개수를 세어 적어보세요."
        isCorrect={isCorrect}
      />
      <div className={styles.ImgContainer}>
        <section className={styles.gallery}>
          <ul className={styles.galleryUl}>
            <li className={styles.galleryLl}>
              {imgNumbers.map((index) => {
                if (index === 1) {
                  return (
                    <img
                      className={styles.galleryImg}
                      src={chickenImg}
                      alt="img"
                    ></img>
                  );
                } else if (index === 2) {
                  return (
                    <img
                      className={styles.galleryImg}
                      src={bicycleImg}
                      alt="img"
                    ></img>
                  );
                } else if (index === 3) {
                  return (
                    <img
                      className={styles.galleryImg}
                      src={glassesImg}
                      alt="img"
                    ></img>
                  );
                }
              })}
            </li>
          </ul>
        </section>
      </div>
      <div>
        <div className={styles.BlankContainer}>
          1. 닭 :
          <input
            className={styles.blank}
            id="chicken"
            value={userInput.year}
            onChange={handleInputChange}
          />
          개 2. 안경 :
          <input
            className={styles.blank}
            id="glasses"
            value={userInput.year}
            onChange={handleInputChange}
          />
          개 3. 자전거 :
          <input
            className={styles.blank}
            id="bicycle"
            value={userInput.year}
            onChange={handleInputChange}
          />
          개
        </div>
      </div>
    </ProblemContainer>
  );
}

export default Problem4;