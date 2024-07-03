function fizzBuzz() {
  for (i = 1; i <= 105; i++) {
    var output = "";
    i % 3 == 0 && i % 5 == 0 && i % 7 == 0
      ? (output = "fizzbuzzbezz")
      : i % 3 == 0 && i % 5 == 0
        ? (output = "fizzbuzz")
        : i % 3 == 0 && i % 7 == 0
          ? (output = "fizzbezz")
          : i % 5 == 0 && i % 7 == 0
            ? (output = "buzzbezz")
            : i % 3 == 0
              ? (output = "fizz")
              : i % 5 == 0
                ? (output = "buzz")
                : i % 7 == 0
                  ? (output = "bezz")
                  : (output = i);
    console.log(output);
  }
}

fizzBuzz();
