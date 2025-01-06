import { useQuery } from "@tanstack/react-query";
import assetItemsService, { AssetItems } from "../services/assetItems-service";

const useAssetItems = () => {
  const fetchAssetItems = () =>
    assetItemsService.getAll<AssetItems>().then((res) => res.data);

  return useQuery<AssetItems[], Error>({
    queryKey: ["assetItems"],
    queryFn: fetchAssetItems,
  });
};

export default useAssetItems;
