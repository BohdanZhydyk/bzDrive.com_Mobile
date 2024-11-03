import { Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { appStyles } from '../Styles'

const IconBtn = ({props}) => {

  const {ico, action} = props

  const size = 34
  const style = appStyles.txtOrg

  const imgUrl = `https://bzdrive.com/files/`

  function renderIcon(){
    switch (ico) {
      case "home":        return <Ionicons name="home-outline" size={size} style={style} />
      case "office":      return <MaterialCommunityIcons name="office-building-cog-outline" size={size} style={style} />
      case "profile":     return <AntDesign name="book" size={size} style={style} />
      case "menuUnfold":  return <AntDesign name="menu-unfold" size={size} style={style} />
      case "menuFold":    return <AntDesign name="menu-fold" size={size} style={style} />
      case "left":        return <FontAwesome5 name="chevron-left" size={size} style={style} />
      case "right":       return <FontAwesome5 name="chevron-right" size={size} style={style} />
      case "up":          return <FontAwesome5 name="chevron-up" size={size} style={style} />
      case "down":        return <FontAwesome5 name="chevron-down" size={size} style={style} />
      case "user":        return <Feather name="user" size={size} style={style} />
      case "settings":    return <Image source={{uri:`${imgUrl}ico/icoSettings.png`}} style={styles.icoBtnImg} />
      case "close":       return <Image source={{uri:`${imgUrl}ico/icoCancel.png`}} style={styles.icoBtnImg} />
      case "save":        return <Image source={{uri:`${imgUrl}ico/icoSave.png`}} style={styles.icoBtnImg} />
      case "check":       return <Image source={{uri:`${imgUrl}ico/icoCheck.png`}} style={styles.icoBtnImg} />
      case "delete":      return <Image source={{uri:`${imgUrl}ico/icoDelete.png`}} style={styles.icoBtnImg} />
      case "plus":        return <Image source={{uri:`${imgUrl}ico/icoPlus.png`}} style={styles.icoBtnImg} />
      case "doc":         return <Image source={{uri:`${imgUrl}ico/icoDOC.png`}} style={styles.icoBtnImg} />
      case "search":      return <Image source={{uri:`${imgUrl}ico/icoSearch.png`}} style={styles.icoBtnImg} />
      case "Workshop":    return <Image source={{uri:`${imgUrl}ico/icoWorkshop.png`}} style={styles.icoBtnImg} />
      case "News":        return <Image source={{uri:`${imgUrl}ico/icoNews.png`}} style={styles.icoBtnImg} />
      case "Cleaning":    return <Image source={{uri:`${imgUrl}ico/icoCleaning.png`}} style={styles.icoBtnImg} />
      default: break
    }
  }

  return (
    <Pressable style={styles.icoBtnImg} onPress={action} >
      {renderIcon()}
    </Pressable>
  )
}

export default IconBtn

const styles = StyleSheet.create({
  icoBtnImg: {
    ...appStyles.icoBtn
  }
})
