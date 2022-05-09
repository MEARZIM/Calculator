let screen= document.getElementById('screen');
button = document.querySelectorAll('button') ;
let screenvalue='';
for(item of button){
    item.addEventListener('click', (e)=>{

        buttontext = e.target.innerText;

         console.log('button text is', buttontext);

        if (buttontext == 'X') {
            buttontext = '*';
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if(buttontext == '='){
            screen.value=eval(screenvalue);
        }
        else if(buttontext == 'C'){
            screenvalue="";
            screen.value = screenvalue;
        }
        else if(buttontext == 'Sin'){
            screen.value = Math.sin(screenvalue);
        }
        else if(buttontext == 'Cos'){
            screen.value = Math.cos(screenvalue);
        }
        else if(buttontext == 'Tan'){
            screen.value = Math.tan(screenvalue);
        }
        else if(buttontext == 'Log'){
            screen.value = Math.log(screenvalue);
        }
        else if(buttontext == '√'){
            screen.value = Math.sqrt(screenvalue);
        }
        else if (buttontext == 'x!'){
            screenvalue = screen.value;
            if (screenvalue < 0) {
                screen.value= 'Error';
            } 
            else if(screenvalue == 0 ){
                screen.value = 1;
            }
            else {
                let fact = 1;
                for (i = 1; i <= screenvalue; i++) 
                {
                    fact *= i;
                }
                screen.value = fact;   
            }
        }
        else if(buttontext == 'π'){
            
                screen.value = 3.14159265359;
        }
        else if(buttontext == 'CE'){
            screen.value = screen.value.substr(0, screen.value.length-1);
        }
        else{
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    });
}