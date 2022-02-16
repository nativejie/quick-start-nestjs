/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-02-16 14:29:04
 * @LastEditTime: 2022-02-16 14:33:27
 * @LastEditors: zhoujie
 */

import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from 'src/constans';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
