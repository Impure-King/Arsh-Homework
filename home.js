// Getting the collection of divs:
problemCollection = document.getElementsByClassName("problems");

// Handling appearance and disappearance of problems
function displayProblem(no) {
    if (problemCollection[no].style.display === "none") {
        problemCollection[no].style.display = "block";
      } else {
        problemCollection[no].style.display = "none";
      }
}