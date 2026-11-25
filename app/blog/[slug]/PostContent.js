import RichText from './RichText';
import styles from './post.module.css';

/* Renders a post's `content` array. A plain string is a paragraph (the original
   format, so existing posts keep working); richer posts use block objects:

     { type: 'h2', text }
     { type: 'p', text }
     { type: 'callout', text }
     { type: 'ul' | 'ol', items: [text, …] }
     { type: 'table', head: [text, …], rows: [[text, …], …] }

   Every `text` accepts **bold** and [label](/link) — see RichText.js. */

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function Block({ block }) {
  if (typeof block === 'string') {
    return <p><RichText text={block} /></p>;
  }

  switch (block.type) {
    case 'h2':
      return <h2 id={slugify(block.text)}>{block.text}</h2>;

    case 'p':
      return <p><RichText text={block.text} /></p>;

    case 'callout':
      return (
        <div className={styles.callout}>
          <p><RichText text={block.text} /></p>
        </div>
      );

    case 'ul':
    case 'ol': {
      const List = block.type;
      return (
        <List>
          {block.items.map((item, i) => (
            <li key={i}><RichText text={item} /></li>
          ))}
        </List>
      );
    }

    case 'table':
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i} scope="col"><RichText text={cell} /></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    c === 0
                      ? <th key={c} scope="row"><RichText text={cell} /></th>
                      : <td key={c}><RichText text={cell} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export default function PostContent({ blocks }) {
  return blocks.map((block, i) => <Block key={i} block={block} />);
}
