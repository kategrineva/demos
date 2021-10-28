import create from './createElement.js';

export default function createTable(n, m) {
  const table = create('table');

  for (let i = 0; i < n; i += 1) {
    const row = create('tr');

    for (let j = 0; j < m; j += 1) {
      const cell = create('td', '', `${i}:${j}`, '', ['draggable', 'true']);

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  return table;
}
