import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Badge, 
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

const GameCard = (args) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <Fragment>
            <Container>
                <h5>
                    Game List
                </h5>
            </Container>
            <CardGroup>
                <Card>
                    <CardImg alt="Card image cap" src="/assets/rock-scissor-paper.jpg" top width="100%"/>
                    <CardBody>
                        <CardTitle tag="h5">
                            Rock Scissor Paper
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-danger" tag="h6">
                            <Badge color="danger">
                                New
                            </Badge>
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Link to="/game/detail/rock-scissor-paper">
                            <Button color="primary">
                                Game Detail
                            </Button>
                        </Link>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%"/>
                    <CardBody>
                        <CardTitle tag="h5">
                            Game Two
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Coming Soon
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button onClick={toggle}>
                            Game Detail
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%"/>
                    <CardBody>
                        <CardTitle tag="h5">
                            Game Three
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Coming Soon
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button onClick={toggle}>
                            Game Detail
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%"/>
                    <CardBody>
                        <CardTitle tag="h5">
                            Game Five
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Coming Soon
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button onClick={toggle}>
                            Game Detail
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%"/>
                    <CardBody>
                        <CardTitle tag="h5">
                            Game Six
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Coming Soon
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button onClick={toggle}>
                            Game Detail
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%"/>
                    <CardBody>
                        <CardTitle tag="h5">
                            Game Four
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Coming Soon
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button onClick={toggle}>
                            Game Detail
                        </Button>
                    </CardBody>
                </Card>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>Coming Soon</ModalHeader>
                    <ModalBody>
                        <img src="/assets/coming-soon.jpg" className="img-fluid"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Thanks!</Button>
                    </ModalFooter>
                </Modal>
            </CardGroup>
        </Fragment>
    )
}
export default GameCard