import { createCipheriv, createDecipheriv, scrypt, createHash } from 'crypto';
import { promisify } from 'util';
import * as bcrypt from 'bcrypt';

export class CryptoUtil {
  static md5(text: string, salt?: string) {
    const md5 = createHash('md5');
    md5.update(text + salt);
    return md5.digest('hex');
  }
  static async hash(text: string, saltOrRounds = 10) {
    return await bcrypt.hash(text, saltOrRounds);
  }
  static async hashCompare(text, hash) {
    return await bcrypt.compare(text, hash);
  }
  static async genSalt(): Promise<string> {
    return await bcrypt.genSalt();
  }
  static async aes(text, iv, pwd) {
    const key = (await promisify(scrypt)(pwd, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);
    return Buffer.concat([cipher.update(text), cipher.final()]);
  }
  static async decryptedAes(text, iv, pwd) {
    const key = (await promisify(scrypt)(pwd, 'salt', 32)) as Buffer;
    const decipher = createDecipheriv('aes-256-ctr', key, iv);
    return Buffer.concat([decipher.update(text), decipher.final()]);
  }
  static base64(text: string): string {
    return Buffer.from(text).toString('base64');
  }
  static decryptBase64(text: string): string {
    return Buffer.from(text, 'base64').toString();
  }
}
