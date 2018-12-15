/** @format */
import React from 'react';
import {name as appName} from './app.json';
import {AppRegistry,Image,View} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList';

const App = () =>{
    return (  
        <View style={{flex:1}}>
            <Header headerText={'albums'}/>
            <AlbumList listText={'FUckingAlbum!!'}/>
        </View> 
        
    )
}
AppRegistry.registerComponent(appName, () => App);
