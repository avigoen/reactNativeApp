import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, Image } from 'react-native'

const aboutGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis velit massa, non semper elit faucibus nec. Nulla lobortis neque vitae augue facilisis feugiat. Aenean fringilla leo vitae sem porttitor facilisis. Donec vel magna quis mauris cursus placerat. In mollis, eros tristique tincidunt maximus, ipsum justo viverra metus, eu feugiat ante ligula sit amet diam. Praesent vehicula risus quis augue feugiat, et iaculis diam elementum. Vestibulum nunc diam, ultrices in scelerisque molestie, ultricies ut odio. Suspendisse velit felis, posuere ut ipsum sit amet, tristique sagittis sem. Suspendisse ut placerat tellus. Cras porta tristique nisl, quis elementum erat malesuada non. Sed aliquam nisi vel turpis dictum, a malesuada sapien tincidunt. Nullam dapibus ligula nec elit interdum fringilla. Etiam id finibus ex. Duis ullamcorper risus sit amet velit tempus, et suscipit urna vehicula. `;
const whatGlobo = `Aliquam hendrerit diam ut mi fermentum, ut tempor libero molestie. Aliquam erat volutpat. Integer semper eu turpis vel tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ultrices id velit in laoreet. Nam dictum lorem odio. Donec semper elit vitae ante semper congue. Nullam feugiat risus nec est accumsan tristique. Curabitur et iaculis felis. Nulla a magna et purus sagittis dictum eget vel felis. Vestibulum ut rhoncus dolor, vitae porttitor ante. Quisque et aliquam orci. Morbi quam elit, lobortis non tortor id, rutrum rutrum dolor. Donec imperdiet et velit et dapibus. Cras interdum porta massa, eu malesuada enim commodo eget. Morbi sollicitudin, risus nec tristique elementum, leo ex luctus ex, sit amet gravida nibh magna sed purus.`;

export default class About extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/header.png')} />
                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../sections/img/logo.png')} />
                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>

                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 20,
        textAlign: "center"
    },
    aboutText: {
        paddingBottom: 20
    },
    backButton: {
        paddingBottom: 50,
        textAlign: "center"
    }
})