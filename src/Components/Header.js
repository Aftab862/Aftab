import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import group from '../assets/group.svg'
import group2 from '../assets/group2.png'
import wave from '../assets/waves.svg'
const Header = () => {
    return (
        <Box>
            <Flex mt="5rem" pl={20} pr={20} dir='row' justifyContent="space-between" >
                <Flex flexDir='column'>
                    <Text fontSize={20} whiteSpace={2} fontWeight="normal" opacity="0.6" color="blue" > IT Solution For Easy Integration</Text>
                    <Text fontSize={25} mt={3} fontWeight="semibold" color="black" > IT Services To Develop Solution</Text>
                    <Text fontSize={25} fontWeight="semibold" color="black" > Your Way!</Text>
                    <Text fontSize={20} fontWeight="normal" opacity="0.7" color="grey" mt={3} > Building a relationships between IT Company & Experts</Text>
                </Flex>
                <Flex flexDir='column' pos="relative">
                    <Image pos="absolute" src={group2} h="200px" right={80} bottom="55%" />
                    <Box h="300px" w="400px" pos="relative">
                        <Image pos="absolute" src={group} h="360px" zIndex={99} />

                    </Box>

                </Flex>

            </Flex>

            <Image src={wave} mb={20} />
        </Box>

    )
}

export default Header