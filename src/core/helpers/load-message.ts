import { InfoMessagesEnum } from '../enums';

export function LoadMessageErrors(status: number | undefined): string {
  if (status === 401) return InfoMessagesEnum.NOT_AUTHORIZED;
  return InfoMessagesEnum.SYSTEM_UNAVAILABLE;
}
