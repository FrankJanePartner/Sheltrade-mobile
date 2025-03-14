import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotificationDetails = ({ route }) => {
    const navigation = useNavigation();
    const { notification } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.back}>&larr; Go Back</Text>
                </TouchableOpacity>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.formHeader}>
                <Text style={styles.headerText}>Notifications</Text>
            </View>

            <View style={styles.note}>
                <Text style={styles.noteTitle}>{notification.title}</Text>
                <Text style={styles.noteContent}>{notification.content}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0f29',
        padding: 20
    },
    topSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    back: {
        color: '#ff7f00',
        fontSize: 18
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    formHeader: {
        marginBottom: 20
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    note: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 20,
        borderRadius: 10,
        width: '100%'
    },
    noteTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    noteContent: {
        fontSize: 16,
        color: '#c4c4c9',
        marginTop: 10
    }
});

export default NotificationDetails;