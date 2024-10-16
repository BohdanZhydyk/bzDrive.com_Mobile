import { Pressable, View } from 'react-native'
import React from 'react'
import { useAppState } from '../../StateContext'
import IconBtn from '../IconBtn'
import { appStyles } from '../../Styles'


const MenuUnfoldBtn = () => {

  const { info, setIsMenu } = useAppState()

  return (
    <>
    {
      info
      ?
      <Pressable onPress={()=>setIsMenu(prev=>!prev)} >
        <IconBtn ico="menuUnfold" />
      </Pressable>
      :
      <View style={{...appStyles.icoBtn, ...appStyles.icoBtnEmpty}} ></View>
    }
    </>
  )
}

export default MenuUnfoldBtn