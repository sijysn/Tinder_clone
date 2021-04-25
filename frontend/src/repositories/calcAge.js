function calcAge(birthdate) {
  birthdate = birthdate.replace(/[/-]/g, "");

  const today = new Date();
  const targetdate =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

  return Math.floor((targetdate - birthdate) / 10000);
}

export default calcAge;
