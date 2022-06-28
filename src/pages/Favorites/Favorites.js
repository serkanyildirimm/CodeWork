import React from "react";
import { FlatList, Text,TouchableOpacity,View } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';

const Favorites = () => {
    const favoriteList = useSelector(s => s.favoriteList);
    const dispatch=useDispatch();
    const removeItem=(item)=>{
        dispatch({type:'REMOVE_ITEM',payload:{favorite:item}})
    }

    const renderItem = ({ item }) => (
    <View>
        <JobCard job={item} />
        <TouchableOpacity style={{backgroundColor:'tomato',borderRadius:10,alignSelf:'center',width:200}}
        onPress={()=>removeItem(item)}>
            <Text style={{alignSelf:'center',fontWeight:'bold',color:'white',fontSize:15}}>Remove</Text>
        </TouchableOpacity>
    </View>)

    return (
        <View>
            <FlatList data={favoriteList}
                renderItem={renderItem}
            />
        </View>
    )
}
export default Favorites;