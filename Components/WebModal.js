import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet} from "react-native";
import Modal from "modal-enhanced-react-native-web";

export default class WebModal extends Component {
    _renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  
    _renderModalContent = () => (
      <View style={styles.modalContent}>
        <Text>{this.props.text}</Text>
        {this._renderButton("Close", () => { this.props.closeAlert() })}
      </View>
    );
  
    render() {
      return (
        <Modal
          isVisible={this.props.showAlert}
          style={styles.bottomModal}>
          {this._renderModalContent()}
        </Modal>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      backgroundColor: "lightblue",
      padding: 12,
      margin: 16,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)"
    },
    modalContent: {
      backgroundColor: "white",
      padding: 22,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)"
    },
    bottomModal: {
      justifyContent: "flex-end",
      margin: 0
    },
  });