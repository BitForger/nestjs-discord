/**
 * @author admin
 */

import { Inject, Injectable, Logger } from '@nestjs/common';
import { Client } from 'discord.js';
import { PROVIDER_PARAMS_TOKEN } from './constants';
import { Params } from './params';
import { NestContainer } from '@nestjs/core';

@Injectable()
export class DiscordClient {
  private readonly _client: Client;

  constructor(
    @Inject(PROVIDER_PARAMS_TOKEN) private params: Params,
    private logger: Logger,
    private container: NestContainer,
  ) {
    this._client = new Client({
      intents: ['GUILDS'],
    });

    this._client.on('message', async (msg) => {
      const splitMessage = msg.content.split(' ');
      const command = splitMessage[0].startsWith(this.params.prefix)
        ? splitMessage.shift().substr(0, 1)
        : null;
      if (command) {
        // This message received is a command
      }
    });

    this._client.on('error', async (args) => {
      this.logger.error(args);
    });

    this._client.login(params.token);
  }

  get client(): Client {
    return this._client;
  }
}
