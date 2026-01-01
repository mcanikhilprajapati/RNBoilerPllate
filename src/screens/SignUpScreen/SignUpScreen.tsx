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

const SignUpScreen = ({ navigation }:any) => {
  return (
    <Box flex={1} justifyContent="center" px="$4">
      <VStack space="md">
        <Text size="xl" fontWeight="$bold">
          Sign Up
        </Text>

        <Input>
          <InputField placeholder="Name" />
        </Input>

        <Input>
          <InputField placeholder="Email" keyboardType="email-address" />
        </Input>

        <Input>
          <InputField placeholder="Password" secureTextEntry />
        </Input>

        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText>Create Account</ButtonText>
        </Button>

        <HStack space="md" justifyContent="center">
          <Text>Already have an account?</Text>
          <Text bold onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SignUpScreen;
