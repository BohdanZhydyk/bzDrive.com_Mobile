import { StyleSheet } from 'react-native'


export const appStyles = StyleSheet.create({

  container:{
    flex: 1,
    width: "100%",
    backgroundColor: "#222"
  },

  icoBtn: {
    width: 40,
    height: 40,
    justifyContent:"center",
    alignItems:"center"
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
  center: { alignItems:"center" },

  radius: { borderRadius:4 },

  txtWht:{ color:"#fff" },
  txtBlc:{ color:"#000" },
  txtDrk:{ color:"#222" },
  txtGry:{ color:"#555" },
  txtOrg:{ color:"#f60" },
  txtGrn:{ color:"#191" },
  txtBlu:{ color:"#00f" },
  txtRed:{ color:"#f00" },
  txtYlw:{ color:"#fd0" }

})