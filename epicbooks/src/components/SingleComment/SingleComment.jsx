const SingleComment = ({ comment }) => {
  return (
    <div data-testid="singleComment" className="border p-2 my-2">
      <p className="voteResult">
        <b className="vote">Voto:</b> {comment.rate}
      </p>

      <p className="commentComment" >{comment.comment}</p>
    </div>
  )
}

export default SingleComment