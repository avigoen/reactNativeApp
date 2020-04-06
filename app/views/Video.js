import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableWithoutFeedback } from 'react-native'

export default class Video extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = { listLoaded: false }
    }

    componentDidMount() {
        return fetch(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyANRW1TKX7E4QROb0oUE-0Jr1IvWStX49A'
        ).then((response) => response.json())
            .then((responseJson) => {
                this.setState({ listLoaded: true, videoList: Array.from(responseJson.items) })
            }).catch(err => console.error(err));
    }

    render() {
        return (
            <View>
                <View style={{ paddingTop: 30 }}>
                    {this.state.listLoaded && (
                        <FlatList
                            data={this.state.videoList}
                            renderItem={({ item }) => <TubeItem
                                id={item.id.videoId}
                                title={item.snippet.title}
                                imageSrc={item.snippet.thumbnails.high.url}
                            />}
                        />
                    )}
                    {!this.state.listLoaded && (
                        <Text>LOADING</Text>
                    )}
                </View>
            </View>
        )
    }
}

export class TubeItem extends Component {
    onPress = () => {
        console.log(this.props.id)
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{ paddingTop: 20, alignItems: "center" }}>
                    <Image style={{ width: '100%', height: 200 }} source={{ uri: this.props.imageSrc }} />
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}