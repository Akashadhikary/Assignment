function minPlanesToReachEnd(fuelArray) {
    let n = fuelArray.length;
    if (n === 0 || fuelArray[0] === 0) return -1;

    let planesHired = 1;
    let maxReach = fuelArray[0];
    let steps = fuelArray[0];

    for (let i = 1; i < n; i++) {
        if (i === n - 1) return planesHired;

        maxReach = Math.max(maxReach, i + fuelArray[i]);
        steps--;

        if (steps === 0) {
            planesHired++;
            if (i >= maxReach) return -1;
            steps = maxReach - i;
        }
    }
    return -1;
}


console.log(minPlanesToReachEnd([2, 1, 2, 3, 1]));
console.log(minPlanesToReachEnd([1, 6, 3, 4, 5, 0, 0, 0, 6]));
