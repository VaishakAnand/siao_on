import 'react-native-gesture-handler';
import * as React from 'react';
import axios from 'axios';
import ModalEnhanced from "./Components/ModalEnhanced";
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import BackButton from './Components/BackButton';

class QuestionDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            question: null,
            optionA: null,
            optionB: null,
            optionC: null,
            optionD: null,
            correctAnswer: null,
            explanation: null,
            showAlert: false,
            alertText: null
        }
    }

    componentDidMount() {
        this.renderText();
    }

    renderText() {
        let url = 'http://localhost:4000/question/' + this.state.count.toString();
        axios.get(url)
            .then(response => {
                // console.log(response.data);
                this.setState({
                    question: response.data.question,
                    optionA: response.data.options.optionA,
                    optionB: response.data.options.optionB,
                    optionC: response.data.options.optionC,
                    optionD: response.data.options.optionD,
                    correctAnswer: response.data.correct_answer,
                    explanation: response.data.explanation
                })
            })
            .catch(error => console.log(error));
    }

    checkAnswer(option) {
        // console.log(this.state.correctAnswer);
        if (option == this.state.correctAnswer) {
            this.setState({
                alertText: "Correct Answer \n" + this.state.explanation,
                showAlert: true
            })
        } else {
            this.setState({
                alertText: "Incorrect Answer, Please Try Again!",
                showAlert: true
            })
        }
    }

    renderOptionA() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.done}
                    onPress={() => this.checkAnswer(this.state.optionA)}>
                    <Text>{this.state.optionA}</Text>
                </TouchableOpacity>
                <ModalEnhanced
                    showAlert={this.state.showAlert}
                    closeAlert={() => this.setState({ showAlert: false })}
                    text={this.state.alertText}
                />
            </View>
        )
    }

    renderOptionB() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.done}
                    onPress={() => {this.checkAnswer(this.state.optionB)}}>
                    <Text>{this.state.optionB}</Text>
                </TouchableOpacity>
                <ModalEnhanced
                    showAlert={this.state.showAlert}
                    closeAlert={() => this.setState({ showAlert: false })}
                    text={this.state.alertText}
                />
            </View>
        )
    }

    renderOptionC() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.done}
                    onPress={() => {this.checkAnswer(this.state.optionC)}}>
                    <Text>{this.state.optionC}</Text>
                </TouchableOpacity>
                <ModalEnhanced
                    showAlert={this.state.showAlert}
                    closeAlert={() => this.setState({ showAlert: false })}
                    text={this.state.alertText}
                />
            </View>
        )
    }

    renderOptionD() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.done}
                    onPress={() => this.checkAnswer(this.state.optionD)}>
                    <Text>{this.state.optionD}</Text>
                </TouchableOpacity>
                <ModalEnhanced
                    showAlert={this.state.showAlert}
                    closeAlert={() => this.setState({ showAlert: false })}
                    text={this.state.alertText}
                />
            </View>
        )
    }

    render() {
        this.renderText();
        console.log(this.state);
        return (
            <View style={{ flex: 1 }}>
                <Text>Question:</Text>

                <Text>{this.state.question}</Text>

                {this.renderOptionA()}
                {this.renderOptionB()}
                {this.renderOptionC()}
                {this.renderOptionD()}

                <BackButton title='Exit' to='Topics' />
                <Button title='Next Question' onPress={() => {
                    this.setState(state => {
                        return ({
                            count: state.count + 1
                        })
                    });
                    // this.renderText();
                }} />
                {/* <BackButton title='Next' to = 'QuestionDisplay' /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    done: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#07a321',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: 'black'
    }
})
export default QuestionDisplay;