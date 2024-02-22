export const numericToRoman = (number: number) => {
  if (isNaN(number) || number < 1 || number > 3999) {
    throw new Error(
      "Invalid number. Please enter a number between 1 and 3999."
    );
  }
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      number -= romanNumerals[i].value;
    }
  }
  return result;
};

export const numericToAlphabetical = (number: number) => {
  if (number < 1) {
    throw new Error("Input number must be greater than or equal to 1.");
  }
  let result = "";
  while (number > 0) {
    const remainder = (number - 1) % 26; // Adjusting for zero-based indexing
    result = String.fromCharCode(65 + remainder) + result; // Convert remainder to corresponding alphabet
    number = Math.floor((number - 1) / 26); // Update number for next iteration
  }
  return result;
};

export const convert = (numberSystem: string, label: any) => {
  switch (numberSystem) {
    case "Alphabetical":
      return numericToAlphabetical(label);
    case "Numerical":
      return label;
    case "Roman Numeral":
      return numericToRoman(label);
    case "Custom":
      return label;
  }
};
