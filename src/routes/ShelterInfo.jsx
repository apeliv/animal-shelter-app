import style from "../components/ShelterInfo.module.css";
import InfoTextData from "../components/InfoTextData";
import InfoNumberData from "../components/InfoNumberData";
import MessageForm from "../components/MessageForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "../assets/userContext";

const ShelterInfo = () => {
  const [messages, setMessages] = useState([]);
  const isAdmin = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/messages")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.infoSectionStyle}>
      <h2 className={style.infoTitle}>About Us</h2>
      <div className={style.infoFlexContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.033891091026!2d-73.99362322424955!3d40.73927977138955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b24b424f%3A0x618680d3f8c2f773!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20Sjedinjene%20Ameri%C4%8Dke%20Dr%C5%BEave!5e0!3m2!1shr!2shr!4v1682516218905!5m2!1shr!2shr"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={style.infoData}>
          <InfoTextData label="Shelter name" value="Happy Paw Shelter" />
          <InfoNumberData label="Phone number" value="333-333-333" />
          <InfoTextData label="Address" value="Fifth Avenue 123" />
          <InfoTextData label="City" value="New York" />
          <InfoNumberData label="Opening Year" value="2018" />
        </div>
      </div>
      {isAdmin ? (
        <div className={style.messagesContainer}>
          <h2 className={style.infoTitle}>New messages</h2>
          {messages.map((message) => (
            <p className={style.message} key={message.id}>
              {message.message}
            </p>
          ))}
        </div>
      ) : (
        <>
          <h2 className={style.infoTitle}>Send us a message</h2>
          <MessageForm addMessageToDataBase={setMessages} />
        </>
      )}
    </div>
  );
};

export default ShelterInfo;
