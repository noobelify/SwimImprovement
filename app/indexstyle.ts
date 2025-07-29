import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000000'
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerBar: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
    },
    headerText: {
        textAlign: 'center',
    },
    profileIcon: {
        width:30,
        height:30,
        backgroundColor: 'purple',
        borderRadius: 15,
        marginRight: 10,
    },
    ContentBlock1: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 5,
        marginBottom: 20,
    },

    ContentTextCenter: {
        textAlign: 'center',
        color: '#333',
        fontWeight: 'bold'
    },
    ContentBlock2: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 5,
    },
});
