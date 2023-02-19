// Question Three
function school(classGroup) {
  if (classGroup === 'Social Science') {
    console.log(
      'Your subjects are: Government, Accounting, Commerce, Marketing, Geography, English, and Mathematics.'
    );
  } else if (classGroup === 'Science') {
    console.log(
      'Your subjects are: Physics, Chemistry, Biology, Technical Drawing, English, and Mathematics.'
    );
  } else if (classGroup === 'Arts') {
    console.log(
      'Your subjects are: Government, Economics, Literature, History, English, and Mathematics.'
    );
  } else {
    console.log(
      'Invalid class group. Your subjects are: English and Mathematics as well as the General Subjects.'
    );
  }
}

console.log(school('Arts'));

// Question Five
function nearestPowerOf2(num) {
  let powerOf2 = 1;
  while (powerOf2 <= num) {
    powerOf2 *= 2;
  }
  let pwr;
  if (powerOf2 - num <= num - powerOf2 / 2) {
    pwr = powerOf2;
  } else {
    pwr = powerOf2 / 2;
  }
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
}

nearestPowerOf2(40);
nearestPowerOf2(50);
