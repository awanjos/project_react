// import { Row } from "react-bootstrap";

// function GerenciarLogin() {
//   return <Row>LOGIN</Row>;
// }

// export { GerenciarLogin };

import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function GerenciarLogin() {
  return (
    <Row>
      <Link to="/Login">
        <Button>LOGIN</Button>
      </Link>
    </Row>
  );
}

export { GerenciarLogin };
