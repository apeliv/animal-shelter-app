import { useContext } from "react";
import style from "./Notifications.module.css";
import UserContext from "../assets/userContext";
import buttonImage from "/public/trash_icon.png";
import axios from "axios";
const Notification = ({ notification, setIsNotificationsChangeState }) => {
  const isAdmin = useContext(UserContext);

  const deleteNotification = () => {
    axios
      .delete(`http://localhost:3001/notifications/${notification.id}`)
      .then(() => setIsNotificationsChangeState())
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.notification}>
      <div
        className={style.notificationHeader}
        style={
          notification.important
            ? { backgroundColor: "tomato" }
            : { backgroundColor: "rgb(30, 125, 73)" }
        }
      >
        <span>{notification.title}</span>
        {notification.important && <span>IMPORTANT!</span>}
        <span>{notification.date.split("T")[0]}</span>
      </div>

      <div className={style.notificationBody}>
        <p>{notification.text}</p>
        <div className={style.buttonContainer}>
          {isAdmin && (
            <button className={style.button} onClick={deleteNotification}>
              <img src={buttonImage} alt="Delete Notification" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
