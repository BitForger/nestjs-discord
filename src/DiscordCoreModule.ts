/**
 * @author admin
 */
import {
  DynamicModule,
  Global,
  Inject,
  MiddlewareConsumer,
  Module,
  NestModule,
  Provider,
} from '@nestjs/common';
import { Params } from './params';
import { PROVIDER_PARAMS_TOKEN } from './constants';
import { DiscordClient } from './discord-client';

@Global()
@Module({
  providers: [DiscordClient],
  exports: [DiscordClient],
})
export class DiscordCoreModule implements NestModule {
  static forRoot(params: Params): DynamicModule {
    const paramsProvider: Provider<Params> = {
      provide: PROVIDER_PARAMS_TOKEN,
      useValue: params,
    };

    return {
      module: DiscordCoreModule,
      providers: [paramsProvider],
      exports: [],
    };
  }

  constructor(@Inject(PROVIDER_PARAMS_TOKEN) private readonly params: Params) {}

  configure(consumer: MiddlewareConsumer): any {
    const { token } = this.params;
  }
}
