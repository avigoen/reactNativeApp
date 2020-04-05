import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

export default class Hero extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Image style={styles.heroImage} source={require('./img/header.png')} />
        )
    }
}
const styles = StyleSheet.create({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 8
    }
})