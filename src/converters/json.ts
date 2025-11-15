export function parseJson(content: string) {
    return JSON.parse(content);
}


export function stringifyJson(data: any) {
    return JSON.stringify(data, null, 2);
}