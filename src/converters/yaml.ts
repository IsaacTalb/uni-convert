import YAML from 'js-yaml';

export function parseYaml(content: string) {
    return YAML.load(content);
}


export function stringifyYaml(data: any) {
    return YAML.dump(data, { noRefs: true });
}