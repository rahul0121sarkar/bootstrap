
// normal massage print 
function happy(){
    document.getElementById('r').innerHTML='How is the josh';
}

// print table with for loop where it execute and add value 
function table(){
    for(let a = 1; a<=10; a++){
        var b = a*5;
        document.write(b+"<br>");
    }
}

// print table with do while loop in do while loop even if it returns false it will exculte atleast one time 
// because in do while first the loop will exucute after that we apply the condition 
function table1(){
    let a =1;
    while(a<=10){
        let b = a*12;
        document.write(b+"<br>");
        a++;
    }
}


// using stylind with function where 'cssText' is a property that allow you to write multiple styling
// in one go it start with `` the only downside of cssText property that id did not auto complete the 
// code you need to know the proper syntax of the css styling 

function aya(){
    document.getElementById('to').style.cssText=`
    background-color:grey;  
    color:red;                     

    `;
}

function gya(){
    document.getElementById('to').style.cssText=`
                                background-color:white;
                                color:black;
    `;
}

// add function with static value , it's called static value because we predefind the value
// we cannot change the value during execution that is why it is called static data ,data we
// can not able to change during execution 
function add(){
    let a =12;
    let b =22;
    a+=b;
    document.write(a);
}

function sub(){
    let a ,b;
    a =23;
    b=33;
    a-=b;
    document.write(a);
}

function mulit(){
    let a ,b;
    a =23;
    b=33;
    a*=b;
    document.write(a);
}

function div(){
    let a ,b;
    a =23;
    b=33;
    a/=b;
    document.write(a);
}


doc