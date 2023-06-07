

// 活动加密
import myCrypto from 'crypto';

import config from '@src/config/key';

const algorithm = 'aes-256-cbc';
const keyStr = config.key;
const ivByte = Buffer.from(keyStr.substr(0, 16));

function encrypt(text: string) {
  const cipher = myCrypto.createCipheriv(algorithm, Buffer.from(keyStr), ivByte);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
}

function decrypt(text: string) {
  const encryptedData = text;
  const encryptedText = Buffer.from(encryptedData, 'hex');
  const decipher = myCrypto.createDecipheriv(algorithm, Buffer.from(keyStr), ivByte);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export default {
  encode(text: string): string {
    return encrypt(text);
  },

  decode(text: string): string {
    return decrypt(text);
  },
};
