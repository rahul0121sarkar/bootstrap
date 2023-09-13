function change(){
    let a = document.getElementById("myselect").value;
    document.getElementById("demo").innerHTML = "You selcted:" + a;
}

function inpchange(val){
    alert("The input value has changed The new value is:"+val);
}

function inputfun(){
    let text = document.getElementById("myInput").value;
    document.getElementById("inpdm").innerHTML="You wrote: " + text;
}

function range(value){
    document.getElementById("slide").innerHTML = value;
}

function colorchange(){
    let col = document.getElementById("myselect").value;
    
    switch(col){
        case "Red":
            document.getElementById("demo").style.cssText=`
                                            background-color:red;
                                            color:white;
                                            font-size:34px;
            `;
            break;
        
        case "Green":
              document.getElementById("demo").style.cssText=`
                                             background-color:green;
                                             color:white;
                                            font-size:34px;
                                            `;
                                             break;  

        case "Blue":
            document.getElementById("demo").style.cssText=`
                                            background-color:blue;
                                            color:white;
                                            font-size:34px;
                                            `;
                                            break;

         case "Navy":
            document.getElementById("demo").style.cssText=`
                                        background-color:navy;
                                        color:white;
                                        font-size:34px;
                                        `;
                                        break;   
    }

}