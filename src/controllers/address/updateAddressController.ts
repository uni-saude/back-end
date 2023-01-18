import { Request, Response } from "express";
import updateAddressService from "../../services/addresses/updateAddress.service";

const updateAddressController = async (req: Request, res: Response) => {
  const addressData = req.body;
  const addressId = req.params.id;
  const updateAddress = await updateAddressService(addressData, addressId);
  return res.json(updateAddress);
};

export default updateAddressController;
