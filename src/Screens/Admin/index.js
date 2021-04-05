import React from "react";
import "./style.css";

// containers
import TestCarried from '../../Components/TestsCarried'
import DataContainer from '../../Components/Data'
import Participants from '../../Components/Participants'
import Questions from '../../Components/Questions'

const Box = ({ label, num }) => {
    return (
      <div className="box">
        <div>
          <h3 className='text-info'>{num}</h3>
        </div>
        <p className='text-info'>{label}</p>
      </div>
    );
  };

function Admin() {
  return (
    <div className="main">
      <div className="glass">
        <div className="dashboard">
          <h3 className='text-info'
            style={{ marginBottom: "2px",fontSize: '16px', fontWeight: "500" }}
          >
            Admin Panel
          </h3>
          <div className="boxContainer">
            <Box num={20} label={"Total Tests Carried"} />
            <Box num={19} label={"Number Of Questions "} />
            <Box num={14} label={"Participants"} />
            <Box num={"Data"} label={"Export Data"} />
          </div>
          <div>
            <div className="main_admin_container">
              {/* Chart container */}
              Hamza
              {/* <Chart /> */}
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Admin;
