import React, { useState, useEffect } from 'react';
import './CreditCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Visa_L from './../../../images/visa-lg.png';
import Mastercard_S from './../../../images/mastercard-sm.png';
import Visa_S from './../../../images/visa-sm.png';
import Mastercard_L from './../../../images/mastercard-lg.png';




function CreditCard () {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()

    const nameRegex = new RegExp('^[A-Za-z][A-Za-z ]*[A-Za-z]$')
    const securityNumRegex = new RegExp('^[A-Za-z0-9]{3}$')

    // Credit Card form fields
    const [name, setName] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [securityNum, setSecurityNum] = useState('');

    // Validation of Credit Card form fields
    const [nameIsValid, setNameIsValid] = useState(false);
    const [cardNumIsValid, setCardNumIsValid] = useState(false);
    const [monthIsValid, setMonthIsValid] = useState(false);
    const [yearIsValid, setYearIsValid] = useState(false);
    const [securityNumIsValid, setSecurityNumIsValid] = useState(false);

    // Validation of Visa/Mastercard format
    const [isVisa, setIsVisa] = useState(false);
    const [isMastercard, setIsMastercard] = useState(false);

    // Validation of Credit Card form
    const [formIsValid, setFormIsValid] = useState(false);

    

    useEffect(() => {
        (name!='' && nameRegex.test(name)) ? setNameIsValid(true) : setNameIsValid(false);

        if(cardNum[0]==4){
            setIsVisa(true);
            setIsMastercard(false);
        } else if(cardNum[0]==5){
            setIsMastercard(true);
            setIsVisa(false);
        } else{
            setIsVisa(false);
            setIsMastercard(false);
        }

        ((cardNum!='' && cardNum.length==16) && ((isVisa && !isMastercard) || (isMastercard && !isVisa))) ? setCardNumIsValid(true) : setCardNumIsValid(false);

        ((month!=='') && ((month>currentMonth && year>=currentYear) || (month<=currentMonth && year>currentYear))) ? setMonthIsValid(true) : setMonthIsValid(false);
        (year>=currentYear && year !=='') ? setYearIsValid(true) : setYearIsValid(false);
        (securityNum!=='' && securityNumRegex.test(securityNum)) ? setSecurityNumIsValid(true) : setSecurityNumIsValid(false);

        (nameIsValid && cardNumIsValid && monthIsValid && yearIsValid && securityNumIsValid) ? setFormIsValid(true) : setFormIsValid(false)
    })

    return (
        <> 
            <h1>Credit Card Validation</h1>
            <hr></hr>
            <Container fluid>
                <h3>Payment</h3>
                <Row className="justify-content-md-center">
                    <Col sm={{span: 12}} md={{span:8}} lg={{span:6}} xl={{span:5}} xxl={{span:4}}>
                        <Card>
                            <Card.Header>
                                <Row className='justify-content-left'>
                                    <p>We only accept Master and Visa</p>
                                </Row>    
                                <Row>
                                    <Col className='card-img'>
                                        {!isMastercard &&
                                            <img src={Mastercard_S} width="52.42px" height="37px"></img>
                                        }

                                        {isMastercard &&
                                            <img src={Mastercard_L} width="80px" height="60px"></img>
                                        }

                                    {/* </Col>
                                    <Col> */}
                                        {!isVisa && 
                                            <img src={Visa_S} width="52.42px" height="37px"></img>
                                        }
                                    
                                        {isVisa &&
                                            <img src={Visa_L} width="80px" height="60px"></img>
                                        }
                                    </Col>
                                </Row>
                            </Card.Header>   
                            <Card.Body>
                                 
                                <Container fluid>
                                    <Form>
                                        <Row>
                                            <Form.Label>
                                                Name on Card
                                                <Form.Control type='text' name='name' value={name} isValid={nameIsValid} onChange={event => setName(event.target.value)}></Form.Control>
                                            </Form.Label>
                                        </Row>
                                        <Row>
                                            <Form.Label>
                                                Card Number
                                                <Form.Control type='number' name='cardNum' value={cardNum} isValid={cardNumIsValid} onChange={event => setCardNum(event.target.value)}></Form.Control>
                                            </Form.Label>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={8}>
                                                <Row>
                                                    <Col xs={6}>
                                                        <Row>
                                                            <Form.Label>
                                                                <br></br>
                                                                <Form.Select name='month' value={month} isValid={monthIsValid} onChange={event => setMonth(event.target.value)}>
                                                                    <option value=''>Month</option>
                                                                    <option value='0'>Jan</option>
                                                                    <option value='1'>Feb</option>
                                                                    <option value='2'>Mar</option>
                                                                    <option value='3'>Apr</option>
                                                                    <option value='4'>May</option>
                                                                    <option value='5'>Jun</option>
                                                                    <option value='6'>Jul</option>
                                                                    <option value='7'>Aug</option>
                                                                    <option value='8'>Sep</option>
                                                                    <option value='9'>Oct</option>
                                                                    <option value='10'>Nov</option>
                                                                    <option value='11'>Dec</option>
                                                                </Form.Select>
                                                            </Form.Label>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Row>
                                                            <Form.Label>
                                                                <br></br>
                                                                <Form.Select name='year' value={year} isValid={yearIsValid} onChange={event => [setYear(event.target.value)]}>
                                                                    <option value=''>Year</option>
                                                                    <option value='2021'>2021</option>
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
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={12} sm={{span: 3, offset: 1}}>
                                                <Row>
                                                    <Form.Label>
                                                        CSC/CVV
                                                        <Form.Control type='text' name='securityNum' value={securityNum} isValid={securityNumIsValid} onChange={event => {setSecurityNum(event.target.value)}}></Form.Control>
                                                    </Form.Label>
                                                </Row>
                                            </Col>
                                        </Row>
                                        
                                    </Form>
                                </Container>
                            </Card.Body>  
                        </Card>
                        <Container>
                            <Row>
                                <Col sm={{span:4, offset:2}}>
                                    <Button className='back'
                                        type="button"
                                    >Back</Button>
                                    
                                </Col>
                                <Col sm={4}>
                                    <Button 
                                        type='submit'
                                        disabled={(formIsValid) ? false : true}
                                    >Continue</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row> 
            </Container>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <p> Is Visa: 
                {isVisa && <p>True</p>}
                {!isVisa && <p>False</p>}
            </p>
            <p> Is Mastercard: 
                {isMastercard && <p>True</p>}
                {!isMastercard && <p>False</p>}
            </p>

            <p>Name: {name}</p>
            <p>Card Number: {cardNum}</p>
            <p>Month: {month}</p>
            <p>Year: {year}</p>
            <p>CSC/CVV: {securityNum}</p>


            <hr></hr>
            <p> Name Valid: 
                {nameIsValid && <p>True</p>}
                {!nameIsValid && <p>False</p>}
            </p>

            <p> Card Number Valid: 
                {cardNumIsValid && <p>True</p>}
                {!cardNumIsValid && <p>False</p>}
            </p>

            <p> Month Valid: 
                {monthIsValid && <p>True</p>}
                {!monthIsValid && <p>False</p>}
            </p>

            <p> Year Valid: 
                {yearIsValid && <p>True</p>}
                {!yearIsValid && <p>False</p>}
            </p>

            <p> Security Number Valid: 
                {securityNumIsValid && <p>True</p>}
                {!securityNumIsValid && <p>False</p>}
            </p>

            <p> Form Valid: 
                {formIsValid && <p>True</p>}
                {!formIsValid && <p>False</p>}
            </p>

        </>
    )
}

export default CreditCard;
