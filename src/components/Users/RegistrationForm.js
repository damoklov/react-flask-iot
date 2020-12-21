import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import {Button, Input, Form, Label} from './theme.js';
import {Typography} from "@material-ui/core";

function RegistrationWrapper() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
      setUser(username)
      localStorage.setItem('user', username)
  };
  const handleLogout = async e => {
      localStorage.clear();
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  if (user) {
    return (
        <Formik
          initialValues={{email: "", username: "", password: ""}}
           onSubmit={handleSubmit}>
          <Form onSubmit={handleLogout}>
              <Typography variant="h4" gutterBottom>
                  {user} is logged in
              </Typography>
              <Button type={"submit"}>Logout</Button>
          </Form>
        </Formik>
  );
  }
  return (
      <Formik
          initialValues={{email: "", username: "", password: ""}}
           onSubmit={handleSubmit}>
      <Form onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
                Registration Form
          </Typography>
          <Label>
              <Input
                name={"email"}
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                placeholder={"email"}
                type={"email"}
                required={"true"}
                />
          </Label>
          <Label>
              <Input
                name={"username"}
                onChange={({ target }) => setUsername(target.value)}
                value={username}
                placeholder={"username"}
                type={"text"}
                required={"true"}
                />
          </Label>
          <Label>
              <Input
                name={"password"}
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                placeholder={"password"}
                type={"password"}
                required={"true"}
                />
          </Label>
          <Button type={"submit"}>Submit</Button>
          <Typography variant="h6" gutterBottom>
              <a href={"/register"}>Register</a>
          </Typography>
      </Form>
      </Formik>
  );
}

export default RegistrationWrapper;