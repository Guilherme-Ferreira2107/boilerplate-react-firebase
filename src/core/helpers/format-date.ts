import { format as formatFns } from 'date-fns';

export function FormatDate(date: string, format: string): string {
  const customDate = formatFns(new Date(date), format);
  return customDate;
}
