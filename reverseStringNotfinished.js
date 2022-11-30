function testProp(str){

const num = 2;
const divideEqual = (str, num) => {
   const len = str.length / num;
   const creds = str.split("").reduce((acc, val) => {
      let { res, currInd } = acc;
      if(!res[currInd] || res[currInd].length < len){
         res[currInd] = (res[currInd] || "") + val;
      }else{
         res[++currInd] = val;
      };
      return { res, currInd };
   }, {
      res: [],
      currInd: 0
   });
   if(!str || str.length < 2 ||
    typeof str!== 'string') {
return 'Not valid';
}
let result = (divideEqual(str, num));
console.log(result);
}
}
testProp('tluciffiDsIsihTgnizamAoSsIsihT');
