import { View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { appStyles } from '../Styles'

const IconBtn = (props) => {

  const size = 34
  const style = appStyles.txtOrg

  function renderIcon(){
    switch (props?.ico) {
      case "home":        return <Ionicons name="home-outline" size={size} style={style} />
      case "office":      return <MaterialCommunityIcons name="office-building-cog-outline" size={size} style={style} />
      case "profile":     return <AntDesign name="book" size={size} style={style} />
      case "menuUnfold":  return <AntDesign name="menu-unfold" size={size} style={style} />
      case "menuFold":    return <AntDesign name="menu-fold" size={size} style={style} />
      case "user":        return <Feather name="user" size={size} style={style} />
      case "settings":    return <SimpleLineIcons name="settings" size={size} style={style} />
      case "close":       return <AntDesign name="close" size={size} style={style} />
      case "save":        return <MaterialCommunityIcons name="content-save-outline" size={size} style={style} />
      case "check":       return <AntDesign name="check" size={size} style={style} />
      case "delete":      return <AntDesign name="delete" size={size} style={style} />
      case "left":        return <FontAwesome5 name="chevron-left" size={size} style={style} />
      case "right":       return <FontAwesome5 name="chevron-right" size={size} style={style} />
      case "up":          return <FontAwesome5 name="chevron-up" size={size} style={style} />
      case "down":        return <FontAwesome5 name="chevron-down" size={size} style={style} />
      case "plus":        return <AntDesign name="addfile" size={size} style={style} />
      case "Workshop":    return <MaterialCommunityIcons name="garage-variant" size={size} style={style} />
      case "News":        return <MaterialCommunityIcons name="newspaper-variant-multiple-outline" size={size} style={style} />
      case "Cleaning":    return <MaterialCommunityIcons name="vacuum-outline" size={size} style={style} />
      default: break
    }
  }

  return (
    <View style={appStyles.icoBtn}>
      {renderIcon()}
    </View>
  )
}

export default IconBtn
