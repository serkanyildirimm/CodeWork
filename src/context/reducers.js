import { useEffect, useState } from "react";
import { Alert } from "react-native";

const reducers = (state, action) => {

    switch (action.type) {
        case 'ADD_FAVORITE':
            const { favorite } = action.payload;

            const filter = state.favoriteList.find(item => item.id === favorite.id)

            if (filter) {
                Alert.alert('you have already add this job.')
            }
            else {
                Alert.alert('asfsads')
                const newList = [...state.favoriteList, favorite]
                return { ...state, favoriteList: newList };
            }
        case 'REMOVE_ITEM':
           return {
            favoriteList:[
                ...state.favoriteList.filter(item=>item!==action.payload.favorite)
            ]
           }

        default:
            return state;
    }

}

export default reducers;