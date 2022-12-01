function sortTwoArrays(input){
    
    input.sort((a,b)=> a.length - b.length || a.localeCompare(b));
    console.log(input.join('\n'));
}
sortTwoArrays(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
