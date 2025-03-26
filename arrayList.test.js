import { describe, it, expect, beforeEach } from 'vitest';
import { CircularArrayList } from './arrayList';

describe('CircularArrayList', () => {
    let list;

    beforeEach(() => {
        list = new CircularArrayList();
    });

    describe('length()', () => {
        it('should return 0 for empty list', () => {
            expect(list.length()).toBe(0);
        });

        it('should return correct length after adding elements', () => {
            list.append('A');
            list.append('B');
            expect(list.length()).toBe(2);
        });
    });

    describe('append()', () => {
        it('should add element to empty list', () => {
            list.append('A');
            expect(list.length()).toBe(1);
            expect(list.get(0)).toBe('A');
        });

        it('should add element to non-empty list', () => {
            list.append('A');
            list.append('B');
            expect(list.length()).toBe(2);
            expect(list.get(1)).toBe('B');
        });
    });

    describe('insert()', () => {
        it('should insert element at the beginning', () => {
            list.insert('A', 0);
            expect(list.get(0)).toBe('A');
        });

        it('should insert element in the middle', () => {
            list.append('A');
            list.append('C');
            list.insert('B', 1);
            expect(list.get(1)).toBe('B');
        });

        it('should throw error for invalid index', () => {
            expect(() => list.insert('A', -1)).toThrow('Invalid index');
            expect(() => list.insert('A', 1)).toThrow('Invalid index');
        });
    });

    describe('delete()', () => {
        beforeEach(() => {
            list.append('A');
            list.append('B');
            list.append('C');
        });

        it('should remove element from beginning', () => {
            const deleted = list.delete(0);
            expect(deleted).toBe('A');
            expect(list.length()).toBe(2);
        });

        it('should remove element from middle', () => {
            const deleted = list.delete(1);
            expect(deleted).toBe('B');
            expect(list.length()).toBe(2);
        });

        it('should throw error for invalid index', () => {
            expect(() => list.delete(-1)).toThrow('Invalid index');
            expect(() => list.delete(3)).toThrow('Invalid index');
        });
    });

    describe('deleteAll()', () => {
        beforeEach(() => {
            list.append('A');
            list.append('B');
            list.append('A');
            list.append('C');
        });

        it('should remove all occurrences of element', () => {
            list.deleteAll('A');
            expect(list.length()).toBe(2);
            expect(list.findFirst('A')).toBe(-1);
        });

        it('should not modify list if element not found', () => {
            list.deleteAll('X');
            expect(list.length()).toBe(4);
        });
    });

    describe('get()', () => {
        beforeEach(() => {
            list.append('A');
            list.append('B');
        });

        it('should return element at index', () => {
            expect(list.get(0)).toBe('A');
            expect(list.get(1)).toBe('B');
        });

        it('should throw error for invalid index', () => {
            expect(() => list.get(-1)).toThrow('Invalid index');
            expect(() => list.get(2)).toThrow('Invalid index');
        });
    });

    describe('clone()', () => {
        it('should create deep copy of list', () => {
            list.append('A');
            list.append('B');
            const copy = list.clone();

            expect(copy.length()).toBe(2);
            expect(copy.get(0)).toBe('A');
            expect(copy.get(1)).toBe('B');

            // Verify it's a deep copy
            copy.append('C');
            expect(list.length()).toBe(2);
        });
    });

    describe('reverse()', () => {
        it('should reverse the list', () => {
            list.append('A');
            list.append('B');
            list.append('C');
            list.reverse();

            expect(list.get(0)).toBe('C');
            expect(list.get(1)).toBe('B');
            expect(list.get(2)).toBe('A');
        });

        it('should not modify empty list', () => {
            list.reverse();
            expect(list.length()).toBe(0);
        });
    });

    describe('findFirst()', () => {
        beforeEach(() => {
            list.append('A');
            list.append('B');
            list.append('A');
        });

        it('should find first occurrence of element', () => {
            expect(list.findFirst('A')).toBe(0);
            expect(list.findFirst('B')).toBe(1);
        });

        it('should return -1 if element not found', () => {
            expect(list.findFirst('X')).toBe(-1);
        });
    });

    describe('findLast()', () => {
        beforeEach(() => {
            list.append('A');
            list.append('B');
            list.append('A');
        });

        it('should find last occurrence of element', () => {
            expect(list.findLast('A')).toBe(2);
            expect(list.findLast('B')).toBe(1);
        });

        it('should return -1 if element not found', () => {
            expect(list.findLast('X')).toBe(-1);
        });
    });

    describe('clear()', () => {
        it('should empty the list', () => {
            list.append('A');
            list.append('B');
            list.clear();

            expect(list.length()).toBe(0);
            expect(() => list.get(0)).toThrow('Invalid index');
        });
    });

    describe('extend()', () => {
        it('should extend list with another list', () => {
            const otherList = new CircularArrayList();
            otherList.append('X');
            otherList.append('Y');

            list.append('A');
            list.extend(otherList);

            expect(list.length()).toBe(3);
            expect(list.get(1)).toBe('X');
            expect(list.get(2)).toBe('Y1');
        });

        it('should not modify list when extending with empty list', () => {
            list.append('A');
            const emptyList = new CircularArrayList();
            list.extend(emptyList);

            expect(list.length()).toBe(1);
        });
    });

    describe('print()', () => {
        it('should format list correctly', () => {
            list.append('A');
            list.append('B');
            expect(list.print()).toBe('A -> B -> A');
        });

        it('should return "Empty" for empty list', () => {
            expect(list.print()).toBe('Empty');
        });
    });
});