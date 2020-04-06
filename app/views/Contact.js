import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Alert } from 'react-native'
import Header from '../sections/Header'
import { StackNavigator } from 'react-navigation'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meg: "Enter Message",
            name: "Enter Name",
            email: "Enter your Email Address"
        }
    }

    static navigationOptions = {
        header: null
    }

    clearFields = () => this.setState({ name: "", msg: "", email: "" });

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.meg);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Header message="Press To Login"></Header>
                <Text style={styles.heading}>Contact Us</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({ msg: text })}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style={styles.buttons}>Send Message</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style={styles.buttons}>Reset Form</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 14,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    multiInputs: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
})