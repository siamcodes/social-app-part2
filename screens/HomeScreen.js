import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import firebase from 'firebase'

export default class HomeScreen extends Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text> สวัสดี {this.state.displayName} </Text>
                    <Text>{this.state.email}</Text>
                </View>

                <TouchableOpacity onPress={this.signOutUser} style={styles.button} >
                    <Text>Logout</Text>
                </TouchableOpacity>
                <Button
                    title="ออกจากระบบ"
                    onPress={this.signOutUser}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        marginHorizontal: 50,
        backgroundColor: "#FF3399",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }
})

