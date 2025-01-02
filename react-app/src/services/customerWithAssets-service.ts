import { AssetHeader } from "./assetHeader-service";
import { Customer } from "./customer-service";
import create from "./http-service";

export interface CustomerWithAssets extends Customer {
  assetHeaders: AssetHeader[];
}

export default create("/customersAssetHeaders");
