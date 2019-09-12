function palindromicNumberGenerator(num) {
  // do work here
  let count = 0;
  let val = num;
  while (
    num !==
    parseInt(
      num
        .toString()
        .split("")
        .reverse()
        .join("")
    )
  ) {
    num =
      num +
      parseInt(
        num
          .toString()
          .split("")
          .reverse()
          .join("")
      );
    val = num;
    count++;
  }

  return { value: val, steps: count };
}

module.exports = palindromicNumberGenerator;
