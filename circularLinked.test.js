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
})











