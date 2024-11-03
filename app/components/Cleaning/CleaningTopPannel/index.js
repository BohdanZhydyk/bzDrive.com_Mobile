import { StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'
import IconBtn from '../../IconBtn'
import DateTitle from './DateTitle'
import SearchInput from './SearchInput'

const CleaningTopPannel = ({props}) => {

  const {week, search, setJob, setSearch, setSearchObj, Reducer} = props

  const ACT_PLUS = ()=> setJob(prev=>true)
  const ACT_SEARCH = ()=> Reducer({type:"SEARCH_DOCS", search})
  const ACT_DOC_CLOSE = ()=> { setSearch(prev=>!search); setSearchObj(prev=>false) }

  return (
    <View style={styles.topPannel}>

      <IconBtn props={{ ico:"plus", action:ACT_PLUS }} />

      <View style={{...appStyles.row, ...appStyles.center,  flex: 1 }}>
      {
        !search
        ? <DateTitle props={{week, Reducer}} />
        : <SearchInput props={{search, setSearch}} />
      }
      </View>

      {
        (search?.length > 2) &&
        <IconBtn props={{ ico:"search", action:ACT_SEARCH }} />
      }

      <IconBtn props={{ ico:!search ? "doc" : "close", action:ACT_DOC_CLOSE }} />

    </View>
  )
}

export default CleaningTopPannel

const styles = StyleSheet.create({
  topPannel:{
    width:"100%",
    marginBottom:5,
    alignItems:"center",
    ...appStyles.row,
    ...appStyles.between
  }
})