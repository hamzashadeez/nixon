import React, { useState, useEffect } from "react";
import "./styles.css";
import AddQuestionModal from "../AddQuestion/AddQuestionModal";
import { db } from "../../Data/firebase";

function Questions({ changeScreen }) {
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

    // questions.map((d) => console.log(d));
  }, []);
  const d = [
    ["What is my name ?", "Usman", "Mohammad", "Hamza", "Sulaiman", "Hamza"],
    [
      "Muhammad Bn Abdullahi Bn... Muhammad Bn Abdullahi Bn... Muhammad Bn Abdullahi Bn...",
      "Garba",
      "Abdulhakim",
      "Abdul Mutallib",
      "Sulaiman",
      "Abdul Mutallib",
    ],
    ["My DOB?", "1960", "1999", "1996", "1994", "1996"],
    ["My religion...", "Hindi", "Islam", "PGG", "Christianity", "Islam"],
    [
      "Madrid is in which country",
      "England",
      "Spain",
      "Italy",
      "France",
      "Spain",
    ],
    ["The Capital of Nigeria", "Katsina", "Lagos", "Kaduna", "Abuja", "Abuja"],
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const closeModal = () => {
    changeScreen(2);
    setShow(false);
  };
  return (
    <div className="questions__main_div">
      <AddQuestionModal show={show} onHide={handleClose} close={closeModal} />
      <div className="list_of_questions">
        {/* {d.map((data, index) => (
          <h2 id="qest" key={data[0]}>
            {index + 1}. {data[0]}
          </h2>
          QuestionLabel: "The Capital of Nigeria"

        ))} */}
        {questions.map(({ id, data }) => (
          <p key={id}>* {data.QuestionLabel}</p>
        ))}
      </div>
      <div className="option__side">
        <div className="add_a_question_div">
          <button onClick={() => setShow(true)} className="btn btn-info">
            Add a Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
