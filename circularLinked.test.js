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
})