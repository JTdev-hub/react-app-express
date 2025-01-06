import customerService, { Customer } from "../services/customer-service";
import { useQuery } from "@tanstack/react-query";

const useCustomers = (id?: number) => {
  const fetchCustomers = () =>
    customerService.getAll<Customer>(id).then((res) => res.data);

  return useQuery<Customer[], Error>({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });
};
export default useCustomers;
