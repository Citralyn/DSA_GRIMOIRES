import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

export default function Codeforces() {
    return(
        <div id="codeforces">
        <Container className="w-75">
            <Row style={{height: "10vh"}}></Row>
            <h3 className='text-center'>a list of known Codeforces spells</h3>
        <Row style={{height: "5vh"}}></Row>
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>UCI ICPC Practice Week 7</Accordion.Header>
            <Accordion.Body>
            <h1>...</h1>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>UCI ICPC Practice Week 8</Accordion.Header>
            <Accordion.Body>
            <h1>...</h1>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Container>
        </div>
    )
}