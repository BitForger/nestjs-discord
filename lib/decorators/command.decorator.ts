/**
 * @author admin
 */

export interface CommandOptions {
  command: string;
}

export function Command(options: CommandOptions): ClassDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (constructor: Function) => {
    Reflect.defineMetadata('COMMAND', options.command, constructor)
    console.log(constructor.prototype);
  };
}
