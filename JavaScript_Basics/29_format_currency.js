// toLocaleString() = returns a string with a language sensitiverepresentation of this number 
// number.toLocaleString(locale, {options});
// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 123456.789;
// myNum = myNum.toLocaleString("en-us"); //US English
// myNum = myNum.toLocaleString("hi-IN"); //Hindi
// myNum = myNum.toLocaleString("de-DE"); //Standard German

// formate some currency
// myNum = myNum.toLocaleString("en-us", { style: "currency", currency: "USD" });
// myNum = myNum.toLocaleString("bn-BD", { style: "currency", currency: "BDT" });

// There are other style besides currency. Let's try percent
myNum = 100;
myNum = myNum.toLocaleString(undefined, { style: "percent" });

console.log(myNum);