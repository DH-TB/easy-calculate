function calculate_median(arr) {
    var evenNumber = buildEventNumber(arr);
    var median = buildMedian(evenNumber);

    return median;
}

function buildEventNumber(arr) {
    var evenNumber = [];

    for (var i = 1; i < arr.length; i = i + 2) {
        evenNumber.push(arr[i]);
    }

    return evenNumber;
}

function buildMedian(evenNumber) {
    var median = 0;

    var halfLength = parseInt(evenNumber.length / 2);
    if (evenNumber.length % 2 === 0) {
        median = parseInt(((evenNumber[halfLength]) + (evenNumber[halfLength - 1])) / 2);
    }
    else {
        median = evenNumber[halfLength];
    }

    return median;
}

module.exports = calculate_median;
