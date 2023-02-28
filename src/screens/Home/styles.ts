
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerBlack:{
        width:"100%",
        height:173,
        backgroundColor:"#0D0D0D",
    },
    containerGray:{
        width:"100%",
        height:"100%",
        backgroundColor:"#454545",
        borderRadius:10,
        flexDirection: "row",
    },
    logoImage:{
        height:32,
        width:110,
        marginTop:70,
        marginLeft: 132
    },
    buttonText:{
        height:54,
        width:271,
        borderRadius: 6,
        paddingLeft: 16,
        color: "#FFFFFF",
        backgroundColor: "#262626",
        textAlign: "left",
        marginRight: 4
    },
    buttonAdd:{
        height:52,
        width:52,
        borderRadius: 6,
        backgroundColor: "#1E6F9F",
        justifyContent:"center",
        alignItems: "center"
    },
    buttonPlus:{
        color: "#FFF",
        fontSize: 24,
    },
    textAndButton:{
        height:52,
        width:52,
        marginLeft:24,
        marginRight:24,
        color: "#FFFFFF",
        flexDirection: "row",
        marginTop: 40
    },
    plusImage:{
        height: 16,
        width: 16
    }

})