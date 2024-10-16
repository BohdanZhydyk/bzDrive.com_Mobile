import { ScrollView, View } from 'react-native'
import React from 'react'
import TxtColor from './components/TxtColor'
import Contacts from './components/Contacts'
import TopPannel from './components/TopPannel'
import MenuPannel from './components/MenuPannel'
import ComingSoon from './components/ComingSoon'
import EmptyContent from './components/EmptyContent'
import { appStyles } from './Styles'
import { useAppState } from './StateContext'


const WorkshopScreen = () => {

  const { info } = useAppState()

  return (
    <View style={appStyles.container}>

      <TopPannel />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

        {
          info
          ?
          <>

            <View style={appStyles.center}>
              <TxtColor props={{txt:"Workshop", color:"txtWht", size:20}} />
            </View>
    
            <ComingSoon />

          </>
          :
          <EmptyContent />
        }


        <View style={{ flex: 1 }} />

        <Contacts />

      </ScrollView>

      <MenuPannel />

    </View>
  )
}

export default WorkshopScreen