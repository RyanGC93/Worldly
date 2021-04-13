import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {useDispatch} from 'react-redux'
import LoginPage from './components/LoginPage'
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import EventsFeed from './components/EventsFeed'
import Profile from './components/Profile'
import LandingPage from './components/LandingPage'
import { restoreUser } from './store/session'
import PageNoteFound from './components/PageNoteFound'


function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
 
  useEffect(() => {
    (async () => {
      const user = await dispatch(restoreUser())
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} />
          <LandingPage />
          {/* <UsersList/> */}
        </ProtectedRoute>
        <ProtectedRoute path="/events/:region"  authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} />
          <EventsFeed />
          {/* <UsersList/> */}
        </ProtectedRoute>
        <ProtectedRoute path="/profile/:userId" exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} />
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/booking/:eventId" exact={true} authenticated={authenticated}>
          <EventCard/>
          <Profile />
        </ProtectedRoute>
        <Route path='*'>
          <PageNoteFound />

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
