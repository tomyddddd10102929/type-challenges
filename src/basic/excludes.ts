/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #初級 #built-in #union

  ### 質問

  組み込みの型ユーティリティ`Exclude <T, U>`を使用せず、`U`に割り当て可能な型を`T`から除外する型を実装します。

  例えば：

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > GitHubで確認する：https://tsch.js.org/43/ja
*/

/* _____________ ここにコードを記入 _____________ */

type MyExclude<T, U> = T extends U ? never : T;
