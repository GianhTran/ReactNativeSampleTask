import React from "react";
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements'
import styles from "./AllEmployeesScreen.style"
import { getAllEmloyee, deleteEmployeeById } from "../../repositories/EmployeesRepository"

const showErorDialog = (errorTitle, errorMsg) =>
    Alert.alert(
        errorTitle,
        errorMsg,
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );

const AllEmployeesScreen = ({ navigation }) => {

    const showDeleteConfirmPopup = (employeeId) =>
        Alert.alert(
            "Delete this employee?",
            "Are you sure you want to delete this employee",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Delete", onPress: () => onDeteleEmployee(employeeId) }
            ]
        );

    const [emloyees, setEmloyees] = React.useState(getAllEmloyee);


    const [isDataEmpty, setIsDataEmpty] = React.useState(emloyees.length == 0);


    const onItemClicked = (employeeId) => {
        navigation.navigate("EmployeeDetailScreen", { employeeId: employeeId });
    }

    const onUpdateEmployee = (employeeId) => {
        navigation.navigate("RegisterScreen", { employeeId: employeeId });
    }

    const onDeteleEmployee = (employeeId) => {
        try {
            deleteEmployeeById(employeeId);
        } catch (e) {
            showErorDialog("error", "error " + e);
        }

        const latestemployees = getAllEmloyee();

        setIsDataEmpty(latestemployees.length == 0);
        setEmloyees(latestemployees);
    }

    const Item = ({ firstName, lastName, department, id }) => (
        <Card>
            <Card.Title>{firstName} {lastName}</Card.Title>

            {department.trim() != "" ? (<Text style={styles.normalText}>Department: {department}</Text>) : (<View />)}

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    testID="deleteButton"
                    style={styles.button}
                    onPress={() => {
                        showDeleteConfirmPopup(id)
                    }}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    testID="updateButton"
                    style={styles.button}
                    onPress={() => {
                        onUpdateEmployee(id)
                    }}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </Card>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                onItemClicked(item.employeeId)
            }}>
            <Item firstName={item.firstName} lastName={item.lastName} department={item.department} id={item.employeeId} />

        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            {!isDataEmpty ? <FlatList
                data={emloyees}
                renderItem={renderItem}
                keyExtractor={(item) => {
                    return item.id;
                }}
            /> : (<View style={styles.emptyDataContainer}>
                <Text style={{ ...styles.normalText, textAlign: 'center', }}>Data is empty</Text>
            </View>)}
        </SafeAreaView>
    )
};

export default AllEmployeesScreen;