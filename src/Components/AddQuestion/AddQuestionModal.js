import React from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";

function AddQuestionModal({close, ...props}) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modalx">
        <h4 className="text-info text-center">Add A Question</h4>
        <form>
          <label className="form_label text-info">Question label here</label>
          <input className="form__input" required placeholder="Question label" />
          <div className="obj_options">
            <input className="" type="radio" name="rightAnswer" />
            <input className="form__input" required placeholder="Option 1" />
          </div>
          <div className="obj_options">
            <input className="" type="radio" name="rightAnswer" />
            <input className="form__input" required placeholder="Option 2" />
          </div>
          <div className="obj_options">
            <input className="" type="radio" name="rightAnswer" />
            <input className="form__input" required placeholder="Option 3" />
          </div>
          <div className="obj_options">
            <input className="" type="radio" name="rightAnswer" />
            <input className="form__input" required placeholder="Option 4" />
          </div>
          <div className='mt-3'>
            <button className='btn btn-info mr-3' type='submit'>Submit</button>
            <button className='btn btn-danger' type='button' onClick={()=>close()}>Cancel</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddQuestionModal;
