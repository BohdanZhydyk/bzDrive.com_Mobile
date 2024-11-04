import { ScrollView, View } from 'react-native'
import React from 'react'
import { appStyles } from './Styles'
import { useAppState } from './StateContext'
import TxtColor from './components/All/TxtColor'
import ComingSoon from './components/All/ComingSoon'
import EmptyContent from './components/All/EmptyContent'
import TopPannel from './components/TopPannel'
import Contacts from './components/Contacts'
import MenuPannel from './components/MenuPannel'


const NewsScreen = () => {

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
              <TxtColor props={{txt:"News", color:"txtWht", size:20}} />
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

export default NewsScreen