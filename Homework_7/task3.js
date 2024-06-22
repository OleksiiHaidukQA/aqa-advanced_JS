function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number")
    throw new Error("Аргумент не є числом");
  if (denominator === 0) {
    throw new Error("Denominator не може бути 0");
  }

  return numerator / denominator;
}

try {
  console.log(divide(10, 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(0, "Toha"));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}
