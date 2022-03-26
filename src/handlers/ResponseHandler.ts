export interface ResponseHandler<T extends Record<string, unknown>> {
  data: T
  error: []
}
