import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionsEmoji = {
  thumbsUp: "👍",
  heart: "👍",
  wow: "👍",
};

const ReactionBtn = ({post})=>{
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionsEmoji).map(([name,emoji])=>{
    return(
      <button
          key={name}
          type="button"
          className="reactionBtn"
          onClick={()=>
            dispatch(reactionAdded({postId:post.id,reaction:name}))
          }
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })
  return <div>{reactionButtons} </div>
}
export default ReactionBtn