import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
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
