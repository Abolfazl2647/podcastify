export default class Queue {
    queue: any = [];

    get length() {
        return this.queue.length;
    }

    empty() {
        this.queue = [];
    }

    enqueue(item: any) {
        this.queue.unshift(item);
    }

    dequeue() {
        return this.queue.pop();
    }

    show() {
        return this.queue;
    }

    peek() {
        return this.queue[this.queue.length - 1];
    }
}
