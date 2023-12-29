export interface RootState {
  user: {
    name: string;
  };
}

export interface Answer {
  id: number;
  label: string;
  value: string;
}

export interface QuestionData {
  id: number;
  question: string;
  audio: string;
  note: string;
  answers: Answer[];
  correctAnswerId: number;
  guide: string;
}
