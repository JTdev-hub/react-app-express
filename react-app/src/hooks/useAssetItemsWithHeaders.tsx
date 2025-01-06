import { useQuery } from "@tanstack/react-query";
import assetItemsWithHeaderService, {
  AssetItemsWithHeaders,
} from "../services/assetItemsWithHeader-service";

const useAssetItemsWithHeaders = (id?: number) => {
  const fetchAssetItemsWithHeader = () =>
    assetItemsWithHeaderService
      .getAll<AssetItemsWithHeaders>(id)
      .then((res) => res.data);

  return useQuery<AssetItemsWithHeaders[], Error>({
    queryKey: ["assetItemsWithHeader"],
    queryFn: fetchAssetItemsWithHeader,
  });
};

export default useAssetItemsWithHeaders;
