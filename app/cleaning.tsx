import { ScrollView, View } from 'react-native'
import React from 'react'
import { appStyles } from './Styles'
import { useAppState } from './StateContext'
import EmptyContent from './components/All/EmptyContent'
import TopPannel from './components/TopPannel'
import Contacts from './components/Contacts'
import MenuPannel from './components/MenuPannel'
import Cleaning from './components/Cleaning'


const CleaningScreen = () => {

  const { info } = useAppState()

  return (
    <View style={appStyles.container}>

      <TopPannel />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        
        { info ? <Cleaning /> : <EmptyContent /> }

        <View style={{ flex: 1 }} />

        <Contacts />

      </ScrollView>

      <MenuPannel />

    </View>
  )
}

export default CleaningScreen