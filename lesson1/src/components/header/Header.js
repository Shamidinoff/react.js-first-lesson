import headerObj from "./Header.module.css";

function Header(props) {
  console.log(props);
  return (
    <header className={headerObj.header}>
      <h1>Мое имя: {props.name}</h1>
    </header>
  );
}

export default Header;
