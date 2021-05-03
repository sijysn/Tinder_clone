import axios from "axios";

export default async function swipeCardBy(userInfo, swipedUserId, likeOrNope) {
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  await axios.post(
    "/api/reactions/swipe/",
    {
      fromUserId: userInfo.id,
      toUserId: swipedUserId,
      status: likeOrNope === "like" ? "L" : "N",
    },
    config
  );
}
