// const name = "Raj"
// const repoCount = 50

// console.log(name  + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Rajdeep-dey')

// console.log(gameName[2]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("e"));
// console.log(gameName.lastIndexOf('e')); // counts from last



// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherstring = gameName.slice(-4)
// console.log(anotherstring);
// didn't understand slice and substring


// eg to understand bertween slice and substring
// const sentence = 'Mastering JS is a very helpful website';

// // slice()
// sentence.slice(-7);      // Returns 'website'
// sentence.slice(0, 12);   // Returns 'Mastering JS'
// sentence.slice(12, 0);   // Returns '' (empty string)

// // substring()
// sentence.substring(-5, 12); // Returns 'Mastering JS' (negative value treated as 0)
// sentence.substring(12, 0);  // Returns 'Mastering JS' (arguments swapped)






// const String = "   Raj  "
// console.log(String);
// console.log(String.trim());


// const url = "https://rajdeep.com/rajdeep%20dey"
// console.log(url.replace('%20', '-'));
// console.log(url.includes('sundar'));
// console.log(url.includes('dey'));




// console.log(gameName.split(8))



const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[4]);