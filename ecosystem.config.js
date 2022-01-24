/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2021-12-28 16:21:25
 * @LastEditTime: 2022-01-24 15:50:35
 * @LastEditors: zhoujie
 */
const commonOptions = {
  kill_timeout: 10000,
  script: './dist/main.js',
  wait_ready: true,
  watch: false,
  min_uptime: '60s',
  max_restarts: 15,
  ignore_watch: ['node_modules'],
  watch_options: {
    usePolling: true,
  },
  log_date_format: 'YYYY-MM-DD HH:mm:ss',
  out_file: 'logs/monitor.stdout.log',
  pid_file: 'pids/node-geo-api.pid',
  env_production: {
    NODE_ENV: 'prod',
  },
  env_development: {
    NODE_ENV: 'dev',
  },
  env_test: {
    NODE_ENV: 'test',
  },
};

module.exports = {
  apps: [
    {
      name: 'dev_service',
      ...commonOptions,
    },
    {
      name: 'prod_service',
      ...commonOptions,
      instances: 2,
      exec_mode: 'cluster_mode',
    },
  ],
};
