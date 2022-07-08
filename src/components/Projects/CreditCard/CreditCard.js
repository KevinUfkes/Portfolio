import React, { useState } from 'react';
import './CreditCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';


function CreditCard () {

    const [name, setName] = useState('');
    const [cardNum, setCardNum] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [securityNum, setSecurityNum] = useState();

    return (
        <>
            <Container>
                <Row>
                    <h1>Credit Card Validation</h1>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <Col>
                        <h3>Payment</h3>

                        <p>We only accept Master and Visa</p>
                        <Container>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            Name on Card
                                            <Form.Control type='text' name='name' value={name} onChange={event => setName(event.target.value)}></Form.Control>
                                        </Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            Card Number
                                            <Form.Control type='number' name='cardNum' value={cardNum} onChange={event => setCardNum(event.target.value)}></Form.Control>
                                        </Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            <br></br>
                                            <Form.Select name='month' value={month} onChange={event => setMonth(event.target.value)}>
                                                <option value=''>Month</option>
                                                <option value='jan'>Jan</option>
                                                <option value='feb'>Feb</option>
                                                <option value='mar'>Mar</option>
                                                <option value='apr'>Apr</option>
                                                <option value='may'>May</option>
                                                <option value='jun'>Jun</option>
                                                <option value='jul'>Jul</option>
                                                <option value='aug'>Aug</option>
                                                <option value='sep'>Sep</option>
                                                <option value='oct'>Oct</option>
                                                <option value='nov'>Nov</option>
                                                <option value='dec'>Dec</option>
                                            </Form.Select>
                                        </Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <br></br>
                                            <Form.Select name='year' value={year} onChange={event => setYear(event.target.value)}>
                                                <option value=''>Year</option>
                                                <option value='2022'>2022</option>
                                                <option value='2023'>2023</option>
                                                <option value='2024'>2024</option>
                                                <option value='2025'>2025</option>
                                                <option value='2026'>2026</option>
                                                <option value='2027'>2027</option>
                                                <option value='2028'>2028</option>
                                                <option value='2029'>2029</option>
                                                <option value='2030'>2030</option>
                                                <option value='2031'>2031</option>
                                                <option value='2032'>2032</option>
                                                <option value='2033'>2033</option>
                                                <option value='2034'>2034</option>
                                                <option value='2035'>2035</option>
                                                <option value='2036'>2036</option>
                                                <option value='2037'>2037</option>
                                                <option value='2038'>2038</option>
                                                <option value='2039'>2039</option>
                                                <option value='2040'>2040</option>
                                                <option value='2041'>2041</option>
                                                <option value='2042'>2042</option>
                                            </Form.Select>
                                        </Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            CSC/CVV
                                            <Form.Control type='number' name='securityNum' value={securityNum} onChange={event => {setSecurityNum(event.target.value)}}></Form.Control>
                                        </Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control type='submit' value="Submit" placeholder='disabled'></Form.Control>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <p>Name: {name}</p>
            <p>Card Number: {cardNum}</p>
            <p>Month: {month}</p>
            <p>Year: {year}</p>
            <p>CSC/CVV: {securityNum}</p>


        </>
    )
}

export default CreditCard;
