import { useQuery } from "@tanstack/react-query";
import { AssetItemsWithHeaders } from "../services/assetItemsWithHeader-service";
import assetItemDetailsService from "../services/assetItemDetails-service";

const useAssetItemDetails = (id?: number) => {
  const fetchAssetItemsWithHeader = () =>
    assetItemDetailsService
      .getAll<AssetItemsWithHeaders>(id)
      .then((res) => res.data);

  return useQuery<AssetItemsWithHeaders[], Error>({
    queryKey: ["assetItemDetails"],
    queryFn: fetchAssetItemsWithHeader,
  });
};

export default useAssetItemDetails;
