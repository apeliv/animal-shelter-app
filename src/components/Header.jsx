import style from "./Header.module.css";

const Header = ({ isAdmin, setIsAdmin }) => {
  return (
    <div className={style.headerContainer}>
      <div className={style.titleAndUser}>
        <h2 className={style.title}>Animal Shelter</h2>
        <div className={style.user}>
          <span>ADMIN</span>
          <label className={style.switch}>
            <input type="checkbox" value={isAdmin} onChange={setIsAdmin} />
            <span className={style.slider}></span>
          </label>
        </div>
      </div>

      <nav>
        <a className={style.headerLinkStyle} href="/">
          Home
        </a>
        <a className={style.headerLinkStyle} href="/about">
          About Us
        </a>
        <a className={style.headerLinkStyle} href="/list">
          List
        </a>
        <a className={style.headerLinkStyle} href="/donations">
          Donations
        </a>
        <a className={style.headerLinkStyle} href="/notifications">
          Notifications
        </a>
        {isAdmin && (
          <a className={style.headerLinkStyle} href="/form">
            Input
          </a>
        )}
      </nav>
    </div>
  );
};

export default Header;
