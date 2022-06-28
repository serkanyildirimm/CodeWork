import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "../../components/JobCard/JobCard.style";

const JobCard = ({ job, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.container}>
                <Text style={styles.job_name}>{job.name}</Text>
                <View style={styles.inner_container}>
                    <View style={styles.company_container}>
                        <Text numberOfLines={1} style={styles.company_location_name}>{job.locations[0].name}</Text>
                    </View>
                    <View style={styles.company_container}>
                        <Text style={styles.company_level_name}>{job.levels[0].name}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default JobCard;