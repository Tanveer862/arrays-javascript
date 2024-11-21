function appendAndDelete(s, t, k) {
    let commonLength = 0;

    while (commonLength < s.length && commonLength < t.length && s[commonLength] === t[commonLength]) {
        commonLength++;
    }
    let delOps = s.length - commonLength;
    let appOps = t.length - commonLength;
    let totalOps = delOps + appOps;
    if (totalOps > k) {
        console.log("No");
        return;
    }

    if ((k - totalOps) % 2 === 0 || k >= s.length + t.length) {
        return("Yes");
    } else {
        return("No");
    }
}

