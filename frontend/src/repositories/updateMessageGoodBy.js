import axios from "axios";

export default async function updateMessageGoodBy(messageId, userInfo) {
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  return await axios.put(`/api/messages/good/update/${messageId}/`, {}, config);
}
