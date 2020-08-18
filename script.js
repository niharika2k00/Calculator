function display(val)
{
    document.getElementById("display_ans").value += val; //the parameter that comes frm the html
}

function SOLVED_result()
{
    var Z = document.getElementById("display_ans").value ; //fetch the expression 
    var X = eval(Z);
    document.getElementById("display_ans").value = X;   
}

function clr()
{  
    document.getElementById("display_ans").value = " "
}



