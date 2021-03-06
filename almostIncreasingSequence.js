function almostIncreasingSequence(sequence) {
var ret = true;
var newSeq;
var orderedSeq;
var uniqueSeq;
function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}
if (sequence.length > 2) {
    ret = false;
    for (var i = 0; i < sequence.length; i++) {
        newSeq = [...sequence];
        newSeq.splice(i, 1);
        orderedSeq = [...newSeq];
        orderedSeq.sort((a,b)=>a-b);
        uniqueSeq = Array.from(new Set(orderedSeq));
        console.log(newSeq + ' - ' + orderedSeq + ' - ' + uniqueSeq);
        if (arrayEquals(newSeq, orderedSeq) && arrayEquals(orderedSeq, uniqueSeq)) {
            ret = true;
            break;
        }
    }
}
return ret;
}
