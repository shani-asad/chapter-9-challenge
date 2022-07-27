import React, { Component } from "react";
import { Button, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container, Row, Col, UncontrolledCarousel, Form, FormGroup, Input, Label, Dropdown, Media } from "reactstrap";
import { Link } from "react-router-dom";
import "../css/home.css";

class Home extends Component {
  render() {
    return (
      <div className="mainScreenOne">
        {/* Halaman Pertama*/}
        <div>
          <p className="me-auto textOnePageOne pageOnePadding">PLAY TRADITIONAL GAME</p>
          <p className="textTwoPageOne">Experience new traditional game play</p>
          <div className="buttonPageOne">
            <Button className="textButtonPageOne" size="lg" color="warning">
              <Link to="/game">Play Now</Link>
            </Button>
          </div>
          <div className="scrollDown">
            <p>The Story</p>
          </div>
          <div className="scrollDownPadding">
            <Media className="scrollDownPadding" src="./assets/scroll down.svg" />
          </div>
        </div>
        {/* Halaman Kedua */}
        <div className="mainScreenTwo">
          <Container className="paddingPageTwo">
            <Row>
              <Col className="textOnePageTwo">What's so special?</Col>
            </Row>
            <Row>
              <Col className="textTwoPageTwo">The Games</Col>
              <Col className="">
                <UncontrolledCarousel
                  className="sizeCrousel"
                  items={[
                    {
                      altText: "",
                      caption: "",
                      key: 1,
                      src: "./assets/rockpaperstrategy-1600.jpg",
                    },
                    {
                      altText: "",
                      caption: "",
                      key: 2,
                      src: "./assets/rockpaperstrategy-1600.jpg",
                    },
                    {
                      altText: "",
                      caption: "",
                      key: 3,
                      src: "./assets/rockpaperstrategy-1600.jpg",
                    },
                    {
                      altText: "",
                      caption: "",
                      key: 4,
                      src: "./assets/rockpaperstrategy-1600.jpg",
                    },
                    {
                      altText: "",
                      caption: "",
                      key: 5,
                      src: "./assets/rockpaperstrategy-1600.jpg",
                    },
                  ]}
                />
              </Col>
            </Row>
          </Container>
        </div>
        {/* Halaman Ketiga */}
        <div className="mainScreenThree">
          <Container className="paddingPageThree">
            <Row className="ms-5">
              <Col className=""></Col>
              <Col className="">
                <p className="textOnePageThree">What's so special?</p>
                <p className="textTwoPageThree marginTextOnePageThree">Features</p>
              </Col>
            </Row>
            <Row className="ms-5 marginTextTwoPageThree">
              <Col>
                <p className="simbolColorPageThree sizeSimbol">●</p>
              </Col>
              <Col className="">
                <p className="textThreePageThree ms-5">Traditional Games</p>
                <p className="textFourPageThree ms-5">if you miss your childhood, we provide many traditional games here</p>
              </Col>
            </Row>
            <Row className="ms-5 marginTextTwoPageThree">
              <Col>
                <p className="simbolColorPageThree">○</p>
              </Col>
              <Col className="">
                <p className="textThreePageThree ms-5">Game Suit</p>
              </Col>
            </Row>
            <Row className="ms-5 marginTextTwoPageThree">
              <Col>
                <p className="simbolColorPageThree">○</p>
              </Col>
              <Col className="">
                <p className="textThreePageThree ms-5">Tbd</p>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Halaman Keempat */}
        <div className="mainScreenFour">
          <div className="mainScreenFour2nd">
            <Container className="paddingPageFour">
              <Row>
                <Col className="textOnePageFour">Can My Computer Run this game?</Col>
              </Row>
              <Row>
                <Col className="">
                  <p className="textTwoPageFour marginTextOnePageFour">System</p>
                  <p className=" textTwoPageFour marginTextTwoPageFour">Requirements</p>
                </Col>
                <Col className=""></Col>
              </Row>
              <Row>
                <Col className="">
                  <p className="textThreePageFour">Os:</p>
                  <p className="textFourPageFour">Windows 7 64-bit only (No OSX support at this time)</p>
                </Col>
                <Col className="">
                  <p className="textThreePageFour">Processor</p>
                  <p className="textFourPageFour">Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</p>
                </Col>
                <Col className=""></Col>
                <Col className=""></Col>
              </Row>
              <Row>
                <Col className="">
                  <p className="textThreePageFour">Memory:</p>
                  <p className="textFourPageFour">4 GB RAM</p>
                </Col>
                <Col className="">
                  <p className="textThreePageFour">Storage:</p>
                  <p className="textFourPageFour">8 GB available space</p>
                </Col>
                <Col className=""></Col>
                <Col className=""></Col>
              </Row>
              <Row>
                <Col className="">
                  <p className="textThreePageFour">Graphics:</p>
                  <p className="textFourPageFour">
                    NVIDIA GeForce GTX 660 2GB or <br />
                    AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
                  </p>
                </Col>
                <Col className=""></Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Halaman Kelima*/}
        <div className="mainScreenFive">
          <Container>
            <Row>
              <Col className=""></Col>
              <Col className="">
                <div className="boxPageFive">
                  <Row>
                    <Col className="">
                      <div className="boxFour" />
                      <Media className="sizePhoto" src="./assets/image1.jpg" />
                    </Col>
                    <Col className="marginTwoPageFive">
                      <p className="textThreePageFive">Evan Lahti</p>
                      <div className="logoBox">
                        <Media src="./assets/twitter.svg" alt />
                      </div>
                      <p className="textFourPageFive marginOnePageFive">PC Gamer</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="">
                      <p className="textSixPageFive mt-4">“One of my gaming highlights of the year.”</p>
                      <p className="textFivePageFive">June 18, 2021</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="">
                <p className="textOnePageFive">Top Scores</p>
                <p className="textTwoPageFive">
                  This top score from various games provided
                  <br />
                  on this platform
                </p>
                <div className="mt-5">
                  <Button className="textButtonPageFive" color="warning" size="sm">
                    see more
                  </Button>
                </div>
              </Col>
              <Col className="p-4 marginLeft">
                <div className="boxPageFive">
                  <Row>
                    <Col className="">
                      <div className="boxFour" />
                      <Media className="sizePhoto" src="./assets/image2.jpg" />
                    </Col>
                    <Col className="marginTwoPageFive">
                      <p className="textThreePageFive">Jada Griffin </p>
                      <p className="textFourPageFive marginOnePageFive">Nerdreactor</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="">
                      <p className="textSixPageFive">
                        “The next big thing in the world of streaming
                        <br />
                        and survival games.”
                      </p>
                      <p className="textFivePageFive">July 10, 2021</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className=""></Col>
              <Col className="">
                <div className="boxPageFive">
                  <Row>
                    <Col className="">
                      <div className="boxFour" />
                      <Media className="sizePhoto" src="./assets/image3.jpg" />
                    </Col>
                    <Col className="marginTwoPageFive">
                      <p className="textThreePageFive">Aaron Williams</p>
                      <p className="textFourPageFive marginOnePageFive">Uproxx</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="">
                      <p className="textSixPageFive">
                        “Snoop Dogg Playing The Wildly Entertaining
                        <br />
                        ‘SOS’ Is Ridiculous.”
                      </p>
                      <p className="textFivePageFive">December 24, 2018</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Halaman Keenam*/}
        <div className="mainScreenSix">
          <Container>
            <Row>
              <Col className="">
                <Media src="./assets/image.png" alt="" />
              </Col>
              <Col className="">
                <p className="textOnePageSix">
                  Want to stay in
                  <br />
                  touch?
                </p>
                <p className="textTwoPageSix">
                  Newsletter
                  <br />
                  Subscribe
                </p>
                <p className="textThreePageSix">
                  In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.
                </p>
                <Form inline>
                  <FormGroup>
                    <Input className="sizeLabel" id="exampleEmail" name="email" placeholder="youremail@binar.co.id" type="email" />
                    <Label for="exampleEmail">Your email address</Label>
                  </FormGroup>
                </Form>
                <Button>Subscribe now</Button>
              </Col>
            </Row>
            <Row>
              <Col className="marginOnePageSix">
                <Nav className="textFourPageSix">
                  <NavItem>
                    <NavLink className="textColorPageSix" href="#">
                      Main
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="textColorPageSix" href="#">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="textColorPageSix" href="#">
                      Game Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="textColorPageSix" href="#">
                      System Requirements
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="textColorPageSix" href="#">
                      Quotes
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <Media src="./assets/facebook.svg" alt />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <Media src="./assets/twitter.svg" alt />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <Media src="./assets/Vector.svg" alt />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <Media src="./assets/twitch.svg" alt />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
            <Row className="marginTwoPageSix">
              <Col className="textFivePageSix"> © 2018 Your Games, Inc. All Rights Reserved</Col>
              <Col className="textFourPageSix marginThreePageSix">Privacy Policy | Terms of Services | Code of Conduct </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
