import { useSelector } from "react-redux";
import { stateOfUser } from "../user/userSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(stateOfUser);
  const author = users.find(user =>user.id===userId);
  return <span>by {author ? author.name : "Unknown Author "} </span>;
};
export default PostAuthor;
