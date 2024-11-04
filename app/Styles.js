import { StyleSheet } from 'react-native'


export const appStyles = StyleSheet.create({

  container:{
    flex: 1,
    width: "100%",
    backgroundColor: "#222"
  },

  icoBtn: {
    width: 30,
    height: 30,
    margin:5,
    justifyContent:"center",
    alignItems:"center"
  },
  icoBtnEmpty: {
    backgroundColor:"#7777",
    borderRadius:5,
    marginLeft:5,
    marginRight:5
  },
  icoTxtEmpty: {
    width:200,
    backgroundColor:"#7777",
    borderRadius:5,
    marginLeft:5,
    marginRight:5
  },
  icoParagraphEmpty: {
    height:30,
    backgroundColor:"#7777",
    borderRadius:5,
    marginTop:20,
    marginLeft:5,
    marginRight:5,
  },

  none: { display:"none" },
  wrap: { flexWrap:"wrap" },
  stretch: { alignItems:"stretch" },
  column: { flexDirection:"column" },
  row: { flexDirection:"row" },
  start: { justifyContent:"flex-start" },
  end: { justifyContent:"flex-end" },
  between: { justifyContent:"space-between" },
  evenly: { justifyContent:"space-evenly" },
  around: { justifyContent:"space-around" },
  center: { alignItems:"center", justifyContent:"center" },

  radius: { borderRadius:4 },

  txtWht:{ color:"#fff" },
  txtBlc:{ color:"#000" },
  txtDrk:{ color:"#222" },
  txtGry:{ color:"#999" },
  txtOrg:{ color:"#f60" },
  txtGrn:{ color:"#191" },
  txtRed:{ color:"#f00" },
  txtYlw:{ color:"#fd0" },
  txtBlu:{ color:"#00f" },
  txtLightBlu:{ color:"#007bff" }

})