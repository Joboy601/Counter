 let count = 0
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const  res = document.querySelector('.res')

increase.addEventListener('click',()=>{
     res.textContent = count+=1;
})
decrease.addEventListener('click',()=>{
  res.textContent =  count-=1;
})

reset.addEventListener('click',()=>{
    count = 0
    res.textContent = 0;

})