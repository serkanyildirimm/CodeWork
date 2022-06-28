import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header_container: {
        backgroundColor: '#3C0B7F',
        padding: 5,
    },
    title: {

        fontSize: 24,
        color: 'white',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    location_container: {
        flexDirection: 'row',
    },
    location_title: {
        color: '#15EADA',
        fontSize: 20,
        fontWeight: 'bold'
    },
    location: {
        fontSize: 20,
        color: 'white',
        marginLeft: 2,
        fontWeight: '500'
    },
    level_container: {
        flexDirection: 'row',
    },
    level_title: {
        color: '#15EADA',
        fontSize: 20,
        fontWeight: 'bold'
    },
    level: {
        fontSize: 20,
        color: 'white',
        marginLeft: 2,
        fontWeight: '500'
    },
    content:{
        marginLeft:10,
        marginRight:10,
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    submit_container: {
        flexDirection: 'row',
        backgroundColor: '#3C0B7F',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        paddingVertical: 5,
        alignItems: 'center',
    },
    submit_text:
    {
        color: 'white',
        fontSize: 20,
        marginLeft:5,

    },
    add_container: {
        flexDirection: 'row',
        backgroundColor: '#3C0B7F',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        paddingVertical: 5,
        alignItems: 'center'
    },
    add_text:
    {
        color: 'white',
        fontSize: 20,
    },

})
export default styles;