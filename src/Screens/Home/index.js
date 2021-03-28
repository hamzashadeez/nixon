import React, { useState, useEffect } from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import QuestionContainer from "../../Components/QuestionContainer";
import { Data } from "../../Data/Questions";
import { useHistory } from "react-router-dom";
import { db } from "../../Data/firebase";
import { v4 as uuidv4 } from "uuid";

function Success({ handleClose, score, ...props }) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const wholeData = { score, ...user };
  const ok = async () => {
    db.collection("tests")
      .doc(uuidv4())
      .set(wholeData)
      .then(() => {
        handleClose();
        console.log(wholeData);
        history.push("/");
        localStorage.clear();
      })
      .catch((err) => console.error(err));
  };
  return (
    <Modal
      {...props}
      size="md"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-info text-muted"
        >
          Congratulations
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-info text-center">
          You've successfully Completed the test
        </h4>
        <button onClick={ok} className="btn btn-info mt-3 ml-4 mb-4">
          Ok, Close
        </button>
      </Modal.Body>
    </Modal>
  );
}

function Home() {
  const [start, setStart] = useState(false);
  const [show, setShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  const handleClose = () => setShow(false);
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState(0);

  const incrementScore = () => {
    setScore(score + 5);
  };
  const responded = () => {
    setResponse(response + 1);
  };

  useEffect(() => {
    // Know when to show modal
    if (response - 1 === Data.length - 1) {
      setShow(true);
      // alert('hamza')
    }
  }, [response]);

  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  }, []);
  return (
    <div className="main">
      <div className="glass">
        <Success
          show={show}
          onHide={handleClose}
          score={score}
          handleClose={handleClose}
        />
        <div className="head">
          <h3 className="text-info">NIXON</h3>
          <button
            className="btn btn-success"
            onClick={() => {
              setStart(true);
            }}
          >
            Start
          </button>
        </div>
        {/* body */}
        <div className="body__home">
          {start ? (
            <QuestionContainer
              incrementScore={incrementScore}
              responded={responded}
            />
          ) : (
            <div>
              <h2 className="h2_instructor">Click the Start button to begin</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
