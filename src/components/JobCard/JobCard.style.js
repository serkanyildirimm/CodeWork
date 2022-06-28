import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        flex: 1,
        borderColor: '#b2dfdb'
    },
    job_name: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    company_container: {
        marginTop:20,
        backgroundColor:'#3C0B7F',
        borderRadius:8,
        paddingHorizontal:5,
        paddingVertical:5,
        width:180,
        // height:30,
        alignItems:'center',
        justifyContent:'center'
    },
    company_level_name:{
        color:'white',
    },
    company_location_name: {
        color:'white',
    },
})
export default styles;