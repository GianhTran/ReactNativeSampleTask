import { StyleSheet, StatusBar } from 'react-native';

const AllEmployeesStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
});

export default AllEmployeesStyle;