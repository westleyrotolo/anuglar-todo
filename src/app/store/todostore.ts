export class TodoItem {
    _text: String;
    public get text(): String {
      return this._text;
    }
    public set text(value: String) {
      this._text = value;
    }
    constructor(text: String) {
        this._text = text;
    }
}
export class TodoStore {
    items: TodoItem[];
  
    constructor() {
      this.items = [];
    }
  
    addItem(newItem: String) {
      this.items.push({
          text: newItem
      });
    }
    removeItem(item: TodoItem) {
      const index = this.items.indexOf(item);
      this.items.splice(index,1);
    }
  }
