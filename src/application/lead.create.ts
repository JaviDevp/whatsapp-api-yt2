import LeadExternal from "../domain/lead-external.repository";
import LeadRepository from "../domain/lead.repository";

export class LeadCreate {
  private leadRepository: LeadRepository;
  private leadExternal: LeadExternal;
  constructor(respositories: [LeadRepository, LeadExternal]) {
    const [leadRepository, leadExternal] = respositories;
    this.leadRepository = leadRepository;
    this.leadExternal = leadExternal;
  }

  public async sendMessageAndSave({
    message,
    phone,
    fileBase64,
  }: {
    message: string;
    phone: string;
    fileBase64?: string;
  }) {
    const responseDbSave = await this.leadRepository.save({ message, phone });//TODO DB
    const responseExSave = await this.leadExternal.sendMsg({ message, phone, fileBase64 });//TODO enviar a ws
    return {responseDbSave, responseExSave};
  }
}
