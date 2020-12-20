/**
 * @author admin
 */

import { commands } from './command.decorator';

interface VerbOptions {
  verb: string;
}

export function Verb(options?: VerbOptions): MethodDecorator {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>,
  ) => {
    // Update the command in the map to have this action
    // commands.set()
    console.log('Verb target', target);
    console.log('verb property key', propertyKey);
    console.log('verb descriptor', descriptor);
  };
}
