// lodashの機能を利用する。
// 配列を作成し、lodashのライブラリの機能で連結させる。
// 連結した結果をindex.htmlの<body>タグの中で描画する。

function component() {
  // HTMLのdiv要素を追加
  const element = document.createElement('div');

  // 配列を用意し、その中の要素をスペースで接続してdiv要素に追加する。
  const array = ['Hello', 'webpack']
  element.innerHTML = _.join(array, ' ')

  return element;
}

document.body.appendChild(component())