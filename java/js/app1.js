function add(){
     // we take three value where we store are id we make it dynmic data because we can chnge the result 
    //  during execution it is also called user defined value 

    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;

     // convert to parseInt because we work on integer and the value we are adding is in 
     // text format in form tag if we don't want to convert the value we can simply change
    // input type ="text" to input type ="int" where it will take default value int

    let c = parseInt(a) + parseInt(b);
    document.getElementById('result').value=""+c;
}


function sub(){
     // we take three value where we store are id we make it dynmic data because we can chnge the result 
    //  during execution it is also called user defined value 

    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;

     // convert to parseInt because we work on integer and the value we are adding is in 
     // text format in form tag if we don't want to convert the value we can simply change
    // input type ="text" to input type ="int" where it will take default value int

    let c = parseInt(a) - parseInt(b);
    document.getElementById('result').value=""+c;
}



function multi(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;

     // convert to parseInt because we work on integer and the value we are adding is in 
     // text format in form tag if we don't want to convert the value we can simply change
    // input type ="text" to input type ="int" where it will take default value int
    var c = parseInt(a)*parseInt(b);
    document.getElementById('result').value=""+c;
}



function div(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;

     // convert to parseInt because we work on integer and the value we are adding is in 
     // text format in form tag if we don't want to convert the value we can simply change
    // input type ="text" to input type ="int" where it will take default value int
    let c = parseInt(a) / parseInt(b);
    document.getElementById('result').value=""+c;
}

function el(){
    let a = document.getElementById('ifel').value;
    // appling the if else condition and printing the result in given inpur id 
    if(a>500){
        document.write("a is big");
    }
    else {
        document.write("not big");
    }
}

function oddeven(){
    let a =document.getElementById('ode').value;

    // appling the even odd condition and printing the result in given inpur id 

    if(a%2==0){
        document.write("this is a even no,");
    }else{
        document.write("this is a odd number");
    }
}

