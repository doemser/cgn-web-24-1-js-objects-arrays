console.clear();

const name = "Dömser";
const age = 21;
const cool = true;
const nix = undefined; // unbeabsichtigt
const nichts = null; // absichtliche Abwesenheit eines Wertes
const say = (text) => {
  console.log(text);
};
say("Text den ich ausloggen will");

// objects consist of key/value pairs
const dominik = {
  name: "Dömser",
  age: 21,
  cool: true,
  say: (text) => {
    console.log(text);
  },
};

dominik.brokkoli = "green";

delete dominik.brokkoli;

console.log("Alter: ", dominik.age);

console.table(dominik);

// Was ist das DOM?
// Die Representation des HTML Codes in Browser
// Document OBJECT Model

// Arrays

const fruits = ["apple", "banana", "kiwi"];

console.log(fruits[1]);

console.table(fruits);

const allerlei = [true, "string 1", ["bla", "blub"]];

console.table(allerlei);

console.log(allerlei[2][1]);

console.log("Allerlei: ", allerlei);
console.log("Nested Array", allerlei[2]);
console.log("Blub", allerlei[1][1]);
console.log(allerlei[0], allerlei[1]);

console.log(allerlei[2]);

const hui = [{ id: "a" }, { id: "b" }, { id: "c" }];
console.log(hui[1].id);
