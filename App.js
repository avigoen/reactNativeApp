import React from 'react';
import Home from './app/views/Home'
import Contact from './app/views/Contact'
import Video from './app/views/Video'
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
