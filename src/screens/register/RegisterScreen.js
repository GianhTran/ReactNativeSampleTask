import React, { useState } from "react";
import { saveEmployee } from "../../repositories/EmployeesRepository";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DOD_TIME_FORMAT } from "../../utils/constants/Common";
import moment from 'moment';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Alert,
    Picker
} from "react-native";
import styles from "./RegisterScreen.style";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
    const navigation = useNavigation();

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

    const [DOBObject, setDOBObject] = useState(new Date());

    const [isShowDatePicker, setIsShowDatePicker] = useState(false);

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        employeeId: "",
        dob: moment().format("DD/MM/YYYY"),
        department: "React Native team"
    });

    const onSkip = () => {
        navigation.navigate("AllEmployeesScreen")
    }

    const onDOBChanged = (event, selectedDate) => {
        setDOBObject(selectedDate);
        setIsShowDatePicker(false);

        setEmployee({
            ...employee,
            dob: moment(selectedDate).format("DD/MM/YYYY")
        });
    }

    const onSubmit = () => {
        if (employee.firstName.trim() == "" || employee.lastName.trim() == "" || employee.employeeId.trim() == "" || employee.department.trim() == "") {
            showErorDialog("error", "Please input required fileds")

            return;
        }

        try {
            saveEmployee(employee.firstName,
                employee.lastName,
                employee.email,
                employee.mobileNumber,
                employee.employeeId,
                employee.dob,
                employee.department)

            {/* save data successful and nagivate to next screen*/ }
            navigation.navigate("AllEmployeesScreen")
        } catch (e) {
            {/* save data failed */ }
            showErorDialog("error", e + "")
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.registerContainer}>
                    <Text style={styles.title}>Please register first!</Text>

                    {/* First Name Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>First Name *</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="firstname"
                            style={styles.inputText}
                            placeholder="First Name"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            onChangeText={(val) => {
                                setEmployee({
                                    ...employee,
                                    firstName: val
                                });
                            }}
                        />
                    </View>

                    {/* Last Name Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>Last Name *</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="lastname"
                            style={styles.inputText}
                            placeholder="Last Name"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            onChangeText={(val) => {
                                setEmployee({
                                    ...employee,
                                    lastName: val
                                });
                            }}
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
                            keyboardType="email-address"
                            onChangeText={(val) => {
                                setEmployee({
                                    ...employee,
                                    email: val
                                });
                            }}
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
                            keyboardType="phone-pad"
                            autoCapitalize="none"
                            onChangeText={(val) => {
                                setEmployee({
                                    ...employee,
                                    mobileNumber: val
                                });
                            }}
                        />
                    </View>

                    {/* EmployeeId Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>Employee Id *</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            testID="employeeid"
                            style={styles.inputText}
                            placeholder="000000000"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            keyboardType="numeric"
                            onChangeText={(val) => {
                                setEmployee({
                                    ...employee,
                                    employeeId: val
                                });
                            }}
                        />
                    </View>

                    {/* DOB Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>DOB</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => {
                                setIsShowDatePicker(true)
                            }}>
                            <Text
                                testID="dob"
                                style={styles.normalText}
                            >{employee.dob}</Text>
                        </TouchableOpacity>
                        {isShowDatePicker && (
                            <DateTimePicker
                                testID="DOBDatePicker"
                                value={DOBObject}
                                mode="date"
                                display="default"
                                maximumDate={new Date()}
                                onChange={onDOBChanged} />)}
                    </View>

                    {/* Department Input View */}
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputTitle}>Department *</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Picker
                            testID="departmentPicker"
                            selectedValue={employee.department}
                            style={styles.pickerContainer}
                            onValueChange={(itemValue, itemIndex) =>
                                setEmployee({
                                    ...employee,
                                    department: itemValue
                                })} >
                            <Picker.Item label="Android team" value="Android team" />
                            <Picker.Item label="React Native team" value="React Native team" />
                            <Picker.Item label="Flutter team" value="Flutter team" />
                        </Picker>
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

                    {/* Submit button */}
                    <TouchableOpacity
                        testID="skipButton"
                        style={styles.submitButton}
                        onPress={() => {
                            onSkip()
                        }}>
                        <Text style={styles.submitText}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default RegisterScreen;