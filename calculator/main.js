function calc(){
    var value1 = parseInt(document.querySelector('#value1').value);
    var value2 = parseInt(document.querySelector('#value2').value);
    var operator = document.querySelector('#operator').value;
    var calculate;

    if(operator == 'Add'){
        calculate = value1 + value2;
    }else if(operator == 'Substract'){
        calculate = value1 - value2;
    }else if(operator == 'Mutiply'){
        calculate = value1 * value2;
    }else if(operator == 'Divide'){
        calculate = value1 / value2;
    }

    document.querySelector('.result').innerHTML = calculate;;

}