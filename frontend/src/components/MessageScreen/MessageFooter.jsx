import React, { useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AttachmentIcon from "@material-ui/icons/Attachment";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function MessageFooter({ chatUserId, setMessages, scrollBottomRef }) {
  const [text, setText] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      `/api/messages/send/`,
      {
        fromUserId: userInfo.id,
        toUserId: chatUserId,
        text: text,
      },
      config
    );

    setMessages(data);
    setText("");

    scrollBottomRef.current.scrollIntoView();
  };

  return (
    <Box className="message-footer">
      <Box width="100%">
        <Box
          borderTop="1px solid #dddddd"
          borderBottom="1px solid #dddddd"
          padding="1rem"
          width="100%"
        >
          <form
            onSubmit={submitHandler}
            style={{ width: "100%", paddingLeft: "4px", paddingRight: "4px" }}
          >
            <Box display="flex" width="100%" maxHeight="10rem">
              <Box display="flex" justifyContent="flex-start" width="100%">
                <InputBase
                  fullWidth
                  multiline
                  rowsMax={6}
                  value={text}
                  placeholder="Type a message"
                  onChange={(e) => setText(e.target.value)}
                  style={{ fontSize: "1.5rem" }}
                />
              </Box>

              <Box display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  color="primary"
                  disabled={!text || !text.match(/\S/g) ? true : false}
                >
                  <Typography component="span" variant="h5">
                    SEND
                  </Typography>
                </Button>
              </Box>
            </Box>
          </form>
        </Box>

        <Box width="100%">
          <Box width="100%" padding="1rem">
            <IconButton className="btn-box-shadow">
              <AttachmentIcon fontSize="large" color="primary" />
            </IconButton>
            <IconButton className="btn-box-shadow">
              <EmojiEmotionsIcon
                fontSize="large"
                style={{ color: "#ffcc29" }}
              />
            </IconButton>
            <IconButton className="btn-box-shadow">
              <GifIcon fontSize="large" color="primary" />
            </IconButton>
            <IconButton className="btn-box-shadow">
              <MusicNoteIcon fontSize="large" style={{ color: "#2ec1ac" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MessageFooter;
