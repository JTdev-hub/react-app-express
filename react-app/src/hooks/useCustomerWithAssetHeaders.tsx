import customerWithAssetsService, {
  CustomerWithAssets,
} from "../services/customerWithAssets-service";
import { useQuery } from "@tanstack/react-query";

const useCustomerAssetsHeader = (id?: number) => {
  const fetchCustomersWithAssetHeaders = () =>
    customerWithAssetsService
      .getAll<CustomerWithAssets>(id)
      .then((res) => res.data);

  return useQuery<CustomerWithAssets[], Error>({
    queryKey: ["customerWithAssetHeaders"],
    queryFn: fetchCustomersWithAssetHeaders,
  });
};
export default useCustomerAssetsHeader;
