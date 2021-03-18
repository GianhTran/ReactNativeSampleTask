import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Card } from 'react-native-elements';
import styles from "./EmloyeeDetailScreen.style";

const EmployeeDetailScreen = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <Card >
                <Card.Title>Tran Van A</Card.Title>

                <Text style={styles.normalText}>Email Id: a@gmail.com</Text>

                <Text style={styles.normalText}>EmloyeeId: 0000000</Text>

                <Text style={styles.normalText}>Mobile number: +84775135700</Text>

                <Text style={styles.normalText}>DOB: 10/10/2012</Text>

                <Text style={styles.normalText}>Department: Mobile team</Text>
            </Card>
        </SafeAreaView>
    )
};

export default EmployeeDetailScreen;