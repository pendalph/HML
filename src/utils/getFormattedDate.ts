import { DateTime } from 'luxon';

export const getDateFromISO = (date: string): string => {
  return DateTime.fromISO(date).toLocaleString();
}

export const getTimeAgo = (date: string): string | null => {
  return DateTime.fromISO(date).toRelative();
}