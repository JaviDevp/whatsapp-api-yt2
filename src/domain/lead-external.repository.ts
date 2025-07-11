export default interface LeadExternal {
  sendMsg({
    message,
    phone,
    fileBase64,
  }: {
    message: string;
    phone: string;
    fileBase64?: string;
  }): Promise<any>;
}