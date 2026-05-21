import { useState } from "react"
import { Form, Button } from "react-bootstrap"

const AddComment = ({ selected }) => {

  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "",
    elementId: selected
  })

  const sendComment = async () => {

    try {

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA3MGViMWQ2M2FhMTAwMTUxM2RlNzIiLCJpYXQiOjE3Nzg4NDc0MDksImV4cCI6MTc4MDA1NzAwOX0.PM_qvBCPT-FuCeKz7g2EKr8KfsfY5nKSDY5Mt0KxNWs"
          },

          body: JSON.stringify(newComment)
        }
      )

      if (response.ok) {
        alert("Wow, recensione inviata!")
      } else {
        alert("Mi dispiace, c'è un errore")
      }

    } catch (error) {
      console.log(error)
    }
  }

 return (
  <div className="mt-3">

    <Form>

      <Form.Group className="mb-3">

        <Form.Label className="titleForm">
          Cosa ne pensi?
        </Form.Label>

        <Form.Control
          type="text"
          placeholder="Scrivi qui..."
          value={newComment.comment}
          onChange={(e) =>
            setNewComment({
              ...newComment,
              comment: e.target.value
            })
          }
        />

      </Form.Group>

      <Form.Group className="mb-3">

        <Form.Label className="titleForm">
          Voto
        </Form.Label>

        <Form.Select
          value={newComment.rate}
          onChange={(e) =>
            setNewComment({
              ...newComment,
              rate: e.target.value
            })
          }
        >
          <option value="">Scegli voto</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>

      </Form.Group>

      <Button
        variant="dark"
        onClick={sendComment}
      >
        Invia recensione
      </Button>

    </Form>

  </div>
)
}

export default AddComment