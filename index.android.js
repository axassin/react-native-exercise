import React from 'react'
import {View, Text, AppRegistry} from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => (
      <View style={{ flex: 1 }}>
        <Header headerText={"Walao"}/>
        <AlbumList />
      </View>
);


AppRegistry.registerComponent('albums', () => App)