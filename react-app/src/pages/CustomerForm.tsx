import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CardForms from "../components/CardForms";
import useAddUsers from "../hooks/useAddUsers";

const schema = z.object({
  customerName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50),
  customerSite: z
    .string()
    .min(3, { message: "Site must be at least 3 characters" })
    .max(50),
  customerContact: z.string(),
});

type CustomerFormData = z.infer<typeof schema>;

const CustomerForm = () => {
  const { mutate: addCustomers, alertMessage } = useAddUsers();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerFormData>({ resolver: zodResolver(schema) });
  return (
    <>
      {alertMessage && (
        <Alert status="success" marginBottom={4}>
          <AlertIcon />
          {alertMessage}
        </Alert>
      )}
      <form
        onSubmit={handleSubmit((data) => {
          addCustomers(data);
          reset();
        })}
      >
        <Flex justifyContent="center">
          <CardForms>
            <Stack spacing={3}>
              <VStack align="start">
                <Text>Customer Name</Text>
                <Input
                  {...register("customerName")}
                  placeholder="e.g John"
                ></Input>
                {errors.customerName && (
                  <Text fontSize="xs" color="red.500">
                    {errors.customerName.message}
                  </Text>
                )}
              </VStack>
              <VStack align="start">
                <Text>Customer Site</Text>
                <Input
                  {...register("customerSite")}
                  placeholder="e.g Site 001"
                ></Input>
                {errors.customerSite && (
                  <Text fontSize="xs" color="red.500">
                    {errors.customerSite.message}
                  </Text>
                )}
              </VStack>
              <VStack align="start">
                <Text>Customer Contact</Text>
                <Input
                  {...register("customerContact")}
                  placeholder="e.g +639171234567"
                ></Input>
                {errors.customerContact && (
                  <Text fontSize="xs" color="red.500">
                    {errors.customerContact.message}
                  </Text>
                )}
              </VStack>
            </Stack>
            <Button colorScheme="teal" size="md" marginTop={5} type="submit">
              Submit
            </Button>
          </CardForms>
        </Flex>
      </form>
    </>
  );
};

export default CustomerForm;
