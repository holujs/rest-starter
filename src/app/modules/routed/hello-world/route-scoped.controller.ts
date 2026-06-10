import { controller, RequestContext, route } from '@ditsmod/rest';
import { SomeService } from './some.service.js';

@controller({ scope: 'route' })
export class RouteScopedController {
  constructor(private someService: SomeService) {}

  @route('GET', 'hello2')
  tellHello() {
    return this.someService.getMsg();
  }

  @route('POST', 'body2')
  postHello(ctx: RequestContext) {
    return ctx.body;
  }

  @route('GET', 'throw-error2')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}
