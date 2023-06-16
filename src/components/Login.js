import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contextApi/AuthContext";

const Login = () => {
  const { login } = useAuthContext();
  const location = useLocation();

  //
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const redirectPath = location.state?.path || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath, { replace: true });
    } catch {
      setError("filed to sign in");
    }
    setLoading(false);
  };
  //
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign in</h2>
          {error && <Alert variant="danger"> {error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className=" mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} />
            </Form.Group>
            <Form.Group className=" mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} />
            </Form.Group>

            <Button
              variant="primary"
              className="w-100 mt-2"
              disabled={loading}
              type="submit"
            >
              log in
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
