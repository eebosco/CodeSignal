function almostIncreasingSequence(sequence) {

function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

/*
Si la cantidad de items de la secuencia es 1 o 2 devolver true
*/
if (sequence.length > 0 && sequence.length <= 2) return true;

/*
Si la cantidad de items unicos de la secuencia es menor 
que la cantidad de items de la secuencia - 1 entonces
devolver false
*/
const uniqueSequence = Array.from(new Set(sequence));
if (uniqueSequence.length < (sequence.length - 1)) return false;

/*
Si la secuencia ordenada es igual a la secuencia devolver true
*/
const orderedSequence = [...sequence];
orderedSequence.sort((a,b)=>a-b);
if (arrayEquals(sequence, orderedSequence)) return true;

for (var i = 0; i < sequence.length; i++) {
        newSeq = [...sequence];
        newSeq.splice(i, 1);
        orderedSeq = [...newSeq];
        orderedSeq.sort((a,b)=>a-b);
        //console.log(newSeq + ' - ' + orderedSeq + ' - ' + uniqueSeq);
        if (arrayEquals(newSeq, orderedSeq)) return true;
    }

return false;
}
