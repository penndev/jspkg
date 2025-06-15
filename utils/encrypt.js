/**
 * base64 URL编码
 * https://datatracker.ietf.org/doc/html/rfc4648#section-5
 * @param {Uint8Array} bytes
 * @returns {string}
 *
 * @example
 * const strArray = new TextEncoder().encode("string");
 * console.log(base64URLEncode(strArray));
 * 输出：c3RyaW5n
 */
const base64URLEncode = (bytes) => {
  const base64urlChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  let output = "";
  let i;

  for (i = 0; i + 2 < bytes.length; i += 3) {
    const triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
    output += base64urlChars[(triplet >> 18) & 0x3f];
    output += base64urlChars[(triplet >> 12) & 0x3f];
    output += base64urlChars[(triplet >> 6) & 0x3f];
    output += base64urlChars[triplet & 0x3f];
  }

  const remaining = bytes.length - i;
  if (remaining === 1) {
    const triplet = bytes[i] << 16;
    output += base64urlChars[(triplet >> 18) & 0x3f];
    output += base64urlChars[(triplet >> 12) & 0x3f];
    // No padding in base64url
  } else if (remaining === 2) {
    const triplet = (bytes[i] << 16) | (bytes[i + 1] << 8);
    output += base64urlChars[(triplet >> 18) & 0x3f];
    output += base64urlChars[(triplet >> 12) & 0x3f];
    output += base64urlChars[(triplet >> 6) & 0x3f];
  }

  return output;
};

/**
 * base64 URL解码
 * @param {string} str base64url字符串
 * @returns {Uint8Array}
 *
 * @example
 * const strArray = base64URLDecode("c3RyaW5n");
 * const str = new TextDecoder().decode(strArray);
 * console.log(str);
 * 输出：string
 */
const base64URLDecode = (str) => {
  // 替换URL安全字符
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  // 补齐padding
  while (str.length % 4) {
    str += "=";
  }
  // 手动解码base64字符串为Uint8Array
  const base64Chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let buffer = [];
  let bits = 0,
    bitLength = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === "=") break;
    const val = base64Chars.indexOf(c);
    if (val === -1) continue;
    bits = (bits << 6) | val;
    bitLength += 6;
    if (bitLength >= 8) {
      bitLength -= 8;
      buffer.push((bits >> bitLength) & 0xff);
    }
  }
  return new Uint8Array(buffer);
};


/**
 * 计算给定字符串的哈希摘要（Digest）
 * @param {AlgorithmIdentifier} algorithm - 哈希算法名称。支持的值包括：
 *  - "SHA-1"（不建议在加密应用中使用）
 *  - "SHA-256"
 *  - "SHA-384"
 *  - "SHA-512"
 * @param {string} data - 要进行哈希的字符串数据。
 * @returns {Promise<Uint8Array>} 返回一个表示哈希摘要的 `Uint8Array`。
 *
 * @example
 * const hash = await Digest("SHA-256", "hello world");
 * console.log([...hash]);
 */
const digest = async (algorithm, data) => {
  const buffer = new TextEncoder().encode(data);
  const digest = await crypto.subtle.digest(algorithm, buffer);
  return new Uint8Array(digest);
};

export {
    base64URLDecode,
    base64URLEncode,
    digest
}