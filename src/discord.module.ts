/**
 * @author admin
 */

import { DynamicModule, Module } from '@nestjs/common';
import { Params } from './params';
import { DiscordCoreModule } from './DiscordCoreModule';

@Module({})
export class DiscordModule {
  static forRoot(params: Params): DynamicModule {
    return {
      module: DiscordModule,
      imports: [DiscordCoreModule.forRoot(params)],
    };
  }
}
