import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import GameCard from "../components/GameCard";
import GameCarousel from "../components/GameCarousel";

import '../style.module.css';

class GameList extends Component {
    render(){
        return(
            <Fragment>
                <Container fluid className="p-0">
                    <GameCarousel/>
                </Container>
                <Container className="mt-5">
                    <GameCard/>
                </Container>
            </Fragment>
        )
    }
}

export default GameList