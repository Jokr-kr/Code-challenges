function checkIfEqualWithOneSwap(s1, s2)
{

    let n = 0
    let diff = []
    for (let i = 0; i < s1.length; i++)
    {
        if (s1[i] !== s2[i])
        {
            n++
            diff.push(s1[i])
            diff.push(s2[i])
        }
    }
    if (n == 2)
    {
        if (diff[0] == diff[3] && diff[1] == diff[2]) 
        {
            return true
        } else return false
    }
    return false;
}
