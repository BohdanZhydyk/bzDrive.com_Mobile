import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'
import { sanitizeTxt } from '../../AppFunctions'


const JobElement = ({props}) => {

  const {job, setJob} = props

  const time = `${job?.time?.from}-${job?.time?.to}`
  const shortName = sanitizeTxt(job?.client?.shortName, "CompanyNameShort")?.sanText
  // const tel = sanitizeTxt(job?.client?.contacts?.tel, "tel")?.sanText
  const price = sanitizeTxt(job?.price, "price")?.sanText

  return (
    <Pressable style={styles.jobElement} onPress={()=>setJob(prev=>job)} >
      <Text style={{...appStyles.txtYlw, fontSize:11}}>{time}</Text>
      <Text style={{...appStyles.txtWht, minHeight:18}}>{shortName}</Text>
      {/* <Text style={appStyles.txtYlw}>{tel}</Text> */}
      <Text style={{...appStyles.txtOrg, textAlign:"end"}}>{`${price} zł`}</Text>
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