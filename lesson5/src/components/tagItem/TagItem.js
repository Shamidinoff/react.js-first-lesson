import cl from "./TagItem.module.css";

function TagItem({ children }) {
  return <div className={cl.tag}>{children}</div>;
}

export default TagItem;
