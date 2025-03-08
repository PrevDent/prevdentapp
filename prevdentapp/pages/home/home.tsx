import { View, Text, StyleSheet, Image} from "react-native";
import GlobalStyle from "../../Components/styles/Global";
import SearchBar from "../../Components/common/searchBar";

export default function Home(){
    return(
        <View style={GlobalStyle.container}>
            <View style={styles.header}>
                <View style={styles.olaNome}>
                    <Text style={styles.textOla}>Olá,</Text>
                    <Text style={styles.textOlaNome}>Vitor Santos</Text>
                </View>
                <Image source={require("../../assets/vitor-perfil.png")} />
            </View>

            <SearchBar/>
            
            <View style={styles.consultasAgendadasArea}>
                <Text style={styles.consultasAgendadas}>Consultas agendadas</Text>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
    },
    olaNome:{
        flexDirection: "column",
        alignItems: "flex-start",
    },
    textOla:{
        fontWeight: "bold",
    },
    textOlaNome:{
        fontWeight: "bold",
        fontSize: 20,
    },
    consultasAgendadasArea:{
        alignSelf: "flex-start",
    },
    consultasAgendadas:{
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20,
    }
});