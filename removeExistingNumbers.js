function distinctArray(input) {
    const arry = input;
    const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) === index)
    const duplicateElements = toFindDuplicates(arry);
    const results = duplicateElements.toString().replaceAll(",", " ");
    console.log(results);
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
