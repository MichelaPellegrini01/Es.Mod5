import {Col, Row, Card, Button} from "react-bootstrap"
import fantasy from "../../data/fantasy.json"
import history from "../../data/history.json"
import horror from "../../data/horror.json"
import romance from "../../data/romance.json"
import scifi from "../../data/scifi.json"
import {useState} from "react"
import SingleBook from "../singleBook/SingleBook"
import CommentArea from "../CommentArea/CommentArea"




const AllTheBooks = ({form}) => {
    const [books, setBooks] = useState(fantasy)
        const [selected, setSelected] = useState (null)

   

    return (
         <>
        {/*<Row>
<Button onClick={() => {
        setBooks (fantasy)
    }}>Fantasy</Button>
<Button onClick={() => {
        setBooks (history)
    } }>History</Button>
<Button onClick={() => {
        setBooks (horror)
    } }>Horror</Button>
<Button onClick={() => {
        setBooks (romance)
    } }>Romance</Button>
<Button onClick={() => {
        setBooks (scifi)
    }}>Sci-fi</Button>

        </Row>*/}

    
         <Row> 
<Col sm={12} md={8} className="d-flex flex-wrap g-1">
    {books
.filter((book) => book.title.toLowerCase().includes(form.toLowerCase()))
.map ((book)=>{
    return (
<SingleBook
book={book}
key={book.asin}
selected={selected}
setSelected={setSelected}
/>
    ) 
})}
</Col>
<Col sm={12} md={4}>
<CommentArea
selected={selected}
setSelected={setSelected} />
</Col>
            
         </Row>
         </>
    )

}

export default AllTheBooks