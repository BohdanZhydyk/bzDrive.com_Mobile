import { ScrollView, View } from 'react-native'
import React from 'react'
import Contacts from './components/Contacts'
import TopPannel from './components/TopPannel'
import MenuPannel from './components/MenuPannel'
import EmptyContent from './components/EmptyContent'
import Cleaning from './components/Cleaning'
import { appStyles } from './Styles'
import { useAppState } from './StateContext'


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