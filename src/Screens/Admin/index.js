import React, {useState, useEffect} from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import {db} from '../../Data/firebase'
// containers
import TestCarried from "../../Components/TestsCarried";
import DataContainer from "../../Components/Data";
import Participants from "../../Components/Participants";
import Questions from "../../Components/Questions";

const Box = ({ label, num, screen, changeScreen }) => {
  const history = useHistory();
  
  // onClick={() => history.push("/loading/admin")}
  return (
    <div className="box" onClick={()=> changeScreen(screen)}>
      <div>
        <h3 className="text-info">{num}</h3>
      </div>
      <p className="text-info">{label}</p>
    </div>
  );
};

function Admin() {
  const [screen, setScreen] = useState(2);
  const [questions, setQuestions] = useState([]);
  const [parts,setParticipants] = useState([])
  const [tests, setTests] = useState([]);
  const changeScreen = (index)=>{
    setScreen(index)
  }

  const renderScreen = ()=>{
    switch(screen){
      case 1: return <TestCarried />; break;
      case 2: return <Questions changeScreen={changeScreen} />; break;
      case 3: return <Participants parts={parts} length={questions.length} />; break;
      case 4: return <DataContainer />; break;
      default: return true;
    }
  }

  useEffect(() => {
    (async () => {
      db.collection("questions").onSnapshot((snapshot) => {
        setQuestions(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        // console.log(questions);
      })
      db.collection("participants").onSnapshot((snapshot) => {
        setParticipants(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        // console.log(questions);
      })

      db.collection("tests").onSnapshot((snapshot) => {
        setTests(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        // console.log(questions);
      })


    })();
  }, []);
  return (
    <div className="main">
      <div className="glass">
        <div className="dashboard">
          <h3
            className="text-info"
            style={{ marginBottom: "4px", fontSize: "16px", fontWeight: "500" }}
          >
            Admin Panel
          </h3>
          <div className="boxContainer">
            <Box num={tests.length} screen={1} changeScreen={changeScreen} label={"Total Tests Carried"} />
            <Box num={questions.length} screen={2} changeScreen={changeScreen} label={"Number Of Questions "} />
            <Box num={parts.length} screen={3} changeScreen={changeScreen} label={"Participants"} />
            <Box num={"Data"} screen={4}  changeScreen={changeScreen} label={"Export Data"} />
          </div>
          <div>
            <div className="main_admin_container">
             {renderScreen()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
