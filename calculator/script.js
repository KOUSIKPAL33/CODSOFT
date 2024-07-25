let inputBox=document.getElementById('ans');
let buttons=document.querySelectorAll('button');

buttons.forEach(element =>{
    element.addEventListener('click',(b) =>{
        if(b.target.innerText =='='){
            try {
                let expression = inputBox.value;
                expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
                    return number / 100;
                });
                const result = eval(expression);
                inputBox.value = result;
            } catch (error) {
                inputBox.value = 'Error';
            }
        }
        else if(b.target.innerText =='AC'){
            inputBox.value='';
        }
        else if(b.target.innerText =='DEL'){
            let str=inputBox.value;
            if(str=='Error' || str=='Infinity'){
                inputBox.value='';
            }else{
                str=str.slice(0,-1);
                inputBox.value=str;
            }
        }
        else{
            inputBox.value+=b.target.innerText;
        }
    })
})



