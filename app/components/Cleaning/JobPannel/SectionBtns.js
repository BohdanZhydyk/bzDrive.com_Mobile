import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'
import IconBtn from '../../IconBtn'

const SectionBtns = ({props}) => {

  const {_id, del, setDel, SAVE_JOB, DELETE_JOB} = props

  return (
    <View style={styles.section}>

      {
        !del &&
        <Pressable onPress={SAVE_JOB}>
          <IconBtn ico={`save`} />
        </Pressable>
      }

      {
        !del && (_id !=="new") &&
        <Pressable onPress={()=>setDel(prev=>true)}>
          <IconBtn ico={`delete`} />
        </Pressable>
      }

      {
        del &&
        <>
          <Pressable onPress={DELETE_JOB}>
            <IconBtn ico={`check`} />
          </Pressable>

          <Pressable onPress={()=>setDel(prev=>false)}>
            <IconBtn ico={`close`} />
          </Pressable>
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