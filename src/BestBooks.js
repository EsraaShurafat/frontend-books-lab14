import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './BestBooks.css';
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';
import BookFormModal from './commponents/BookFormModal';
import UpdateBooks from './UpdateBooks';
import Books from './Books';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    formShowMobal: false,
      books: [],
      showFlag :false,
      title : '',
      description: '',
      BookId : '',
      status:''
    }
  }
//fixing

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

formShowMobalfun =()=>{
  this.setState({
    formShowMobal:true,
  })
}

closeModal =()=>{
  this.setState({
    formShowMobal:false,
  })
}


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

  showUpdateForm =(item)=>{
    this.setState({
      showFlag:true,
      title:item.title,
      description:item.description,
      status:item.status,
      BookId:item._id
    })
  }

  handleClose =()=>{
    this.setState({
      showFlag:false,
    })
  }

  updateBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      title: event.target.title.value,
        description: event.target.description.value,
        status:event.target.status.value,
        authoremail:email

    }

    axios
    .put(`https://lab-12-books.herokuapp.com/updateBook/${this.state.BookId}`,obj)
    .then(result =>{
      this.setState({
        books:result.data,
        showFlag : false
        
      })
    })
    .catch(err=>{
      console.log('error in updating the data');
    })
  }


  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {
    

    return (
      <>
      
       <Button variant="primary" onClick={this.formShowMobalfun}>Add Book</Button>{' '}
      
        <Card className='card'>
          <Card.Body> <h1>My Favorite Books</h1>
            <p>
              This is a collection of my favorite books
            </p></Card.Body>
        </Card>
         
        
        <BookFormModal 
        addBook={this.addBook}
        formShowMobal={this.state.formShowMobal}
        closeModal ={this.closeModal }
        />
           
        
      
<Books
 books={this.state. books}
 deleteBook ={this. deleteBook}
 showUpdateForm ={this.showUpdateForm}
 />
  
  <UpdateBooks
  updateBook={this.updateBook}
  showFlag={this.state.showFlag}
  handleClose={this.handleClose}
  title={this.state.title}
  description={this.state.description}
  status={this.state.status}

  
   />
 
    
 


      </>
    )
}
}

export default withAuth0(BestBooks);
