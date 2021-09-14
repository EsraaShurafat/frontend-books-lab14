import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () =>{
    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .get(`http://localhost:3001/books?email=${email}`)
    .then( result =>{
      console.log(result.data);
      this.setState({
       
        books:result.data
      })
    })
    .catch (err =>{
      console.log('error');
    })
  }


  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <Card>
          <Card.Body> <h1>My Favorite Books</h1>
            <p>
              This is a collection of my favorite books
            </p></Card.Body>
        </Card>

      
 
    {this.state.books.map(item =>{return( 
    <Carousel className='Carousel ' >
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src={item.status}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>)})}  
 


      </>
    )
}
}

export default withAuth0(BestBooks);
