import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Card } from 'react-native-elements';
import styles from "./EmloyeeDetailScreen.style";
import { getEmployeeById } from "../../repositories/EmployeesRepository"

const EmployeeDetailScreen = ({ route }) => {
    const employee = getEmployeeById(route.params.employeeId);

    return (
        <SafeAreaView styles={styles.container}>
            <Card style={styles.cardContainer}>
                <Card.Title>{employee.firstName} {employee.lastName}</Card.Title>

                <Text style={styles.normalText}>Email Id: {employee.email}</Text>

                <Text style={styles.normalText}>EmloyeeId: {employee.employeeId}</Text>

                <Text style={styles.normalText}>Mobile number: {employee.mobileNumber}</Text>

                <Text style={styles.normalText}>DOB: {employee.dob}</Text>

                <Text style={styles.normalText}>Department: {employee.department}</Text>
            </Card>
        </SafeAreaView>
    )
};

export default EmployeeDetailScreen;