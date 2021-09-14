import md5 from "md5";

/* create a URL */
const gravatar = (email) => {
  const base = "https://gravatar.com/avatar/";
  /* remove spaces and transform to lower case */
  const formattedEmail = email.trim().toLowerCase();
  /* create hash, cannot use @ therefore we have to convert it */
  const hash = md5(formattedEmail, { encoding: "binary" });
  return `${base}${hash}`;
};

export default gravatar;
