import React,{useState} from 'react'
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


export const  SignUp = ({navigation}) =>{
  
    const [isAgree,setIsAgree] = useState(false);
    const toggleIsAgree = () => setIsAgree(v=>!v);


    return(
         <View style={styles.container}> 
        <View style={{flexDirection:"row",justifyContent:'space-around',
    alignItems:'center'}}> 
            <BackBtn   onPress={() => navigation.goBack()}/>
           <CustomText style={styles.logintxt}>Sign Up</CustomText>
           </View>
         
         <View style={styles.wrapper}>
         
<CustomField   title='username'  />
<CustomField title = 'e-mail'/>
<CustomField title = 'password'/>
<CustomField title = 'confirm password'/>

        
<View style={styles.checkboxview}>
         <TouchableOpacity onPress={toggleIsAgree}>
             <View style={[styles.checkbox,{
                 backgroundColor: isAgree?COLORS.PRIMARY:COLORS.FIELD_BG,
             }]}/>
         </TouchableOpacity>
         <Text>agree with </Text>
             <TouchableOpacity
            //   onPress={Link} 
            >
             <Text style={{fontWeight:'bold'}}>  Terms and Conditions</Text></TouchableOpacity>
         </View>
<CustomBtnYellow title='Create'/>
         </View>
         
         </View>
     )

 } 

 const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.BG_SIGN_UP
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
},
checkbox:{
       width:25,
       height:25,
       marginRight:10,
       borderRadius:5,
    
    },
    checkboxview:{
        flexDirection:'row',
        marginVertical:10,
        width:"90%",
        justifyContent:'center'
        
    }
 })