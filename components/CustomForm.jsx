import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";

const isInvalid = true;

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [isLoadig, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  const emailReg = /\S+@\S+\.\S+/;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    return email && !emailReg.test(email);
  };

  console.log(validateEmail());

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    email &&
      !validateEmail() &&
      onValidated({
        MERGE0: email,
      });
    setIsLoading(false);
  };

  return (
    <FormControl>
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {status === "success" ? "Success!" : "Join Our Newsletter."}
      </Text>

      {status === "sending" && <Text>sending...</Text>}
      {status === "error" && (
        <Text
          fontSize={"lg"}
          color="red.300"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <Text
          fontSize={"lg"}
          color="green.300"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <Flex flexDir="row" gap="1rem">
          <Input
            isInvalid={validateEmail()}
            errorBorderColor="red.300"
            label="email"
            bg="blackAlpha.300"
            onChange={handleChange}
            value={email}
            type="email"
            placeholder="Your Email"
            isRequired
            border={0}
            _focus={{
              bg: "blackAlpha.100",
            }}
          />
          <IconButton
            label="subscribe"
            type="submit"
            isLoading={isLoadig}
            bg="black"
            color={"white"}
            _hover={{
              bg: "gray.400",
            }}
            aria-label="Subscribe"
            icon={<BiMailSend />}
            onClick={(e) => handleSubmit(e)}
          />
        </Flex>
      ) : null}
    </FormControl>
  );
};

export default CustomForm;
