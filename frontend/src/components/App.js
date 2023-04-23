import agent from "../agent";
import Header from "./Header";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { APP_LOAD, REDIRECT } from "../constants/actionTypes";
import Item from "./Item";
import Editor from "./Editor";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import ProfileFavorites from "./ProfileFavorites";
import Register from "./Register";
import Settings from "./Settings";
import { Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const mapStateToProps = (state) => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT }),
});

const App = (props) => {
  const { redirectTo, onRedirect, onLoad, currentUser } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
      onRedirect();
    }
  }, [redirectTo, onRedirect, navigate]);

  useEffect(() => {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      agent.setToken(token);
    }
    onLoad(token ? agent.Auth.current() : null, token);
  }, [onLoad]);

  if (props.appLoaded) {
    return (
      <div>
        <Header
          appName={props.appName}
          currentUser={currentUser}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route path="/editor/:slug" element={
            <PrivateRoute currentUser={currentUser}
            >
              <Editor />
            </PrivateRoute>
          } />
          <Route path="/editor" element={<PrivateRoute currentUser={currentUser}
          >
            <Editor />
          </PrivateRoute>} />
          <Route path="/item/:id" element={<PrivateRoute currentUser={currentUser}
          >
            <Item />            </PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute currentUser={currentUser}
          >
            <Settings />            </PrivateRoute>} />
          <Route path="/:username/favorites" element={<PrivateRoute currentUser={currentUser}
          >
            <ProfileFavorites />            </PrivateRoute>} />
          <Route path="/:username" element={<PrivateRoute currentUser={currentUser}
          >
            <Profile />            </PrivateRoute>} />
        </Routes>
      </div>
    );
  }
  return (
    <div>
      <Header
        appName={props.appName}
        currentUser={currentUser}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);