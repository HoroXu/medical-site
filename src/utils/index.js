/**
 * Created by root on 2018/6/20.
 */

export function flatten (arr = this) {
  if (Array.isArray(arr)) {
    return arr.reduce((flat, toFlat) => {
      return flat.concat(Array.isArray(toFlat) ? flatten(toFlat) : toFlat);
    }, []);
  }
}

Array.prototype.flatten = flatten // eslint-disable-line
