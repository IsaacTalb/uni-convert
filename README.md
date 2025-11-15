# uni-convert

Universal file converter: JSON, YAML, TOML, CSV, ENV, Markdown, HTML.

## Features

- Convert between multiple file formats.
- Supports both CLI and API usage.
- Lightweight and easy to use.

## Install (local)

```bash
npm install uni-convert
```

## Usage

### CLI (npx)

```bash
npx uni-convert input.yaml output.json
npx uni-convert data.csv data.yaml --to yaml
npx uni-convert README.md README.html
```

### API

```javascript
import { convertFile, convertString } from 'uni-convert';

await convertFile('a.yaml', 'a.json');
const html = convertString('# Hi', 'md', 'html');
```

## Supported Formats

- Input: JSON, YAML, TOML, CSV, ENV, Markdown.
- Output: JSON, YAML, TOML, CSV, ENV, HTML.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.