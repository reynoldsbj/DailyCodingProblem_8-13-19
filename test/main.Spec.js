describe('SolveProblem([3, 4, -1, 1])', function() {
    it('should return 2', function() {
        expect(SolveProblem([3, 4, -1, 1])).toBe(2);
    });
});

describe('SolveProblem([1, 2, 0])', function() {
    it('should return 3', function() {
        expect(SolveProblem([1, 2, 0])).toBe(3);
    });
});

describe('SolveProblem([1, 1, 1])', function() {
    it('should return 3', function() {
        expect(SolveProblem([1, 1, 1])).toBe(2);
    });
});

describe('SolveProblem([1, 3, 2])', function() {
    it('should return 3', function() {
        expect(SolveProblem([1, 3, 2])).toBe(4);
    });
});
