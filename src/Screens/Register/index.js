import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";

const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];
function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");

  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    const data = { name, phone, email, state };
    localStorage.setItem("user", JSON.stringify(data));
    history.push("/test");
  };
  return (
    <div className="main">
      <div className="glass">
        <div
         className='entire'
        >
          <div className="intro">
            {/* <button className="btn btn-success admin">Admin</button> */}
            <h2
              className="h2_instructor"
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              Welcome to Nixon!
            </h2>
            <h4
              style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}
            >
              Fill the form and start the test
            </h4>
            <p className="p__warning mb-4">
              Remember, if you switch to a different browser tab or minimize the
              browser, your test will be submitted automatically{" "}
            </p>
          </div>
          <div className="form">
            <form onSubmit={(e) => submit(e)}>
              <h2 style={{ color: "#888", marginBottom: '20px' }}>Registration Form</h2>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
              <input
                required
                type="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Form >
                <Form.Group
                  className='ff'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  controlId="exampleForm.SelectCustom"
                  required
                >
                  <Form.Control as="select" custom>
                    {states.map(d=><option>{d}</option>)}
                  </Form.Control>
                </Form.Group>
              </Form>
              <button type="submit">Start the test</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
