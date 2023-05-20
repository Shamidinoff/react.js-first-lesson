import cl from "./footer.module.css";

function Footer() {
  return (
    <div className={cl.footerHead}>
      <div className={cl.container}>
        <div className={cl.footerFlex}>
          <div className={cl.footerHeadItemDescr}>
            <h1>Веб-студия полного цикла</h1>
            <p>
              Веб-студия DaurenWeb занимается созданием креативных сайтов в
              Астане и по всему Казахстану.. В нашей копилке множество
              реализованных проектов, успешность работы которых проверена
              временем.
            </p>
            <p>
              Мы разрабатываем не просто Landing Page, а самые красивые дизайны
              в Астане, ведь лучшие JavaScript программисты и дизайнеры работают
              именно у нас. В нашей компетенции создание сложных интернет
              порталов и систем для крупных организаций.
            </p>
          </div>
          <div className={cl.footerHeadItem}>
            <h1>Контакты</h1>
            <h2>Адрес: Косшыгулулы 11/4</h2>
            <h2>Имэйл: shamidinovdauren@mail.ru</h2>
            <h2>Тел: +7 701 675 13 93</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
