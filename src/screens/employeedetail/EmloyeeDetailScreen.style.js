import {StyleSheet, StatusBar} from 'react-native';

const EmployeeDetailStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
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

export default EmployeeDetailStyle;