import fs from 'fs/promises';
import * as json from './converters/json';
import * as yaml from './converters/yaml';
import * as toml from './converters/toml';
import * as csv from './converters/csv';
import * as env from './converters/env';
import * as markdown from './converters/markdown';
import * as html from './converters/html';
import { Format } from './detect';

export async function parseFile(filePath: string, format?: Format) {
    const content = await fs.readFile(filePath, 'utf-8');
    return parseContent(content, format);
}

export function parseContent(content: string, format?: Format) {
    switch (format) {
        case 'json': return json.parseJson(content);
        case 'yaml': return yaml.parseYaml(content);
        case 'toml': return toml.parseToml(content);
        case 'csv': return csv.parseCsv(content);
        case 'env': return env.parseEnv(content);
        case 'md': return markdown.parseMarkdown(content);
        case 'html': return html.parseHtml(content);
        default:
            // try best-effort parsing
            try { return JSON.parse(content); } catch (e) {}
            try { return yaml.parseYaml(content); } catch (e) {}
            try { return toml.parseToml(content); } catch (e) {}
            // fallback to plain string
            return content;
    }
}