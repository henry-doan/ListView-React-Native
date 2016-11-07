import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

export default class ListViewReactNative extends Component {
    
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Ann', 'Bob', 'Carl', 'Dan', 'Eric', 
        'Fred', 'Greg', 'Harold', 'Ivy', 'Jack', 
        'Kelly', 'Limmi', 'Mary', 'Nick', 'Oscar', 
        'Paul', 'Quin', 'Rose', 'Sally', 'Tim', 'Ursela', 
        'Vicki', 'Waltar', 'Yumi', 'Zelda'
      ])
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.container}>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 9,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('ListViewReactNative', () => ListViewReactNative);
