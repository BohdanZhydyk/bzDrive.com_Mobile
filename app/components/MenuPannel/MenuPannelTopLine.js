import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppState } from '../../StateContext'
import IconBtn from '../IconBtn'
import { appStyles } from '../../Styles'

const MenuPannelTopLine = () => {

  const { setIsMenu } = useAppState()

  const ACT_SETTINGS =  ()=> {alert(`"SettingsPannel" zostanie rozbudowany w przyszłości.`)}
  const ACT_USER =      ()=> {alert(`"UserPanel" zostanie rozbudowany w przyszłości.`)}
  const ACT_MENU_FOLD = ()=> setIsMenu(prev=>!prev)

  return (
    <View style={styles.topLine}>

      <Text style={{...appStyles.txtWht, marginLeft:10, fontSize:30}}>{"MENU"}</Text>

      <View style={{...appStyles.row}}>

        <IconBtn props={{ ico:"settings", action:ACT_SETTINGS }} />

        <IconBtn props={{ ico:"user", action:ACT_USER }} />

        <IconBtn props={{ ico:"menuFold", action:ACT_MENU_FOLD }} />

      </View>

    </View>
  )
}

export default MenuPannelTopLine

const styles = StyleSheet.create({
  topLine: {
    ...appStyles.row,
    ...appStyles.between,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    borderBottomStyle: 'solid',
    paddingTop:10,
    paddingBottom:10
  }
})