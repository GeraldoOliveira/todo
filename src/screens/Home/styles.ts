
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
        backgroundColor:"#1A1A1A",
        borderRadius:10,
        flexDirection: "column",
        flex: 1
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
        color: "#F2F2F2",
        backgroundColor: "#262626",
        textAlign: "left",
        marginRight: 4,
        fontSize: 16,
        borderWidth:1,
        borderColor: "#0D0D0D"
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
    },
    containerTasks:{
        marginTop: 55,
        marginLeft: 24,
        marginRight: 24,
    },
    taskStatus:{
        height: 19,
        width: 327,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    createdContainer:{
        height: 19,
        gap: 8,
        flexDirection: "row",
    },
    completedContainer:{
        height: 19,
        gap: 8,
        flexDirection: "row",
    },
    createdText:{
        color:"#4EA8DE",
        fontSize:14,
        lineHeight:17,
        fontWeight: "700",
    },
    completedText:{
        color:"#8284FA",
        fontSize:14,
        lineHeight:17,
        fontWeight: "700",
    },
    createdCounter:{
        backgroundColor: "#333333",
        paddingLeft: 2,
        alignItems: "center",
        textAlign:"center",
        borderRadius: 999,
        height: 19,
        width: 25,
        color: "#D9D9D9",
    },
    completedCounter:{
        backgroundColor: "#333333",
        paddingLeft: 2,
        alignItems: "center",
        textAlign:"center",
        borderRadius: 999,
        height: 19,
        width: 25,
        color: "#D9D9D9",
    },
    tasksView:{
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: "#333333",
        width: 327,
        height: "100%"
    },
})