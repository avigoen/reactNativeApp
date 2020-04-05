import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../sections/Header'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Header message="Press to Login" />
                <Text style={{ flex: 8 }}>This will be homepage</Text>
                <Text style={{ flex: 6 }}>These other lines are here</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})