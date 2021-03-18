import { StyleSheet, StatusBar } from 'react-native';

const RegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#f4f4f4",
    },
    registerContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 24,
        color: "#18191F",
        marginBottom: 20,

    },
    inputTitle: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 16,
        color: "#18191F",
        marginBottom: 5,
    },
    inputHeader: {
        width: "90%",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    inputContainer: {
        width: "90%",
        flexDirection: "row",
        backgroundColor: "#f4f4f4",
        borderColor: "#18191F",
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        marginBottom: 2,
        alignItems: "center",
        paddingLeft: 10,
        marginBottom: 20,
    },
    inputText: {
        width: "90%",
        height: 50,
        fontFamily: "popins-regular",
        color: "#18191F",
    },
    submitButton: {
        width: "90%",
        backgroundColor: "#18191F",
        borderColor: "#18191F",
        borderWidth: 2,
        borderRadius: 10,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 2,
    },
    skipButton: {
        width: "90%",
        backgroundColor: "#18191F",
        borderColor: "#18191F",
        borderWidth: 2,
        borderRadius: 10,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        marginBottom: 30,
    },
    submitText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default RegisterStyle;