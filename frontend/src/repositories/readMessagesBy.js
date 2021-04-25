import axios from "axios";

export default async function readMessagesBy(messages, userInfo) {
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  await axios.put(
    "/api/messages/read/",
    {
      messages: JSON.stringify(messages),
      fromUserId: userInfo.id,
    },
    config
  );
}
