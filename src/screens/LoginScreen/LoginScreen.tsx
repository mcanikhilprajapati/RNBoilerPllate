import React from 'react';
import {
  Box,
  Button,
  ButtonText, HStack,
  Input,
  InputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';

const LoginScreen = ({ navigation }: any) => {
  return (
    <Box flex={1} justifyContent="center" px="$4">
      <VStack space="md">
        <Text size="xl" fontWeight="$bold">
          Login
        </Text>

        <Input>
          <InputField placeholder="Email" keyboardType="email-address" />
        </Input>

        <Input>
          <InputField placeholder="Password" secureTextEntry />
        </Input>

        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText>Login</ButtonText>
        </Button>

        <Text
          size="sm"
          textAlign="right"
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Forgot Password?
        </Text>

        <HStack space="md" justifyContent="center">
          <Text>Don't have an account?</Text>
          <Text bold onPress={() => navigation.navigate('Signup')}>Signup</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default LoginScreen;
