import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import MessageHeader from "../components/MessageScreen/MessageHeader";
import MessageFooter from "../components/MessageScreen/MessageFooter";
import MessageBubble from "../components/MessageScreen/MessageBubble";
import Loader from "../components/Loader";

import getChatUserInfoBy from "../repositories/getChatUserInfoBy";
import taggleLikeMessageBy from "../repositories/taggleLikeMessageBy";
import getMessagesBy from "../repositories/getMessagesBy";
import readMessageBy from "../repositories/readMessageBy";

function MessageScreen() {
  const history = useHistory();
  const { id: chatUserId } = useParams();

  const [chatUserInfo, setChatUserInfo] = useState();
  const [loading, setLoading] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [messages, setMessages] = useState([]);

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const goodHandler = async (message) => {
    const targetMessage = await taggleLikeMessageBy(message.id, userInfo);

    if (!targetMessage) return;

    const _messages = await getMessagesBy(userInfo, chatUserId);

    setMessages(_messages.data);
  };

  useEffect(async () => {
    // TODO Routerでやる。
    if (!userInfo) history.push("/login");

    if (!chatUserInfo)
      setChatUserInfo(await getChatUserInfoBy(userInfo, chatUserId));

    const _messages = await getMessagesBy(userInfo, chatUserId);

    setMessages(_messages.data);
    readMessageBy(_messages.data, userInfo);
  }, [history, userInfo, chatUserInfo]);

  // useEffect(() => {
  //   let isMounted = true;

  //   setLoading(true);

  //   const checkMessage = async () => {
  //     const _messages = await getMessagesBy(userInfo.id, chatUserId);

  //     setMessages(_messages.data);

  //     readMessageBy(_messages.data, userInfo);
  //   };

  //   const repeat = () => {
  //     checkMessage();
  //     setLoading(false);
  //     if (isMounted) setTimeout(repeat, 5000);
  //   };

  //   repeat();

  //   return () => (isMounted = false);
  // }, []);

  return (
    messages.length > 0 &&
    messages.map((message) => (
      <Grid
        item
        key={message.id}
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        {message.user_id == chatUserId ? (
          <Box display="flex" justifyContent="flex-start" mr={5}>
            <Avatar
              src={chatUserInfo ? chatUserInfo.image : "unknown_ffqtxf"}
              alt="Profile Photo"
              style={{
                height: "3rem",
                width: "3rem",
                marginRight: "1rem",
              }}
            ></Avatar>

            <MessageBubble bgColor="#dddddd" color="#000" text={message.text} />

            <Box
              position="absolute"
              right="1rem"
              top="50%"
              style={{ transform: "translateY(-50%)" }}
            >
              {message.good ? (
                <FavoriteIcon
                  onClick={() => goodHandler(message)}
                  style={{ color: "#f50057" }}
                />
              ) : (
                <FavoriteBorderIcon onClick={() => goodHandler(message)} />
              )}
            </Box>
          </Box>
        ) : (
          <Box display="flex" justifyContent="flex-end" ml={5}>
            {message.good && (
              <FavoriteIcon fontSize="small" style={{ color: "#f50057" }} />
            )}
            <MessageBubble bgColor="#46b3e6" color="#fff" text={message.text} />
          </Box>
        )}
      </Grid>
    ))
    //  <Box>
    //   {loading ? (
    //     <Loader style={{ marginTop: "50vh" }} />
    //   ) : (
    //     <Box>
    //       <MessageHeader chatUserInfo={chatUserInfo && chatUserInfo} />

    //       <Grid
    //         container
    //         direction="column"
    //         spacing={1}
    //         style={{
    //           overflowY: "scroll",
    //           maxHeight: "100vh",
    //           padding: "9rem 1rem 20rem",
    //           flexWrap: "nowrap",
    //           zIndex: "-1",
    //         }}
    //         className="max-width"
    //       >
    //         {messages.length > 0 &&
    //           messages.map((message) => (
    //             <Grid
    //               item
    //               key={message.id}
    //               style={{
    //                 position: "relative",
    //                 width: "100%",
    //               }}
    //             >
    //               {message.user_id == chatUserId ? (
    //                 <Box display="flex" justifyContent="flex-start" mr={5}>
    //                   <Avatar
    //                     src={
    //                       chatUserInfo ? chatUserInfo.image : "unknown_ffqtxf"
    //                     }
    //                     alt="Profile Photo"
    //                     style={{
    //                       height: "3rem",
    //                       width: "3rem",
    //                       marginRight: "1rem",
    //                     }}
    //                   ></Avatar>

    //                   <MessageBubble
    //                     bgColor="#dddddd"
    //                     color="#000"
    //                     text={message.text}
    //                   />

    //                   <Box
    //                     position="absolute"
    //                     right="1rem"
    //                     top="50%"
    //                     style={{ transform: "translateY(-50%)" }}
    //                   >
    //                     {message.good ? (
    //                       <FavoriteIcon
    //                         onClick={() => goodHandler(message)}
    //                         style={{ color: "#f50057" }}
    //                       />
    //                     ) : (
    //                       <FavoriteBorderIcon
    //                         onClick={() => goodHandler(message)}
    //                       />
    //                     )}
    //                   </Box>
    //                 </Box>
    //               ) : (
    //                 <Box display="flex" justifyContent="flex-end" ml={5}>
    //                   {message.good && (
    //                     <FavoriteIcon
    //                       fontSize="small"
    //                       style={{ color: "#f50057" }}
    //                     />
    //                   )}
    //                   <MessageBubble
    //                     bgColor="#46b3e6"
    //                     color="#fff"
    //                     text={message.text}
    //                   />
    //                 </Box>
    //               )}
    //             </Grid>
    //           ))}
    //         {messages.length === 0 && (
    //           <Box>
    //             <Box height="100vh"></Box>
    //           </Box>
    //         )}
    //         <Box id="latest_message" visibility="hidden">
    //           latest message
    //         </Box>
    //       </Grid>
    //       <MessageFooter chatUserId={chatUserId} setMessages={setMessages} />
    //     </Box>
    //   )}
    // </Box>
  );
}

export default MessageScreen;
