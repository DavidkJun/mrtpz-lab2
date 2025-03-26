class CircularArrayList {
    constructor() {
        this.items = [];
    }

    // 1. Визначення довжини списку
    length() {
        return this.items.length;
    }

    // 2. Додавання елементу в кінець
    append(element) {
        this.items.push(element);
    }

    // 3. Вставка елементу на позицію
    insert(element, index) {
        if (index < 0 || index > this.length()) {
            throw new Error("Invalid index");
        }
        this.items.splice(index, 0, element);
    }

    // 4. Видалення елементу з позиції
    delete(index) {
        if (index < 0 || index >= this.length()) {
            throw new Error("Invalid index");
        }
        return this.items.splice(index, 1)[0];
    }

    // 5. Видалення всіх входжень елементу
    deleteAll(element) {
        this.items = this.items.filter(item => item !== element);
    }

    // 6. Отримання елементу за індексом
    get(index) {
        if (index < 0 || index >= this.length()) {
            throw new Error("Invalid index");
        }
        return this.items[index];
    }

    // 7. Копіювання списку
    clone() {
        const newList = new CircularArrayList();
        newList.items = [...this.items];
        return newList;
    }

    // 8. Реверсування списку
    reverse() {
        this.items.reverse();
    }

    // 9. Пошук першого входження
    findFirst(element) {
        return this.items.indexOf(element);
    }

    // 10. Пошук останнього входження
    findLast(element) {
        return this.items.lastIndexOf(element);
    }

    // 11. Очищення списку
    clear() {
        this.items = [];
    }

    // 12. Розширення списку іншим списком
    extend(elements) {
        this.items.push(...elements.items);
    }

    // Додатковий метод для візуалізації
    print() {
        if (this.length() === 0) return 'Empty';
        return this.items.join(' -> ') + ' -> ' + this.items[0];
    }
}