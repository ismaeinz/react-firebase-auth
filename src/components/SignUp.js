import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contextApi/AuthContext";

const SignUp = () => {
  //
  const { signUp } = useAuthContext();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmationPasswordRef = useRef();
  const navigate = useNavigate();

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmationPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("filed to create account");
    }
    setLoading(false);
  };
  //
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">signUp</h2>
          {error && <Alert variant="danger"> {error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className=" mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className=" mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group className=" mb-2">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={confirmationPasswordRef}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              className="w-100 mt-2"
              disabled={loading}
              type="submit"
            >
              sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account ? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};

export default SignUp;
