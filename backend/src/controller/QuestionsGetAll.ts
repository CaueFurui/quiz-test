import Questions from '../database/questions.json';
import {Request, Response} from "express";

export async function getAllQuestions(_: Request, response: Response) {
  return response.send({ 
    questions: Questions,
  });
}