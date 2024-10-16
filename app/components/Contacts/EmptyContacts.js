import { StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'


const EmptyContacts = () => {
  return (
    <>
    {
      [{},{},{},{},{}].map( (emptyContact, c)=>{
        const key = `EmptyContact${c}`
        return( <View style={{...appStyles.icoBtn, ...appStyles.icoBtnEmpty}} key={key}></View> )
      })
    }
    </>
  )
}

export default EmptyContacts
