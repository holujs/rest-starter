import { LoggerConfig, ProviderBuilder } from '@holu/core';
import { restRootModule } from '@holu/rest';
import { BodyParserConfig, BodyParserModule } from '@holu/body-parser';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module.js';

@restRootModule({
  appends: [HelloWorldModule],
  imports: [BodyParserModule],
  exports: [BodyParserModule],
  providersPerApp: new ProviderBuilder()
    .useValue(LoggerConfig, { level: 'info' })
    .useValue<BodyParserConfig>(BodyParserConfig, {
      jsonOptions: { limit: '100kb' },
      urlencodedOptions: { extended: true },
    }),
})
export class AppModule {}
