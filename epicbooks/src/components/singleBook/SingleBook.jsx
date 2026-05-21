import {Col, Row, Card, Button} from "react-bootstrap"
import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";
import BookDetails from "../../Pages/BookDetails";

const SingleBook = ({book, selected, setSelected}) => {
    //const [selected, setSelected] = useState (false)
    const [loading, setLoading] = useState (true)
    //useEffect(()=>{setLoading(true)}, [book.asin])

    const isSelected = selected === book.asin
    const navigate = useNavigate()

    return(
<Col xs={12} md={4} lg={4} className="g-4" key={book.asin}>
             <Card data-testid="bookCard" style={{ border: isSelected ? "2px solid aqua" : undefined}}>
       {loading && (
        <div className="d-flex justify-content-center p-3">
          <Spinner animation="border" variant="primary"/></div>
       )}
<Card.Img 
onLoad={()=> setLoading(false)}
onError={()=> setLoading(false)}
variant="top"
src={book.img}
className="cardImg"
style={{display:loading?"none":"block"}}/>     
   <Card.Body className="cardBody">
        <Card.Title className="text-truncate">{book.title}</Card.Title>
        <Card.Text>
          {book.category}
        </Card.Text>
        <Button onClick={()=>setSelected( isSelected ? null : book.asin)} variant="primary">{isSelected ? "Annulla":"Seleziona"}</Button>
     <Button className="ms-2" onClick={()=>navigate(`bookdetails/${book.asin}`)} variant="primary">Dettagli del Libro</Button>
      </Card.Body>
    </Card>

            </Col>
    )
}

export default SingleBook