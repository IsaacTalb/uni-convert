import { marked } from 'marked';

export function markdownToHtml(md: string) {
    return marked.parse(md);
}


export function parseMarkdown(content: string) {
    // For the converter, we'll keep markdown as a plain string
    return content;
}

export function stringifyMarkdown(data: any) {
    // If input is string, return it
    if (typeof data === 'string') return data;
    // If input is object, try JSON -> markdown code block
    return '```json\n' + JSON.stringify(data, null, 2) + '\n```';
}