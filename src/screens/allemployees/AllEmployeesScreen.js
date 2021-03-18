import React from "react";
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Card, } from 'react-native-elements'
import styles from "./AllEmployeesScreen.style"
import { useNavigation } from "@react-navigation/native";
import { getAllEmloyee } from "../../repositories/EmployeesRepository"

const Item = ({ firstName, lastName, department }) => (
    <Card>
        <Card.Title>{firstName} {lastName}</Card.Title>

        {department.trim() != "" ? (<Text style={styles.normalText}>Department: {department}</Text>) : (<View />)}
    </Card>
);

const AllEmployeesScreen = () => {
    const navigation = useNavigation();

    const onItemClicked = (employeeId) => {
        navigation.navigate("EmployeeDetailScreen", { employeeId: employeeId })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                onItemClicked(item.employeeId)
            }}>
            <Item firstName={item.firstName} lastName={item.lastName} department={item.department} />

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