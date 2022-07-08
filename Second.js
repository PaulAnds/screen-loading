import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles'

const Second = () => {
    return(
        <View style = {styles.container}>
            <Text style={styles.content}>Second Content</Text>
        </View>
    )
};

export default Second;