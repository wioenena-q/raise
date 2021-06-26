/**
 *
 * Creates a list of numbers between specified ranges.
 * @param {number} [min=0]
 * @param {number} [max=10]
 * @returns {number[]}
*/
export function range(min: number = 0, max: number = 10): number[] {
    const result: number[] = new Array(0);

    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result;
}