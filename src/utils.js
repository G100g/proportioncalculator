function calcResult(a, b, c) {
    return (a * b) / c;
}

export function calc({ a, b, x, y, result }) {

    switch(result) {

      case 'y':
        y = calcResult(b, x, a);
      break;

      case 'x':
        x = calcResult(a, y, b);
      break;

      case 'a':
        a = calcResult(b, x, y);
      break;

      case 'b':
        b = calcResult(a, y, x);
      break;

    }

    return { a, b, x, y };

}