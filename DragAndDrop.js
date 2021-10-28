import createTable from '../utils/tableCreator.js';
import swap from '../utils/swapTwoElements.js';

export default class DragAndDrop {
  constructor(n = 5, m = 5) {
    this.rows = n;
    this.cellsInRow = m;
    this.dragEl = null;
  }

  init() {
    const table = createTable(this.rows, this.cellsInRow);

    this.addListeners(table);

    document.body.append(table);
  }

  addListeners(el) {
    el.addEventListener('dragstart', this.handleStartDroping.bind(this), false);
    el.addEventListener('dragover', this.allowDrop.bind(this), false);
    el.addEventListener('drop', this.handleDrop.bind(this), false);
    el.addEventListener('dragenter', this.handleDragEnter.bind(this), false);
    el.addEventListener('dragleave', this.handleDragLeave.bind(this), false);
  }

  isDropPlace(e) {
    return e.target.draggable === true && this.dragEl;
  }

  handleStartDroping(e) {
    e.dataTransfer.setData('text/plain', null);
    this.dragEl = e.target;
  }

  handleDragEnter(e) {
    if (this.isDropPlace(e)) {
      e.target.style.opacity = 0.3;
    }
  }

  handleDragLeave(e) {
    if (this.isDropPlace(e)) {
      e.target.style.opacity = '';
    }
  }

  allowDrop(e) {
    if (this.isDropPlace(e)) {
      e.preventDefault();
    }
  }

  handleDrop(e) {
    e.preventDefault();

    if (this.isDropPlace(e)) {
      e.target.style.opacity = '';

      swap(e.target, this.dragEl);
      this.dragEl = null;
    }
  }
}
