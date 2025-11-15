import fs from 'fs/promises';
import path from 'path';
import { detectFormatFromFilename, Format } from './detect';
import { parseContent, parseFile } from './parser';
import { serializeTo } from './serializer';

export async function convertFile(inputPath: string, outputPath?: string, from?: Format, to?: Format) {
    const inferredFrom = from || detectFormatFromFilename(inputPath) || 'json';
    const inferredTo = to || (outputPath ? (detectFormatFromFilename(outputPath) as Format) : 'json');
    const data = await parseFile(inputPath, inferredFrom as Format);
    const out = serializeTo(data, inferredTo as Format);
    if (outputPath) {
        await fs.writeFile(outputPath, out, 'utf-8');
        return outputPath;
    }
    return out;
    }

export function convertString(content: string, from: Format, to: Format) {
    const data = parseContent(content, from);
    return serializeTo(data, to);
}

export * from './detect';