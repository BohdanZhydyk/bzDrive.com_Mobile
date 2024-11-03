import { Pressable, View } from 'react-native'
import React from 'react'
import { useAppState } from '../../StateContext'
import IconBtn from '../IconBtn'
import { appStyles } from '../../Styles'


const MenuUnfoldBtn = () => {

  const { info, setIsMenu } = useAppState()

  const ACT_MENU_UNFOLD = ()=> setIsMenu(prev=>!prev)

  return (
    <>
    {
      info
      ?
      <IconBtn props={{ ico:"menuUnfold", action:ACT_MENU_UNFOLD }} />
      :
      <View style={{...appStyles.icoBtn, ...appStyles.icoBtnEmpty}} ></View>
    }
    </>
  )
}

export default MenuUnfoldBtn