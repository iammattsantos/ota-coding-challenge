import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { deleteNote } from '../services';

export const router = Router();

router.delete('/notes/:id', (req: Request, res: Response) => {
  let code: number;
  let body: any;

  try {
    if (!req.params.id) {
      code = StatusCodes.BAD_REQUEST;
      body = 'Missing id';
    } else {
      deleteNote(req.params.id);

      code = StatusCodes.NO_CONTENT;
      body = null;
    }
  } catch (error: any) {
    code = StatusCodes.INTERNAL_SERVER_ERROR;
    body = error;

    if (error.message === 'Note not found') {
      code = StatusCodes.NOT_FOUND;
      body = error.message;
    }
  }

  return res.status(code).json(body);
});

export default router;
