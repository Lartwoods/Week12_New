const str =
  "<h1>Текст, в <br />котором нужно<col />убрать<embed />всe<hr />лишние<img />теги</h1>";
function deleteTags(str) {
  let regex = /( |<([^>]+)>)/gi,
    result = str.replace(regex, " ");
  return result;
}

console.log(deleteTags(str));
