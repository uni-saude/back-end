import { Request, Response } from "express";
import { IAddressRequest } from "../../interfaces/addressesInterface";
import createAddressService from "../../services/addresses/createAddress.service";

const createAddressesController = async (req: Request, res: Response) => {
  const address: IAddressRequest = req.body;
  const newAddress = await createAddressService(address);
  return res.status(201).json(newAddress);
};

export default createAddressesController;
