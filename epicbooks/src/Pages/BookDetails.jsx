import fantasy from "../data/fantasy.json"
import history from "../data/history.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"
import { useParams } from "react-router-dom"
import { Card,Badge,Row,Col, } from "react-bootstrap"
import CommentArea from "../components/CommentArea/CommentArea"

const BookDetails=()=>{

   const books = [
    ...fantasy,
    ...history,
    ...horror,
    ...romance,
    ...scifi
  ]
    
const {asin} = useParams()
 const book = books.find(
    (item) => item.asin === asin
  )

  if (!book) {
    return (
      <h1>Libro non trovato</h1>
    )
  }

return (
        <>
       
       <Row>
<Col sm={12} md={6}>
 <Card>
      <Card.Img variant="top" src={book.img} />
    <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Badge>{book.category}</Badge>
      </Card.Body>
    </Card>

</Col>
<Col sm={12} md={6}>
<CommentArea selected={asin}/>
</Col>
       </Row>


        </>
    )
}

export default BookDetails