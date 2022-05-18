function greeting() {
  const generic_greetings = [
    "Good Morning",
    "Wassup",
    "Hello",
    "What u doing?..",
    "Ayooo!",
  ];
  let greetingIndex = Math.floor(Math.random() * generic_greetings.length);
  return generic_greetings[greetingIndex];
}

export { greeting, date };

function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return currentDate.toLocaleDateString("en-GB", dateOptions);
}
