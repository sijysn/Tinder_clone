import axios from "axios";

export default async function createChatRoomBy(userInfo, swipedUserId) {
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  await axios.post(
    "/api/chatroomusers/register/",
    {
      fromUserId: swipedUserId,
      toUserId: userInfo.id,
    },
    config
  );
}
