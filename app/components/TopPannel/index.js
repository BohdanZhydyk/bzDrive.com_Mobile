import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'
import IconBtn from '../IconBtn'
import { useAppState } from '../../StateContext'
import SiteIcon from '../SiteIcon'
import SiteLogo from './SiteLogo'


const TopPannel = () => {

  const { setIsMenu } = useAppState()

  return (
    <View style={styles.topPannel}>

      {/* <SiteIcon /> */}

      <SiteLogo />

      <Pressable onPress={()=>setIsMenu(prev=>!prev)} >
        <IconBtn ico="menuUnfold" />
      </Pressable>

    </View>
  )
}

export default TopPannel

const styles = StyleSheet.create({
  topPannel:{
    ...appStyles.row,
    ...appStyles.between,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    borderBottomStyle: 'solid',
    paddingTop:10,
    paddingBottom:10
  }
})