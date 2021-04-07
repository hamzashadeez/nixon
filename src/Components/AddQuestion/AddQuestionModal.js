import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import { db } from "../../Data/firebase";
import { v4 as uuidv4 } from "uuid";

function AddQuestionModal({ close, ...props }) {
  const [QuestionLabel, setQuestionLabel] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    const data = {
      QuestionLabel,
      option1,
      option2,
      option3,
      option4,
      correctAnswer,
    };
    if(correctAnswer !== ""){
        db.collection("questions")
          .doc(uuidv4())
          .set(data)
          .then(() => {
            close();
          })
          .catch((err) => console.error(err));
        console.log(data);

    }else{
        alert("Please Check the correct Answer")
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modalx">
        <h4 className="text-info text-center">Add A Question</h4>
        <form onSubmit={submit}>
          <label className="form_label text-info">Question label here</label>
          <input
            className="form__input"
            value={QuestionLabel}
            onChange={(e) => setQuestionLabel(e.target.value)}
            required
            placeholder="Question label"
          />
          <p style={{ color: "orange", fontSize: "12px" }}>
            Make sure you check the correct answer before submitting
          </p>
          <div className="obj_options">
            <input
              className=""
              type="radio"
              value={option1}
              onChange={() => setCorrectAnswer(option1)}
              name="rightAnswer"
            />
            <input
              className="form__input"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              required
              placeholder="Option 1"
            />
          </div>
          <div className="obj_options">
            <input
              className=""
              type="radio"
              name="rightAnswer"
              value={option2}
              onChange={() => setCorrectAnswer(option2)}
            />
            <input
              className="form__input"
              required
              placeholder="Option 2"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
            />
          </div>
          <div className="obj_options">
            <input
              className=""
              type="radio"
              name="rightAnswer"
              value={option2}
              onChange={() => setCorrectAnswer(option2)}
            />
            <input
              className="form__input"
              required
              placeholder="Option 3"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
            />
          </div>
          <div className="obj_options">
            <input
              className=""
              type="radio"
              name="rightAnswer"
              value={option2}
              onChange={() => setCorrectAnswer(option2)}
            />
            <input
              className="form__input"
              required
              placeholder="Option 4"
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <button className="btn btn-info mr-3" type="submit">
              Submit
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddQuestionModal;
