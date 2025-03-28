const {List} = require("./circular-linked");

import {describe,it,expect,beforeEach} from "vitest";

describe('CircularLinkedList', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    describe('append', () => {
        it('should return list with one element A', () => {
            list.append('A')
            expect(list.length()).toBe(1)
            expect(list.get(0)).toBe('A')
        })
    })

    describe('length', () => {
        it('should return the length of a list', () => {
            list.append('A')
            list.append('B')
            list.append('C')
            expect(list.length()).toBe(3)
        })
    })
    describe('Insert', () => {
        it('should return the list with a new element inserted', () => {
            list.append('A')
            list.append('B')
            list.insert('C',1)
            expect(list.length()).toBe(3)
            expect(list.get(1)).toBe('C')
        });
    })
    describe('Insert', () => {
        it('should throw an Error because of wrong index', () => {
            expect(() => list.insert('K',-1)).toThrowError('Invalid index')
        })
    })
   describe('Delete', () => {
       it('should return deleted element', () => {
           list.append('A')
           list.append('B')
           list.append('C')
           const deletedEl = list.delete(1);

           expect(list.length()).toBe(2)
           expect(deletedEl).toBe('B')
       });
   })
   describe('Delete', () => {
       it('should throw an Error because of wrong index', () => {
           expect(() => list.delete(-1)).toThrowError('Invalid index')
           expect(() => list.delete(10)).toThrowError('Invalid index')
       })
   })
   describe('Delete All', () => {
       it('should return a list with all occurrences of certain elements deleted', () => {
           list.append('A')
           list.append('B')
           list.append('C')
           list.append('B')
           list.deleteAll('B')

           expect(list.length()).toBe(2)
           expect(list.get(0)).toBe('A')
           expect(list.get(1)).toBe('C')
       })
   })
   describe('Get', () => {
       it('should return the index of element we looking for', () => {
           list.append('A')
           list.append('B')

           expect(list.get(0)).toBe('A')
           expect(list.get(1)).toBe('B')
       });
   })
   describe('Get', () => {
       it('should throw an Error because of wrong index', () => {
           expect(() => list.get(-1)).toThrowError('Invalid index')
           expect(() => list.get(10)).toThrowError('Invalid index')
       })
   })
   describe('Clone', () => {
       it('should return the clone of the list', () => {
           list.append('A')
           list.append('C')
           list.append('D')
           let newList = list.clone()

           expect(newList.length()).toBe(3)
           expect(newList.get(0)).toBe('A')
           expect(newList.get(1)).toBe('C')
           expect(newList.get(2)).toBe('D')
       });
   })
   describe('Reverse', () => {
       it('should return the reversed list', () => {
           list.append('A')
           list.append('B')
           list.append('C')
           list.reverse()

           expect(list.length()).toBe(3)
           expect(list.get(0)).toBe('C')
           expect(list.get(1)).toBe('B')
           expect(list.get(2)).toBe('A')
       });
   })
   describe('Find First', () => {
       it('should return the first occurrence of element we looking for', () => {
           list.append('B')
           list.append('C')
           list.append('A')
           list.append('B')
           list.append('J')
           list.append('A')

           expect(list.findFirst('A')).toBe(2)
           expect(list.findFirst('B')).toBe(0)
           expect(list.findFirst('UJd')).toBe(-1)
       });
   })
   describe('Find last', () => {
       it('should return the last occurrence of element we looking for', () => {
           list.append('B')
           list.append('C')
           list.append('A')
           list.append('B')
           list.append('J')
           list.append('A')

           expect(list.findLast('A')).toBe(5)
           expect(list.findLast('B')).toBe(3)
           expect(list.findLast('UJd')).toBe(-1)
       });
   })
   describe('Clear', () => {
       it('should return cleared list', () => {
           list.append('A')
           list.append('B')
           list.append('C')
           list.clear()

           expect(list.length()).toBe(0)
       });
   })
   describe('Extend', () => {
       it('should return list extend with new elements', () => {
           list.append('A')
           list.append('B')
           list.append('C')

           let otherList= new List()
           otherList.append('D')
           otherList.append('E')

           list.extend(otherList)

           expect(list.length()).toBe(5)
           expect(list.get(3)).toBe('D')
           expect(list.get(4)).toBe('E')
       });
   })
})











