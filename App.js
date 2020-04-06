import React from 'react';
import Home from './app/views/Home'
import Contact from './app/views/Contact'
import Video from './app/views/Video'
import VideoDetail from './app/views/VideoDetail'
import Regiser from './app/views/Register'
import Login from './app/views/Login'

import { StackNavigator } from 'react-navigation'

const MyRoutes = StackNavigator(
  {
    HomeRT: {
      screen: Home
    },
    ContactRT: {
      screen: Contact
    },
    LessonsRt: {
      screen: Video
    },
    VideoDetailRT: {
      screen: VideoDetail
    },
    RegisterRT: {
      screen: Regiser
    },
    LoginRT: {
      screen: Login
    }
  },
  {
    initialRouteName: 'HomeRT'
  }
)

export default function App() {
  return (
    <MyRoutes />
  );
}
