import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Arrays from "../spells/Arrays"
import Trees from "../spells/Trees"

export default function Leetcode() {
    return(
        <div id="leetcode">
        <Container className="w-75">
            <Row style={{height: "10vh"}}></Row>
            <h3 className='text-center'>a list of known LeetCode spells</h3>
        <Row style={{height: "5vh"}}></Row>
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Arrays</Accordion.Header>
            <Accordion.Body>
            <Arrays/>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Trees</Accordion.Header>
            <Accordion.Body>
            <Trees/>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Container>
        </div>
    )
}