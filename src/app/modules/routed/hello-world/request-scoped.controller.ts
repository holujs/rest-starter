import { HTTP_BODY } from '@holu/body-parser';
import { ctx } from '@holu/core';
import { controller, route } from '@holu/rest';

import { SomeService } from './some.service.js';

@controller()
export class RequestScopedController {
  @route('GET', 'hello')
  tellHello(someService: SomeService) {
    return someService.getMsg();
  }

  @route('POST', 'body')
  postHello(@ctx(HTTP_BODY) body: any) {
    return body;
  }

  @route('GET', 'throw-error')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}
