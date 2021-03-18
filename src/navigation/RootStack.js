import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import AllEmployeesScreen from "../screens/allemployees/AllEmployeesScreen"
import EmployeeDetailScreen from "../screens/employeedetail/EmloyeeDetailScreen"
import RegisterScreen from "../screens/register/RegisterScreen"

const Stack = createStackNavigator();

const RootStack = ({ }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={({ }) => ({
                title: null,
                headerShown: false,
            })} />
        <Stack.Screen
            name="AllEmployeesScreen"
            component={AllEmployeesScreen}
            options={({ }) => ({
                title: null,
                headerShown: false,
            })} />
        <Stack.Screen
            name="EmployeeDetailScreen"
            component={EmployeeDetailScreen}
            options={({ route }) => ({
                title: null,
                headerShown: false,
                employeeId: route.params.employeeId
            })} />
    </Stack.Navigator>
);

export default RootStack;