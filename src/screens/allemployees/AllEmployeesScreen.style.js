import { StyleSheet, StatusBar } from 'react-native';

const AllEmployeesStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    emptyDataContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 24,
        color: "#18191F",
        marginBottom: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    normalText: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 12,
        color: "#18191F",
        marginBottom: 20,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        height: 20
    },
    button: {
        backgroundColor: "#13D592",
        borderColor: "#13D592",
        borderWidth: 2,
        alignItems: "baseline",
        width: 120,
        height: 35,
        borderRadius: 10,
        margin: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        width: "90%",
        fontSize: 14,
        textAlign: "center",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
});

export default AllEmployeesStyle;