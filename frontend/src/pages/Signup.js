import React, { Component } from "react";
import { Form, Label, Input, FormGroup, Button, Container, Row, Col } from "reactstrap";
import axios from "axios";
import "../css/signup.css";

class Signup extends Component {
  state = { email: "", password: "", fullName: "", gameName: "", country: "" };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleChangeFullName = (e) => {
    this.setState({ fullName: e.target.value });
  };
  handleChangeGameName = (e) => {
    this.setState({ gameName: e.target.value });
  };
  handleChangeCountry = (e) => {
    this.setState({ country: e.target.value });
  };

  handleSignUp = async (e) => {
    const respon = await axios.post("http://localhost:8000/auth/register", {
      email: this.state.email,
      password: this.state.password,
      full_name: this.state.fullName,
      game_name: this.state.gameName,
      country: this.state.country,
    });
    console.log(respon);
  };
  render() {
    return (
      <div className="mainScreen">
        <Container>
          <Row>
            <Col className="p-5 textSignup">Sign Up</Col>
          </Row>
          <Row className="">
            <Col className=""></Col>
            <div className="boxSignup">
              <Col className="">
                <Form inline className="colorText">
                  <FormGroup className="mb-2 me-sm-2 mb-sm-2">
                    <Label className="me-sm-2" for="exampleEmail">
                      Email
                    </Label>
                    <Input id="exampleEmail" name="email" placeholder="something@idk.cool" type="email" value={this.state.email} onChange={this.handleChangeEmail} />
                  </FormGroup>
                  <FormGroup className="mb-2 me-sm-2 mb-sm-2">
                    <Label className="me-sm-2" for="examplePassword">
                      Password
                    </Label>
                    <Input id="examplePassword" name="password" placeholder="don't tell!" type="password" value={this.state.password} onChange={this.handleChangePassword} />
                  </FormGroup>
                  <FormGroup className="mb-2 me-sm-2 mb-sm-2">
                    <Label className="me-sm-2" for="exampleName">
                      Full Name
                    </Label>
                    <Input id="exampleName" name="fullName" placeholder="Reactono Prawiro Utomo" type="fullName" value={this.state.fullName} onChange={this.handleChangeFullName} />
                  </FormGroup>
                  <FormGroup className="mb-2 me-sm-2 mb-sm-2">
                    <Label className="me-sm-2" for="examplePassword">
                      Game Name
                    </Label>
                    <Input id="exampleGameName" name="gameName" placeholder="Reactono" type="gameName" value={this.state.gameName} onChange={this.handleChangeGameName} />
                  </FormGroup>
                  <FormGroup className="mb-2 me-sm-2 mb-sm-2">
                    <Label className="me-sm-2" for="exampleCountry">
                      Country
                    </Label>
                    <Input id="exampleCountry" name="country" placeholder="Indonesia" type="country" value={this.state.country} onChange={this.handleChangeCountry} />
                  </FormGroup>
                  <p></p>
                  <Button className="" onClick={this.handleSignUp}>
                    Submit
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

export default Signup;
