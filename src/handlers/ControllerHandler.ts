import { Request, Response } from 'express'

export interface ControllerHandler {
  (req: Request, res: Response): Promise<void>
}
