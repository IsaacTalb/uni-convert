import TOML from '@iarna/toml';

export function parseToml(content: string) {
    return TOML.parse(content);
}

export function stringifyToml(data: any) {
    return TOML.stringify(data);
}