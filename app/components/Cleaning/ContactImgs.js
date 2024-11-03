import { StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'
import Contact from '../Contacts/Contact'


const ContactImgs = ({props}) => {

  const {zip, town, street, nr, www, email, tel} = props

  const googleMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street} ${nr}, ${town}, ${zip}`)}`

  const contactImgs = [
    { key: "web", val: www },
    { key: "map", val: googleMaps },
    { key: "email", val: `mailto: ${email}` },
    { key: "tel", val: `tel: ${tel}` }
  ]

  return (
    <View style={styles.contacts}>

      <View style={styles.wrapper}>
      {
        contactImgs?.map( (contact, c)=>{
          return( <Contact contact={contact} key={`JobPannelContactImg${contact?.key}${c}`} /> )
        })
      }
      </View>

    </View>
  )
}

export default ContactImgs

const styles = StyleSheet.create({
  contacts: {
    width: "100%",
    paddingTop:30,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    ...appStyles.row,
    ...appStyles.end
  },
  wrapper: {
    width: "70%",
    ...appStyles.row,
    ...appStyles.between
  }
})