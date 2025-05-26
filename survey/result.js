
window.onload = function () {
  const yesCount = localStorage.getItem("yesCount") || 0;
  const noCount = localStorage.getItem("noCount") || 0;
  const username = localStorage.getItem("loggedInUser") || "Unknown User";

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p><strong>User:</strong> ${username}</p>
    <p><strong>Yes:</strong> ${yesCount}</p>
    <p><strong>No:</strong> ${noCount}</p>
  `;
};

