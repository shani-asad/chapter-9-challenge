import React, { Component, Fragment } from "react";
import { Col, Container, Row, Media } from "reactstrap";
import GameCardDetail from "../components/GameCardDetail";
import GameLeaderboard from "../components/GameLeaderboard";
import '../css/game.detail.css';
import Navbarr from "../components/navbar";

class GameDetail extends Component {
    render(){
        return(
            <Fragment>
                <Container>
                    <GameCardDetail/>
                </Container>
                <Container>
                    <Row className="mt-5">
                        <Col className="border-bottom border-primary col-3">
                            <h3>
                                Leader Board
                            </h3>
                        </Col>
                    </Row>
                    <Row className="mt-3 text-center">
                        <GameLeaderboard/>
                    </Row>
                    <Row className="mt-5">
                        <Col className="border-bottom border-primary col-3">
                            <h3>
                                Description
                            </h3>
                        </Col>
                        <Col className="col-12 mt-4">
                            <p>
                                This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game.
                            </p>
                            <p>
                                This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default GameDetail