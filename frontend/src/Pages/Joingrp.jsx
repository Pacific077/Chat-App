import { Box, Text, Button, toast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ChatState } from "../Context/ChatProvider";

const Joingrp = () => {
    const {chatId,userId}  = useParams()
    const { user } = ChatState();
    const handleJoingrp =async ()=>{
        console.log("I got clicked",chatId,userId)
        try {
          // setLoading(true);
          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };
          const resp = await axios.put(
            `/api/chat/groupadd/${chatId}/${userId}`,
            {},
            config
          );
          
          console.log("resp",resp);
          // setSelectedChat(data);
          // setFetchAgain(!fetchAgain);
          // setLoading(false);
        } catch (error) { 
          toast({
            title: "Error Occured!",
            description: error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          // setLoading(false);
        }

    }
  return (
    <Box
      border="2px solid white"
      height="38vh"
      borderRadius="30px"
      width="50vh"
      margin="auto"
      bgColor="white"
    >
      <Text
        textAlign="center"
        marginTop="4vh"
        fontSize="xx-large"
        fontWeight="600"
        textShadow="4px 4px 4px gray"
      >
        Are you sure you want to join the group ?
        <Box marginTop="8vh" display="flex" gridGap="3vh" justifyContent="center">
            <Button onClick={handleJoingrp} height="6vh" width="10vh" colorScheme="green">Join</Button>
            <Button height="6vh" width="10vh" colorScheme="red">Reject</Button>
        </Box>
      </Text>
    </Box>
  );
};

export default Joingrp;
