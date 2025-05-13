
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import GlobalStyle from "../../Components/styles/Global";
import SearchBar from "../../Components/common/searchBar";
import AppointmentCard from "../../Components/common/appointmentsCard";
import DetailsModal from "../../Components/common/home/modal-details";
import { AppointmentInterface } from "../../model/appointment.interface";
import { useNavigation } from "@react-navigation/native";
import { apiController } from "../../Components/controller/api.controller";
import { MonthsEnum } from "../../model/month.enum";
import { useAuth } from "../../Components/context/auth.context";

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentInterface | null>(null);
    const [appointments, setAppointments] = useState<AppointmentInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const {user} = useAuth();

    const openModal = (appointment: AppointmentInterface) => {
        setSelectedAppointment(appointment);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const navigation = useNavigation();

    const handleProfileScreen = () => {
        navigation.navigate("ProfileScreen");
    };

    const fetchMinhasConsultas = async (token: string) => {
        try {
            const consultasData = await apiController.fetchMinhasConsultas(user?.token || ""); 
            setAppointments(consultasData); 
        } catch (err) {
            setError("Erro ao carregar as consultas.");
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchMinhasConsultas(user?.token || ""); 
    }, []);

    if (loading) {
        return <Text>Carregando...</Text>; 
    }

    if (error) {
        return <Text style={{ color: 'red' }}>{error}</Text>; 
    }

    return (
        <ScrollView>
            <View style={GlobalStyle.containerHome}>
                <View style={styles.header}>
                    <View style={styles.olaNome}>
                        <Text style={styles.textOla}>Olá,</Text>
                        <Text style={styles.textOlaNome}>{user?.nome}</Text>
                    </View>
                    <TouchableOpacity onPress={handleProfileScreen}>
                        <Image source={require("../../assets/vitor-perfil.png")} />
                    </TouchableOpacity>
                </View>

                <SearchBar />
                <View>
                    <Image
                        style={styles.bannerContainer}
                        source={require("./../../assets/banner.png")}
                    />
                </View>

                <View style={GlobalStyle.tituloPaginaArea}>
                    <Text style={GlobalStyle.tituloPagina}>Consultas agendadas</Text>
                </View>

                <ScrollView style={{ marginTop: 20 }}>
                    {appointments.map((appointment) => (
                        <View key={appointment.idConsulta}>
                            <AppointmentCard
                                day={new Date(appointment.data).getDate().toString()} 
                                month={MonthsEnum[new Date(appointment.data).getMonth() + 1]} 
                                time={new Date(appointment.data).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 
                                doctorName={appointment.dentista.nome}
                                speciality={appointment.dentista.especializacao}
                                onPress={() => openModal(appointment)}
                            />
                        </View>
                    ))}
                </ScrollView>

                {selectedAppointment && (
                    <DetailsModal
                        visible={modalVisible}
                        onClose={closeModal}
                        appointment={selectedAppointment}
                    />
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
    },
    olaNome: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    textOla: {
        fontWeight: "bold",
    },
    textOlaNome: {
        fontWeight: "bold",
        fontSize: 20,
    },
    bannerContainer: {
        width: 360,
        height: 200,
        marginVertical: 20,
        borderRadius: 20,
    },
});