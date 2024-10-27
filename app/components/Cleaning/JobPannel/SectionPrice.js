import { StyleSheet, Text } from 'react-native'
import React from 'react'
import InputTypeText from './InputTypeText'
import { sanitizeTxt } from '../../../AppFunctions'
import { appStyles } from '../../../Styles'

const SectionPrice = ({props}) => {

  const {price, setPrice} = props

  return (
    <>

      <InputTypeText
        props={{
          st:{ width:"20%" }, legend:`Cena:`, cb:setPrice, kbType:"decimal-pad",
          value:sanitizeTxt(price, "price")?.sanText
        }}
      />

      <Text style={styles.zl}>{`zł`}</Text>

    </>
  )
}

export default SectionPrice

const styles = StyleSheet.create({
  zl: {
    ...appStyles.txtOrg,
    alignSelf: "flex-end",
    marginLeft: 10,
    marginBottom: 5
  }
})