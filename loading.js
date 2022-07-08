import React, {useEffect,useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';


const loading = (Wrapper) => {
    return function LoadingWrapper(props){
        const [loading,setLoading] = useState(true);
        useEffect(() =>{
            setTimeout(() =>{
                setLoading(false);
            }, 1000);
        }, []);
    
        if(loading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#D63EB4"/>
                </View>
            );
        } 
        else{
            //agarra todo los props
            return <Wrapper {...props}/>;
        }
    }

}

export default loading;