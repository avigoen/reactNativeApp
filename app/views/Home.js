import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Menu from '../sections/Menu'
import { StackNavigator } from 'react-navigation'

export default class Home extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Header navigate={navigate} message="Press to Login" />
                <Hero />
                <Menu navigate={navigate} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})