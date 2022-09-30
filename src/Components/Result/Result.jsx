import React from "react";
import {
  Box,
  Button,
  Image,
  Heading,
  SimpleGrid,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ImLocation } from "react-icons/im";
import ResultOne from "./ResultOne";
import ResultTwo from "./ResultTwo";
import ResultThree from "./ResultThree";

const Result = () => {
  return (
    <Box w="100%" h={"auto"} m="auto" >
      {/* 1st Box */}
      <Box w={"60%"} h="auto" m="auto" boxShadow="2xl" bg="white" cursor={'pointer'}>
        <Box w={"98%"} h="70px" m="10px" boxShadow="md" bg="white">
          <WrapItem p={"10px"}>
            <Button
              w="8%"
              h="50px"
              bg={"#a40a12"}
              color="white"
              _hover={{ bg: "#a40a12" }}
            >
              INT
            </Button>
            <Heading as={"b"} p="10px" fontSize="l" ml={"2rem"}>
              South Africa tour of India, 2022
            </Heading>
            <ChevronRightIcon fontSize={"4xl"} ml="59%" mt={"1%"} />
          </WrapItem>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {/* 1st Box */}
          <Box w={"98%"} h={"auto"} ml="10px" boxShadow="dark-lg">
            <Button bg={"#999999"} color="white" size="xs" ml={"-17rem"}>
              T20
            </Button>
            <Text ml={"-10rem"} mt="-6%" color="#000" fontSize="m">
              1st T20I
            </Text>

            <Box ml={"2rem"} mt="0.8rem" color={"#999999"}>
              <ImLocation />
              <Text mt={"-1.35rem"} ml="-6rem">
                Thiruvananthapuram
              </Text>
            </Box>

            <Box w={"80%"} h="100px" m="1rem">
              <Box display={"flex"} justifyContent="space-between">
                <Box>
                  <Image
                    w={"18%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/7_flag_safari.png"
                  />
                  <Heading m={"-2.2rem"} mr="-5rem" size={"md"}>
                    SA
                  </Heading>
                </Box>

                <Text m="0.8rem" mr={"4rem"} w='60%'>
                  106/8 (20.0)
                </Text>
              </Box>

              <Box display={"flex"} h="50px">
                <Box>
                  <Image
                    w={"18%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/4_flag_safari.png"
                  />
                  <Heading m={"-2.2rem"} mr="-5rem" size={"md"}>
                    IND
                  </Heading>
                </Box>
                <Text
                  mr={"4rem"}
                  w="60%"
                  mt={"15px"}
                  align={"center"}
                 
                >
                  110/2 (16.4)
                </Text>
              </Box>
            </Box>

            <Button
              borderRadius={"29px"}
              bg={"#feead9"}
              ml="-11.2rem"
              mt={'0.5rem'}
              fontSize={"xs"}
            >
              IND Won By 8 wickets
            </Button>
            <Box display={"flex"} mt="1rem" ml={"1rem"} mb="2rem">
              <Image
                w={"12%"}
                src="https://images.cricket.com/players/67905_headshot_safari.png"
              />
              <Text mt={"0.5rem"} color="grey" as="b">
                Arshdeep Singh IND
                <br />
                Man of the Match
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <ResultOne />
      <ResultTwo />
      <ResultThree />
    </Box>
  );
};
export default Result;
