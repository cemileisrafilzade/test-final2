import React from 'react'
import {TextInput,StyleSheet,View} from 'react-native'
import { COLORS } from '../styles/color'

export const CustomField = ({title}) =>{
    return(
        <TextInput style={styles.container} 
        placeholder={title}
        placeholderTextColor={"black"}
        />
    )
}
const styles = StyleSheet.create({
container:{
    height:60,
    backgroundColor:COLORS.FIELD_BG,
    marginVertical:10,
    borderRadius:15,
    minWidth:"90%",
    paddingHorizontal:15
}
})