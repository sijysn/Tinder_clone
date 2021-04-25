import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

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

const App = () => {
  // user info を local strage(ある場合)からstateに保存
  // stateのUserInfoがない場合、/login

  return (
    <Router>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route exact path="/login" component={LoginScreen} />
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
      <Route exact path="/profile/preview" component={ProfilePreviewScreen} />
      <Route exact path="/profile/edit" component={ProfileEditScreen} />
      <Route exact path="/settings" component={SettingsScreen} />
    </Router>
  );
};

export default App;
