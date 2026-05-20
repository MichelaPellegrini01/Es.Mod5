import { useState, useEffect } from "react"
import CommentList from "../CommentList/CommentList"
import AddComment from "../AddComment/AddComment"

const CommentArea = ({selected}) => {
    const [comment,setComment] = useState([])

    useEffect (
        () => {
const getComments = async() => {
        try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${selected}` ,
            {
                headers:{
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA3MGViMWQ2M2FhMTAwMTUxM2RlNzIiLCJpYXQiOjE3Nzg4NDc0MDksImV4cCI6MTc4MDA1NzAwOX0.PM_qvBCPT-FuCeKz7g2EKr8KfsfY5nKSDY5Mt0KxNWs"
                }
            }

        ) 
        
        const comments = await response.json()
        setComment(comments)
        console.log(comments)
    }
    catch(error){
        console.log(error)
    }}
    if(selected) {getComments()}
        }, [selected]
    )


    

    return (
  <div>
    <CommentList comments={comment} />
      <AddComment selected={selected} />
  </div>
    )
}

export default CommentArea