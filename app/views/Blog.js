import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import HTML from 'react-native-render-html'

export default class Blog extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = { blogLoaded: false }
    }

    componentDidMount() {
        fetch(
            'https://public-api.wordpress.com/rest/v1.1/sites/avinashmag.wordpress.com/posts'
        ).then(response => response.json())
            .then(responseJson => {
                this.setState({
                    blogLoaded: true,
                    blogList: Array.from(responseJson.posts)
                })
            })
            .catch(err => console.error(err))
    }

    chooseBlog = (blogID) => {
        this.props.navigation.navigate('BlogDetailRT', { blogId: blogID })
    }

    render() {
        return (
            <View>
                {this.state.blogLoaded && (
                    <View style={styles.blogContainer}>
                        <FlatList
                            data={this.state.blogList}
                            keyExtractor={(item, index) => item.ID.toString()}
                            renderItem={({ item }) => <BlogItem
                                id={item.ID}
                                title={item.title}
                                imageSrc={item.featured_image}
                                excerpt={item.excerpt}
                                choosePost={this.chooseBlog}
                            />}
                        />
                    </View>
                )}
                {!this.state.blogLoaded && (
                    <View style={styles.blogNotLoaded}>
                        <Text>LOADING</Text>
                    </View>
                )}
            </View>
        )
    }
}

class BlogItem extends Component {
    blogChoice = () => {
        this.props.choosePost(this.props.id)
    }

    render() {
        const { id, imageSrc, title, excerpt } = this.props
        let blogItemHTML = `
        <a href=${id} style=${styles.blogItem}>
        <img src=${imageSrc} />
        <h1>${title}</h1>
        ${excerpt}
        </a>`;

        return (
            <View style={styles.blogItemContainer}>
                <HTML html={blogItemHTML} onLinkPress={() => this.blogChoice()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blogContainer: { paddingTop: 40 },
    blogNotLoaded: { paddingTop: 30 },
    blogItemContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        borderStyle: "solid"
    },
    blogItem: {
        textDecorationLine: 'none',
        color: '#000000',
        textAlign: 'center'
    }
})