import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'
import IconBtn from '../../IconBtn'

const SectionTop = ({props}) => {

  const {_id, setJob} = props

  return (
    <View style={styles.section}>

      <Text style={styles.id}>
        {`ID: ${_id}`}
      </Text>

      <Pressable onPress={()=>setJob(prev=>false)}>
        <IconBtn ico={`close`} />
      </Pressable>

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