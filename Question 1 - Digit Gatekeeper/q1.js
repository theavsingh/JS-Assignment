let L = Number(prompt("Enter L:"));
let R = Number(prompt("Enter R:"));
let K = Number(prompt("Enter K:"));

let count = 0;

function isPrime(sumOfDigits)
{
    if (sumOfDigits < 2)
    {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(sumOfDigits); i++)
    {
        if (sumOfDigits % i === 0) return false;
    }
    return true;
}

for (let x = L; x <= R; x++)
{

    if (x % K === 0)
    {
        
        let temp = x;
        let sumOfDigits = 0;
        let zeroFound = false;

        while (temp > 0)
        {
            let digit = temp % 10;

            if (digit === 0)
            {
                zeroFound = true;
                break; 
            }

            sumOfDigits += digit;
            temp = Math.floor(temp / 10);
        }

        if (zeroFound === false && isPrime(sumOfDigits) === true)
        {
            count++;
        }
    }
}

alert(count);