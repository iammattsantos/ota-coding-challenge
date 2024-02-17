import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { updateNote } from '../services';

export const router = Router();

router.put('/notes/:id', (req: Request, res: Response) => {
  let code: number;
  let body: any;

  try {
    if (!req.body.title || !req.body.body) {
      code = StatusCodes.BAD_REQUEST;
      body = 'Title and body are required';
    } else {
      updateNote(req.params.id, req.body.title, req.body.body);

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
