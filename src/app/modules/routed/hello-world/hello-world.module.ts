import { restModule } from '@ditsmod/rest';

import { RequestScopedController } from './request-scoped.controller.js';
import { RouteScopedController } from './route-scoped.controller.js';
import { SomeService } from './some.service.js';

@restModule({
  controllers: [RequestScopedController, RouteScopedController],
  providersPerMod: [SomeService], // For route-scoped controller
  providersPerReq: [SomeService], // For request-scoped controller
})
export class HelloWorldModule {}
