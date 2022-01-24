/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-01-24 10:06:26
 * @LastEditTime: 2022-01-24 14:39:02
 * @LastEditors: zhoujie
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prompt = require('./plop-templates/prompt');
module.exports = function (plop) {
  plop.setGenerator('noraml generator', prompt);
};
