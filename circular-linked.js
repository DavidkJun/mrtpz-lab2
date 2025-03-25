class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 1. Визначення довжини списку
    length() {
        return this.size;
    }

    // 2. Додавання елементу в кінець
    append(element) {
        const newNode = new Node(element);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    // 3. Вставка елементу на позицію
    insert(element, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Invalid index");
        }

        const newNode = new Node(element);

        if (index === 0) {
            if (!this.head) {
                this.head = newNode;
                newNode.next = this.head;
            } else {
                newNode.next = this.head;
                let last = this.head;
                while (last.next !== this.head) {
                    last = last.next;
                }
                last.next = newNode;
                this.head = newNode;
            }
        } else {
            let current = this.head;
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = newNode;
            newNode.next = current;
        }
        this.size++;
    }

    // 4. Видалення елементу з позиції
    delete(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }

        let deletedNode;

        if (index === 0) {
            deletedNode = this.head;
            if (this.size === 1) {
                this.head = null;
            } else {
                let last = this.head;
                while (last.next !== this.head) {
                    last = last.next;
                }
                last.next = this.head.next;
                this.head = this.head.next;
            }
        } else {
            let current = this.head;
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            deletedNode = current;
        }
        this.size--;
        return deletedNode.data;
    }

    // 5. Видалення всіх входжень елементу
    deleteAll(element) {
        if (!this.head) return;

        let current = this.head;
        let prev = null;
        let count = 0;

        // Знаходимо останній вузол
        let lastNode = this.head;
        while (lastNode.next !== this.head) {
            lastNode = lastNode.next;
        }
        prev = lastNode;

        do {
            if (current.data === element) {
                if (current === this.head) {
                    this.head = this.head.next;
                    lastNode.next = this.head;
                    if (this.size === 1) {
                        this.head = null;
                    }
                }
                prev.next = current.next;
                this.size--;
            } else {
                prev = current;
            }
            current = current.next;
        } while (current !== this.head);

        if (this.size === 0) this.head = null;
    }

    // 6. Отримання елементу за індексом
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    // 7. Копіювання списку
    clone() {
        const newList = new CircularLinkedList();
        if (!this.head) return newList;

        let current = this.head;
        do {
            newList.append(current.data);
            current = current.next;
        } while (current !== this.head);

        return newList;
    }

    // 8. Реверсування списку
    reverse() {
        if (!this.head || this.size === 1) return;

        let lastNode = this.head;
        while (lastNode.next !== this.head) {
            lastNode = lastNode.next;
        }
        lastNode.next = null;

        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = this.head;
    }

    // 9. Пошук першого входження
    findFirst(element) {
        if (!this.head) return -1;

        let index = 0;
        let current = this.head;
        do {
            if (current.data === element) return index;
            current = current.next;
            index++;
        } while (current !== this.head);

        return -1;
    }

    // 10. Пошук останнього входження
    findLast(element) {
        if (!this.head) return -1;

        let lastIndex = -1;
        let index = 0;
        let current = this.head;
        do {
            if (current.data === element) lastIndex = index;
            current = current.next;
            index++;
        } while (current !== this.head);

        return lastIndex;
    }

    // 11. Очищення списку
    clear() {
        this.head = null;
        this.size = 0;
    }

    // 12. Розширення списку іншим списком
    extend(elements) {
        let current = elements.head;
        if (!current) return;

        do {
            this.append(current.data);
            current = current.next;
        } while (current !== elements.head);
    }
}
