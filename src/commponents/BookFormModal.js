import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookFormModal extends React.Component {
  render() {
    return (
      <>

        <Modal show={this.props.formShowMobal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book To Your Favorite</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={this.props.addBook}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Add Book</Form.Label>
                <Form.Control type="text" placeholder="Add Book"   name="title"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="description" >
                <Form.Label>Add description</Form.Label>
                <Form.Control type="text" placeholder="Add description" name="description" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <select aria-label="Default select example" name="status">
                  <option>status :</option>
                  <option value="1">life changing</option>
                  <option value="2">fav 5 books</option>
                  <option value="3">Recommanded book</option>
                </select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Add To Your Books
              </Button>
            </Form>
          </Modal.Body>
        </Modal>





      </>
    )
  }

}

export default BookFormModal;