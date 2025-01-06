import { AssetHeader } from "./assetHeader-service";
import { AssetItems } from "./assetItems-service";
import create from "./http-service";

export interface AssetItemsWithHeaders extends AssetItems {
  assetHeader: AssetHeader;
}

export default create("/assetItemsWithHeader");
