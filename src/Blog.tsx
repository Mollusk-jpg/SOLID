import type { FunctionComponent } from "react";
import { MakePost } from "./MakePost.tsx";
import { Post } from "./Post.tsx";

export const Blog: FunctionComponent = () => {
  return (
    <main>
      <MakePost />
      <hr />
      <Post />
    </main>
  );
};