/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-01-24 10:06:26
 * @LastEditTime: 2022-01-24 14:38:39
 * @LastEditors: zhoujie
 */
module.exports = {
  description: '生成entity、service、controller',
  prompts: [
    {
      type: 'input',
      name: 'entityName',
      message: '输入文件前缀',
    },
  ],
  actions: (data) => {
    const { entityName: name } = data;
    const entityName = `{{properCase entityName}}`;
    const serviceName = `{{'${name}Service'}}`;
    const controllerName = `{{'${name}Controller'}}`;
    const repositoryName = `{{'${name}Repository'}}`;
    const moduleName = `{{'${name}Module'}}`;
    const actions = [
      {
        type: 'add',
        path: `src/entity/${entityName}.ts`,
        templateFile: './plop-templates/entity-template/entity.hbs',
        data: {
          entityName,
        },
      },
      {
        type: 'add',
        path: `src/service/${entityName}Service.ts`,
        templateFile: './plop-templates/service-template/service.hbs',
        data: {
          entityName,
          serviceName,
          repositoryName,
        },
      },
      {
        type: 'add',
        path: `src/controller/${entityName}Controller.ts`,
        templateFile: './plop-templates/controller-template/controller.hbs',
        data: {
          entityName,
          controllerName,
          serviceName,
        },
      },
      {
        type: 'add',
        path: `src/module/${entityName}Module.ts`,
        templateFile: './plop-templates/module-template/module.hbs',
        data: {
          moduleName,
          entityName,
          controllerName,
          serviceName,
        },
      },
    ];
    return actions;
  },
};
