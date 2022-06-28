import React from "react";
import { Text, View, ActivityIndicator} from "react-native";

const Loading=()=>{
    return (
        <View>
            <ActivityIndicator size="large" style={{alignItems:'center',marginTop:350}} />
        </View>
    )
}
export default Loading;