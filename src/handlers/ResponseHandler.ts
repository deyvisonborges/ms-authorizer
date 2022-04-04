export interface IResponseHandler<T> {
  data: T
  error: []
}

export function responseHandler<T extends Record<string, unknown>>(
  payload: T
): IResponseHandler<T> {
  return {
    data: payload,
    error: []
  }
}
