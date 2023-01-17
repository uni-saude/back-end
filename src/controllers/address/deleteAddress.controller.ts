import { Request, Response } from "express";
import deleteAddressService from "../../services/addresses/deleteAddress.service";

const deleteAddresController = async (req: Request, res: Response) => {
  console.log(req.params.id);
  const addressId = req.params.id;
  await deleteAddressService(addressId);
  return res.status(204).json();
};

export default deleteAddresController;
