let ball = document.getElementById("float-circle");

const up = () => {
  if (ball) {
    ball.style.bottom = "600px";
  }
};

const down = () => {
  if (ball) {
    ball.style.bottom = "30px";
  }
};

document.addEventListener("keydown", up);
document.addEventListener("keyup", down);
