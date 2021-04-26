import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import RecsScreen from "../screens/RecsScreen";
import GoldHomeScreen from "../screens/GoldHomeScreen";
import MatchesScreen from "../screens/MatchesScreen";
import MessageScreen from "../screens/MessageScreen";
import MessageProfilePreviewScreen from "../screens/MessageProfilePreviewScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProfilePreviewScreen from "../screens/ProfilePreviewScreen";
import ProfileEditScreen from "../screens/ProfileEditScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

const App = () => {
  // user info を local strage(ある場合)からstateに保存
  // stateのUserInfoがない場合、/login

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      {userInfo ? (
        <Switch>
          <Route exact path="/recs" component={RecsScreen} />
          <Route exact path="/gold-home" component={GoldHomeScreen} />
          <Route exact path="/matches" component={MatchesScreen} />
          <Route exact path="/messages/:id" component={MessageScreen} />
          <Route
            exact
            path="/messages/:id/profile"
            component={MessageProfilePreviewScreen}
          />
          <Route exact path="/profile" component={ProfileScreen} />
          <Route
            exact
            path="/profile/preview"
            component={ProfilePreviewScreen}
          />
          <Route exact path="/profile/edit" component={ProfileEditScreen} />
          <Route exact path="/settings" component={SettingsScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      )}
    </Router>
  );
};

export default App;
