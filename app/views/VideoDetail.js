import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'

export default class VideoDetail extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        let tubeId = this.props.navigation.getParam('ytubeId', 'No VIDEO');
        let tubeURL = `https://www.youtube.com/embed/${tubeId}`
        return (
            <WebView
                style={{ marginTop: 20 }}
                javaScriptEnabled={true}
                source={{ uri: tubeURL }}
            />
        )
    }
}