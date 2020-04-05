import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../sections/Header'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Header message="Press To Login"></Header>
                <Text style={{ flex: 8 }}>Contact Form</Text>
                <Text style={{ flex: 6 }}>More Contact Form</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})