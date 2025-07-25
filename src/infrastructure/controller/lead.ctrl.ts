import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";

class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) {}

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone, fileBase64 } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone, fileBase64 })
    res.send(response);
  };
}

export default LeadCtrl;
