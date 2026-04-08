let N = Number(prompt("Enter the integer N:"));
let seed = Number(prompt("Enter the seed value:"));

for (let i = 0; i < 3; i++)
{
    if (N % 2 === 0)
    {
        N = (N/2)+seed;
    }
    
    else
    {
        N = (N*3)-seed;
    }
}

let middleDigit = Math.floor(N / 10) % 10;

if (N >= 100 && N <= 999 && middleDigit === seed)
{
    alert("YES, " + N);
}

else
{
    alert("NO, " + N);
}