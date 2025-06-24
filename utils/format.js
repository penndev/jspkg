

/**
 * 时间戳格式化工具
 * @param {string} dateString Y-m-d H:i:s
 * @param {number?} timestamp unix时间戳
 * @returns {string} 2025-06-14-22:37:16
 */
const timeFormat = (dateString, timestamp) => {
  const date =
    timestamp && timestamp > 0 ? new Date(timestamp * 1000) : new Date();
  const year = date.getFullYear().toString();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return dateString
    .replace("Y", year)
    .replace("m", month)
    .replace("d", day)
    .replace("H", hours)
    .replace("i", minutes)
    .replace("s", seconds);
};

/**
 * 对秒进行字符格式  [23.99小时|59.99分钟|59秒]
 * @param {number} sec 多少秒之前
 * @returns string
 */
const secFormat = (sec) => {
  if (sec >= 3600) {
    return (sec / 3600).toFixed(2) + "小时";
  } else if (sec >= 60) {
    return (sec / 60).toFixed(2) + "分钟";
  } else {
    return sec + "秒";
  }
};

/**
 * 格式化字节大小
 * @param {number} byteLen 10240
 * @returns {string} 10M(byte)
 */
const TB = 1099511627776;
const GB = 1073741824;
const MB = 1048576;
const KB = 1024;
const byteFormat = (byteLen = 0) => {
  if (typeof byteLen == "number"){
    byteLen = 0
  }
  if (byteLen >= TB) {
    return (byteLen / TB).toFixed(2) + "T(Byte)";
  } else if (byteLen >= GB) {
    return (byteLen / GB).toFixed(2) + "G(Byte)";
  } else if (byteLen >= MB) {
    return (byteLen / MB).toFixed(2) + "M(Byte)";
  } else if (byteLen >= KB) {
    return (byteLen / KB).toFixed(2) + "K(Byte)";
  } else {
    return byteLen + "Byte";
  }
};

/**
 * 格式化字节传输单位
 * @param {number} bit 字节数
 * @returns string 1GBps
 */
const bpsFormat = (bit) => {
  if (bit > 1000000000) {
    return (bit / 1000000000).toFixed(2) + "G(Bps)";
  } else if (bit > 1000000) {
    return (bit / 1000000).toFixed(1) + "M(Bps)";
  } else if (bit > 1000) {
    return (bit / 1000).toFixed(1) + "K(BPS)";
  } else {
    return bit + "BPS";
  }
};

export {
    timeFormat,
    secFormat,
    byteFormat,
    bpsFormat
}