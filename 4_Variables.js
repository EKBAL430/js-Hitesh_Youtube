const studentId = 12345;
let studentName = "John Doe";
var address = "Guwahati";
school = "ABC"; 



//studentId = 67890;        // This will cause an error because studentId is a constant
studentName = "Korim";      // This is valid, as studentName is declared with let
address = "Mumbai";     // This is valid, as address is declared with var
school = "XYZ High School";     // This is valid, as school is implicitly declared as a global variable

console.table({studentId, studentName, address, school}); // Object format
console.table([studentId, studentName, address, school]); // Array format