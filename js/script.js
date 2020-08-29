export function render_milestone() {
  window.onload = function () {
    if (null == document.getElementById("milestone-container"))
    {
      /* milestone-container doesn't exists on page */
      return;
    }

    var request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://api.github.com/repos/glfw/glfw/milestones",
      true
    );

    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);

        data = data.filter(function (item) {
          return item.title.split(".").length - 1 === 1;
        });

        data.sort(function (a, b) {
          return a.title - b.title;
        });

        var openIssues = data[0].open_issues;
        var closedIssues = data[0].closed_issues;
        var workProgress = (closedIssues * 100) / (openIssues + closedIssues);

        var milestoneVersion = document.getElementById("milestone-version");
        milestoneVersion.innerHTML = data[0].title;

        var progressBarInner = document.getElementById("progress-bar-inner");
        progressBarInner.style.width = workProgress + "%";

        var progress = document.getElementById("progress");
        progress.innerHTML = Math.floor(workProgress) + "%";

        var milestoneContainer = document.getElementById("milestone-container");
        milestoneContainer.style.opacity = "1";
        milestoneContainer.style.transition = ".7s ease-in";
      }
    };

    request.send();
  };
}
