import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

export default class RegisterScreen extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center", fontWeight: 800, fontSize: 20 }}> Sign up </Text>
                <View>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                    <Text >Name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}
                    />
                </View>
                <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                    <Text >Email:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                </View>
                <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                    <Text>Password:</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 700 }}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                   style={{textAlign:"center"}}
                   onPress={() => this.props.navigation.navigate("Login")}
                >
                    <Text>
                         Already registered?
                        <Text style={{color:"#FE0000", fontWeight:600}}> Sign in</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    error: {
        color: "#FF3300",
        textAlign:"center"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#FF3399",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }

})
