import path from 'path';

export type Format = 'json' | 'yaml' | 'toml' | 'csv' | 'env' | 'md' | 'html';

export function detectFormatFromFilename(filename: string): Format | null {
    const ext = path.extname(filename).toLowerCase();
    switch (ext) {
        case '.json': return 'json';
        case '.yml':
        case '.yaml': return 'yaml';
        case '.toml': return 'toml';
        case '.csv': return 'csv';
        case '.env': return 'env';
        case '.md':
        case '.markdown': return 'md';
        case '.html':
        case '.htm': return 'html';
        default: return null;
    }
}