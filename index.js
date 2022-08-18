const names = ["Adan","Brendan","Ali"];
const event = (birthday);
function writeCards(names,event){
    debugger;
    for (let i=0; i<names.length; i++)
    {console.log(`Thank you,${names[i]} for the wonderful birthday gift.`)
    debugger;}
    const returnValue=[
        `Thank you, ${names[0]}, for the wonderful surprise gift!`,
        `Thank you, ${names[1]}, for the wonderful surprise gift!`,
        `Thank you, ${names[2]}, for the wonderful surprise gift!`];
    return returnValue;
};
