import { injectable } from '@holu/core';

@injectable()
export class SomeService {
  getMsg() {
    return 'Hello World!';
  }
}
