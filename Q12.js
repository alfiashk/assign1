// ### Question 12: Time Series Data


const temperatures = [
  { date: "2024-01-01", temp: 22 },
  { date: "2024-01-02", temp: 25 },
  { date: "2024-01-03", temp: 19 },
  { date: "2024-01-04", temp: 28 },
  { date: "2024-01-05", temp: 24 },
  { date: "2024-01-06", temp: 21 },
  { date: "2024-01-07", temp: 26 }
];


// a) Find the hottest and coldest days
let res = temperatures.reduce((a, b) => { 
    if (b.temp > a.hottest.temp) a.hottest = b;
  if (b.temp < a.coldest.temp) a.coldest = b;
  return a;
}, { hottest: temperatures[0], coldest: temperatures[0] });

//console.log(res);

// b) Calculate the average temperature for the week
let avg = temperatures.reduce((a, b) => a + b.temp, 0) / temperatures.length;
//console.log(avg.toFixed(2));

// c) Find days where temperature increased from the previous day
let tempInc = temperatures.filter((e, i, arr) => i> 0 && e.temp > arr[i - 1].temp);
  
//console.log(tempInc);

// d) Identify temperature anomalies (more than 5 degrees different from average)
let anomali = temperatures.filter((e) => e.temp > avg + 5 || e.temp < avg - 5);
//console.log("Anomalies:", anomali);

// e) Create a summary with min, max, average, and total days recorded

let summary = temperatures.reduce((a, b) => {
    if (b.temp > a.max.temp) a.max = b;
    if (b.temp < a.min.temp) a.min = b;
    return a;
  }, { max: temperatures[0], min: temperatures[0] });
console.log("summary: ", {
    min: summary.min,
    max: summary.max,
    average: avg.toFixed(2),
    totaldays : temperatures.length

});