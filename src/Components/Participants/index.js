import React from "react";
import "./styles.css";
import Table from "react-bootstrap/Table";
function Participants({ parts, length }) {
  return (
    <div className="participants_main">
      <div className="big_div">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              {/* <th className='text-info'>#</th> */}
              <th className='text-info'>Name</th>
              <th className='text-info'>State</th>
              <th className='text-info'>Phone</th>
              <th className='text-info'>Score</th>
            </tr>
          </thead>
          <tbody>
            {parts.map(({ id, data }) => (
              //   <div className='questionCONT'><p key={id}>* {data.QuestionLabel}</p></div>
              <tr>
                {/* <td className='text-info'>1</td> */}
                <td className='text-info'>{data.name}</td>
                <td className='text-info'>{data.state}</td>
                <td className='text-info'>{data.phone}</td>
                <td className='text-info'>{data.score/length * 100 } %</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="small_div"></div>
    </div>
  );
}

export default Participants;
