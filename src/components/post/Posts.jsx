import { useDispatch, useSelector } from "react-redux";
import { stateOfPosts } from "./postSlice";
import PostAuthor from "./PostAuthor.jsx"
import TimeAgo from "./TimeAgo.jsx";
import { removePost } from "./postSlice";
const Posts = () => {
  const posts = useSelector(stateOfPosts);
  const dispatch = useDispatch()
  const orderedPosts = posts.slice().sort((a,b)=>(
    b.date.localeCompare(a.date)
  ))
  const renderedPosts = orderedPosts.map((post) => (
    <div className="post" key={post.id}>
      <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        <PostAuthor userId={post.userId}/>
        <TimeAgo timeStamp={post.date}/>
      </p>
      </div>
      <div className="removeBtn" onClick={()=>{dispatch(removePost(post.id))}}>Remove</div>
    </div>
  ));

  return (
    <div className="postContainer1">
      <div className="postContainer2">
        <h1>Posts</h1>
        {renderedPosts}
      </div>
    </div>
  );
};
export default Posts;
