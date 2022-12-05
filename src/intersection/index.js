function intersection(a, b) {
    const newMap = new Map();
    const newSet = new Set();

    for (const element of a) {
        newMap.set(element)
    }

    for (const element of b) {
        if (newMap.has(element) == true) {
            newSet.add(element)
        }
    }

    return [...newSet]
};

module.exports = intersection;
