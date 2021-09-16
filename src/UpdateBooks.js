import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class UpdateBooks extends React.Component {
    render(){
        return(
            <>
             <Modal show={this.props.showFlag} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>  
               <Form onSubmit={this.props.updateBook}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Book title</Form.Label>
                <Form.Control type="text" name="title"
                defaultValue={this.props.title}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="description" >
                <Form.Label>Book description</Form.Label>
                <Form.Control type="text"name="description" defaultValue={this.props.description} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <select aria-label="Default select example" name="status">
                  <option>status :</option>
                  <option value="1">life changing</option>
                  <option value="2">fav 5 books</option>
                  <option value="3">Recommanded book</option>
                </select>
              </Form.Group>
              <Button type="submit">
                update 
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
            </>
        )
    }
}

export default UpdateBooks;