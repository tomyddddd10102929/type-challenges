/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #初級 #built-in #readonly #object-keys

  ### 質問

  組み込みの型ユーティリティ`Readonly<T>`を使用せず、`T` のすべてのプロパティを読み取り専用にする型を実装します。実装された型のプロパティは再割り当てできません。

  例えば：

  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```

  > GitHubで確認する：https://tsch.js.org/7/ja
*/

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

// その下の階層もreadonlyに
// すべての階層を精査する方法を別途考えても面白そう
type MyReadonly2<T> = {
  readonly [key in keyof T]: T[key] extends object
    ? { readonly [key2 in keyof T[key]]: T[key][key2] }
    : T[key];
};

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

const aa: MyReadonly2<Todo1> = {
  title: "ss",
  description: "aa",
  completed: true,
  meta: {
    author: "john",
  },
};
