import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useAppState } from '../../StateContext'
import { appStyles } from '../../Styles'
import EmptyContacts from './EmptyContacts'
import Contact from './Contact'


const Contacts = () => {

  const { info } = useAppState()

  return (
    <View style={styles.contactsPannel}>
    {
      info?.contacts
      ?
      info?.contacts.map( (contact, c)=>{
        return( <Contact contact={contact} key={`ContactImg${contact?.key}${c}`} /> )
      })
      :
      <EmptyContacts />
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