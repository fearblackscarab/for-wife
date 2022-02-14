const heart=document.getElementById('heart');
heart.addEventListener('click',()=>{
    const ask=document.getElementById('ask');
    const love=document.getElementById('love');
    const click=document.getElementById('click');
    ask.innerHTML=`HAPPY VALENTINE'S DAY`
    love.innerHTML=`I LOVE YOU MORE!`
    click.style.display='none'
})