export default function addingZeros(string) {
  const numberAfterSymbol = string.split(',')[1];

  if(numberAfterSymbol.length >= 3){
    return string; 
  }else if(numberAfterSymbol.length === 1){
    return string += "00";
  }else if(numberAfterSymbol.length === 2){
    return string += "0";
  }
}