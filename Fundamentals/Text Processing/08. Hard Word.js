function solve(arr) {
    let first = arr[0];
    let second = arr[1]
    let count = 0;

   for (let char of first) {
       if (char === "_") {
           count ++;
       } else if (char !== "_" && count > 0) {
           for (let word of second) {
               if (word.length === count) {
                   let toReplace = "_".repeat(count);
                   first = first.replace(toReplace, word)
                   count = 0;
               }
           }
       }
   }

   console.log(first);
}

solve(
    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]

)