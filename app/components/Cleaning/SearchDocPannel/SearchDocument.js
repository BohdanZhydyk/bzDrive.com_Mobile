import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'

const SearchDocument = ({props}) => {

  const {searchLine, l, setJob} = props

  const elStyles = (l === 0) ? {...appStyles.txtYlw, ...styles.el} : {...appStyles.txtWht, ...styles.el}

  const DOC_PRESS = ()=> (l !== 0) && setJob(prev=>searchLine)

  const name = searchLine?.client?.shortName ?? searchLine?.client?.name
  const nip = searchLine?.client?.nip
  const tel = searchLine?.client?.contacts?.tel

  return (
    <Pressable style={{...appStyles.row}} onPress={DOC_PRESS} >

      <Text style={{...elStyles, width:"20%"}}>{name}</Text>

      <Text style={{...elStyles, width:"25%"}}>{nip}</Text>

      <Text style={{...elStyles, width:"25%"}}>{tel}</Text>

    </Pressable>
  )
}

export default SearchDocument

const styles = StyleSheet.create({
  el: {
    margin:1,
    padding:2,
    borderWidth:1,
    borderColor:"#999",
    borderRadius:2
  }
})