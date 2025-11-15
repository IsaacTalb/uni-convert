// Very small env parser/stringifier


export function parseEnv(content: string) {
    const obj: Record<string, string> = {};
    const lines = content.split(/\r?\n/);
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const idx = trimmed.indexOf('=');
        if (idx === -1) continue;
        const key = trimmed.slice(0, idx).trim();
        let val = trimmed.slice(idx + 1).trim();
        // remove surrounding quotes
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
        }
        obj[key] = val;
    }
    return obj;
}


export function stringifyEnv(data: any) {
    if (typeof data !== 'object' || data === null) throw new Error('ENV output expects an object');
    return Object.entries(data)
        .map(([k, v]) => `${k}=${String(v)}`)
        .join('\n');
}