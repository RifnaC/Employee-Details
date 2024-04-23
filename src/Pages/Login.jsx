import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { useRef, useState, useContext, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import AuthContext from "../context/AuthProvider";
import axios from 'axios'
const LOGIN_URL = 'api/v1/auth/signin';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

//   const [success, setSuccess] = useState(false);
    useEffect(()=>{
        userRef.current.focus();
    },[]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`https://carxier-dev.tahrtech.in/${LOGIN_URL}`,
        {email, password},{ withCredentials: true }).then((res)=>{
          if (res.status === 200) {
            //all cookies are set in you're browser
            console.log(res);
          }
        })
        // console.log(JSON.stringify(response.data));

        // const token = response?.data?.token; // Assuming token is in response data
        // console.log(response.headers)
        // // if (token) {
        //     setAuth({ email, password, token }); // Store token in AuthContext
        //     navigate('/employee');
          
        // } else {
            // Handle missing token case (e.g., login failed)
            // setErr("Login failed: Missing authorization token");
        // }
        
        // setSuccess(true)
    } catch (error) {
        console.log("error", error);
        if(!error.response){
            setErr("No server response")
        }
        else if(error.response?.status === 400){
            setErr("Missing email or password")
        }else if(error.response?.status === 401){
            setErr("Unauthorized");
        }else if(error.response?.status === 403){
            setErr("forbidden");
        }else{
            setErr("login Failed")
        }
        // errRef.current.focus();
        
    }


  };

  return (
    
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'3xl'}>Admin Login</Heading>
        
      </Stack>
      <Box
        bg={useColorModeValue('#003232')}
        boxShadow={'lg'}
        p={8}>
          {err && <p className="err" ref={errRef} style={{"color":"red"}} aria-live="assertive">{err}</p>}
        <Stack spacing={4}>
          <form  onSubmit={handleSubmit}>
          <FormControl id="email">
            <FormLabel color={"#fcfcfc"}>Email address</FormLabel>
            <Input type="email"
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              value={email}
              autoComplete="off"
              required />
          </FormControl>
          <FormControl id="password">
            <FormLabel color={"#fcfcfc"}>Password</FormLabel>
            <Input type="password" 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Password"
              autoComplete="off" />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
            </Stack>
            <Button type="submit"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign in
            </Button>
          </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
  </Flex>
    // <Stack alignItems={"center"} justify={"center"} w={"100%"} h={"100vh"}>
    //   <Stack height={"80vh"} bgGradient="linear(to-t, green.200, pink.500)">
    //     <Stack justify={"center"} > 
    //       {err && <p className="err" ref={errRef} style={{"color":"red"}} aria-live="assertive">{err}</p>}
    //       <Stack alignItems={"center"}><h1>Login</h1></Stack>
    //       <Stack display={"flex"} alignItems="center" justifyContent="center"  my={5} py={5}>
    //         <form >
    //           <Input
    //             type="email"
    //             ref={userRef}
    //             variant="outline"
    //             onChange={(e) => setEmail(e.target.value)}
    //             placeholder="Email"
    //             value={email}
    //             autoComplete="off"
    //             w={"80%"}
    //             required 
    //           />
    //           <Input
    //             type="password"
    //             variant="outline"
    //             onChange={(e) => setPassword(e.target.value)}
    //             value={password}
    //             required
    //             placeholder="Password"
    //             autoComplete="off"
    //             w={"80%"}
    //           />
    //           <Button type="submit" colorScheme="blue" >Login</Button>
    //         </form>
    //       </Stack>
    //     </Stack>
    //   </Stack>
    // </Stack>
  );
};

export default Login;
