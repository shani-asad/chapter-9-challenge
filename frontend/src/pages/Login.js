import React, { Component } from "react";
import { Form, Label, Input, FormGroup, Button, Container, Row, Col } from "reactstrap";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";

class Login extends Component {
  state = { email: "", password: "" };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = async (e) => {
    const respon = await axios.post("http://localhost:8000/auth/login", {
      email: this.state.email,
      password: this.state.password,
    });
    localStorage.setItem("token", respon.data.token);
    console.log(localStorage.getItem("token"));
  };

  render() {
    return (
      <div className="mainScreen">
        <Container>
          <Row>
            <Col className="p-5 textLogin">Login</Col>
          </Row>
          <Row className="">
            <Col className=""></Col>
            <div className="boxLogin">
              <Col className="">
                <Form inline className="colorText">
                  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label className="me-sm-2" for="exampleEmail">
                      Email
                    </Label>
                    <Input id="exampleEmail" name="email" placeholder="something@idk.cool" type="email" value={this.state.email} onChange={this.handleChangeEmail} />
                  </FormGroup>
                  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label className="me-sm-2" for="examplePassword">
                      Password
                    </Label>
                    <Input id="examplePassword" name="password" placeholder="don't tell!" type="password" value={this.state.password} onChange={this.handleChangePassword} />
                  </FormGroup>
                  <p></p>
                  <Button className="" onClick={this.handleLogin}>
                    Submit
                  </Button>
                  <Button className="ms-2">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </Form>
              </Col>
            </div>
            <Col className=""></Col>
          </Row>
          <Row>
            <Col className=""></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
