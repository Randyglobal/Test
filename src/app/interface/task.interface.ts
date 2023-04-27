import { Difficulty, Level, Status } from "../constants/const.enum";

export interface Ilist{
    Name: string;
    Status: Status;
    Difficulty: Difficulty;
    Level: Level;
    TaskId: string | number;
    StartDate: Date | string | number;
    DueDate: Date | string;
}