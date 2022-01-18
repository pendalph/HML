export const baseURL = 'https://api.github.com';
export const perPageLimit = 25;

export enum ErrorStatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

export enum ApiRoutes {
  events = '/events'
}