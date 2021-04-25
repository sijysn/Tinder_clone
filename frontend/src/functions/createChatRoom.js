import axios from "axios";

const createChatRoom = async (userId, swipedUserId, config) => {
  const reaction = await axios.get(
    `/api/reactions/${swipedUserId}/${userId}/`,
    config
  );

  if (reaction.data.status === "L")
    await axios.post(
      "/api/chatroomusers/register/",
      {
        user1Id: userId,
        user2Id: swipedUserId,
      },
      config
    );
};

export default createChatRoom;
