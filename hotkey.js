document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key.toLowerCase() === "r") {
    e.preventDefault(); // prevent browser refresh
    if (typeof cameras !== "undefined" && cameras[ci]) {
      cameras[ci].toggleRecord();
    }
  }
});
