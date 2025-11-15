import { parse as csvParse } from 'csv-parse/sync';
import { stringify as csvStringify } from 'csv-stringify/sync';


export function parseCsv(content: string) {
    // Returns array of objects when header present, otherwise array of arrays
    const records = csvParse(content, { columns: true, skip_empty_lines: true });
    return records;
}


export function stringifyCsv(data: any) {
    // Accept array of objects or array of arrays
    if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object' && !Array.isArray(data[0])) {
    return csvStringify(data, { header: true });
    }
    return csvStringify(data);
}