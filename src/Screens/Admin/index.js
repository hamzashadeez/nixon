import React, {useState} from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
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
  const [screen, setScreen] = useState(1);
  const changeScreen = (index)=>{
    setScreen(index)
  }

  const renderScreen = ()=>{
    switch(screen){
      case 1: return <TestCarried />; break;
      case 2: return <Questions changeScreen={changeScreen} />; break;
      case 3: return <Participants />; break;
      case 4: return <DataContainer />; break;
      default: return true;
    }
  }
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
            <Box num={20} screen={1} changeScreen={changeScreen} label={"Total Tests Carried"} />
            <Box num={19} screen={2} changeScreen={changeScreen} label={"Number Of Questions "} />
            <Box num={14} screen={3} changeScreen={changeScreen} label={"Participants"} />
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
