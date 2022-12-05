/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    const numbers = new Map();
    const solution = new Map();

    for (const element of A) {
        numbers.set(element);

        for (const element of A) {
            let diff = N - element;

            if (diff != element) {
                if (numbers.has(diff) == true) {
                    if (element < diff) {
                        solution.set(element, diff);
                    } else {
                        solution.set(diff, element);
                    };
                };
            };
        };
    };
    return [...solution]
};

module.exports = sumPairs;
