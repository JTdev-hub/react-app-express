import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

interface Props {
  onSubmit: (data: CustomerFormData) => void;
}

const CustomerForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <Flex justifyContent="center">
        <Box padding={3}>
          <Card minW={{ base: "sm", lg: "2xl" }} variant="outline">
            <CardBody>
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
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </form>
  );
};

export default CustomerForm;
