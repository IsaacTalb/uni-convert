import * as json from './converters/json';
import * as yaml from './converters/yaml';
import * as toml from './converters/toml';
import * as csv from './converters/csv';
import * as env from './converters/env';
import * as markdown from './converters/markdown';
import * as html from './converters/html';
import { Format } from './detect';

export function serializeTo(data: any, format: Format) {
    switch (format) {
        case 'json': return json.stringifyJson(data);
        case 'yaml': return yaml.stringifyYaml(data);
        case 'toml': return toml.stringifyToml(data);
        case 'csv': return csv.stringifyCsv(data);
        case 'env': return env.stringifyEnv(data);
        case 'md': return markdown.stringifyMarkdown(data);
        case 'html': return html.stringifyHtml(data);
    }
}