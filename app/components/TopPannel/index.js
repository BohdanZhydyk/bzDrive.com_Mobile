import { StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'
import SiteLogo from './SiteLogo'
import MenuUnfoldBtn from './MenuUnfoldBtn'


const TopPannel = () => {

  return (
    <View style={styles.topPannel}>

      {/* <SiteIcon /> */}

      <SiteLogo />

      <MenuUnfoldBtn />

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