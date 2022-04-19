export interface IResponseHandler<T> {
  data: T
  error: []
}

/**
 *
 * @param T
 * @description is a generic to the typing payload
 * @param payload is a returned data
 * @returns {
 *  data: payload
 *  error: array
 * }
 */

export function responseHandler<T extends Record<string, unknown>>(
  payload: T
): IResponseHandler<T> {
  return {
    data: payload,
    error: []
  }
}
