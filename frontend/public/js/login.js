// When the user is redirected back from the auth server, this script sends
// the receved "code" to the backend so it can request a access token
const params = new URLSearchParams(window.location.search);

if (!params.has("code"))
  window.location.replace("http://localhost:4001/index.html");

axios
  .post("/api/login", {
    code: params.get("code"),
  })
  .then((response) => {
    localStorage.setItem("token", response.data);
    document.getElementById("status").textContent = "Success!";
  })
  .catch((error) => {
    alert(error.response.data);
    console.log(error);
  });


