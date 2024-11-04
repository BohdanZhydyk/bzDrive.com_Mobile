import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'


const ComingSoon = () => {
  return (
    <View style={styles.soon}>
      <Text style={styles.txt}>Ta aplikacja jest w trakcie tworzenia.</Text>
      <Text style={styles.txt}>W najbliższym czasie pojawi się tutaj więcej informacji.</Text>
    </View>
  )
}

export default ComingSoon

const styles = StyleSheet.create({
  txt: {
    ...appStyles.txtOrg,
    textAlign:"center",
    marginTop:20,
    marginBottom:20,
    fontSize:15
  },
  soon: {
    margin:20,
    padding:20,
    borderWidth: 1,
    borderColor: appStyles.txtGry.color,
    borderStyle: 'dashed',
    borderRadius:10
  }
})