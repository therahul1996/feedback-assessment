import React from "react";
import Form from "react-bootstrap/Form";
import user from "./images/user.jpeg";
import { Link } from "react-router-dom";
const Add = () => {
  return (
    <div className="sidebar-create-content">
      <div className="sidebar-card-body">
        <div className="sidebar-card-left">
          <div className="user-card">
            <div>
              <img src={user} alt="user" className="user-img" />
            </div>
            <div className="user-txt-sec">
              <h2>Hello Reader,</h2>
              <p>Here's your news</p>
            </div>
          </div>
          <div className="create-feedback-card">
            <h2>Have a Feedback?</h2>
            <Link to={'..'} className="close-btn">We're Listening!</Link>
          </div>
        </div>
        <div className="sidebar-card-right">
          <h2>Thankyou so much for taking time!</h2>
          <p>please provide the below details!</p>
          <Form>
            <Form.Group
              className="mb-3 w-50"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="john" />
            </Form.Group>
            <Form.Group
              className="mb-3 w-50"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="doe" />
            </Form.Group>
            <Form.Group
              className="mb-3 w-75"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3 w-50"
              controlId="exampleForm.ControlInput3"
            >
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="India" />
            </Form.Group>
            <Form.Group
              className="mb-3 w-50"
              controlId="exampleForm.ControlInput4"
            >
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="email" placeholder="john@gmail.com" />
            </Form.Group>
            <Form.Group
              className="mb-3 w-50"
              controlId="exampleForm.ControlInput5"
            >
              <Form.Label>Phone Number</Form.Label>
              <div className="d-flex">
                <Form.Select
                  aria-label="Default select example"
                  className="w-25"
                >
                  <option value="1">+91</option>
                  <option value="2">+92</option>
                  <option value="3">+93</option>
                </Form.Select>
                <Form.Control type="number" className="w-75" />
              </div>
            </Form.Group>
            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Add;
