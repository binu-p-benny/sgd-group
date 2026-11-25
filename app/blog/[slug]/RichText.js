import Link from 'next/link';

/* Tiny inline formatter for blog copy. Supports exactly two patterns:
     **bold**            -> <strong>
     [label](href)       -> <Link> (internal "/…") or <a> (https:, tel:, mailto:)
   Anything else is rendered as plain text, so content can't inject markup. */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

const isInternal = (href) => href.startsWith('/') && !href.startsWith('//');
const isExternal = (href) => /^(https:|tel:|mailto:)/.test(href);

export function stripMarkup(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

export default function RichText({ text }) {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (isInternal(href)) return <Link key={i} href={href}>{label}</Link>;
      if (isExternal(href)) return <a key={i} href={href}>{label}</a>;
      return label;
    }

    return part;
  });
}
