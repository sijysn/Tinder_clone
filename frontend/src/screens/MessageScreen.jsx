import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";

import MessageHeader from "../components/MessageScreen/MessageHeader";
import MessageHistory from "../components/MessageScreen/MessageHistory";
import MessageFooter from "../components/MessageScreen/MessageFooter";
import Loader from "../components/Loader";

import getChatUserInfoBy from "../repositories/getChatUserInfoBy";
import updateMessageGoodBy from "../repositories/updateMessageGoodBy";
import getMessagesBy from "../repositories/getMessagesBy";
import readMessagesBy from "../repositories/readMessagesBy";

function MessageScreen() {
  const history = useHistory();
  const { id: chatUserId } = useParams();

  const [chatUserInfo, setChatUserInfo] = useState();
  const [loading, setLoading] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [messages, setMessages] = useState([]);

  const goodHandler = async (message) => {
    const targetMessage = await updateMessageGoodBy(message.id, userInfo);

    if (!targetMessage) return;

    const _messages = await getMessagesBy(userInfo, chatUserId);

    setMessages(_messages.data);
  };

  const scrollBottomRef = useRef(null);

  useEffect(async () => {
    if (!userInfo) history.push("/login");

    if (!chatUserInfo)
      setChatUserInfo(await getChatUserInfoBy(userInfo, chatUserId));

    setLoading(true);

    const _messages = await getMessagesBy(userInfo, chatUserId);

    setMessages(_messages.data);

    readMessagesBy(_messages.data, userInfo);

    setLoading(false);
  }, [history, userInfo, chatUserInfo]);

  useEffect(() => {
    if (scrollBottomRef && scrollBottomRef.current)
      scrollBottomRef.current.scrollIntoView();
  }, [loading]);

  useEffect(async () => {
    let isMounted = true;

    const reloadMessages = async () => {
      const _messages = await getMessagesBy(userInfo, chatUserId);

      setMessages(_messages.data);

      readMessagesBy(_messages.data, userInfo);
    };

    const repeat = async () => {
      reloadMessages();
      if (isMounted) setTimeout(repeat, 5000);
    };

    repeat();

    return () => (isMounted = false);
  }, []);

  return (
    <Box>
      <MessageHeader chatUserInfo={chatUserInfo && chatUserInfo} />

      {userInfo && (
        <Box>
          {loading ? (
            <Loader style={{ marginTop: "50vh" }} />
          ) : (
            <MessageHistory
              messages={messages}
              chatUserId={chatUserId}
              chatUserInfo={chatUserInfo}
              scrollBottomRef={scrollBottomRef}
              onClick={goodHandler}
            />
          )}
          <MessageFooter
            chatUserId={chatUserId}
            setMessages={setMessages}
            scrollBottomRef={scrollBottomRef}
          />{" "}
        </Box>
      )}
    </Box>
  );
}

export default MessageScreen;
