function getArray() {
    let input = document.getElementById("arrayInput").value;
    return input.split(",").map(Number);
}

function findMax() {
    let arr = getArray();
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    show("Max value: " + max);
}

function findMin() {
    let arr = getArray();
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    show("Min value: " + min);
}

function findSum() {
    let arr = getArray();
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    show("Sum: " + sum);
}

function reverseArray() {
    let arr = getArray();
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    show("Reversed Array: " + arr.join(", "));
}

function show(msg) {
    document.getElementById("result").innerText = msg;
}
