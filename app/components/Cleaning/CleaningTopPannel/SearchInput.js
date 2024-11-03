import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'

const SearchInput = ({props}) => {

  const {search, setSearch} = props

  const value = search?.length > 0 ? search : ""

  return (
    <View style={styles.searchInput}>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setSearch}
      />

    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  searchInput: {
    flex:1,
    borderWidth:1,
    borderColor:"#999",
    borderRadius:5
  },
  input: {
    ...appStyles.txtWht,
    padding:5
  }
})