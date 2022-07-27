import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
    Button,
} from "reactstrap";
import '../css/game.detail.css';


class GameCardDetail extends Component {
    state = {isAuthenticated: false}
    componentWillMount() { this.checkUser() }

    // req ke server
    checkUser = () => {
        const token = localStorage.getItem('token')
        if(!!token) {
            return this.setState({ isAuthenticated: true});
        }
    }

    render() {
        const { isAuthenticated } = this.state
        let button;
        console.log(isAuthenticated)

        if (!isAuthenticated) {
            button = <Button color="light"><Link to='/login' className="text-black text-decoration-none">Please Login</Link></Button>
            console.log(isAuthenticated)
            console.log(localStorage.getItem('token'));
        }else {
            button = <Button color="primary"><Link to='/game' className="text-white text-decoration-none">Play</Link></Button>
            console.log(isAuthenticated)
        }
        return(
            <Fragment>
                <div className="detail-game">
                    <Card inverse>
                        <CardImg
                        alt="Card image cap"
                        src="/assets/rock-scissor-paper.jpg"
                        style={{
                            height: 450
                        }}
                        width="100%"
                        />
                        <CardImgOverlay>
                            <div className="box-title rounded">
                                <CardTitle tag="h4">
                                    Rock-Scissor-Paper
                                </CardTitle>
                                <CardText>
                                    This is game with single player mode, the player will choose between Rock, Scissor or Paper.
                                </CardText>
                                {button}
                            </div>
                        </CardImgOverlay>
                    </Card>
                </div>
            </Fragment>
        )
    }
}

export default GameCardDetail