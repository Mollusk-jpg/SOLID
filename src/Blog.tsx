import type { FunctionComponent } from "react";
import { MakePost } from "./MakePost";
import { Post } from "./Post";
import { useSolidAuth } from "@ldo/solid-react";

export const Blog: FunctionComponent = () => {
  const { session } = useSolidAuth();
  // Only show blog posts if user is logged in. 
  if (!session.isLoggedIn) {
    return <p>Please log in to see your blog.</p>;
  }

  return (
    <main>
      <MakePost />
      <hr />
      <Post />
    </main>
  );
};