import { useMutation, useQueryClient } from "@tanstack/react-query";
import customerService, { Customer } from "../services/customer-service";
import { useState } from "react";

const useAddUsers = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const mutate = useMutation<Customer, Error, Customer>({
    mutationFn: (customer: Customer) =>
      customerService.create(customer).then((res) => res.data),
    onSuccess: (savedCustomer) => {
      queryClient.setQueryData<Customer[]>(["customer"], (customer) => [
        savedCustomer,
        ...(customer || []),
      ]);

      setAlertMessage(
        `Customer "${savedCustomer.customerName}" has been created successfully!`
      );

      // Clear alert after 3 seconds
      setTimeout(() => setAlertMessage(null), 3000);
    },
  });

  return { ...mutate, alertMessage };
};

export default useAddUsers;
