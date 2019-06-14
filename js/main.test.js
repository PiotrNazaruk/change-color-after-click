const filterItems = (list, value) => (
    list.filter((el) => el === value)
);

describe("filterItems", () => {
    describe('when there is a match in an array', () => {
        it("should filter elements", () => {
            expect(filterItems( [1, 2, 3], 3)).toEqual([3])
        })
    })
    
    describe('when there are multiple entries that match', () => {
        it("should filter elements", () => {
            expect(filterItems( [1, 2, 2], 2)).toEqual([2])
        })
    })
})