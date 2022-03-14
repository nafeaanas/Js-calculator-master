const display1El=document.querySelector(".display-1")
const display2El=document.querySelector(".display-2")
const tempResult=document.querySelector(".temp-result")
const numbersEl=document.querySelectorAll(".number")
const oparationEl=document.querySelectorAll(".operation")
const equalEl=document.querySelector(".btn-equal")
const plusMoin=document.querySelector(".btn-plus-moin")
const clearAll=document.querySelector(".all-clear")
const clearLastEl=document.querySelector(".clear-last-one")
const pointEl=document.querySelector(".btn-point")


let dis1Num= "";
let dis2Num= "";
let result= null;
let lastOperation= "";
let haveDot= false;
let moin=false;


numbersEl.forEach ( number => 
    {number.addEventListener("click", e => {
        if( e.target.innerText == 0 && !dis2Num )
        return
            else if (e.target.innerText === '.' && !haveDot)
            
                haveDot = true;
                else if(e.target.innerText === '-' && !moin)
                moin=true;
                

            
            else if (e.target.innerText === '.' && haveDot ||  e.target.innerText === '-' && moin)
                return;
               
            dis2Num += e.target.innerText;
            display2El.innerText = dis2Num;

        })
})

oparationEl.forEach(operation => {
    operation.addEventListener("click",e => {
        if(!dis2Num) return
        haveDot=false
        operationName=e.target.innerText
        if(dis1Num && dis2Num && lastOperation)
        {
            mathOperations()
        }
        else
        result= parseFloat(dis2Num)
        clearVar(operationName)
        lastOperation=operationName
    })
})


// plusMoin.addEventListener("click",function plusMoin() {
//     if(dis2Num===0){
//         dis2Num='-'
//         //dis2Num *=-1
//         return dis2Num;
//     }
//     else
//         return dis2Num;
// })

    

    




    

equalEl.addEventListener("click",e => 
{
    if(!dis1Num || !dis2Num) return
    haveDot=false
    moin=false
    mathOperations()
    clearVar()
    display2El.innerText=result
    dis1Num=''
    tempResult.innerText=''
    dis2Num=result

    
})
clearAll.addEventListener("click",e =>
{
    haveDot=false
    moin=false
    dis1Num=''
    display1El.innerText='0'
    dis2Num=''
    display2El.innerText='0'
    result=''
    tempResult.innerText=''
})
clearLastEl.addEventListener("click", e => 
{
    dis2Num=''
    display2El.innerText=''
})

function mathOperations()
{
    switch(lastOperation)
{
    case 'X':
    result=parseFloat(result) * parseFloat(dis2Num)
    break;
    case '+':
    result=parseFloat(result) + parseFloat(dis2Num)
    break;
    case '-':
    result=parseFloat(result) - parseFloat(dis2Num)
    break;
    case '/':
    result=parseFloat(result) / parseFloat(dis2Num)
    break;
    case '%':
    result=parseFloat(result) % parseFloat(dis2Num)
    break;
    default:
        return;

}
}

function clearVar(name='')
{
    dis1Num+= dis2Num+' '+name+' '
    display1El.innerText=dis1Num
    display2El.innerText=''
    dis2Num=''
    tempResult.innerText=result
}














