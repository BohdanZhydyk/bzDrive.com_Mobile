import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'
import IconBtn from '../../All/IconBtn'

const SectionBtns = ({props}) => {

  const {_id, del, setDel, SAVE_JOB, DELETE_JOB} = props

  const ACT_DELETE =  ()=> setDel(prev=>true)
  const ACT_CLOSE =   ()=> setDel(prev=>false)

  return (
    <View style={styles.section}>

      {
        !del &&
        <IconBtn props={{ ico:"save", action:SAVE_JOB }} />
      }

      {
        !del && (_id !=="new") &&
        <IconBtn props={{ ico:"delete", action:ACT_DELETE }} />
      }

      {
        del &&
        <>
          <IconBtn props={{ ico:"check", action:DELETE_JOB }} />
          <IconBtn props={{ ico:"close", action:ACT_CLOSE }} />
        </>
      }

    </View>
  )
}

export default SectionBtns

const styles = StyleSheet.create({
  section: {
    ...appStyles.row,
    ...appStyles.end,
    flex:1,
    margin:5
  }
})