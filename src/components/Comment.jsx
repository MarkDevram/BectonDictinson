import { useState } from "react"

function Comment() {
  const [input, setInput] = useState("")
  const [comments, setComments] = useState([])

  const handleComment = () => {
    if (input.length >= 1) {
      const time = new Date().toLocaleTimeString()
      const newComment = {
        comment: input,
        time: time,
      }
      setComments([...comments, newComment])
    }
  }
  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleComment}>Add Comment</button>
      {comments.map((array, i) => {
        return (
          <div key={i}>
            <span>{array.comment}</span>
            {""}
            <span>{array.time}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Comment
