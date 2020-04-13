import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
// import Video from 'react-native-video';

export default class videoApp extends Component {
  state = {fullscreen: false};

  render() {
    return (
      <View style={styles.container}>
        {!this.state.fullscreen && (
          <View style={styles.navbar}>
            <Text style={styles.headerText}>Senado News</Text>
          </View>
        )}
        <VideoPlayer
          style={styles.playerVideo}
          onEnterFullscreen={() =>
            this.setState({
              fullscreen: !this.state.fullscreen,
            })
          }
          onExitFullscreen={() => {
            this.setState({
              fullscreen: !this.state.fullscreen,
            });
          }}
          source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
          navigator={this.props.navigator}

        />
        {(!this.state.fullscreen &&
        <ScrollView>
        <View >
          <Text >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
          type and scrambled it to make a type specimen book.
          </Text>
        </View>
        </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height: 60,
    borderTopWidth: 0.5,
    flexDirection: 'column',
    backgroundColor: '#0d305c',
    justifyContent: 'space-around',
    elevation: 3,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
 
  
});
