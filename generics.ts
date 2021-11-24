//bad code, repetitive
class HoldNumber{
    data: number;
}
 
class HoldString {
    data: string;
}
 
const holdNumber = new HoldNumber();
holdNumber.data = 123;
 
const holdString = new HoldString()
holdString.data - 'a string';
 
// xxxxxx Generics example xxxxxxxxxxxxxxx
class HoldAnything<TypeOfData> { //typeofdata can be anything (often ‘T’)
    data: TypeOfData;

    add(a: TypeOfData): TypeofData {
        return a;
    }
}
 
const holdNumber = new HoldAnything<number>(); //<number> essentially replaces <TypeOfData>
 
holdNumber.data = 123;
 
const holdString = new HoldAnything<string>();
holdString.data = 'new string';