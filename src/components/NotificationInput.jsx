import { useContext, useState } from "react";
import style from "./Notifications.module.css";
import UserContext from "../assets/userContext";
import axios from "axios";
const NotificationInput = ({
  setIsNewNotificationClicked,
  setIsNotificationsChangeState,
}) => {
  const isAdmin = useContext(UserContext);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedtext, setUpdatedText] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const updatedDate = new Date().toISOString();

  const bodyRequest = {
    title: updatedTitle,
    date: updatedDate,
    text: updatedtext,
    important: isImportant,
  };

  const handleAddNotification = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/notifications", bodyRequest)
      .then(() => {
        setIsNewNotificationClicked(false);
        setIsNotificationsChangeState();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleAddNotification}
      className={style.notificationInputContainer}
    >
      <div>
        <label htmlFor="title" className={style.inputLabel}>
          Title:
        </label>
        <input
          id="title"
          className={style.textInput}
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          maxLength={20}
          required
        />
      </div>

      <div className={style.textAreaContainer}>
        <label htmlFor="text" className={style.textAreaLabel}>
          Text:
        </label>
        <textarea
          id="text"
          className={style.textAreaInput}
          minLength={10}
          maxLength={200}
          rows={5}
          cols={50}
          value={updatedtext}
          onChange={(e) => setUpdatedText(e.target.value)}
        ></textarea>
      </div>

      {isAdmin && (
        <div>
          <input
            id="important"
            type="checkbox"
            className={style.checkBoxInput}
            value={isImportant}
            onChange={() => setIsImportant(!isImportant)}
          />
          <label htmlFor="important" className={style.inputLabel}>
            Important
          </label>
        </div>
      )}

      <input type="submit" className={style.button} value="Save"></input>
    </form>
  );
};

export default NotificationInput;
