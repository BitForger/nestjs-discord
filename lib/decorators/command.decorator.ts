/**
 * @author admin
 */
import { COMMAND_TOKEN } from '../constants';

export interface CommandOptions {
  command: string;
}

export function Command(options: CommandOptions): ClassDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (constructor: Function) => {
    Reflect.defineMetadata(
      COMMAND_TOKEN + constructor.name,
      options.command,
      constructor,
    );
    console.log(constructor.prototype);
  };
}
