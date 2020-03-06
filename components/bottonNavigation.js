import * as React from 'react';
import { BottomNavigation, Text, Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class BottomNavigationComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <Appbar style={styles.bottom}>
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
      </Appbar>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});