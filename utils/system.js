/**
 * 模拟其他语言的 sleep 函数
 * @param {number} ms 毫秒
 * @returns {Promise<void>}
 *
 * @example
 *  await sleep(200)
 */
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};


export {
    sleep
}