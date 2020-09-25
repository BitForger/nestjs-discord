/**
 * @author admin
 */

import { Inject, Injectable, Logger } from '@nestjs/common';
import { Client } from 'discord.js';
import { PROVIDER_PARAMS_TOKEN } from './constants';
import { Params } from './params';

@Injectable()
export class DiscordClient {
  private _client: Client;

  constructor(
    @Inject(PROVIDER_PARAMS_TOKEN) private params: Params,
    private logger: Logger,
  ) {
    this._client = new Client();

    this._client.on('message', async (msg) => {});

    this._client.on('error', async (args) => {
      this.logger.error(args);
    });

    this._client.login(params.token);
  }

  get client() {
    return this._client;
  }
}
