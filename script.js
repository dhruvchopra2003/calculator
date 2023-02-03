let string = "";
let buttons = document.querySelectorAll(".button");

document.querySelector("input").value = 0;

Array.from(buttons).forEach((button) => {

  button.addEventListener("click", (e) => {

    if (e.target.innerHTML == "=") {

      string = eval(string);
      document.querySelector("input").value = string;
      console.log(string);
      //   string = "";
    }
    else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = 0;
    }
    else if (e.target.innerHTML == "del") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
      if (string == "") {
        document.querySelector("input").value = 0;
      }
    }
    else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
      console.log(e.target.textContent);
      console.log(string);
    }
  });
});
