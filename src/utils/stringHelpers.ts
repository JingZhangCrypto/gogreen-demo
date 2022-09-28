/**
 * Hide the middle part of the string with... instead of
 *
 * gio1ts...0zdpu8
 * @param str Strings to be processed
 * @param frontLen The first few digits need to be reserved
 * @param endLen The last few digits need to be reserved
 * @returns
 */
 export const retainFL6Digits = (str: string, frontLen = 6, endLen = 6) => {
  if (!str || str.length < frontLen + endLen) return '';

  return str.substring(0, frontLen) + '...' + str.substring(str.length - endLen);
 };

export function StartWithUppercase(str: string) {
  return str.replace(/^\S/, s => s.toUpperCase())
 }
