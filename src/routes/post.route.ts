import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createNote } from '../services';

export const router = Router();

router.post('/notes', (req: Request, res: Response) => {
  let code: number;
  let body: any;

  try {
    if (!req.body.title || !req.body.body) {
      code = StatusCodes.BAD_REQUEST;
      body = 'Title and body are required';
    } else {
      createNote(req.body.title, req.body.body);

      code = StatusCodes.CREATED;
      body = 'Note created';
    }
  } catch (error) {
    code = StatusCodes.INTERNAL_SERVER_ERROR;
    body = error;
  }

  return res.status(code).json(body);
});
