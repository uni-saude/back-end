import { Request, Response } from "express";
import listAddressByIdService from "../../services/addresses/listAddressById.service";

const listAddressByIdController = async (req: Request, res: Response) => {
  console.log("aqui");
  const addressId: string = req.params.id;
  const address = await listAddressByIdService(addressId);
  return res.json(address);
};

export default listAddressByIdController;
