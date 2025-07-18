export default [
  // ---------------- 問題1 ----------------
  {
    sentence: (
      <p>
        データ分析エンジニアに通常求められることとして、不適切なものを2つ選べ。
      </p>
    ),
    options: [
      "適切なデータを入手する技術",
      "データを可視化し、特性を把握する技術",
      "分析したデータを活用するためのアプリケーションを構築する技術",
      "一般的なのITセキュリティ知識",
      "対象のドメイン領域の知識",
    ],
    answer: [2, 3],
    explanation: (
      <>
        <p>データ分析エンジニアに求められる技術は、次のようなものがある。</p>
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

  // ---------------- 問題2 ----------------
  {
    sentence: (
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

  // ---------------- 問題3 ----------------
  {
    sentence: (
      <p>
        JavaScriptのオブジェクトの書き方を基に考えられた、構造化されたデータフォーマットを記述せよ。
      </p>
    ),
    answer: ["JSON", "json", "Json"],
    explanation: (
      <>
        <p>
          正答はJSONである。RFC8259によって仕様が定められている。
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

  // ---------------- 問題4 ----------------
  {
    sentence: (
      <>
        <p>次のコードを実行した結果として正しいものを選べ。</p>
        <pre>
          <code>{`
import pandas as pd
table = pd.read_html("https://peps.python.org/")
print(table[1].shape)`}</code>
        </pre>
      </>
    ),
    options: ["11", "[22, 10]", "(34,)", "(47, 5)"],
    answer: 3,
    explanation: (
      <>
        <p>
          pandasの<code>read_html()</code>
          を使用すると、指定したURLのWebページ上の表をスクレイピングすることができる。
          今回は、読み込んだ表の<code>shape</code>
          属性を出力するため、タプル形式で行数と列数を出力していると思われる選択肢4が正解となる。
        </p>
        <h3>参考</h3>
        <blockquote>
          <a
            href="https://pandas.pydata.org/docs/reference/api/pandas.read_html.html"
            target="_blank"
          >
            https://pandas.pydata.org/docs/reference/api/pandas.read_html.html
          </a>
        </blockquote>
      </>
    ),
    aiGenerated: false,
    type: "single",
  },

  // ---------------- 問題5 ----------------
  {
    sentence: (
      <>
        <p>次のコードの3行目と同等の意味を持つコードを選べ。</p>
        <pre>
          <code>{`
import numpy as np
elems = np.arange(6)
elems = elems[np.newaxis]`}</code>
        </pre>
      </>
    ),
    options: [
      "elems = elems[:]",
      "elems = elems[None]",
      "elems = elems[np.nan]",
      "elems = elems[1, -1]",
    ],
    answer: 1,
    explanation: (
      <>
        <p>
          <code>numpy.newaxis</code>の実体は<code>None</code>
          であるため、選択肢2が正解となる。
          <code>numpy.newaxis</code>
          を使用することで、次元を一つ追加することができる。
          <br />
          選択肢1は次元を追加せず、元の配列を維持するのみ。
          <br />
          選択肢3は<code>IndexError</code>が発生する。
          <br />
          選択肢4は<code>elems.reshape(1, -1)</code>
          であれば同等の意味を持つが、選択肢のものでは
          <code>IndexError</code>が発生する。
        </p>
        <h3>参考</h3>
        <blockquote>
          <a
            href="https://numpy.org/doc/2.1/reference/constants.html#numpy.newaxis"
            target="_blank"
          >
            https://numpy.org/doc/2.1/reference/constants.html#numpy.newaxis
          </a>
        </blockquote>
      </>
    ),
    aiGenerated: false,
    type: "single",
  },

  // ---------------- 問題6 ----------------
  {
    sentence: (
      <>
        <p>次のコードの(( 空欄 ))に当てはまるコードとして適切なものを選べ。</p>
        <pre>
          <code>{`
import numpy as np
a = np.array([1, 2, 3])
b = np.array([5, 4, 3])
(( 空欄 ))
print(c)`}</code>
        </pre>
        <h3>出力結果</h3>
        <pre>{`
array([[6, 7, 8],
       [5, 6, 7],
       [4, 5, 6]])
          `}</pre>
      </>
    ),
    options: [
      "c = a + b",
      "c = a[np.newaxis, :] + b[np.newaxis, :]",
      "c = a[np.newaxis, :] + b[:, np.newaxis]",
      "c = b[np.newaxis, :] + a[:, np.newaxis]",
    ],
    answer: 2,
    explanation: (
      <>
        <p>
          <code>a[np.newaxis, :]</code>
          は行方向に次元を増やすため、次のようになります。
        </p>
        <pre>
          {`
array([[1, 2, 3]])`}
        </pre>
        <p>
          一方、<code>b[:, np.newaxis]</code>
          は列方向に次元を増やすため、次のようになります。
        </p>
        <pre>
          {`
array([[5],
       [4],
       [3]])`}
        </pre>
        <p>
          形状が(1, 3)と(3,
          1)のndarrayを加算する場合、それぞれ行方向、列方向に同じ要素を展開し加算が行われます。
          この計算を行うと、問題文で与えられている出力結果が得られるため、選択肢3が解答となります。
        </p>
      </>
    ),
    aiGenerated: false,
    type: "single",
  },
];
