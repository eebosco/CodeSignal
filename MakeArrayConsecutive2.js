function makeArrayConsecutive2(statues) {
    var count = 0;
    if (statues.length > 1) {
        statues.sort((a,b)=>a-b);
        for (var i = 1; i < statues.length; i++) {
            count += (statues[i] - (statues[i - 1] + 1)); 
        }
    }
    return count;
}
