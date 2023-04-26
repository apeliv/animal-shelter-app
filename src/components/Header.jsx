import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.titleAndUser}>
        <h2 className={style.title}>Animal Shelter</h2>
        <div className={style.user}>
          <span>ADMIN</span>
          <input type="checkbox" />
        </div>
      </div>

      <nav>
        <a className={style.headerLinkStyle} href="/about">
          About Us
        </a>
        <a className={style.headerLinkStyle} href="#">
          List
        </a>
        <a className={style.headerLinkStyle} href="#">
          Donations
        </a>
        <a className={style.headerLinkStyle} href="#">
          Notifications
        </a>
        <a className={style.headerLinkStyle} href="#">
          Input
        </a>
      </nav>
    </div>
  );
};

export default Header;
