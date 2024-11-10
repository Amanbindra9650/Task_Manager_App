export function initCount(){
    var count = 0;
    function autoGenerateNumber(){
        count ++;
        return count;
    }
    return autoGenerateNumber
}