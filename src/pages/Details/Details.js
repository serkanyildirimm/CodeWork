import React from "react";
import {ScrollView, Text, View,useWindowDimensions, TouchableOpacity, Alert} from "react-native";
import styles from "./Details.style";
import RenderHtml from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from "react-redux";



const Details = ({ route,navigation}) => {
    const { item } = route.params
    const source = {
        html: item.contents
    }
    const { width } = useWindowDimensions();

    const handleSubmit=()=>{
        Alert.alert('You have succes submit')
    }
    const dispatch=useDispatch();
    
    const handleAddFavorite=(favorite)=>{
       dispatch({type:'ADD_FAVORITE',payload:{favorite}})
    }

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.title} >{item.name}</Text>
                <View style={styles.location_container}>
                    <Text style={styles.location_title} >Location:</Text>
                    <Text style={styles.location} >{item.locations[0].name}</Text>
                </View>
                <View style={styles.level_container}>
                    <Text style={styles.level_title} >Location:</Text>
                    <Text style={styles.level} >{item.levels[0].name}</Text>
                </View>
            </View>

            <ScrollView style={styles.content}>
            <RenderHtml
                    baseStyle={{ color: 'black' }}
                    source={source}
                    contentWidth={width}
                />
            </ScrollView>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.submit_container}
                 onPress={handleSubmit}>
                    <Icon name="login" color='white' size={20} />
                    <Text style={styles.submit_text}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add_container}
                onPress={()=>handleAddFavorite(item)}
               >
                    <Icon name="heart" color='white' size={20} />
                    <Text style={styles.add_text} >Add Favorite</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Details;