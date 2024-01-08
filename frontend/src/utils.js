export const parseRequestURL = () => {
  const url = document.location.hash.toLocaleLowerCase();
  const request = url.split("/");
}