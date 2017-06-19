import React from 'react'
import {Text, AppRegistry} from 'react-native'
import Header from './src/components/header'

const App = () => (
      <Header headerText={"Walao"}/>
  );


AppRegistry.registerComponent('albums', () => App)