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
  
  const ok = async () => {
    handleClose();
    history.push("/")
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
        <button onClick={()=>ok()} className="btn btn-info mt-3 ml-4 mb-4">Ok, Close</button>
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
  const [status, setStatus] = useState(false);
  const [response, setResponse] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [wholeData, setWholeData] = useState({})
  const [percent, setPercent] = useState(0);
  const [Timer, setTimer] = useState("t");
  let score = JSON.parse(localStorage.getItem("score"));

  const incrementScore = () => {
    let p;
    // p =(score/questions.length * 100);
    // setPercent(score/questions.length * 100)
    // console.log(p)
    // console.log(percent)
    // console.log(percent)
  };
  const responded = () => {
    setResponse(response + 1);
  };

  const timer = () => {
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    // var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setTimer(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // If the count down is finished, write some text
    if (distance < 0) {
      // clearInterval(x);
    }
  };

  const startTest = async () => {
    setTimeout(() => {
      setStart(true);
      setStatus(!status);
    }, 1200);
    // Conditonal
    if (status) {
      
      await db
        .collection("tests")
        .doc(uuidv4())
        .set({score, ...user})
        .then(() => {
          // handleClose();
          console.log(wholeData);
          // history.push("/");
          localStorage.clear();
        })
        .then(async () => {
          await db.collection("participants").doc(uuidv4()).set({score:JSON.parse(localStorage.getItem("score")), ...user});
          localStorage.setItem("score", JSON.stringify(0));
        })
        .then(()=>{setShow(true)})
        .catch((err) => console.error(err));

    }
  };

  useEffect(() => {
    (async () => {
      db.collection("questions").onSnapshot((snapshot) => {
        setQuestions(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      })
    })();
    console.log(questions.length);
    
  }, []);

  // useEffect(() => {
  //   // Know when to show modal
  //   if (response - 1 === questions.length - 1 && response > 1) {
  //     setShow(true);
  //     // alert('hamza')
  //   }
  // }, [response]);

  // useEffect(()=>{
  //   timer()
  // },[Timer])

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
          <h3 className="text-info">Nixon Management Consultancy</h3>
          <button
            // disabled= {start ? true : false}
            className={status ? "btn btn-danger" : "btn btn-success"}
            onClick={() => {
              startTest();
            }}
          >
            {status ? "Submit" : "Start"}
          </button>
        </div>
        {/* body */}
        <div className="body__home">
          {status ? (
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
