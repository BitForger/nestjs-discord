/**
 * @author admin
 */
import { VERB_TOKEN } from '../constants';

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
    Reflect.defineMetadata(
      VERB_TOKEN + propertyKey.toString(),
      options.verb,
      descriptor.value,
    );
    console.log('Verb target', target);
    console.log('verb property key', propertyKey);
    console.log('verb descriptor', descriptor);
    console.log('options', options);
  };
}
