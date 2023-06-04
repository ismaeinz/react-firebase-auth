import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign in</h2>
          <Form>
            <Form.Group className=" mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className=" mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Button variant="primary" className="w-100 mt-2">
              sign in
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Forget Password ? <Link to="/forget-password">reset your password</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account ? <Link to="/signup">sign up</Link>
      </div>
    </>
  );
};

export default Login;
