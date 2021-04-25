import axios from "axios";

export default async function getMessagesBy(userInfo, chatUserId) {
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  return await axios.get(`/api/messages/${userInfo.id}/${chatUserId}/`, config);
}
