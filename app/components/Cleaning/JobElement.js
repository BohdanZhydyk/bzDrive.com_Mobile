import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'


const JobElement = ({props}) => {

  const {job, setJob} = props

  const time = `${job?.time?.from}-${job?.time?.to}`
  const shortName = job?.client?.shortName
  const tel = job?.client?.contacts?.tel

  return (
    <Pressable style={styles.jobElement} onPress={()=>setJob(prev=>job)} >
      <Text style={appStyles.txtOrg}>{time}</Text>
      <Text style={appStyles.txtWht}>{shortName}</Text>
      <Text style={appStyles.txtYlw}>{tel}</Text>
    </Pressable>
  )
}

export default JobElement

const styles = StyleSheet.create({
  jobElement: {
    flex: 1,
    padding: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5
  }
})