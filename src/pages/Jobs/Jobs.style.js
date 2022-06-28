import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#c8e6c9'
    },
    button_container: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10
    },
    button: {
        flexDirection:'row',
        backgroundColor:'tomato',
        marginBottom:5,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        width: 150,
    },
    button_text: {
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    }

})
export default styles;