import { ScrollView, View } from 'react-native'
import React from 'react'
import StateStyled from './components/StateStyled'
import TxtColor from './components/TxtColor'
import Contacts from './components/Contacts'
import TopPannel from './components/TopPannel'
import MenuPannel from './components/MenuPannel'
import { appStyles } from './Styles'


const WorkshopScreen = () => {
  return (
    <View style={appStyles.container}>

      <TopPannel />

      <ScrollView>


        <TxtColor props={{txt:"Workshop", color:"txtWht"}} />

        <StateStyled />
        <StateStyled />
        <StateStyled />

        <Contacts />

      </ScrollView>

      <MenuPannel />

    </View>
  )
}

export default WorkshopScreen