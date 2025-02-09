import React from "react";

export type Question = {
  [key: string]: {
    name: string;
    data: QuestionData[];
  };
};

export type QuestionData = {
  question: React.ReactNode;
  options?: string[];
  answer: number | number[] | string[];
  explanation: React.ReactNode;
  aiGenerated: boolean;
  type: "single" | "multiple" | "text";
};

export const questions: Question = {
  "python-certified-data-practice": {
    name: "Python 3 エンジニア認定データ分析実践試験",
    data: [
      {
        question: (
          <p>
            データ分析エンジニアに求められることとして、不適切なものを2つ選べ。
          </p>
        ),
        options: [
          "適切なデータを入手する技術",
          "データを可視化し、特性を把握する技術",
          "分析したデータを活用するためのアプリケーションを構築する技術",
          "最新のITセキュリティ知識",
          "対象のドメイン領域の知識",
        ],
        answer: [2, 3],
        explanation: (
          <>
            <p>
              データ分析エンジニアに求められる技術は、次のようなものがあります。
            </p>
            <h3>必要なスキル</h3>
            <ul>
              <li>データの入手、加工</li>
              <li>データの可視化</li>
              <li>データ特性の把握</li>
              <li>プログラミング</li>
              <li>インフラ知識</li>
            </ul>
            <h3>付加的に持つべきスキル</h3>
            <ul>
              <li>機械学習</li>
              <li>数学</li>
              <li>ドメイン知識</li>
            </ul>
          </>
        ),
        aiGenerated: false,
        type: "multiple",
      },
      {
        question: (
          <p>
            pandasの `read_csv()`
            関数のキーワード引数の説明として、誤っているものを選べ。
          </p>
        ),
        options: [
          "sep: 列の区切り文字を指定する",
          "skiprows: 指定した行数を都度スキップし、その行数毎のデータを取得する",
          "quotechar: 囲み文字を指定する",
          "usecols: 取得する列名または列インデックスを指定する",
        ],
        answer: 1,
        explanation: (
          <>
            <h3>read_csv() の主なキーワード引数</h3>
            <table>
              <thead>
                <tr>
                  <th>引数名</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>sep</td>
                  <td>区切り文字を指定</td>
                </tr>
                <tr>
                  <td>header</td>
                  <td>
                    列名に使うヘッダ行のインデックスを指定。ヘッダ行がない場合、
                    Noneを指定する。
                  </td>
                </tr>
                <tr>
                  <td>skiprows</td>
                  <td>指定したはじめからの行数読み込みをスキップする</td>
                </tr>
                <tr>
                  <td>quotechar</td>
                  <td>囲み文字</td>
                </tr>
                <tr>
                  <td>usecols</td>
                  <td>読み込む列を列名またはインデックスのリストで指定</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
        aiGenerated: false,
        type: "single",
      },
      {
        question: (
          <p>
            JavaScriptのオブジェクトの書き方を基に考えられた、構造化されたデータフォーマットを記述せよ。
            ただし、アルファベット大文字で記述すること。
          </p>
        ),
        answer: ["JSON", "json", "Json"],
        explanation: (
          <>
            <p>
              正答はJSONです。
              <br />
              RFC8259によって仕様が定められています。
              <br />
            </p>
            <blockquote>
              <a
                href="https://datatracker.ietf.org/doc/html/rfc8259"
                target="_blank"
              >
                https://datatracker.ietf.org/doc/html/rfc8259
              </a>
            </blockquote>
          </>
        ),
        aiGenerated: false,
        type: "text",
      },
    ],
  },
};
