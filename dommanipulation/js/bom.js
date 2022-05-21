const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.addEventListener('click', (e) => {

        let messages =[]
        if (input.value === '' ){ messages('Scripture is required')}
       
        
          const scripture = input.value;
          input.value = '';
        
          
const li= document.createElement('li')
const text=document.createElement('p')
const btn=document.createElement('button')



li.appendChild(text);
text.textContent=scripture;
li.appendChild(btn);
btn.textContent= 'X'
list.appendChild(li);


btn.addEventListener('click', (e) => {
    list.removeChild(li);
    

})

input.focus()
      })
        
        
        
    
     