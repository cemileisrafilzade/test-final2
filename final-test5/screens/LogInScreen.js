import React from 'react'
import {
    View,Text,Image,StyleSheet,TouchableOpacity
} from 'react-native'
import { IMAGES } from '../styles/images'
import { COLORS } from '../styles/color'
import { FONT_FAMILIES, loadFonts } from '../styles/fonts'
import { CustomText } from '../components/CustomText'
import { CustomBtn } from '../components/CustomBtn'
import { ICONS } from '../styles/icon'
import { CustomField } from '../components/CustomField'
import { CustomBtnYellow } from '../components/CustomBtnYellow'
import { BackBtn } from '../components/BackBtn'


export const  Login = ({navigation}) =>{
     return(
         <View style={styles.container}>  
         <View style={{flexDirection:"row", alignItems:'center'}}> 
             <BackBtn  
             onPress={() => navigation.goBack()}   />
           <CustomText style={styles.logintxt}>LOGIN</CustomText></View>
         <View style={styles.wrapper}>
             <Image style={styles.chefimg} source={ICONS.chef}/>
         <CustomText style={styles.cookeasytxt}>cook Easy</CustomText>
<CustomField title='e-mail'/>
<CustomField title='password'/>
<CustomBtnYellow title='log in'/>
         </View>
         
         </View>
     )

 } 

 const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.BG_LOGIN
},
logintxt:{
    color:COLORS.BUTTON_TEXT,
    fontSize:45,
    paddingVertical:15
},
wrapper:{
    backgroundColor:COLORS.BUTTON_TEXT,
    borderRadius:40,
    paddingVertical:50,
    alignItems:"center",
    width:"90%"
},
chefimg:{
    width:60,
    height:60
},
cookeasytxt:{
    color:COLORS.BG_LOGIN,
    fontSize:48,
    fontWeight:'bold'
}
 })