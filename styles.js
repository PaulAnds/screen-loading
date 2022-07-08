import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    nav:{
        backgroundColor: 'lightgray',
    },

    title:{
        flex:1,
        fontSize: 16,
        fontweight:"bold",
    },

    content:{
        fontSize: 23,
        fontWeight: 'bold',
    },

    progress:{
        width: 150,
        alignItems: 'center',
        padding: 1,
    }
})