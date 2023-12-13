import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "./postSlice"
import { stateOfUser } from "../user/userSlice"

export default function AddPost(){
  const dispatch = useDispatch()
  const users = useSelector(stateOfUser)

  const renderUsers = users.map(user=>(
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [userId,setUserId] = useState(0)
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  console.log(canSave);
  const submitHandler = (e)=>{
    e.preventDefault()
    if(title && content){
      if(title !== " " || content !==" ")
      dispatch(addPost(title,content,userId))
    }
    setTitle('')
    setContent('')
    setUserId(0)
  }
  return(
    <div className="addPostContainer">
        <h1>Add Posts</h1>
      <form className="addPostForm">
        <div className="addPostInput">
          <label htmlFor="title">Title:</label>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" id="title" />
        </div>
        <div className="addPostInput">
          <label htmlFor="author">Author:</label>
          <select value={userId} onChange={(e)=>setUserId(e.target.value)} id="author">
            <option value=""></option>
            {renderUsers}
          </select>
        </div>
        <div className="addPostInput">
          <label htmlFor="content">Content:</label>
          <textarea value={content} onChange={(e)=>setContent(e.target.value)} name="content" id="content" cols="20" rows="10"></textarea>
        </div>
        <button disabled={!canSave}  onClick={submitHandler} type="button">Submit</button>
      </form>
    </div>
  )
}