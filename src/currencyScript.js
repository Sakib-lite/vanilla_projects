let firstContainer=document.querySelector('#currency-one')
let secondContainer=document.querySelector('#currency-two')
let firstInput=document.querySelector('#input-one')
let secondInput=document.querySelector('#input-two')
let btn=document.querySelector('.swap')


let currencyEx=async function (){
   try{
btn.nextElementSibling? btn.nextElementSibling.remove():''
    
     
     
     let firstCurrency=firstContainer.value
     let secondCurrency=secondContainer.value
     
     let res =await fetch(`https://api.exchangerate-api.com/v4/latest/${firstCurrency}`)
     let data=await res.json()
     console.log(data);
     let rate=data.rates[secondCurrency]
     let amount=rate*firstInput.value
     secondInput.value=`${amount}`
     
   let  markup=`<p class="ml-auto mr-6 text-lg">1 ${firstCurrency} =  ${rate}  ${secondCurrency}</p>`
     btn.insertAdjacentHTML('afterend',markup)

   }catch(err) {
        console.error(err)
   }


}
const swapFunc=function(){
[firstContainer.value,secondContainer.value]=[secondContainer.value,firstContainer.value]
currencyEx()

}
btn.addEventListener('click',swapFunc)

currencyEx()

firstContainer.addEventListener('change',currencyEx)
secondContainer.addEventListener('change',currencyEx)
firstInput.addEventListener('input',currencyEx)
secondInput.addEventListener('input',currencyEx)


