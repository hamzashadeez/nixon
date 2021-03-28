import React, {useState} from "react";
import './Question.css'

function Question({ data, incrementScore, responded }) {
  let correctAnswer = data[5];
  let dd = [data[1], data[2], data[3], data[4]];
  const [options, setOption] = useState(dd);

  const clicked = (d) => {
    setOption([d])
    responded()
    if(d === data[5]){
        incrementScore()
    }
  };
  return (
    <div>
      <h4 className=" label text-info mt-2 mb-3">{data[0]}</h4>
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
