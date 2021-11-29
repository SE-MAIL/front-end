import React from 'react';
import Modal from 'react-native-simple-modal';
import {AppRegistry, Text, TouchableOpacity, View} from 'react-native';
 
export default class Example extends React.Component {
  state = {open: false};
  render() {
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'pink'}}>
      <TouchableOpacity onPress={() => this.setState({open: true})}>
        <Text>◀</Text>
      </TouchableOpacity>
      <Modal
        offset={this.state.offset}
        open={this.state.open}
        modalDidClose={() => this.setState({open: false})}
        style={{alignItems: 'center'}}>
        <View>
          <Text style={{fontSize: 20, marginBottom: 10}}>샤워: kg 감소 가능</Text>
          <TouchableOpacity
            style={{margin: 5}}
            onPress={() => this.setState({open: false})}>
            <Text>확인했습니다!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    );
  }
}
 
AppRegistry.registerComponent('ExampleModal', () => Example);