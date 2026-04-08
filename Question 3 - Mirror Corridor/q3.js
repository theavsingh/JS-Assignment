let N = Number(prompt("Enter N:"));
let K = Number(prompt("Enter K:"));

let result = -1;

for (let X = 0; X <= 100000; X++)
{
    let sum = N + X;

    if (sum % K === 0)
    {
        let str = sum.toString();
        let revstr = "";

        for (let i = str.length-1; i >= 0; i--)
        {
            revstr += str[i];
        }

        if (str === revstr)
        {
            result = X;
            break;
        }
    }
}

alert(result);