/// harmonic series
function harmonicSeries(n) {
    let sum = 0;
    let series = [];

    for (let i = 1; i <= n; i++) {
        series.push(`1/${i}`);
        sum += 1 / i;
    }

    console.log("Harmonic Series: " + series.join(' '));
    console.log(`Sum of the harmonic series: ${sum.toFixed(6)}`);
}


let n = 5; 
harmonicSeries(n);
