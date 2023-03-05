const str = document.querySelector(".all");
function deleteTags(str) {
  let regex = /( |<([^>]+)>)/gi,
    result = str.replace(regex, " ");
  return result;
}

console.log(deleteTags(str));
