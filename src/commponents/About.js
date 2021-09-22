import React from 'react';
import { Card } from 'react-bootstrap';

class Aboutus extends React.Component {


    render() {
        return (
            <>
                <div>
                    <Card className="text-center">
                        <Card.Header><h1>About Us</h1></Card.Header>
                        <Card.Body>

                            <Card.Text>
                                <p></p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                     <h3>Our Team Members</h3>
                    <Card style={{ width: '18rem' },{display:'inline-block'}}>
                        <Card.Img className="img" variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U0236DP1MSS-aee36cde33f3-512" />
                        <Card.Body>
                            <Card.Title>Musa'b Jammel Hussein Shalaldeh</Card.Title>
                            <Card.Text>
                              sofware developer
                            </Card.Text>
                        </Card.Body>  
                    </Card>
                    <Card style={{ width: '18rem' },{display:'inline-block'}}>
                        <Card.Img className="img" variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U024NGNULJ2-049d8f6b72eb-512" />
                        <Card.Body>
                            <Card.Title>Tariq Sharaia</Card.Title>
                            <Card.Text>
                              
                            </Card.Text>
                        </Card.Body>  
                    </Card>
                    <Card style={{ width: '18rem' },{display:'inline-block'}}>
                        <Card.Img className="img" variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U02431DLG56-095f9a7b73cc-512" />
                        <Card.Body>
                            <Card.Title>Malak Khasawneh</Card.Title>
                            <Card.Text>
                              sofware developer
                            </Card.Text>
                        </Card.Body>  
                    </Card>
                    <Card style={{ width: '18rem' },{display:'inline-block'}}>
                        <Card.Img className="img" variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U024VA4DSLA-74c0f87d081f-512" />
                        <Card.Body>
                            <Card.Title>Amer Alqnahrah</Card.Title>
                            <Card.Text>
                              sofware developer
                            </Card.Text>
                        </Card.Body>  
                    </Card>
                    <Card style={{ width: '18rem' },{display:'inline-block'}}>
                        <Card.Img  className="img" variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U0257UBGLBB-2edc9b22fb61-512" />
                        <Card.Body>
                            <Card.Title>Esra'a shurafat</Card.Title>
                            <Card.Text>
                              sofware developer
                            </Card.Text>
                        </Card.Body>  
                    </Card>
               
                 
                </div>
            </>)


    }


}

export default Aboutus;