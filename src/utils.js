export function calc({ a, b, x, y, result }) {

    switch(result) {

      case 'y':
        y = (b * x) / a
      break;

      case 'x':
        x = (a * y) / b
      break;

      case 'a':
        a = (b * x) / y
      break;

      case 'b':
        b = (a * y) / x
      break;

    }

    return { a, b, x, y };

}