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
  }, []);

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
        {questions.map(({ id, data }) => (
          <div className='questionCONT'><p key={id}>* {data.QuestionLabel}</p></div>
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
