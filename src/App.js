import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ReviewItem from "./components/reviewItem/ReviewItem";

function App() {
  const username = "Daurenbek";
  const surname = "Shamidinov";

  const allReviews = [];

  const reviewsInfo = [
    { message: "Супер приложение", author: "Максат" },

    { message: "Что делать?", author: "Ануар" },

    { message: "Я не знаю что делать", author: "Ильдар" },

    { message: "Я запутался", author: "Ержан" },

    { message: "Мне удалось", author: "Дауренбек" },
  ];

  /*  for (let i = 0; i < 5; i++) {
    allReviews.push(<ReviewItem />);
  } */

  reviewsInfo.forEach((review) => {
    allReviews.push(
      <ReviewItem message={review.message} author={review.author} />
    );
  });

  return (
    <div className="App">
      <Header name={username} surname={surname} />
      {allReviews}
      <Footer />
    </div>
  );
}

export default App;
