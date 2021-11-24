"use strict";
//bad code, repetitive
class HoldNumber {
}
class HoldString {
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;
const holdString = new HoldString();
holdString.data - 'a string';
// xxxxxx Generics example xxxxxxxxxxxxxxx
class HoldAnything {
    add(a) {
        return a;
    }
}
const holdNumber = new HoldAnything(); //<number> essentially replaces <TypeOfData>
holdNumber.data = 123;
const holdString = new HoldAnything();
holdString.data = 'new string';
