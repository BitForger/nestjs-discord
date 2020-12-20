/**
 * @author admin
 */

export interface CommandOptions {
  command: string;
}

export const commands = new Map<
  string,
  Array<{ command: string; handler: Function }>
>();

export function Command(options: CommandOptions): ClassDecorator {
  return (constructor: Function) => {
    constructor.prototype.commandName = options.command;
    commands.set(options.command, []);
    console.log(constructor.prototype);
  };
}
