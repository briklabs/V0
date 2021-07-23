
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center'
  },
  touchable: {
    minWidth: 55,
    minHeight: 55,
    margin: 25,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
  container: {
    flexDirection: 'row',
  },
  countText: {
    color: '#FFF',
    fontSize: 55,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#000000',
    paddingLeft: 15,
    paddingRight: 15,
  },
  count: {
    minWidth: 40,
    height: 75,
    borderRadius: 50,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: '#fff'
  }
});

class Counter extends React.Component {
  state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )

  render() {
    const { count } = this.state;
    return (
      <View style={[styles.bg]}>
        <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={this.setCount}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <View style={styles.count}>
          <Text style={styles.countText}>{count}</Text>
          </View>
          <TouchableOpacity style={styles.touchable} onPress={this.setCount}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Count = () => (
  <Counter />
);

export default Count;