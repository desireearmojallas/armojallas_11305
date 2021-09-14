
var choice = prompt("Choose an operation: \n1. Add\n2. Subtract\n3. Multiply\n4. Divide");

var x,y,z;
    var numChoice = parseInt(choice);


    x=prompt("Enter first number");
    y=prompt("Enter second number");

    num1 = parseInt(x);
    num2 = parseInt(y);
    sum = (num1, num2) => {return num1 + num2};
    diff = (num1, num2) => {return num1 - num2};
    prod = (num1, num2) => {return num1 * num2};
    quo = (num1, num2) => {return num1 / num2};

    switch (numChoice){
        case 1: 
                alert("Sum is " + sum(num1,num2));
                break;
        case 2:
                alert("Difference is " + diff(num1, num2));
                break;
        case 3: 
                alert("Product is " + prod(num1, num2));
                break;
        case 4: 
                alert("Quotient is " + quo(num1, num2));
                break;
        default: alert("Invalid choice");
    }


