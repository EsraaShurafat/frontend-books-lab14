import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './BestBooks.css';
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';
import BookFormModal from './commponents/BookFormModal';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    formShow: false,
      books: []
    }
  }

  componentDidMount = () =>{
    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .get(`https://lab-12-books.herokuapp.com/books?email=${email}`)
    .then( result =>{
      console.log(result.data);
      this.setState({
       
        books:result.data
      })
    })
    .catch (err =>{
      console.log('error');
    })
  };
// error fixing
  addBook = (event) =>{
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
        title: event.target.title.value,
        description: event.target.description.value,
        status:event.target.status.value,
        authoremail:email
    }
    console.log(obj);

axios
.post(`https://lab-12-books.herokuapp.com/addBook`,obj)
.then(result =>{
  this.setState({
    books: result.data
  })
})
.catch(err=>{
  console.log('Error on adding data');
})
}

formShow =()=>{
  this.setState({formShow: !this.state.formShow});
};


  deleteBook = (id) =>{
    
    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .delete(`https://lab-12-books.herokuapp.com/deleteBook/${id}?email=${email}`)
    .then(result =>{
      this.setState({
        books: result.data
      })
    })
    .catch(err=>{
      console.log('error in deleting book');
    })
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {
    

    return (
      <>
      
       <Button variant="primary" onClick={this.formShow}>Add Book</Button>{' '}
      
        <Card className='card'>
          <Card.Body> <h1>My Favorite Books</h1>
            <p>
              This is a collection of my favorite books
            </p></Card.Body>
        </Card>
        {this.state.formShow && (  
        <>
        <BookFormModal 
        addBook={this.addBook}
        show={this.state.formShow}
        formShow={this.formShow}
        />
           </>
        )}
      

      
 
    {this.state.books.map(item =>{return( 
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
      <button onClick={()=>this.deleteBook(item._id)} >Delete Book</button>
    </Card.Body>
  </Card.Body>
</Card>)})}  
 


      </>
    )
}
}

export default withAuth0(BestBooks);
