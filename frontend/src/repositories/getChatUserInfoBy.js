import axios from "axios";

export default async function getChatUserInfoBy(userInfo, chatUserId) {
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const { data } = await axios.get(
    `/api/users/cards/id/${chatUserId}/`,
    config
  );

  return data;
}
