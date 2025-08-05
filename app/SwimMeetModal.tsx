import { useState } from "react";

interface SwimMeetModalProps {
    visible: boolean;
    onClose: ()=>void;
}

export default function SwimMeetModal({visible, onClose}: SwimMeetModalProps){
    const [meetName, setmeetName]=useState('');
    const [swimTime, setswimTime]=useState('');
}