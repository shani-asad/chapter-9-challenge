import React, {Component, Fragment} from "react";
import { Col, Media} from 'reactstrap';

class GameLeaderboard extends Component {
    render() {
        return(
            <Fragment>
                <Col className="border rounded shadow">
                    <Media object src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" className="mt-1 img-thumbnail w-25 rounded" alt="..." />
                    <h5>Egi Maulana</h5>
                    <p>Point : 600</p>
                </Col>
                <Col className="border rounded shadow mx-2">
                    <Media object src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" className="mt-1 img-thumbnail w-25 rounded" alt="..." />
                    <h5>Egi Maulana</h5>
                    <p>Point : 500</p>
                </Col>
                <Col className="border rounded shadow">
                    <Media object src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" className="mt-1 img-thumbnail w-25 rounded" alt="..." />
                    <h5>Egi Maulana</h5>
                    <p>Point : 400</p>
                </Col>
            </Fragment>
        )
    }
}

export default GameLeaderboard