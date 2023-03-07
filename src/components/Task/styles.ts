
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        height: 64,
        backgroundColor:"#333333",
        borderRadius:8,
        flexDirection: "row",
        marginBottom: 8,
        padding:12,
        alignItems:"center"
    },
    checkButton: {
        width:32,
        height: 32,
        marginRight:8,
        paddingBottom:2,
        alignItems:"center"
    },
    textButtonUnchecked: {
        color: "#F2F2F2",
        fontSize:14,
        fontWeight:"400",
        height:40,
        width:235,
        alignItems:"center"
    },
    textButtonChecked:{
        color: "#F2F2F2",
        fontSize:14,
        fontWeight:"400",
        height:40,
        width:235,
        alignItems:"center",
        textDecorationLine: "line-through",
        textDecorationStyle: "solid"
    },
    deleteContainer: {
        width:32,
        height: 32,
        alignItems:"center",
        justifyContent: "center",
    },
    deleteButton: {
        width:12.5,
        height: 14,
    }

})