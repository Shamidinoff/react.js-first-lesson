import cl from "./ReviewItem.module.css";

function ReviewItem(props) {
  return (
    <div className={cl.review}>
      <p>{props.message}</p>
      <h4>{props.author}</h4>
    </div>
  );
}

export default ReviewItem;
