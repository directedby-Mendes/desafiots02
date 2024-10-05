import {
  Heading,
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  InputGroup,
  InputLeftElement,
  Flex,
  Image,
} from "@chakra-ui/react";
import { login,RecuperarSenha,loginFacebook,loginGoogle } from "./services/login/login";
import { Header } from "./components/Header/Header";
import { LockIcon, EmailIcon } from "@chakra-ui/icons";
import myImage from './assets/img/DigitalBank.png';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight="100vh" backgroundColor="#d1a1ff" padding="25px">
        <Center>
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="25px"
            padding="15px"
            w="400px"
            h="600px"
          >
            <Center>
              <Heading color="#d1a1ff">Login</Heading>
            </Center>

            <Flex flexDirection={"column"} mt={4}>
              <InputGroup mb={4}>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                >
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input id="email" placeholder="E-mail" type="email" variant="filled" />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                >
                  <LockIcon color="gray.300" />
                </InputLeftElement>
                <Input id="senha"
                  placeholder="Password"
                  type="password"
                  variant="filled"
                />
              </InputGroup>
            </Flex>

            <Center>
              <Button
                onClick={login}
                colorScheme="teal"
                size="sm"
                width="100%"
                marginTop="5px"
              >
                Login
              </Button>
            </Center>
            <Center>
              <Button
                onClick={RecuperarSenha}
                colorScheme="teal"
                size="sm"
                width="100%"
                marginTop="5px"
              >
                Esqueceu a Senha?
              </Button>
            </Center>
            <br />
            <br />
            <Center>
              <Button
                onClick={loginFacebook}
                colorScheme="gray"
                size="sm"
                width="100%"
                marginTop="5px"
              >
                Logar com Facebook
              </Button>
            </Center>
            <Center>
              <Button
                onClick={loginGoogle}
                colorScheme="gray"
                size="sm"
                width="100%"
                marginTop="5px"
              >
                Logar com Google
              </Button>
            </Center>

              <br/>
              <br/>
            <Center>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={myImage}
                alt="Dio"
              />
            </Center>
          </Box>
        </Center>
        <Box boxSize="sm"></Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
