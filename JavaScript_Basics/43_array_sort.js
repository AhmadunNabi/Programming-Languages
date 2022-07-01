let grades = [100, 50, 64, 65, 70, 54, 96];

grades = grades.sort(descendingSort);
grades.forEach(print);

grades.sort(ascendingSort).forEach(print);

function descendingSort(x, y) {
    return y - x;
}

function ascendingSort(x, y) {
    return x - y;
}

function print(element) {
    console.log(element)
}


