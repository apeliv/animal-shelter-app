import style from "./ShelterInfo.module.css";
const MessageForm = () => {
  return (
    <form className={style.messageForm}>
      <textarea
        className={style.textarea}
        name="message"
        placeholder="Enter a message here..."
        minLength={8}
        maxLength={300}
      ></textarea>
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default MessageForm;
