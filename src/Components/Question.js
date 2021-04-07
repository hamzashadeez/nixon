import React, {useState, useEffect} from "react";
import './Question.css'

function Question({ data, incrementScore, responded }) {
  let correctAnswer = data.correctAnswer;
  let dd = [data.option1, data.option2, data.option3, data.option4];
  const [options, setOption] = useState(dd);
  let score = JSON.parse(localStorage.getItem("score"));
  useEffect(()=>{
    console.log(data)
  },[])
  const clicked = (d) => {
   if(options.length > 2){
    setOption([d])
    responded()
    console.log(d)
    console.log(correctAnswer)
    if(d === correctAnswer){
        localStorage.setItem("score", JSON.stringify(score + 1));
        incrementScore();
        // console.log(d, JSON.parse(localStorage.getItem("score")))
    }
   }
  };
  return (
    <div style={{borderBottom: "1px solid #17a2b8", paddingBottom: "15px"}}>
      <h4 className=" label text-info mt-2 mb-3">* {data.QuestionLabel}</h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {options?.map(d => (
          <button onClick={() => clicked(d)} key={d} className="btn btn-info mr-2">
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
