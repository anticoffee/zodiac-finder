let result = document.getElementById("result") 
let plural = false;
let sign;

/* checks if input is valid */
function isValid(m, d){
    if(m == '' || m > 12 || d == '' || d > 31){
        return false;
    } else{
        return true;
    }
}
/* finds the respective zodiac sign from input*/
function find_zodiac(m, d){
    if(m == 1){
        if(d >= 1 && d <= 19){
            sign = 'Capricorn'
        } else if(d >= 20 && d <= 31){
            sign = 'Aquarius'
            plural = true
        } 
    } else if (m == 2){
        if(d >= 1 && d <= 18){
            sign = 'Aquarius'
            plural = true
        } else if(d >= 19 && d <= 29){
            sign = 'Pisces'
        }  else{
            sign = undefined
        }
    } else if (m == 3){
        if(d >= 1 && d <= 20){
            sign = 'Pisces'
        } else if(d >= 21 && d <= 31){
            sign = 'Aries'
            plural = true
        } 
    } else if (m == 4){
        if(d >= 1 && d <= 19){
            sign = 'Aries'
            plural = true
        } else if(d >= 20 && d <= 30){
            sign = 'Taurus'
        } else{
            sign = undefined
        }
    } else if (m == 5){
        if(d >= 1 && d <= 20){
            sign = 'Taurus'
        } else if(d >= 21 && d <= 31){
            sign = 'Gemini'
        } 
    } else if (m == 6){
        if(d >= 1 && d <= 20){
            sign = 'Gemini'
        } else if(d >= 21 && d <= 30){
            sign = 'Cancer'
        } else{
            sign = undefined
        }
    } else if (m == 7){
        if(d >= 1 && d <= 22){
            sign = 'Cancer'
        } else if(d >= 23 && d <= 31){
            sign = 'Leo'
        } 
    } else if (m == 8){
        if(d >= 1 && d <= 22){
            sign = 'Leo'
        } else if(d >= 23 && d <= 30){
            sign = 'Virgo'
        } else{
            sign = undefined
        }
    } else if (m == 9){
        if(d >= 1 && d <= 22){
            sign = 'Virgo'
        } else if(d >= 23 && d <= 30){
            sign = 'Libra'
        } else{
            sign = undefined
        }
    } else if (m == 10){
        if(d >= 1 && d <= 22){
            sign = 'Libra'
        } else if(d >= 23 && d <= 31){
            sign = 'Scorpio'
        } 
    } else if (m == 11){
        if(d >= 1 && d <= 21){
            sign = 'Scorpio'
        } else if(d >= 22 && d <= 30){
            sign = 'Sagittarius'
        } else{
            sign = undefined
        }
    } else if (m == 12){
        if(d >= 1 && d <= 21){
            sign = 'Sagittarius'
        } else if(d >= 22 && d <= 31){
            sign = 'Capricorn'
        } 
    } 

    if (plural == true){
        word = 'an'
    } else{
        word = 'a'
    }

    return word, sign
}

function search(){
    let m = document.getElementById("month").value;
    let d = document.getElementById("date").value;

    /* prints the results on screen if valid */
    if (isValid(m,d)){
        find_zodiac(m,d)
        if(sign === undefined){
            /* invalid if the date does not exist and no zodiac sign is assigned */
            alert('Invalid Date \nPlease Try Again')
        }else{
            result.innerHTML = `You are ${word} <span>${sign}</span>`;
        }
    }else{
        /* if the input is not valid */
        alert('Invalid Date \nPlease Try Again')
    }

}
