import React, { useEffect, useState } from "react";
import Question from "./Question";
import "./QuestionContainer.css";
import { db } from "../Data/firebase";

function QuestionContainer({ incrementScore, responded }) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    (async () => {
      db.collection("questions").onSnapshot((snapshot) => {
        setQuestions(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        console.log(questions);
      });
    })();
  }, []);
  return (
    <div className="QuestionCont">
      {questions.map(({ id, data }) => (
        <Question
          key={id}
          data={data}
          id={id}
          incrementScore={incrementScore}
          responded={responded}
        />
      ))}
    </div>
  );
}

export default QuestionContainer;
