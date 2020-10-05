export class DiscordCommand {
}

const decoratedCommands = new Map<string, DiscordCommand>();

export function Command(): ClassDecorator {
    return target => {
        decoratedCommands.set(target.name, target);
        Reflect.defineProperty(target, 'handler', {});
    }
}