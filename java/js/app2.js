


function opration(){
    // we take three value where we store are id 
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let c = document.getElementById("oprator").value;

    // applng switch case 
    switch(c){
        // appling case which we're going to execute in seclect option value 
        case "+":
            // convert to parseInt because we work on integer and the value we are adding is in 
            // text format in form tag if we don't want to convert the value we can simply change
            // input type ="text" to input type ="int" where it will take default value int
            c = parseInt(a)+parseInt(b);

            // adding file result in result id 
            document.getElementById("result").value=""+c;
            break;

            case "-":
             c = parseInt(a)-parseInt(b);
                document.getElementById("result").value=""+c;
                break;

            case "*":
                    c = parseInt(a)*parseInt(b);
                    document.getElementById("result").value=""+c;
                    break;

             case "/":
                        c = parseInt(a)/parseInt(b);
                        document.getElementById("result").value=""+c;
                        break;

            default:
                    // if nothing work this code will execute 
                    document.write("There are no Opration selected to Execute");   
    }
}