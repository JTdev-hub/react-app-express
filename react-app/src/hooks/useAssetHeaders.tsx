import assetHeaderService, {
  AssetHeader,
} from "../services/assetHeader-service";
import { useQuery } from "@tanstack/react-query";

const useAssetHeaders = () => {
  const fetchAssetHeaders = () =>
    assetHeaderService.getAll<AssetHeader>().then((res) => res.data);

  return useQuery<AssetHeader[], Error>({
    queryKey: ["assetHeaders"],
    queryFn: fetchAssetHeaders,
  });
};
export default useAssetHeaders;
