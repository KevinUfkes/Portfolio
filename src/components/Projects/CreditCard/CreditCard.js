import React, { useState, useEffect } from 'react';
import Navigation from './../../Navigation/Navigation.js';
import './CreditCard.css';
import 'bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Visa_L from './../../../images/visa-lg.png';
import Mastercard_S from './../../../images/mastercard-sm.png';
import Visa_S from './../../../images/visa-sm.png';
import Mastercard_L from './../../../images/mastercard-lg.png';
import "@fontsource/roboto";
// import "lato-font"

function CreditCard () {

    // Get current year/month for credit card expiry date validation
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()

    // Regular expressions for input validation
    const nameRegex = new RegExp('^[A-Za-z][A-Za-z ]*[A-Za-z]$')
    const securityNumRegex = new RegExp('^[A-Za-z0-9]{3}$')

    // Credit Card form fields
    const [name, setName] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [securityNum, setSecurityNum] = useState('');

    // Validation of Visa/Mastercard format
    const [isVisa, setIsVisa] = useState(false);
    const [isMastercard, setIsMastercard] = useState(false);

    // Validation of Credit Card form
    const [formIsValid, setFormIsValid] = useState(false);

    // Validation of Credit Card form fields
    const [nameIsValid, setNameIsValid] = useState(false);
    const [cardNumIsValid, setCardNumIsValid] = useState(false);
    const [monthIsValid, setMonthIsValid] = useState(false);
    const [yearIsValid, setYearIsValid] = useState(false);
    const [securityNumIsValid, setSecurityNumIsValid] = useState(false);

    // Detect if field has been visted. Only provide validation feeback after visitation.
    const [nameChange, setNameChange] = useState(false);
    const [cardNumChange, setcardNumChange] = useState(false);
    const [monthChange, setMonthChange] = useState(false);
    const [yearChange, setYearChange] = useState(false);
    const [securityNumChange, setSecurityNumChange] = useState(false);

    useEffect(() => {
        // Validation of name
        (name!='' && nameRegex.test(name)) ? setNameIsValid(true) : setNameIsValid(false);

        // Validation of first number of card. Visa or Mastercard
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

        // Validate credit card number length. Validate card is only Visa or Mastercard
        ((cardNum!='' && cardNum.length==16) && ((isVisa && !isMastercard) || (isMastercard && !isVisa))) ? setCardNumIsValid(true) : setCardNumIsValid(false);

        // Validate Month has been selected
        ((month!='month')) ? setMonthIsValid(true) : setMonthIsValid(false);

        // Validate Year has been selected and indicates future date in conjuction with month input
        (year !='' && ((month>currentMonth && year>=currentYear) || (month<=currentMonth && year>currentYear))) ? setYearIsValid(true) : setYearIsValid(false);

        // Validate CSC/CVV number is present and 3 characters long
        (securityNum!='' && securityNumRegex.test(securityNum)) ? setSecurityNumIsValid(true) : setSecurityNumIsValid(false);

        // Set form to valid if all inputs are valid. 
        (nameIsValid && cardNumIsValid && monthIsValid && yearIsValid && securityNumIsValid) ? setFormIsValid(true) : setFormIsValid(false)
    })

    return (
        <> 
            {/* <ProjectsNavigation/> */}
            <Navigation 
            bg = "dark"
            expand = 'lg'
            title = {["Credit Card Form", "/projects/credit-card"]}
            links = {[
                ["About", "/projects/credit-card/about"],
                ["Credit Card", "/projects/credit-card"],
              ]}
          />
            <h1>Credit Card Validation</h1>
            {/* <hr></hr> */}
            <Container fluid className='main'>
                <Row className="justify-content-md-center">
                    <Col sm={{span: 12}} md={{span:8}} lg={{span:7}} xl={{span:6}} xxl={{span:4}}>
                        <Row>
                            <Col>
                                <h3>Payment</h3>
                            </Col>
                        </Row>
                        <Form>
                            <Card>
                                <Card.Header>
                                    <Row>
                                        <p>We only accept Mastercard and Visa</p>
                                    </Row>    
                                    <Row>
                                        <Col className='card-img'>

                                            {/* Display large/small credit card image based on isVisa/isMastercard states */}
                                            {!isMastercard &&
                                                <img src={Mastercard_S} width="52.42px" height="37px"></img>
                                            }

                                            {isMastercard &&
                                                <img src={Mastercard_L} width="80px" height="60px"></img>
                                            }

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
                                        <Row>
                                            <Form.Label>
                                                <div className='required'>Name on Card</div>
                                                <Form.Control 
                                                    type='text' 
                                                    name='name' 
                                                    value={name} 
                                                    isInvalid={!nameIsValid && nameChange} 
                                                    onChange={event => setName(event.target.value)}
                                                    onBlur={() => setNameChange(true)}
                                                />
                                                {nameChange && !nameIsValid &&
                                                    <p className='error-message'>
                                                         Sorry, this name is not valid. Please try again.
                                                    </p>
                                                }
                                            </Form.Label>
                                        </Row>
                                        <Row>
                                            <Form.Label>
                                                <div className='required'>Card Number</div>
                                                <Form.Control 
                                                    type='number' 
                                                    name='cardNum' 
                                                    value={cardNum} 
                                                    isInvalid={!cardNumIsValid && cardNumChange}
                                                    onChange={event => setCardNum(event.target.value)}
                                                    onBlur={() => setcardNumChange(true)}
                                                />
                                                {cardNumChange && !cardNumIsValid &&
                                                    <p className='error-message'>
                                                         Sorry, this credit card number is not valid. Please try again.
                                                    </p>
                                                }   
                                            </Form.Label>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={8}>
                                                <Row>
                                                    <Col xs={6}>
                                                        <Row>
                                                            <Form.Label>
                                                                <br></br>
                                                                <Form.Select 
                                                                    name='month' 
                                                                    value={month}
                                                                    isInvalid={!monthIsValid && monthChange}
                                                                    onChange={event => setMonth(event.target.value)}
                                                                    onBlur={() => setMonthChange(true)}
                                                                >
                                                                    <option value='month'>Month</option>
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
                                                                {monthChange && !monthIsValid &&
                                                                <p className='error-message'>
                                                                    Sorry, this date is not valid. Please try again.
                                                                </p>
                                                                }  
                                                            </Form.Label>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Row>
                                                            <Form.Label>
                                                                <br></br>
                                                                <Form.Select 
                                                                    name='year' 
                                                                    value={year} 
                                                                    isInvalid={!yearIsValid && yearChange && monthChange}
                                                                    onChange={event => [setYear(event.target.value)]}
                                                                    onBlur={() => setYearChange(true)}
                                                                >
                                                                    <option value=''>Year</option>                                                                  <option value='2021'>2021</option>
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
                                                                {yearChange && !yearIsValid && monthChange &&
                                                                    <p className='error-message'>
                                                                        Sorry, this date is not valid. Please try again.
                                                                    </p>
                                                                }  
                                                            </Form.Label>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={12} sm={{span: 3, offset: 1}}>
                                                <Row>
                                                    <Form.Label>
                                                        <div className='required'>CSC/CVV</div>
                                                    
                                                        <Form.Control 
                                                            type='text' 
                                                            name='securityNum' 
                                                            value={securityNum} 
                                                            isInvalid={!securityNumIsValid && securityNumChange}
                                                            onChange={event => {setSecurityNum(event.target.value)}}
                                                            onBlur={() => setSecurityNumChange(true)}
                                                        />
                                                        {securityNumChange && !securityNumIsValid &&
                                                                    <p className='error-message'>
                                                                        Sorry, this CSC/CVV is not valid. Please try again.
                                                                    </p>
                                                                }  
                                                    </Form.Label>
                                                </Row>
                                            </Col>
                                        </Row>
                                       
                                    </Container>
                                </Card.Body>  
                            </Card>
                            <Container>
                                <Row>
                                    <Col sm={{span: 3, offset:2}} fluid>
                                        <Form.Control 
                                            className='cc_btn cc_back'
                                            type="button"
                                            value="Back"
                                        ></Form.Control>
                                    </Col>
                                    <Col sm={{span: 3, offset:1}} fluid>
                                        <Form.Control
                                            className='cc_btn'
                                            type='submit'
                                            value='Continue'
                                            disabled={(formIsValid) ? false : true}
                                        ></Form.Control> 
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </Col>
                </Row> 
            </Container>
        </>
    )
}

export default CreditCard;
