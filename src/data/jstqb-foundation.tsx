const explanation_testMethodAndPurpose = (
  <>
    <p>主なテスト方法とその目的は、以下の通りである。</p>
    <table>
      <thead>
        <tr>
          <th>テスト方法</th>
          <th>テストの目的</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>スクリプトテスト</td>
          <td>
            仕様通りに動作することを網羅的に確認し、一定の品質を保証する。
          </td>
        </tr>
        <tr>
          <td>アドホックテスト</td>
          <td>
            効率よくテストを行い、たとえ設計書に不備があっても大切な動作を確認できる。
          </td>
        </tr>
        <tr>
          <td>モンキーテスト</td>
          <td>
            設計担当者や開発担当者の意図を考慮しない操作をすることで、想定していなかった思わぬ欠陥を見つける。
          </td>
        </tr>
        <tr>
          <td>カバレッジテスト</td>
          <td>ソースコードを網羅的にテストすることで、欠陥を減少させる。</td>
        </tr>
        <tr>
          <td>受入テスト</td>
          <td>システムが期待通りに動作し、要件を満たすことを確認する。</td>
        </tr>
        <tr>
          <td>本稼働判定</td>
          <td>
            システムを本稼働させた場合のリスクをステークホルダーに示して判断してもらう。
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

export default [
  // ---------------- 問題1 ----------------
  {
    question: (
      <>
        <p>次のテストの目的に合致するテスト方法として、適切なものを選べ</p>
        <blockquote>
          仕様通りに動作することを網羅的に確認し、一定の品質を保証する。
        </blockquote>
      </>
    ),
    options: [
      "スクリプトテスト",
      "アドホックテスト",
      "モンキーテスト",
      "カバレッジテスト",
      "受入テスト",
    ],
    answer: 0,
    explanation: explanation_testMethodAndPurpose,
    aiGenerated: false,
    type: "single",
  },

  // ---------------- 問題2 ----------------
  {
    question: (
      <>
        <p>次のテストの目的に合致するテスト方法として、適切なものを選べ</p>
        <blockquote>
          効率よくテストを行い、たとえ設計書に不備があっても大切な動作を確認できる。
        </blockquote>
      </>
    ),
    options: [
      "スクリプトテスト",
      "アドホックテスト",
      "モンキーテスト",
      "カバレッジテスト",
      "受入テスト",
    ],
    answer: 1,
    explanation: explanation_testMethodAndPurpose,
    aiGenerated: false,
    type: "single",
  },

  // ---------------- 問題3 ----------------
  {
    question: (
      <>
        <p>次のテストの目的に合致するテスト方法として、適切なものを選べ</p>
        <blockquote>
          設計担当者や開発担当者の意図を考慮しない操作をすることで、想定していなかった思わぬ欠陥を見つける。
        </blockquote>
      </>
    ),
    options: [
      "スクリプトテスト",
      "アドホックテスト",
      "モンキーテスト",
      "受入テスト",
      "本稼働判定",
    ],
    answer: 2,
    explanation: explanation_testMethodAndPurpose,
    aiGenerated: true,
    type: "single",
  },

  // ---------------- 問題4 ----------------
  {
    question: (
      <>
        <p>次のテストの目的に合致するテスト方法として、適切なものを選べ</p>
        <blockquote>
          ソースコードを網羅的にテストすることで、欠陥を減少させる。
        </blockquote>
      </>
    ),
    options: [
      "スクリプトテスト",
      "アドホックテスト",
      "カバレッジテスト",
      "モンキーテスト",
      "受入テスト",
    ],
    answer: 2,
    explanation: explanation_testMethodAndPurpose,
    aiGenerated: true,
    type: "single",
  },

  // ---------------- 問題5 ----------------
  {
    question: (
      <>
        <p>次のテストの目的に合致するテスト方法として、適切なものを選べ</p>
        <blockquote>
          システムが期待通りに動作し、要件を満たすことを確認する。
        </blockquote>
      </>
    ),
    options: [
      "スクリプトテスト",
      "カバレッジテスト",
      "モンキーテスト",
      "受入テスト",
      "本稼働判定",
    ],
    answer: 3,
    explanation: explanation_testMethodAndPurpose,
    aiGenerated: true,
    type: "single",
  },

  // ---------------- 問題6 ----------------
  {
    question: (
      <>
        <p>次のテストの目的に合致するテスト方法として、適切なものを選べ</p>
        <blockquote>
          システムを本稼働させた場合のリスクをステークホルダーに示して判断してもらう。
        </blockquote>
      </>
    ),
    options: [
      "アドホックテスト",
      "カバレッジテスト",
      "モンキーテスト",
      "受入テスト",
      "本稼働判定",
    ],
    answer: 4,
    explanation: explanation_testMethodAndPurpose,
    aiGenerated: true,
    type: "single",
  },

  // ---------------- 問題7 ----------------
  {
    question: (
      <>
        <p>テストとデバッグに関する記述として、適切なものを2つ選べ</p>
      </>
    ),
    options: [
      "テストは欠陥を見つける作業だが、デバッグはテスト前にプログラムを動作させることを言う",
      "テストもデバッグも、欠陥を見つけるための作業である",
      "デバッグより先にテストを行うことが好ましい",
      "ウォーターフォール開発モデルでは、各フェース毎にデバッグを行うが、テストはまとめて行う",
      "アジャイル開発モデルでは、繰り返しテストを行うことが好ましい",
    ],
    answer: [1, 4],
    explanation: (
      <>
        <p>
          デバッグとは、プログラム中の欠陥を取り除くことを意味する。
          一方、テストは主に欠陥を発見するための作業であり、目的や担当者、実施タイミングが異なる。
          デバッグは開発中に開発者が行い、テストは完成した機能に対してテスト担当者が行うことが一般的である。
        </p>
        <p>
          アジャイル開発ではスプリントごとに繰り返しテストが行われ、継続的な品質保証のために重要な要素となる。
          テスト自動化を積極的に取り入れることが推奨される。
        </p>
      </>
    ),
    aiGenerated: false,
    type: "multiple",
  },
];
