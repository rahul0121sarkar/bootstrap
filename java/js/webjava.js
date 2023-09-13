function colorchange(){
    let col = document.getElementById("myselect").value;
    
    switch(col){
        case "Red":
            document.getElementById("demo").style.cssText=`
                                            color:red;
                                            font-size:17px;
            `;
            break;
        
        case "Green":
              document.getElementById("demo").style.cssText=`
                                            color:green;
                                            font-size:17px;
                                            `;
                                             break;  

        case "Blue":
            document.getElementById("demo").style.cssText=`
                                            color:blue;
                                            font-size:17px;
                                            `;
                                            break;

         case "Navy":
            document.getElementById("demo").style.cssText=`
                                        color:navy;
                                        font-size:17px;
                                        `;
                                        break;   
    }
}

function inch(value){
    alert("congratulation your :"+value);
}

function note(){
    let msg = document.getElementById("myInput").value;
    document.getElementById("display").innerHTML=""+msg;

    document.getElementById("display").style.cssText=`
                                        font-size:37px;
    `;

}