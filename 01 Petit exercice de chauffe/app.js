function my_max(){
  var array = document.getElementById("ecran1").value.split(' ');
  max = Math.max(...array);
  document.getElementById("max").value = max
  return max;
}
function vowel_count() {
  var str = document.getElementById("ecran2").value;
  var vowels = 0;
  for (var i = 0; i <= str.length - 1; i++) {
    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowels += 1;
    }
  }
  document.getElementById("vowels").value = vowels;
  return vowels;
}
function reverse(){
  var str = document.getElementById("ecran3").value;
  str = str.split("").reverse().join("");
  document.getElementById("reverse").value = str;
  return str
}
