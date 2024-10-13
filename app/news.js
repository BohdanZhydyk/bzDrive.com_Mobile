import { ScrollView, View } from 'react-native'
import React from 'react'
import TxtColor from './components/TxtColor'
import Contacts from './components/Contacts'
import TopPannel from './components/TopPannel'
import MenuPannel from './components/MenuPannel'
import { appStyles } from './Styles'
import ComingSoon from './components/ComingSoon'


const NewsScreen = () => {
  return (
    <View style={appStyles.container}>

      <TopPannel />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <View style={appStyles.center}>
          <TxtColor props={{txt:"News", color:"txtWht", size:20}} />
        </View>

        <ComingSoon />

        <View style={{ flex: 1 }} />

        <Contacts />

      </ScrollView>

      <MenuPannel />

    </View>
  )
}

export default NewsScreen