import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import EditPostForm from "./features/posts/EditPostForm";
import UserPage from "./features/users/UserPage";
import UsersList from "./features/users/UsersList";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>


        {/* Catch all - replace with 404 component if you want */}

        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes>
  );
}

export default App;
