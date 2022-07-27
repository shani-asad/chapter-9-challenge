import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../css/game.css";

class Game extends Component {
  render() {
    return (
      <div className="mainScreenOneGame">
        {/* Content */}
        <Container>
          {/* Baris 1 */}
          <Row className="textOnePageGame">
            <Col className=""></Col>
            <Col className="">Player 1</Col>
            <Col className=""></Col>
            <Col className="">Com</Col>
            <Col className=""></Col>
          </Row>
          {/* Baris 2 */}
          <Row className="positionItem">
            <Col className=""></Col>
            <Col className="">
              <div className="boxChoose">
                <a href="#">
                  <img className="sizeItem" src="./assets/batu.png" alt="batu" />
                </a>
              </div>
            </Col>
            <Col className=""></Col>
            <Col className="">
              <div className="boxChoose">
                <a href="#">
                  <img className="sizeItem" src="./assets/batu.png" alt="batu" />
                </a>
              </div>
            </Col>
            <Col className=""></Col>
          </Row>
          {/* Baris 3 */}
          <Row className="positionItem">
            <Col className=""></Col>
            <Col className="">
              <div className="boxChoose">
                <a href="#">
                  <img className="sizeItem" src="./assets/kertas.png" alt="kertas" />
                </a>
              </div>
            </Col>
            <Col className="">
              <img className="sizeItemTwo" src="./assets/VS.png" alt="VS" />
            </Col>
            <Col className="">
              <div className="boxChoose">
                <a href="#">
                  <img className="sizeItem" src="./assets/kertas.png" alt="kertas" />
                </a>
              </div>
            </Col>
            <Col className=""></Col>
          </Row>
          {/* Baris 4 */}
          <Row className="positionItem">
            <Col className=""></Col>
            <Col className="">
              <div className="boxChoose">
                <a href="#">
                  <img className="sizeItem" src="./assets/gunting.png" alt="gunting" />
                </a>
              </div>
            </Col>
            <Col className=""></Col>
            <Col className="">
              <div className="boxChoose">
                <a href="#">
                  <img className="sizeItem" src="./assets/gunting.png" alt="gunting" />
                </a>
              </div>
            </Col>
            <Col className=""></Col>
          </Row>
          {/* Baris 5 */}
          <Row className="positionItem">
            <Col className=""></Col>
            <Col className=""></Col>
            <Col className="">
              <a href="#">
                <img className="" src="./assets/refresh.png" alt="refresh" />
              </a>
            </Col>
            <Col className=""></Col>
            <Col className=""></Col>
          </Row>
          {/* Score */}
          <div className="mt-5">
            <Row className="positionItemScoreOne">
              <Col className=""></Col>
              <Col className=""></Col>
              <Col className="textScoreOne">Score</Col>
              <Col className=""></Col>
              <Col className=""></Col>
            </Row>
            <Row className="positionItemScoreTwo">
              <Col className=""></Col>
              <Col className="textScoreOne">Player 1</Col>
              <Col className=""></Col>
              <Col className="textScoreOne">Com</Col>
              <Col className=""></Col>
            </Row>
            <Row className="positionItemScoreTwo">
              <Col className=""></Col>
              <Col className="textScoreTwo">1</Col>
              <Col className=""></Col>
              <Col className="textScoreTwo">0</Col>
              <Col className=""></Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Game;
