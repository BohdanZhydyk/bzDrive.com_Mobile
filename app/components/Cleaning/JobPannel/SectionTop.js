import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'
import IconBtn from '../../All/IconBtn'

const SectionTop = ({props}) => {

  const {_id, setJob} = props

  const ACT_CLOSE = ()=> setJob(prev=>false)

  return (
    <View style={styles.section}>

      <Text style={styles.id}>
        {`ID: ${_id}`}
      </Text>

      <IconBtn props={{ ico:"close", action:ACT_CLOSE }} />

    </View>
  )
}

export default SectionTop

const styles = StyleSheet.create({
  section: {
    ...appStyles.row,
    ...appStyles.between
  },
  id: {
    ...appStyles.txtGry,
    fontSize:10
  }
})