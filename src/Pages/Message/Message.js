import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import leftArrow from "../../Images/icon/leftArrow.png";
import searchIcon from "../../Images/icon/search.png";
import ArrowDown from "../../Images/icon/arrowDown.png";
import { chatUserList } from "../../util";
import Attachment from "../../Images/icon/attachment.png";
import emoji from "../../Images/icon/enoji.png";

import style from "./message.module.scss";
import globalStyle from "../../global.module.scss";

function Message() {
  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageType, setMessageType] = useState("");

  const navigate = useNavigate();

  return (
    <div className={style.messageParentContainer}>
      <div className={style.messageHeader}>
        <div className={style.dFlex}>
          <div className={style.leftConatiner}>
            <img src={leftArrow} alt="" onClick={() => navigate(-1)} />
            <label
              onClick={() => navigate(-1)}
              className={`${style.backLabel} ${globalStyle.headingPoppins}`}
            >
              Back
            </label>
          </div>
          <div className={style.leftConatiner}>
            <img src={searchIcon} className={style.searchIcon} />
            <input
              className={style.searchInput}
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className={`${globalStyle.horizontalDevider} ${style.rmMargin}`} />
      </div>
      <div className={style.messageContainer}>
        <div className={style.peopleChat}>
          <div className={style.labelContainer}>
            <label
              className={`${style.messageLabel} ${globalStyle.headingPoppins}`}
            >
              All Message(08)
            </label>
            <img src={ArrowDown} className={style.arrowDownIcon} alt="" />
          </div>
          <ul className={style.chatList}>
            {chatUserList.map((m, i) => (
              <li
                className={`${style.chatItem} ${
                  selectedChat === i && style.chatActive
                }`}
                onClick={() => setSelectedChat(i)}
                key={i}
              >
                <img src={m.img} />
                <div className={style.HeadingContainer}>
                  <div
                    className={`${style.mainHeading} ${globalStyle.headingPoppins}`}
                  >
                    {m.name}
                  </div>
                  <div
                    className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
                  >
                    {m.subHeading}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.chatMessageContainer}>
          <div className={style.chatContainer}>
            {chatUserList[!selectedChat ? 0 : selectedChat].chat.map(
              (messageObject, i) => (
                <div
                  key={i}
                  className={`${style.actualMessageContainer} ${
                    messageObject.type === "recived"
                      ? style.alignLeft
                      : style.alignRight
                  }`}
                >
                  {messageObject.message.map((m, i) => (
                    <div
                      className={`${style.messageItem} ${
                        messageObject.type === "recived"
                          ? style.alignLeft
                          : style.alignRight
                      }  ${globalStyle.headingPoppins}`}
                    >
                      {i + 1 === messageObject.message.length && (
                        <img
                          src={messageObject.img}
                          alt=""
                          className={style.messageImg}
                        />
                      )}
                      <div
                        className={` ${style.item} ${
                          messageObject.type === "recived"
                            ? style.receivedColor
                            : style.sentColor
                        }`}
                      >
                        {m}
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
          <div className={style.chatInputContainer}>
            <div className={style.iconContainer}>
              <span className={style.plusIcon}>+</span>
              <img src={Attachment} alt="" className={style.attachmentIcon} />
            </div>
            <input
              value={messageType}
              onChange={(e) => setMessageType(e.target.value)}
              className={style.messageInput}
            />
            <img src={emoji} alt="" className={style.emojiIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
