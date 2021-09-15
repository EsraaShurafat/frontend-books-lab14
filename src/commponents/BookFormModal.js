import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component{
    render(){
return(
    <>

<Modal show={this.props.show} onHide={this.props.formShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book To Your Favorite</Modal.Title>
        </Modal.Header>
        <Modal.Body> <form onSubmit={this.props.addBook}>
          <fieldset>
            <legend>Add Book:</legend>
            <input type='text' name='title' placeholder='Add Book' />
            <input type='text' name='description' placeholder='Add description' />
            <input type='text' name='status' placeholder='Add imge url' />
          </fieldset>
          <Button variant="secondary" type='submit'>
            Add to your books
          </Button>
          </form>
          </Modal.Body>
      </Modal>





    </>
)
    }

}

export default BookFormModal; 