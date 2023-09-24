class Stack<T> {
  private items: T[];

  constructor(private capcity: number = Infinity) {
    this.items = new Array();
  }

  /**
   * Adds an element to top of the stack
   * @param element element of type T to be added to stack
   */
  push(element: T) {
    if (this.items.length === this.capcity) throw Error("Stack overflow");
    this.items.push(element);
  }

  /**
   * Removes an element from top of the stack
   * @returns Removes the top element and returns it
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Returns top element of the stack without removing it
   * @returns Returns the top element
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * the current length of the stack
   * @returns the current length of the stack
   */
  size(): number {
    return this.items.length;
  }

  /**
   * checks whether the stack is empty
   * @returns `true` if the stack is empty
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Checks whether the stack is full
   * @returns `true` of it is full
   */
  isFull(): boolean {
    return this.items.length === this.capcity;
  }

  print() {
    this.items.map((i) => console.log(i));
  }
}

const s = new Stack<number>(2);
console.log(s.isEmpty());
s.push(5);
s.push(6);
console.log(s.pop());
s.print();
