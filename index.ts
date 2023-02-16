let names:object = {first:'ser', last:'dam'}
let age:number = 36
let teaching:boolean = true
let cloudProviders:string[] = ["GCP", "Azure", "AWS"]

console.log(names,age, teaching)
console.table(cloudProviders)

enum TaxesForms {
    StandardTaxes=1040,
    ChildCredit=637,
    CryptCredit=2055
}
console.log(TaxesForms.ChildCredit)

let code: string | number = "11"
code = 11
console.log(code)

let cars:string[] = ["Carrera GT", "LFA", "IS500"]

function findIndex(index:number, array:string[]) :string {
    return array[index]
}
console.log(findIndex(1,cars))

// let classroom:any = {
//     name: "typescript",
//     cool: true,
//     number: 20
// }

interface classroom {
    name : string,
    cool : boolean,
    number : number,
    room? : string    //optional
}

let thisClassroom: classroom = {
    name: "typescript",
    cool: true,
    number: 20
}

let thatClassroom: classroom = {
    name: "react",
    cool: true,
    number: 2,
}