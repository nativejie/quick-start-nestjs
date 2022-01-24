/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-01-24 10:06:26
 * @LastEditTime: 2022-01-24 10:31:52
 * @LastEditors: zhoujie
 */
module.exports = {
  description: 'generate entity class',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'entity name please',
    },
  ],
  actions: (data) => {
    const name = '{{properCase name}}';
    const actions = [
      {
        type: 'add',
        path: `src/entity/${name}.ts`,
        templateFile: './plop-templates/entity-template/entity.hbs',
        data: {
          name,
        },
      },
    ];
    return actions;
  },
};
