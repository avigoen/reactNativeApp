import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native'

export default class QuizFinish extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
    }

    exitQuiz = () => {
        this.props.navigation.navigate('HomeRT')
    }

    getParameterValue = (key, defaultVal) => {
        return this.props.navigation.getParam(key, defaultVal);
    }

    render() {

        let userScore = this.getParameterValue('score', "Error - No Score Returned")
        let questionsMissed = this.getParameterValue('missed', "Error - No Missed Questions")
        let totalQuestions = this.getParameterValue('questions', "Error - No Questions Returned")

        return (
            <View style={styles.contianer}>
                <Text>Your quiz score was {userScore}</Text>
                <Text>Your missed on {questionsMissed} out of {totalQuestions} questions</Text>
                <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
                    <Text>Finish Quiz</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
})