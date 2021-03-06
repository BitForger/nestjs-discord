/**
 * @author admin
 */
import {
  DynamicModule,
  Global,
  Inject,
  Module,
  NestModule,
  Provider,
} from '@nestjs/common';
import { Params } from './params';
import { PROVIDER_PARAMS_TOKEN } from './constants';
import { DiscordClient } from './discord.client';
import { NestContainer } from '@nestjs/core';

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
      providers: [paramsProvider, DiscordClient],
      exports: [DiscordClient],
    };
  }

  constructor(
    @Inject(PROVIDER_PARAMS_TOKEN) private readonly params: Params,
    private container: NestContainer,
  ) {
    const modules = this.container.getModules();
    // iterate over modules to get providers that are commands
  }

  configure(): any {}

  private asyncCreateProviders() {}
}
