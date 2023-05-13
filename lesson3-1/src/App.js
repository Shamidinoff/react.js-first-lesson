import "./App.css";
import PostItem from "./components/postItem/PostItem";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 0,
      title: "title1",
      author: "Olzhas",
      desc: "Я хочу пиццы",
    },
    {
      id: 1,
      title: "title2",
      author: "Daurenbek",
      desc: "Я хочу суши",
    },
    {
      id: 2,
      title: "title3",
      author: "Luiza",
      desc: "Я хочу спать",
    },
    {
      id: 3,
      title: "title4",
      author: "Bekzhan",
      desc: "Я хочу жаренные кальмары",
    },
    {
      id: 4,
      title: "title5",
      author: "Ayazhan",
      desc: "Я хочу бургер",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState(); /* useState */

  const postItems = posts.map((post) => {
    return (
      <PostItem
        key={post.id}
        id={post.id}
        title={post.title}
        author={post.author}
        desc={post.desc}
      />
    );
  });

  function sortPosts(sortType) {
    setSelectedSort(sortType);
    setPosts([...posts].sort((a, b) => a[sortType].localeCompare(b[sortType])));
  }

  return (
    <div className="App">
      <select
        onChange={(event) => {
          sortPosts(event.target.value);
        }}
      >
        <option selected disabled>
          Сортировать
        </option>
        <option value="author">По авторам</option>
        <option value="title">По названию</option>
      </select>
      {postItems}
    </div>
  );
}

export default App;
