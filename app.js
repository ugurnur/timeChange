let message = "";

function showOutput() {
  const date = new Date();
  const hour = date.getHours();
  let message = "";

  if (hour > 17) message = "good evening";
  else if (hour > 12) message = "good afternoon";
  else if (hour > 0) message = "good morning";
  else message = "something is wrong";
  console.log(message);
}

showOutput();
