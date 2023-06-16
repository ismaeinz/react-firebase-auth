import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contextApi/AuthContext";

const ForgetPassword = () => {
  const { resetPassword } = useAuthContext();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  //
  const emailRef = useRef();

  // const redirectPath = location.state?.path || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox");
    } catch {
      setError("filed to reset Password");
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Forget Password</h2>
          {error && <Alert variant="danger"> {error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className=" mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} />
            </Form.Group>

            <Button
              variant="primary"
              disabled={loading}
              className="w-100 mt-3"
              type="submit"
            >
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
