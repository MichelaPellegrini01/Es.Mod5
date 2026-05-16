const SingleComment = ({ comment }) => {
  return (
    <div className="border p-2 my-2">
      <p>
        <b>Voto:</b> {comment.rate}
      </p>

      <p>{comment.comment}</p>
    </div>
  )
}

export default SingleComment