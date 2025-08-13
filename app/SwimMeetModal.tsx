import { useState } from "react";

import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "../styles/indexstyle"; /*use / to go to a different file or directory*/

interface SwimMeetModalProps {
    visible: boolean;
    onClose: () => void;
} /*no semicolon because it is an interface declaration, only needed when making a new class or function.*/

export default function SwimMeetModal({ visible, onClose }: SwimMeetModalProps) {
    const [meetName, setMeetName] = useState(''); /*setmeetName updates what the user inputs as the meet name*/
    const [swimTime, setSwimTime] = useState(''); /*setswimTime updates what the user inputs as a swim time*/


    const handleSubmit = () => {
        if (meetName.trim() && swimTime.trim()) {
            Alert.alert('Success', 'Swim meet time reported!'); /*sets up an alert message if both meet and trial names are correct values, it lets the user it is reported*/
            onclose(); /*Closes the modal (whatever pops up after clicking the + button)*/
            setMeetName('');
            setSwimTime(''); /*clearing time as emptry string when updating time (so it doesn't interfere)*/
        } else {
            Alert.alert('Error', 'Please fill in all fields'); /*Error message (else statement). if the values are not correct (MeetName & MeetTime), then they are shown as an error*/
        }
    }; /*makes a handler when user taps submit*/

    return(
        <Modal
        animationType = "slide"
        transparent = {true}
        visible = {visible}
        onRequestClose = {onClose}
        >
            <View style = {styles.modalOverlay}>
                <View style = {styles.modalContent}>
                    <Text style = {styles.modalTitle}>
                        Report Swim Meet Time
                    </Text> 
                    <TextInput
                        style = {styles.input}
                        placeholder = "Meet Name"
                        value = {meetName}
                        onChangeText = {setMeetName}
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = "Time (Example: 1:45:32)"
                        value = {swimTime}
                        onChangeText = {setSwimTime}
                    />
                    <View style = {styles.modalButtons}>
                        <TouchableOpacity style = {styles.cancelButton}
                        onPress = {onClose}>
                            <Text style = {styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.submitButton}
                        onPress = {onClose}>
                            <Text style = {styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </View>
        </Modal>
    )/*Gives you a text input box (TextInput)*/ /*Placeholder = Text input box, it will say "Meet Name", lets you know what the box is used for)*/
}