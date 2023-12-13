import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: 1,
    title: "Simple Title 1",
    content: "This is sample post content 1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      heart: 0,
      wow: 0,
    },
  },
  {
    id: 2,
    title: "Simple Title 2",
    content: "This is sample post content 2",
    date: sub(new Date(), { minutes: 7 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      heart: 0,
      wow: 0,
    },
  },
  {
    id: 3,
    title: "Simple Title 3",
    content: "This is sample post content 3",
    date: sub(new Date(), { minutes: 6 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      heart: 0,
      wow: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              heart: 0,
              wow: 0,
            },
          },
        };
      },
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    removePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const stateOfPosts = (state) => state.posts;
export const { addPost, removePost, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
