import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Box.css"
import { Link } from 'react-router-dom';






const Post = () => {
  const cardInfo =[
    {image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Lilies", text: "Flower 1",},
    {image: "https://images.unsplash.com/photo-1530906622963-8a60586a49c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", title: "Roses", text: "Flower 2",},
    {image: "https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Tulips", text: "Flower 3",},
    {image: "https://images.unsplash.com/photo-1571677179476-ab32559a6c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Orchids", text: "Flower 4",},
    {image: "https://images.unsplash.com/photo-1571677179476-ab32559a6c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Orchids", text: "Flower 4",},
    {image: "https://images.unsplash.com/photo-1571677179476-ab32559a6c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Orchids", text: "Flower 4",},
    {image: "https://images.unsplash.com/photo-1571677179476-ab32559a6c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Orchids", text: "Flower 4",},
    {image: "https://images.unsplash.com/photo-1571677179476-ab32559a6c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Orchids", text: "Flower 4",},
    {image: "https://images.unsplash.com/photo-1571677179476-ab32559a6c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Orchids", text: "Flower 4",},
    {image: "https://images.unsplash.com/photo-1571677179476-ab32559a6c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Orchids", text: "Flower 4",}
    
  ];

  const renderCard = (card, index) => {
      return (
        <Card style={{ width: '18rem' }} key= {index} className="box">
        <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {card.text}
                </Card.Text>
          <Button variant="primary">More</Button>
          <br></br>
          <br></br>
          <Button as={Link} to = "/" >Go Back to Home</Button>
            </Card.Body>
      </Card>      
      );
  };

  return <div className='grid'>
     {cardInfo.map(renderCard)}
    </div>  
}

export default Post