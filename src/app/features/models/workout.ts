import { Exercise } from "./exercise";

export interface Workout {
    id: number;
    text: string;
    done: boolean;
    exercises : Exercise[];
  }