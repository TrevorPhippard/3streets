import { UseFormRegister } from 'react-hook-form';
import { Schema } from '@/app/_schemas/question';

export interface QuestionData {
  id: string;
  triviaId: number,
  order: number,
  question: string,
  bg_img: string,
  answer: string
  createdAt: Date;
  updatedAt: Date;
}

export interface GameData {
  id: number;
  title: string;
  game_id: string;
  bg_img: string;
  text_colour: string;
  sliderTime: number;
  userAcctId: string;
  createdAt: Date;
  updatedAt: Date;
  Question?: QuestionData[];
}



export type AnswersListProps = {
  register: UseFormRegister<Schema>;
  index: number;
  append: (data: { postId: string; text: string }) => void;
  remove: (index: number) => void;
  field?: { text?: string },
  fields?: { text?: string },
  errors: {
    answer?: {
      [key: number]: {
        text?: {
          message?: string
        }
      }
    }
  }
}
