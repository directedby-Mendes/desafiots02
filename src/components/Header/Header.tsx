import React from 'react';
import { ChakraProvider,Box, Flex, Heading, Text,Image } from '@chakra-ui/react';
import myImage from '../../assets/img/DigitalBank.png';
export const Header = () => {
  return (
    <ChakraProvider>
    <Box bg='#9413dc' color="white" p={4}>
      <Flex align="start" justifyContent={'space-between'}>
      <Image
                borderRadius="full"
                boxSize="80px"
                src={myImage}
                alt="Dio"              />
        <Heading size="lg" paddingLeft={10}>Dio Bank</Heading>
        <Text fontSize="lg" >Seu banco digital</Text>
      </Flex>
    </Box>
    </ChakraProvider>
  );
};
