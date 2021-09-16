import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Books extends React.Component {
    render() {
        console.log(this.props.Books);
        return (
            <>
                {this.props.books.map(item => {
                    return (
                        <Card className='Carousel ' >
                            <Card.Body>
                                <img
                                    className="d-block w-100"
                                    src={item.status}
                                    alt="First slide"
                                />
                                <Card.Body>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <Button type='submit' onClick={() => this.props.deleteBook(item._id)} >Delete Book</Button>
                                 
                                </Card.Body>
                                <Card.Body>
                                <Button  type='submit' onClick={()=>this.props.showUpdateForm(item)} >update Book</Button>
                                 </Card.Body>
                            </Card.Body>
                        </Card>)
                })}

            </>
        )
    }
}

export default Books;