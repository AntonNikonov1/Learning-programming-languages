const sum = (a, b) => a + b

const nativeNull = () => null

describe('Test sum functiom', () => {
    test('should return corectly value', () => {
        // expect Ожидание
        expect(sum(1, 3)).toBeGreaterThan(3) // результат функции больше 3
        expect(sum(1, 3)).toBeGreaterThanOrEqual(4) // результат функции больше или равный 4
        expect(sum(1, 3)).toBeLessThan(5) // Результат функции меньше 5
        expect(sum(1, 3)).toBeLessThanOrEqual(4) // Результат функции меньше или равный 4 5
    })

    test('should 2 float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe('Native null fanction', () => {
    test('Should return false value', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).toBeDefind()
        expect(nativeNull()).not.toBeTrulthy()
        expect(nativeNull()).not.toBeUndefind()
    })
})