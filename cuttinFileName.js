function extractFile(string) {
    const getString = string.split('\\') // cutting the string
    const extention = getString.pop(); // getting the last from it
    const result = extention.split('.'); // separate the file name and extention
    let fileName = result.shift();  // getting the first element of array
    let extentionName = result.pop(); // getting last element of array
    console.log(`File name: ${fileName}`); 
    console.log(`File extension: ${extentionName}`);
    //printing
};
extractFile('C:\\Internal\\training-internal\\Template.pptx');
