import { useState } from "react";
import style from "../components/Notifications.module.css";
import { useEffect } from "react";
import axios from "axios";
import Notification from "../components/Notification";
import NotificationInput from "../components/NotificationInput";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [isNewNotificationClicked, setIsNewNotificationClicked] =
    useState(false);
  const [isNotificationsChangeState, setIsNotificationsChangeState] =
    useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/notifications")
      .then((res) =>
        setNotifications(
          res.data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        )
      )
      .catch((err) => console.log(err));
  }, [isNotificationsChangeState]);

  return (
    <div className={style.notificationsSection}>
      <button
        className={style.newNotificationButton}
        onClick={() => setIsNewNotificationClicked(true)}
      >
        New notification
      </button>
      {isNewNotificationClicked && (
        <NotificationInput
          setIsNewNotificationClicked={setIsNewNotificationClicked}
          setIsNotificationsChangeState={() =>
            setIsNotificationsChangeState(!isNotificationsChangeState)
          }
        />
      )}

      <h2 className={style.notificationsTitle}>Notifications:</h2>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          setIsNotificationsChangeState={() =>
            setIsNotificationsChangeState(!isNotificationsChangeState)
          }
        />
      ))}
    </div>
  );
};

export default Notifications;
