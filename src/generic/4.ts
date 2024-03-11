/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
// class Component {
//   constructor(public props: T) {}
// }

interface Component {
  pageInfo<T>(props: T);
}

class Page implements Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
