import React from "react";
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Card, } from 'react-native-elements'
import styles from "./AllEmployeesScreen.style"
import { useNavigation } from "@react-navigation/native";

{/* Dummy data, will remove later */ }
const DATA = [
    {
        firstName: 'A',
        lastName: 'Tran Van',
        department: 'mobile team'
    },
    {
        firstName: 'A',
        lastName: 'Tran Van',
        department: 'mobile team'
    },
    {
        firstName: 'A',
        lastName: 'Tran Van',
        department: 'mobile team'
    }
];

const Item = ({ firstName, lastName, department }) => (
    <Card>
        <Card.Title>{firstName} {lastName}</Card.Title>

        <Card.FeaturedTitle>Department: {department}</Card.FeaturedTitle>
    </Card>
);

const AllEmployeesScreen = () => {
    const navigation = useNavigation();

    const onItemClicked = () => {
        navigation.navigate("EmployeeDetailScreen")
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                onItemClicked()
            }}>
            <Item firstName={item.firstName} lastName={item.lastName} department={item.department} />

        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
};

export default AllEmployeesScreen;