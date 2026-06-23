let x = 2;
let y = 2;

console.log(x == y)
console.log(x ** y)

let str1 = "programming"
let res = "";
duplicates = "";

for (let i = 0; i < str1.length; i++) {
    if (!res.includes(str1[i])) {
        res = res + str1[i];
    }
    else if (!duplicates.includes(str1[i])) {
        duplicates += str1[i];
    }
}
console.log(res);
console.log(duplicates);

let str2 = "programming"
let count = {}

for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    if (count[ch]) {
        count[ch]++
    }
    else {
        count[ch] = 1
    }

}
console.log(count);

for (let ch in count) {
    if (count[ch] > 1) {
        console.log(`${ch} : ${count[ch]}`)
    }
}