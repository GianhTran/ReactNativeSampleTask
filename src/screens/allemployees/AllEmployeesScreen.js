import React from "react";
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements'
import styles from "./AllEmployeesScreen.style"
import { useNavigation } from "@react-navigation/native";
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

const AllEmployeesScreen = () => {
    const navigation = useNavigation();

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

    const [deletedEmployeeId, setDeletedEmployeeId] = React.useState({
        deletedEmployeeId: ""
    });

    const onItemClicked = (employeeId) => {
        navigation.navigate("EmployeeDetailScreen", { employeeId: employeeId })
    }

    const onDeteleEmployee = (employeeId) => {
        try {
            deleteEmployeeById(employeeId);
        } catch (e) {
            showErorDialog("error", "error " + e);
        }

        setDeletedEmployeeId(employeeId);
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
                    testID="upadteButton"
                    style={styles.button}>
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
            <FlatList
                data={getAllEmloyee()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
};

export default AllEmployeesScreen;