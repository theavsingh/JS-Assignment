let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

let sum = 0;
let m = 0;
let divisor = seed + 2;

while (sum < N)
{
    m++;
    
    if (m % divisor !== 0)
    {
        sum += m;
    }
}

alert("Value of m: " + m + "\nComputed sum: " + sum);