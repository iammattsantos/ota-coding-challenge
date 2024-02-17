import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getNotes, getNoteById } from '../services';

export const router = Router();

router.get('/notes', (req: Request, res: Response) => {
  let code: number;
  let body: any;

  try {
    const notes = getNotes();

    code = StatusCodes.OK;
    body = notes;
  } catch (error) {
    code = StatusCodes.INTERNAL_SERVER_ERROR;
    body = error;
  }

  return res.status(code).json(body);
});

router.get('/notes/:id', (req: Request, res: Response) => {
  let code: number;
  let body: any;

  try {
    const note = getNoteById(req.params.id);

    if (note) {
      code = StatusCodes.OK;
      body = note;
    } else {
      code = StatusCodes.NOT_FOUND;
      body = 'Note not found';
    }
  } catch (error) {
    code = StatusCodes.INTERNAL_SERVER_ERROR;
    body = error;
  }

  return res.status(code).json(body);
});
