import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import HTML from 'react-native-render-html'

export default class BlogDetail extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = { postLoaded: false }
    }

    componentDidMount() {
        let blogId = this.props.navigation.getParam('blogId', "NO BLOG")
        fetch(`https://public-api.wordpress.com/rest/v1.1/sites/avinashmag.wordpress.com/posts/${blogId}`)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    postLoaded: true,
                    postTitle: responseJson.title,
                    postImage: responseJson.featured_image,
                    postContent: responseJson.content,
                    postID: responseJson.ID
                })
            })
            .catch(err => console.error(err))
    }

    goBack = () => {
        this.props.navigation.navigate('BlogRT')
    }

    render() {
        const { postTitle, postID, postImage, postContent, postLoaded } = this.state
        const blogTagStyles = {
            img: { display: "none" }
        }
        const blogClassStyles = {
            blTitle: { marginLeft: "auto", marginRight: 'auto' },
            blContent: { marginLeft: 10, marginRight: 10 },
            blBack: { marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20 }
        }

        let postDetails = `
        <div class="blTitle">
        <h1>${postTitle}</h1>
        </div>
        <div class="blContent">
        ${postContent}
        </div>
        <div class="blBack">
        <a href=${postID} style=${styles.backButton}>
        <h2>GO BACK</h2>
        </a>
        </div>`;

        return (
            <View style={styles.postContainer}>
                {postLoaded && (
                    <ScrollView>
                        <Image
                            style={styles.postImage}
                            source={{ uri: postImage }}
                        />
                        <HTML
                            html={postDetails}
                            tagsStyles={blogTagStyles}
                            classesStyles={blogClassStyles}
                            onLinkPress={() => this.goBack()}
                        />
                    </ScrollView>
                )}
                {!postLoaded && (
                    <View style={styles.postNotLoaded}>
                        <Text>LOADING</Text>
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    postContainer: { paddingTop: 30 },
    backButton: {
        textDecorationLine: "none",
        color: '#000000'
    },
    postImage: {
        width: '100%',
        height: 200
    },
    postNotLoaded: {
        paddingTop: 20,
        alignItems: "center"
    }
})