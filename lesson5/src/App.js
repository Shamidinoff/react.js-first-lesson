import "./App.css";
import Posts from "./components/posts/Posts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/posts/Login";
import PostPage from "./PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <Posts />
    // </div>
  );
}

export default App;
