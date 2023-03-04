import { reduce } from 'lodash';

/**
 * @param {string} name
 */
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=${toExpirationString(-1)}`;
}

/**
 * @param {string} name
 * @param {string} value
 * @param {CookieOptions} options
 */
export function setCookie(name, value, { expires = 7, path = '/' } = {}) {
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${toExpirationString(expires)}; path=${path}`;
}

/**
 * @param {string} name
 * @return {string}
 */
export function getCookie(name) {
  const cookies = document.cookie.split('; ');
  return reduce(
    cookies,
    (result, cookie) => {
      if (result !== '') return result;
      const parts = cookie.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : result;
    },
    ''
  );
}

/**
 * @param {number} days
 * @return {string}
 */
function toExpirationString(days) {
  return new Date(Date.now() + days * 86400000).toUTCString();
}

/**
 * @typedef {object} CookieOptions
 * @property {number} expires
 * @property {string} path
 */
