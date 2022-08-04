import { Avatar, Badge, Box, Button, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import clipart from '../assets/clipart.svg'
import mobile from '../assets/mobile.svg'
import news from '../assets/news.svg'
import Software from '../assets/Software.svg'
import ux from '../assets/ux.svg'
import web from '../assets/web.svg'
import Tilt from 'react-parallax-tilt'
import side from '../assets/side.svg'
import native from '../assets/Rnative.svg'
import firebase from '../assets/firebase.svg'
import index from '../assets/index.svg'
import mdb from '../assets/mdb.svg'
import nodejs from '../assets/nodejs.svg'
import sol from '../assets/sol.svg'
import Place from '../assets/Place.svg'

import Profiles from './Profiles'



const Container = () => {
    return (
        <>
            <Box>
                <Flex alignItems="center" justifyContent="center" mt={14}  >
                    <Text opacity={0.7} fontSize={25} fontWeight="semibold" color="blue"> About Our Company </Text>
                </Flex>
                <Flex mt="5rem" pl={20} pr={20} dir='row' justifyContent="space-between" >
                    <Flex flexDir='column'>
                        <Text fontSize={20} whiteSpace={2} fontWeight="normal" opacity="0.6" color="blue" > IT Solution For Easy Integration</Text>
                        <Text fontSize={25} mt={3} fontWeight="semibold" color="black" > IT Services To Develop Solution</Text>
                        <Text fontSize={25} fontWeight="semibold" color="black" > Your Way!</Text>
                        <Text fontSize={20} fontWeight="normal" opacity="0.7" color="grey" mt={3} > Building a relationships between IT Company & Experts</Text>
                        <Text fontSize={20} whiteSpace={2} fontWeight="normal" opacity="0.6" color="blue" > IT Solution For Easy Integration</Text>
                        <Text fontSize={25} mt={3} fontWeight="semibold" color="black" > IT Services To Develop Solution</Text>
                        <Text fontSize={25} fontWeight="semibold" color="black" > Your Way!</Text>
                    </Flex>
                </Flex>
            </Box>
            <Flex alignItems="center" justifyContent="center" mt={20}  >
                <Text opacity={0.7} fontSize={25} fontWeight="semibold" color="blue">  Our Services </Text>
            </Flex>
            <Box >
                <Grid margin="3% 15%" p={5} justifyContent="center" alignItems="center" gridGap={10} templateColumns='repeat(3, 1fr)' templateRows='repeat(2,1fr)' gap={6}>
                    <Tilt>
                        <GridItem display="flex" flexDir="column" justifyContent="center" w="16rem" h="18rem" alignItems="center" textAlign="center" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px" >
                            <Image src={web} w="150px" h="150px" />
                            <Text fontSize="larger" m="25px">Software Engineering</Text>
                        </GridItem>
                    </Tilt>
                    <Tilt>
                        <GridItem display="flex" flexDir="column" justifyContent="center" w="16rem" h="18rem" alignItems="center" textAlign="center" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px" >
                            <Image src={mobile} w="150px" h="150px" />
                            <Text fontSize="larger" m="25px" >Software Engineering</Text>
                        </GridItem>
                    </Tilt>
                    <Tilt>
                        <GridItem display="flex" flexDir="column" justifyContent="center" w="16rem" h="18rem" alignItems="center" textAlign="center" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px" >
                            <Image src={clipart} w="150px" h="150px" />
                            <Text fontSize="larger" m="15px">Software Engineering</Text>
                        </GridItem>
                    </Tilt>
                    <Tilt>
                        <GridItem display="flex" flexDir="column" justifyContent="center" w="16rem" h="18rem" alignItems="center" textAlign="center" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px" >
                            <Image src={ux} w="150px" h="150px" />
                            <Text fontSize="larger" m="15px">Software Engineering</Text>
                        </GridItem>
                    </Tilt>
                    <Tilt>
                        <GridItem display="flex" flexDir="column" justifyContent="center" w="16rem" h="18rem" alignItems="center" textAlign="center" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px" >
                            <Image src={news} w="150px" h="150px" />
                            <Text fontSize="larger" m="15px">Software Engineering</Text>
                        </GridItem>
                    </Tilt>
                    <Tilt>
                        <GridItem display="flex" flexDir="column" justifyContent="center" w="16rem" h="18rem" alignItems="center" textAlign="center" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px" >
                            <Image src={Software} w="150px" h="150px" />
                            <Text fontSize="larger" m="15px">Software Engineering</Text>
                        </GridItem>
                    </Tilt>
                </Grid>
            </Box>
            <Box>
                <Flex alignItems="center" justifyContent="center" mt={20} flexDir="column"  >
                    <Text opacity={0.7} fontSize={25} fontWeight="semibold" color="blue">  Why US </Text>
                    <Text fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > It is a long estabilished fact that a reader will be</Text>
                </Flex>
                <Flex>
                    <Image w="50%" src={side} />
                    <Flex alignItems="start" justifyContent="start" flexDir="column" mt="13%" >
                        <Text fontSize={25} fontWeight="semibold" color="black"> Build The App That </Text>
                        <Text fontSize={25} fontWeight="semibold" color="black"> Everyone Love. </Text>
                        <Text fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > It is a long estabilished fact that a reader will be</Text>
                        <Text fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > distracted by the readable content of a page when</Text>
                        <Text fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > It is a long estabilished fact that a reader will be</Text>
                    </Flex>
                </Flex>
            </Box>

            <Box position="relative">
                <Flex alignItems="center" justifyContent="center" mt={15} flexDir="column"  >
                    <Text opacity={0.7} fontSize={25} fontWeight="semibold" color="blue"> Solution And Focus Area</Text>
                </Flex>
                <Center >
                    <Grid margin="3% 8%" p={5} justifyContent="center" alignItems="center" gridGap={10} templateColumns='repeat(3, 1fr)' templateRows='repeat(2,1fr)'>

                        <GridItem mt={10} display="flex" flexDir="column" justifyContent="center" alignItems="center" textAlign="center"   >
                            <Image src={index} w="150px" h="150px" />
                            <Text fontWeight="semibold" fontSize="larger" m="25px">React</Text>
                            <Text lineHeight={1} fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > It is a long estabilished  fact that a reader will be fact that a reader will be distracted by the readable content of a page when</Text>
                            {/* <Text lineHeight={1} fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > distracted by the readable content of a page when  content of a page when </Text> */}

                        </GridItem>

                        <GridItem mt={10} display="flex" flexDir="column" justifyContent="center" alignItems="center" textAlign="center"   >
                            <Image src={native} w="150px" h="150px" />
                            <Text fontWeight="semibold" fontSize="larger" m="25px" >React Native</Text>
                            <Text lineHeight={1} fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > It is a long estabilished  fact that a reader will be fact that a reader will be distracted by the readable content of a page when</Text>

                        </GridItem>

                        <GridItem mt={10} display="flex" flexDir="column" justifyContent="center" alignItems="center" textAlign="center"   >
                            <Image src={nodejs} w="150px" h="150px" />
                            <Text fontWeight="semibold" fontSize="larger" m="15px">Express NodeJS</Text>
                            <Text lineHeight={1} fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > It is a long estabilished  fact that a reader will be fact that a reader will be distracted by the readable content of a page when</Text>

                        </GridItem>

                        <GridItem mt={10} display="flex" flexDir="column" justifyContent="center" alignItems="center" textAlign="center"   >
                            <Image src={mdb} w="150px" h="150px" />
                            <Text fontWeight="semibold" fontSize="larger" m="15px">Mongo DB</Text>
                            <Text lineHeight={1} fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > It is a long estabilished  fact that a reader will be fact that a reader will be distracted by the readable content of a page when</Text>

                        </GridItem>

                        <GridItem mt={10} display="flex" flexDir="column" justifyContent="center" alignItems="center" textAlign="center"   >
                            <Image src={firebase} w="150px" h="150px" />
                            <Text fontWeight="semibold" fontSize="larger" m="15px">FireBase</Text>
                            <Text lineHeight={1} fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > It is a long estabilished  fact that a reader will be fact that a reader will be distracted by the readable content of a page when</Text>

                        </GridItem>


                        <GridItem mt={10} display="flex" flexDir="column" justifyContent="center" alignItems="center" textAlign="center"   >
                            <Image src={sol} w="150px" h="150px" />
                            <Text fontWeight="semibold" fontSize="larger" m="15px">Solution</Text>
                            <Text lineHeight={1} fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} > It is a long estabilished  fact that a reader will be fact that a reader will be distracted by the readable content of a page when</Text>
                        </GridItem>

                    </Grid>
                </Center>

                <Image src={Place} />
                <Text textAlign="center" mx={2} pos="absolute" top="78%" left="30%" right="30%" fontSize={22} fontWeight="bold" opacity="1" color="white" mt={3} >Our It Solution Will get You On Move Towards Your Destination Faster Than Rival in A More Reliably Way! </Text>
            </Box>

            <Profiles />

        </>
    )
}
export default Container