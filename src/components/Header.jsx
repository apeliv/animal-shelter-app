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
        <a href="#">About Us</a>
        <a href="#">List</a>
        <a href="#">Donations</a>
        <a href="#">Notifications</a>
        <a href="#">Input</a>
      </nav>
    </div>
  );
};

export default Header;
