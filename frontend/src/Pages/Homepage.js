import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  color,
} from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container className="ddfd" maxW="xl" centerContent >
      <Box
        // className="title1"
        d="flex"
        justifyContent="center"
        p={3}
        bg="gray.600"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.800"
        textColor="white"
        fontWeight="bold "
        // fontFamily="cursive"
      >
        <Text  fontSize="4xl" fontFamily="cursive" bg="" >
          Chat-Buds
        </Text>
      </Box>
      <Box bg="gray.700" w="100%" p={4} borderRadius="lg" borderWidth="1px" borderColor={"blackAlpha.500"}>
        <Tabs isFitted variant="soft-rounded" >
          <TabList mb="1em">
            {/* <Tab bg="gray.500" color="white" className="chakra-tab-panel" >Login</Tab>
            <Tab bg="gray.500" color="white" >Sign Up</Tab> */}
            <Tab
            _focus="none"
              bg={activeTab === 0 ? "gray.500" : "gray.400"}
              color="white"
              _selected={{ bg: "gray.400", color: "white" }}
            >
              Login
            </Tab>
            <Tab
            _focus="none"
              bg={activeTab === 1 ? "gray.400" : "gray.500"}
              color="white"
              _selected={{ bg: "gray.400", color: "white" }}
            >
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>+
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
