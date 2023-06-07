

import { getLogger } from 'log4js';

class Logger {
  public logger;
  constructor() {
    this.logger = getLogger();
  }
  info = (message: string) => {
    this.logger.info(message);
  };
  debug = (message: string) => {
    this.logger.debug(message);
  };
  warn = (message: string) => {
    this.logger.warn(message);
  };
  error = (message: string) => {
    this.logger.error(message);
  };
}
export default new Logger();
