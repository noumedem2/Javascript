var pairElement = function (str:string):string[] {
    var tabs = str.split('');
    return tabs.reduce(function (acc, previous) {
        switch (previous) {
            case "A":
                return acc.concat([["A", "T"]]);
            case "T":
                return acc.concat([["T", "A"]]);
            case "C":
                return acc.concat([["C", "G"]]);
            case "G":
                return acc.concat([["G", "C"]]);
        }
    }, []);
};
pairElement("GCAG");
console.log(pairElement("GCAG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));