import {Col, Row, Card, Button} from "react-bootstrap"
import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner';
import CommentArea from "../CommentArea/CommentArea";

const SingleBook = ({book}) => {
    const [selected, setSelected] = useState (false)
    const [loading, setLoading] = useState (true)
    useEffect(()=>{setLoading(true)}, [book.asin])
    return(
<Col xs={12} md={4} lg={3} className="g-4" key={book.asin}>
             <Card style={{ border: selected ? "2px solid red" : undefined}}>
       <Spinner animation="border" role="status" style={{display: loading ? "none" : "block"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      <Card.Img onLoad={()=>setLoading(false)} style={{display: loading ? "block" : "none"}} variant="top" src={book.img} className="cardImg"/>
      <Card.Body className="cardBody">
        <Card.Title className="text-truncate">{book.title}</Card.Title>
        <Card.Text>
          {book.category}
        </Card.Text>
        <Button onClick={()=>setSelected(!selected)} variant="primary">Aggiungi al carrello</Button>
      </Card.Body>
    </Card>
    {selected && <CommentArea 
     asin={book.asin}
     />}
     
            </Col>
    )
}

export default SingleBook