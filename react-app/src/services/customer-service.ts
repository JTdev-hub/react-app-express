import create from "./http-service.js";

export interface Customer {
  id?: number;
  customerName: string;
  customerSite: string;
  customerContact: string;
}

export default create("/customers");