import TurndownService from "turndown";

const turndown = new TurndownService();

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function parseHtml(html: string): string {
  return turndown.turndown(html);
}

export function stringifyHtml(md: string): string {
  const escaped = escapeHtml(md);
  return `<pre>${escaped}</pre>`;
}
