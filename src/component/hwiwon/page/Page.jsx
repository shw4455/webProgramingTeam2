import React from "react";
import styles from "./styles/globalStyles.module.css";
import Problem1 from "./Problem1.jsx";
import Problem2 from "./Problem2.jsx";
import Problem3Example from "./Problem3Example.jsx";
import Problem3 from "./Problem3.jsx";
import Problem4 from "./Problem4.jsx";
import ProblemContainer from "./ProblemContainer.jsx";
import ProblemTitle from "../component/ProblemTitle.jsx";

function Page() {
  return (
    <div className="App">
      <ProblemContainer>
        <Problem1></Problem1>
        <Problem2></Problem2>
        <Problem3Example></Problem3Example>
        <Problem3></Problem3>
        <Problem4></Problem4>
      </ProblemContainer>
    </div>
  );
}

export default Page;
