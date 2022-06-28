import React, { useState } from "react";
import Config from "react-native-config";
import { View, FlatList, Text, TouchableOpacity, Alert } from "react-native";
import useFetch from '../../hooks/useFetch/useFetch';
import styles from "./Jobs.style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import JobCard from "../../components/JobCard/JobCard";


const Jobs = ({ navigation }) => {
    const [page, setPage] = useState(2);
    const { data, error, loading } = useFetch(`${Config.API_URL}?page=${page}`);

    if(error){
        return <Error/>
    }
    if(loading){
        return <Loading/>
    }

    const goPrevious = () => {
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }
    const goNext = () => {
        if (page == 50) {
            setPage(1)
        } else {
            setPage(page + 1)
        }
    }
    const handleDetail=(item)=>{
        navigation.navigate('DetailsScreen',{item})
    }

    const renderItem = ({ item }) => (<JobCard job={item} onPress={()=>handleDetail(item)} />)

    return (
        <View style={styles.container}>
            <FlatList
                data={data.results}
                renderItem={renderItem}
            />
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="skip-previous" color='white' size={24} />
                    <Text onPress={goPrevious} style={styles.button_text} >Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Icon name="skip-next" color='white' size={24} />
                    <Text onPress={goNext} style={styles.button_text} >Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


}
export default Jobs;