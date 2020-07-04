const tokenNode = document.getElementById("token");
const resetNode = document.getElementById("reset");
const token = localStorage.getItem("token");

if (token) {
  tokenNode.value = token;
  tokenNode.className = "center";
  resetNode.hidden = false;
}

resetNode.onclick = () => {
  localStorage.removeItem("token");
  tokenNode.className = "hidden";
  resetNode.hidden = true;
};
