import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contextApi/AuthContext";

const DashBoard = () => {
  //
  const { currentUser, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {}
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <strong>Email :{currentUser && currentUser.email}</strong>
          <br />
          <Link to="/update-profile">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button className="btn btn-primary " onClick={handleSignOut}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default DashBoard;
