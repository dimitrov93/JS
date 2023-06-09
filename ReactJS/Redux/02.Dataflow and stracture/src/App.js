import './App.css';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/addPostForm';

function App() {

  
  return (
    <div className="App">
      <h1>Hello</h1>
      <PostsList />

      <AddPostForm />
    </div>
  );
}

export default App;
