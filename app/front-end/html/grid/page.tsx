import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './grid.module.css';

export default function ColumnGridTemplate() {
  return (<div id="column-grid">
    <h2>Column Grid</h2>
    <p>Column grid is a standard design pattern to design websites.</p>
    <p>It divides a page into vertical columns, providing a structured framework for organizing and aligning content.</p>
    <p>Column grids ensure consistency, improve readability.</p>
    <SyntaxHighlighter language='React' style={atomDark}>{`<div className="column-grid">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="column-item">
          Column {index + 1}
        </div>
      ))}
    </div>`}</SyntaxHighlighter>
    <SyntaxHighlighter language='css' style={atomDark}>{`.column-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      padding: 1rem;
    }

    .column-item {
      background-color: #f3f4f6;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 640px) {
      .column-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 768px) {
      .column-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .column-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media (min-width: 1280px) {
      .column-grid {
        grid-template-columns: repeat(5, 1fr);
      }
    }`}</SyntaxHighlighter>
    <p>Renders as:</p>
    <div className={styles.columnGrid}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className={styles.columnItem}>
          Item {index + 1}
        </div>
      ))}
    </div>
    <p>Try resizing the window to see how the grid realigns.</p>
  </div>
  );
};
