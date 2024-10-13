import { Image, StyleSheet, Linking, Pressable, View } from 'react-native'
import React from 'react'
import { useAppState } from './../StateContext'
import { appStyles } from '../Styles'


const Contacts = () => {

  const { info } = useAppState()

  return (
    <View style={styles.contactsPannel}>
    {
      info?.contacts && info?.contacts.map( (contact, c)=>{

        const uri = `https://bzdrive.com/files/ico/contacts/${contact?.key}.png`
        const link = contact?.val
        const key = `ContactImg${contact?.key}${c}`

        return(
          <Pressable onPress={() => Linking.openURL(link)} key={key}>
            <Image source={{ uri }} style={appStyles.icoBtn} />
          </Pressable>
        )

      })
    }
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
  contactsPannel:{
    ...appStyles.row,
    ...appStyles.evenly,
    borderTopWidth: 1,
    borderTopColor: '#999',
    borderTopStyle: 'solid',
    paddingTop:10,
    paddingBottom:10
  }
})