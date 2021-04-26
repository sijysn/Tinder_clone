import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function NotFoundScreen() {
  const history = useHistory();

  useEffect(() => {
    history.push("/login");
  }, [history]);

  return <div>Not Found</div>;
}

export default NotFoundScreen;
