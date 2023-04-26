import axios from "axios";
import style from "./ShelterInfo.module.css";
import { useState } from "react";

const MessageForm = ({ addMessageToDataBase }) => {
  const [input, setInput] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const requestBody = ProcessBody(input);
    console.log(requestBody);
    axios
      .post(" http://localhost:3001/messages", requestBody)
      .then((res) => addMessageToDataBase((prev) => [...prev, res.data]))
      .catch((err) => console.log(err));
  };

  const ProcessBody = (data) => ({ message: data });

  return (
    <div className={style.messageForm}>
      <textarea
        className={style.textarea}
        name="message"
        placeholder="Enter a message here..."
        minLength={8}
        maxLength={300}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className={style.button} onClick={handleClick}>
        Send
      </button>
    </div>
  );
};

export default MessageForm;
