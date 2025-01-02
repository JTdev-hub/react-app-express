import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import customerWithAssetsService, {
  CustomerWithAssets,
} from "../services/customerWithAssets-service";

const useCustomerAssetsHeader = (id?: number) => {
  const [isLoading, setLoading] = useState(false);
  const [assetHeaders, setAssetHeaders] = useState<CustomerWithAssets[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } =
      customerWithAssetsService.getAll<CustomerWithAssets>(id);
    request
      .then((res) => {
        setAssetHeaders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { assetHeaders, error, isLoading, setAssetHeaders, setError };
};
export default useCustomerAssetsHeader;
