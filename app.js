const output = document.getElementById("Output-value");

function display(num){
    output.value += num;
}

function clearBtn(){
    output.value ="";
}
function deleteBtn(){
    output.value =output.value.slice(0,-1);
}

function calculate(){
    try {
        output.value = eval(output.value);
    } catch (err) {
        alert("Invalid");
    }
}
function sin_Btn(){
       output.value= Math.sin(output.value);
    }

    function cos_Btn()
    {
        output.value=Math.cos(output.value);
    }

    function tan_Btn()
    {
        output.value=Math.tan(output.value);
    }

    function pow_Btn()
    {
        output.value=Math.pow(output.value,2);
    }

    function sqrt_Btn()
    {
        output.value=Math.sqrt(output.value,2);
    }

    function log_Btn()
    {
        output.value=Math.log(output.value);
    }

    function pi_Btn()
    {
        output.value= 3.14159265359;
    }

    function e_Btn()
    {
        output.value=2.71828182846;
    }

window.addEventListener("keypress",e=>{
    if (e.code === 'NumpadEnter' || e.key === 'Enter'){
        calculate();
        
}});

window.addEventListener("keypress",e=>{
    if (e.code === 'Delete' || e.key ===  'Delete'){
        clearBtn();
        
}});

window.addEventListener("keypress",e=>{
    if (e.code === 'Backspace'){
        deleteBtn();        
}});
