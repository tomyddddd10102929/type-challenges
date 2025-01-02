/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #初級 #tuple

  ### 質問

  タプル`T`を受け取り、そのタプルの長さを返す型`Length<T>`を実装します。

  例えば：

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > GitHubで確認する：https://tsch.js.org/18/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Length<T> = T extends { length: number } ? T["length"] : T;
