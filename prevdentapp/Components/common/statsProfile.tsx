import { View, Text, StyleSheet } from 'react-native'


interface StatsProfileProps {
    content: string;
    subTitle: string;
}

function StatsProfileCard({
    content = "valor",
    subTitle = "subtitulo",
}: StatsProfileProps) {
  return (
    <View style={style.container}>
        <View style={style.contentArea}>
            <Text style={style.contentText}>{content}</Text>
        </View>
        <View style={style.subTitleArea}>
            <Text style={style.subTitleText}>{subTitle}</Text>
        </View>   
    </View>
  )
}


const style = StyleSheet.create({
    container:{
        width: 150,
        height: 100,   
        justifyContent: "center",
        backgroundColor: "#002967d6",
        padding: 10, 
        borderRadius: 20,
        alignItems: "center",
        gap: 20
    },
    contentArea:{
        marginBottom: 10
    },
    contentText:{
        fontSize: 30,
        fontWeight: "900",
        color: "#fff",
    },
    subTitleArea:{
        position:"absolute",
        bottom: 10
    },
    subTitleText:{
        fontSize: 12,
        fontWeight: "500",
        color: "#fff",
    }
})
export default StatsProfileCard