const areAnagrams = (str1, str2) => {
 if (str1.length !== str2.length) {
   return false;
 }


 const charCount = {};


 for (const char of str1) {
   charCount[char] = (charCount[char] || 0) + 1;
 }


 for (const char of str2) {
   if (!charCount[char]) {
     return false;
   }
   charCount[char]--;
 }


 return true;
}


const groupAnagrams = (inputArray) => {
 const grouped = [];


 for (let i = 0; i < inputArray.length; i++) {
   const word = inputArray[i];
   let isAnagramGrouped = false;


   for (let j = 0; j < grouped.length; j++) {
     if (areAnagrams(grouped[j][0], word)) {
       grouped[j].push(word);
       isAnagramGrouped = true;
       break;
     }
   }


   if (!isAnagramGrouped) {
     grouped.push([word]);
   }
 }


 return grouped;
}


const inputArray = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map', 'gas', 'sag'];
const groupedAnagrams = groupAnagrams(inputArray);
console.log(groupedAnagrams);