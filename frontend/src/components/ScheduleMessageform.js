import { Box, Button, Icon, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react"; 
import { IoMdClock } from "react-icons/io";
import { Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import ScheduleFormContext from "../Context/SchedulemessageForm";
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
const ScheduleMessageform = ({setMessages,messages,socket}) => {
  const [hour, setHour] = useState(0);
  const [minute, setminute] = useState(0);
  const toast = useToast();
  const [date,setDate] = useState("");
  const [newMessage,setNewMessage]= useState("");
  const { selectedChat, user } =ChatState();
  const VisContext = useContext(ScheduleFormContext);
  const {setScheduleFormVis} = VisContext;
  const hourIncrement =()=>{
    if(hour+1<=23){
        setHour(hour+1);
    }else{
        setHour(0);
    }
  }
  const hourDecrement =()=>{
    if(hour-1>=0){
        setHour(hour-1);
    }else{
        setHour(23);
    }
  }
  const minuteIncrement =()=>{
    if(minute+1<=59){
        setminute(minute+1);
    }else{
        setminute(0);
    }
  }
  const minuteDecrement =()=>{
    if(minute-1>=0){
        setminute(minute-1);
    }else{
        setminute(59);
    }
  }
  const handleCancelButton = ()=>{
    setScheduleFormVis(false);
    console.log("u clicked cancel button")
  }
  // const handleSendBuutton = ()=>{
  //   setScheduleFormVis(false);
  //   console.log("u clicked Send button")
  // }
  const handledateChange = (e)=>{
    setDate(e.target.value);
    console.log("date",e.target.value);
  }

  const sendMessagebtn = async () => {
    toast({
      title: 'schedule!',
      description: "Message will be sent on time ",
      status: 'success',
      duration: 6000,
      isClosable: true,
    })
    setScheduleFormVis(false);
    
    try {
      
      // const scheduledTime = new Date('2024-01-07T17:38:00');
       let scheduledTime = date+'T'+hour+':'+minute+':'+'00';
       console.log("time",scheduledTime)
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      setNewMessage("");
      const { data } = await axios.post(
        "/api/message",
        {
          content: newMessage,
          chatId: selectedChat,
          scheduledTime:scheduledTime
        },
        config
      );
      
      socket.emit("new message", data);
      setMessages([...messages, data]);
      
    } catch (error) {
      toast({
        title: 'Error!',
        description: "Invalid time ",
        status: 'error',
        duration: 6000,
        isClosable: true,
      })
    }
  };
  const handelmsgchange = (e)=>{
    setNewMessage(e.target.value)
  }
  return (
    <Box
      boxSizing="border-box"
      padding="3vh"
      position="absolute"
      boxShadow="10px 10px 10px gray"
      right="8vh"
      bgColor="white"
      height="52vh"
      width="40vh"
      borderRadius="20px"
      marginBottom="0"
    >
      <Box display="flex">
        <Icon
          as={IoMdClock}
          height="4vh"
          width="4vh"
          color="black"
          border="2px solid black"
          borderRadius="100%"
          backgroundColor="white"
          marginLeft="2vh"
          marginRight="2vh"
        />
        <Text>Schedule a Message</Text>
      </Box>
      <Text marginTop="2vh" marginLeft="2vh">
        Message
      </Text>
      <Input
      onChange={handelmsgchange}
        marginTop="2vh"
        border="2px solid black"
        placeholder="Enter message "
      />
      <Input type="Date" onChange={handledateChange}  marginTop="2vh"/>
      <Box display="flex" gridGap="3.5vh" marginTop="2vh">
        <Box
          border="2px solid black"
          boxShadow="4px 4px 4px gray"
          height="2vh"
          width="2vh"
          position="absolute"
          bgColor="black"
          borderRadius="100%"
          left="47%"
          top="60%"
        ></Box>
        <Box
          border="2px solid black"
          boxShadow="4px 4px 4px gray"
          height="2vh"
          width="2vh"
          position="absolute"
          bgColor="black"
          borderRadius="100%"
          left="47%"
          top="70%"
        ></Box>
        <Box
          border="2px solid gray"
          borderRadius="20px"
          height="13vh"
          width="12vh"
          marginLeft="3vh"
        >
          <Text height="75%" fontSize="7vh" textAlign="center">
            {hour}
          </Text>
          <Box display="flex" justifyContent="center">
            <ChevronUpIcon fontSize="3vh" cursor="pointer" onClick={hourIncrement} />
            <ChevronDownIcon cursor="pointer" fontSize="3vh" onClick={hourDecrement} />
          </Box>
        </Box>
        <Box
          border="2px solid gray"
          borderRadius="20px"
          height="13vh"
          width="12vh"
        >
          <Text height="75%" fontSize="7vh" textAlign="center">
            {minute}
          </Text>
          <Box display="flex" justifyContent="center">
            <ChevronUpIcon fontSize="3vh" onClick={minuteIncrement}  cursor="pointer" />
            <ChevronDownIcon fontSize="3vh" onClick={minuteDecrement} cursor="pointer" />
          </Box>
        </Box>
      </Box>
      <Button onClick={handleCancelButton} colorScheme="red" float="right" marginTop="2vh">Cancel</Button>
      <Button
      onClick={sendMessagebtn}
        float="right"
        marginRight="2vh"
        colorScheme="purple"
        marginTop="2vh"
      >
        send
      </Button>
    </Box>
  );
};

export default ScheduleMessageform;
