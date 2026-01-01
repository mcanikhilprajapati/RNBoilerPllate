import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  Input,
  InputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';

const ForgotPasswordScreen = () => {
  return (
    <Box flex={1} justifyContent="center" px="$4">
      <VStack space="md">
        <Text size="xl" fontWeight="$bold">
          Forgot Password
        </Text>

        <Text size="sm">Enter your email to reset your password</Text>

        <Input>
          <InputField placeholder="Email" keyboardType="email-address" />
        </Input>

        <Button>
          <ButtonText>Send Reset Link</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
};

export default ForgotPasswordScreen;
