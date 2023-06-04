import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Forget Password</h2>
          <Form>
            <Form.Group className=" mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Button variant="primary" className="w-100 mt-2">
              send code via Email
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/login">back to login page ?</Link>
      </div>
    </>
  );
};

export default ForgetPassword;
