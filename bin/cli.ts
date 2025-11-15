#!/usr/bin/env node

import { argv } from 'process';
import { convertFile } from '../src/index';
import path from 'path';

async function main() {
    const args = argv.slice(2);
    if (args.length < 1) {
        console.log('Usage: uni-convert <input> [output] [--from fmt] [--to fmt]');
        process.exit(1);
    }

    const input = args[0];
    let output: string | undefined;
    let from: string | undefined;
    let to: string | undefined;

    for (let i = 1; i < args.length; i++) {
        const a = args[i];
        if (a === '--from' || a === '-f') {
            from = args[++i];
        } else if (a === '--to' || a === '-t') {
            to = args[++i];
        } else if (!output) {
            output = a;
        }
    }

    try {
        const res = await convertFile(input, output, from as any, to as any);
        console.log('Converted:', res ?? '---');
    } catch (err: any) {
        console.error('Error converting:', err.message || err);
        process.exit(2);
    }
}

main();