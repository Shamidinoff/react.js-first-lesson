import cl from "./header.module.css";

function Header() {
  return (
    <div className={cl.divHead}>
      <div className={cl.container}>
        <div className={cl.headerFlex}>
          <div className={cl.flexItemLogo}>
            <img src={require("./icon.png")} className={cl.img} />
          </div>
          <div className={cl.flexItemNavigation}>
            <nav className={cl.nav}>
              <ul className={cl.ul}>
                <li className={cl.li}>Про нас</li>
                <li className={cl.li}>Новости</li>
                <li className={cl.li}>Услуги</li>
                <li className={cl.li}>Полезные статьи</li>
                <li className={cl.li}>Контакты</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
