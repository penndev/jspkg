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
const Second = 1;
const Minute = 60 * Second;
const Hour = 60 * Minute;
const Day = 24 * Hour;
const Week = 7 * Day;
const Month = 30 * Day;
const Year = 12 * Month;
const secFormat = (sec) => {
  if (sec >= Year) {
    return (sec / Year).toFixed(2) + "年";
  } else if (sec >= Month) {
    return (sec / Month).toFixed(2) + "月";
  // } else if (sec >= Week) {
  //   return (sec / Week).toFixed(2) + "周";
  } else if (sec >= Day) {
    return (sec / Day).toFixed(2) + "天";
  } else if (sec >= Hour) {
    return (sec / Hour).toFixed(2) + "时";
  } else if (sec >= Minute) {
    return (sec / Minute).toFixed(2) + "分";
  } else {
    return sec + "秒";
  }
};

/**
 * 格式化字节大小
 * @param {number} byteLen 10240
 * @returns {string} 10M(byte)
 */
const KB = 1024;
const MB = 1024 * KB;
const GB = 1024 * MB;
const TB = 1024 * GB;
const PB = 1024 * TB;
// const EB = 1024 * PB;
// const ZB = 1024 * EB;

const byteFormat = (byteLen = 0) => {
  if (typeof byteLen != "number") {
    byteLen = 0;
  }
  // if (byteLen >= ZB) {
  //   return (byteLen / ZB).toFixed(2) + "(ZByte)";
  // } else if (byteLen >= EB) {
  //   return (byteLen / EB).toFixed(2) + "(EByte)";
  // } else
  if (byteLen >= PB) {
    return (byteLen / PB).toFixed(2) + "(PByte)";
  } else if (byteLen >= TB) {
    return (byteLen / TB).toFixed(2) + "(TByte)";
  } else if (byteLen >= GB) {
    return (byteLen / GB).toFixed(2) + "(GByte)";
  } else if (byteLen >= MB) {
    return (byteLen / MB).toFixed(2) + "(MByte)";
  } else if (byteLen >= KB) {
    return (byteLen / KB).toFixed(2) + "(KByte)";
  } else {
    return byteLen + "(Byte)";
  }
};

/**
 * 格式化字节传输单位
 * @param {number} bit 字节数
 * @returns string 1GBps
 */
const bpsFormat = (bit) => {
  if (bit > 1000000000) {
    return (bit / 1000000000).toFixed(2) + "(GBps)";
  } else if (bit > 1000000) {
    return (bit / 1000000).toFixed(1) + "(MBps)";
  } else if (bit > 1000) {
    return (bit / 1000).toFixed(1) + "(KBPS)";
  } else {
    return bit + "(BPS)";
  }
};

export { timeFormat, secFormat, byteFormat, bpsFormat };
