import React from "react";
import pythonCertifiedDataPracticeData from "./data/python-certified-data-practice";
import jstqbFoundationData from "./data/jstqb-foundation";

export type Question = {
  [key: string]: {
    name: string;
    data: QuestionData[];
  };
};

export type QuestionData = {
  question: React.ReactNode;
  options?: string[] | React.ReactNode[];
  answer: number | number[] | string[];
  explanation: React.ReactNode;
  aiGenerated: boolean;
  type: "single" | "multiple" | "text";
};

export const questions: Question = {
  "python-certified-data-practice": {
    name: "Python 3 エンジニア認定データ分析実践試験",
    data: pythonCertifiedDataPracticeData as QuestionData[],
  },
  "jstqb-foundation": {
    name: "JSTQB認定テスト技術者資格試験 Foundation Level",
    data: jstqbFoundationData as QuestionData[],
  },
};
