import React, { useState } from "react";
import {saveEmployee} from "../../repositories/EmployeesRepository"
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
import styles from "./RegisterScreen.style";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
    const navigation = useNavigation();

    const onSubmit = () => {
        navigation.navigate("AllEmployeesScreen")
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.registerContainer}>
                    <Text style={styles.title}>Please register first!</Text>

                    {/* First Name Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>First Name</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="firstname"
                            style={styles.inputText}
                            placeholder="First Name"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Last Name Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>Last Name</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="lastname"
                            style={styles.inputText}
                            placeholder="Last Name"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Email Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>Email Id</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="emailid"
                            style={styles.inputText}
                            placeholder="example@gmail.com"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Mobile Number Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>Mobile number</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="mobilenumber"
                            style={styles.inputText}
                            placeholder="+84775135000"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* EmployeeId Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>Employee Id</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="employeeid"
                            style={styles.inputText}
                            placeholder="000000000"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* DOB Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>DOB</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="dob"
                            style={styles.inputText}
                            placeholder="17/03/2021"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Department Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>DOB</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="department"
                            style={styles.inputText}
                            placeholder="Mobile Team"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Submit button */}
                    <TouchableOpacity
                        testID="loginButton"
                        style={styles.submitButton}
                        onPress={() => {
                            onSubmit()
                        }}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default RegisterScreen;