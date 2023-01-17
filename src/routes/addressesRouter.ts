import { Router } from "express";
import createAddressesController from "../controllers/address/createAddress.controller";
import deleteAddresController from "../controllers/address/deleteAddress.controller";
import listAddressByIdController from "../controllers/address/listAddressById.controller";
import listAddressesController from "../controllers/address/listAddresses.controller";
import updateAddressController from "../controllers/address/updateAddressController";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { addressSerializer } from "../schemas/addresses/address.serializers";

const addressesRouters = Router();

addressesRouters.post(
  "",
  verifyBodyRequestMiddleware(addressSerializer),
  createAddressesController
);
addressesRouters.get("", listAddressesController);
addressesRouters.get("/:id", listAddressByIdController);
addressesRouters.patch("/:id", updateAddressController);
addressesRouters.delete("/:id", deleteAddresController);

export default addressesRouters;
