import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function MainPage() {
    return(
        <Container fluid className='text-center main_page justify-content-center'>
            <Row style={{height: "15vh"}}></Row>
            <h1>THE DSA GRIMOIRES</h1>
                <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={2}>
                    </Col>
                    <Col xs={8}>
                    <Image className='special_img rounded shadow-lg my-5' fluid src="/grimoire_logo.png"></Image>
                    </Col>
                    <Col xs={2}>
                    </Col>
                </Row>
                </Container>
            <p>A collection of common <del>magical spells</del> programming solutions</p>
            <Row style={{height: "5vh"}}></Row>
            <Row>
                <Col></Col>
                <Col><Button as="a" href="/leetcode" className='shadow-lg btn-primary'>LeetCode</Button></Col>
                <Col><Button as="a" href="/codeforces" className='shadow-lg btn-primary'>Codeforces</Button></Col>
                <Col></Col>
            </Row>
            
            <Row style={{height: "30vh"}}></Row>
            

            
        </Container>
    )
}
