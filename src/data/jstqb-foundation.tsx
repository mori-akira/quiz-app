const explanation = {
  testMethodAndPurpose: (
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
  ),

  qaQcQms: (
    <>
      <h3>
        QA（品質保証）、QC（品質管理）、QMS（品質マネジメントシステム）の説明と関係性
      </h3>

      <h4>1. QA（Quality Assurance：品質保証）</h4>
      <p>
        QAは、製品やサービスが所定の品質要求を満たすことを「保証」するための体系的な活動を指します。
        <br />
        プロセス中心であり、品質を作り込む仕組みや体制そのものの信頼性を担保します。
        <br />
        例：開発プロセスの標準化、監査、教育訓練など。
      </p>

      <h4>2. QC（Quality Control：品質管理）</h4>
      <p>
        QCは、製品やサービスそのものの品質を「管理」し、基準を満たすようにする活動です。
        <br />
        結果中心であり、検査やテストなどを通じて不具合の発見や修正を行います。
        <br />
        例：単体テスト、製品検査、バグの記録と修正など。
      </p>

      <h4>3. QMS（Quality Management System：品質マネジメントシステム）</h4>
      <p>
        QMSは、組織全体として品質を管理・改善するための枠組みや仕組みを指します。
        <br />
        QAやQCの活動もQMSの構成要素に含まれ、品質方針や目標の設定、文書管理、継続的改善（PDCA）などを含みます。
        <br />
        例：ISO 9001のような国際的な品質マネジメント規格。
      </p>
    </>
  ),

  errorDefectFailure: (
    <>
      <h3>エラー（Error）</h3>
      <p>
        人間による誤りを指します。たとえば、プログラマがソースコードを記述する際に論理的な間違いをしてしまうことなどが該当します。
        エラーはソフトウェアの設計、実装、または要件定義の段階で発生することがあります。
      </p>

      <h3>欠陥（Defect）</h3>
      <p>
        エラーが原因となってソフトウェアの中に生じた不具合です。バグ（Bug）とも呼ばれます。
        実装されたソフトウェアの仕様や期待される動作と異なる状態が「欠陥」となります。
      </p>

      <h3>故障（Failure）</h3>
      <p>
        欠陥のあるソフトウェアを実行した際に、期待された結果と異なる動作をした場合に「故障」となります。
        ユーザーが実際に遭遇する障害や異常動作を指します。
      </p>

      <h3>三者の関係</h3>
      <p>一般的に、以下のような因果関係があります：</p>
      <ul>
        <li>
          人間の <strong>エラー（Error）</strong> により、ソフトウェア内に
          <strong>欠陥（Defect）</strong> が作り込まれる
        </li>
        <li>
          その <strong>欠陥（Defect）</strong> が実行時に表面化すると、
          <strong>故障（Failure）</strong> となる
        </li>
      </ul>
    </>
  ),
};

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
    explanation: explanation.testMethodAndPurpose,
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
    explanation: explanation.testMethodAndPurpose,
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
    explanation: explanation.testMethodAndPurpose,
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
    explanation: explanation.testMethodAndPurpose,
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
    explanation: explanation.testMethodAndPurpose,
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
    explanation: explanation.testMethodAndPurpose,
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

  // ---------------- 問題8 ----------------
  {
    question: (
      <>
        <p>
          製品やサービスが所定の品質要求を満たすことを「保証」するための体系的な活動を何というか。
          <br />
          アルファベットで答えよ。
        </p>
      </>
    ),
    answer: ["QA", "qa"],
    explanation: explanation.qaQcQms,
    aiGenerated: true,
    type: "text",
  },

  // ---------------- 問題9 ----------------
  {
    question: (
      <>
        <p>
          製品やサービスそのものの品質を「管理」し、基準を満たすようにする活動を何というか。
          <br />
          アルファベットで答えよ。
        </p>
      </>
    ),
    answer: ["QC", "qc"],
    explanation: explanation.qaQcQms,
    aiGenerated: true,
    type: "text",
  },

  // ---------------- 問題10 ----------------
  {
    question: (
      <>
        <p>
          組織全体として品質を管理・改善するための枠組みや仕組みを何というか。
          <br />
          アルファベットで答えよ。
        </p>
      </>
    ),
    answer: ["QMS", "qms"],
    explanation: explanation.qaQcQms,
    aiGenerated: true,
    type: "text",
  },

  // ---------------- 問題11 ----------------
  {
    question: (
      <>
        <p>
          次のQA、QC、QMSに関する記述として、<strong>適切でないもの</strong>
          を1つ選べ。
        </p>
      </>
    ),
    options: [
      "QAは、プロセスの品質を確保するための活動である。",
      "QCは、製品やサービスそのものの品質を検証する活動である。",
      "QMSは、QCとQAを含めた品質管理活動全体の枠組みである。",
      "QCは、開発プロセスの標準化や教育訓練などを含む活動である。",
      "QAは、QMSの一部である。",
    ],
    answer: 3,
    explanation: explanation.qaQcQms,
    aiGenerated: true,
    type: "single",
  },

  // ---------------- 問題12 ----------------
  {
    question: (
      <>
        <p>QA、QC、QMSの関係として、適切なものを2つ選べ。</p>
      </>
    ),
    options: [
      "QAは、QMSの構成要素の1つである。",
      "QCは、QMSの一部ではなく独立して行われる活動である。",
      "QMSは、品質目標の設定や文書管理などの枠組みを含む。",
      "QCは、プロセスの標準化や監査などを含む活動である。",
      "QAは、完成した製品の欠陥を検出するための活動である。",
    ],
    answer: [0, 2],
    explanation: explanation.qaQcQms,
    aiGenerated: true,
    type: "multiple",
  },

  // ---------------- 問題13 ----------------
  {
    question: (
      <>
        <p>次の説明にあてはまるものとして、適切なものを選べ</p>
        <blockquote>人間による誤りを指す</blockquote>
      </>
    ),
    options: ["エラー", "欠陥", "故障", "障害"],
    answer: 0,
    explanation: explanation.errorDefectFailure,
    aiGenerated: true,
    type: "single",
  },

  // ---------------- 問題14 ----------------
  {
    question: (
      <>
        <p>次の説明にあてはまるものとして、適切なものを選べ</p>
        <blockquote>ソフトウェアの中に生じた不具合を指す</blockquote>
      </>
    ),
    options: ["エラー", "欠陥", "故障", "障害"],
    answer: 1,
    explanation: explanation.errorDefectFailure,
    aiGenerated: true,
    type: "single",
  },

  // ---------------- 問題15 ----------------
  {
    question: (
      <>
        <p>次の説明にあてはまるものとして、適切なものを選べ</p>
        <blockquote>
          ソフトウェアが期待された結果と異なる動作をすることを指す
        </blockquote>
      </>
    ),
    options: ["エラー", "欠陥", "故障", "障害"],
    answer: 2,
    explanation: explanation.errorDefectFailure,
    aiGenerated: true,
    type: "single",
  },

  // ---------------- 問題16 ----------------
  {
    question: (
      <>
        <p>エラー、欠陥、故障の関係として、適切なものを2つ選べ。</p>
      </>
    ),
    options: [
      "エラーが原因で欠陥が生じ、欠陥が原因で故障が発生する。",
      "故障が原因で欠陥が埋め込まれ、欠陥が原因でエラーが発生する。",
      "エラーと故障は同義であるが、欠陥とは異なる。",
      "人間のエラーによって欠陥が生じ、欠陥が実行時に故障として表れる。",
      "故障が発生した場合、その原因は常にエラーである。",
    ],
    answer: [0, 3],
    explanation: explanation.errorDefectFailure,
    aiGenerated: true,
    type: "multiple",
  },
];
