/*
Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).
*/

//UNION TYPE
let stringOrNumber: string | number;
stringOrNumber = "Bob";
stringOrNumber = 23;
// stringOrNumber = true;

//LITERAL TYPE
let enableOrDisable: "enable" | "disable";
enableOrDisable = "enable";
enableOrDisable = "disable";
// enableOrDisable = "Bob";