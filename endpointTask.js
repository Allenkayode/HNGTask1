const endpoint_task1 = (req, res) => {
  try {
    const { slack_name, track } = req.query;

    if (!slack_name || !track) {
      return res
        .status(400)
        .json({ error: "slack-name and track query is required" });
    }
    //Days of the Week
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();
    let day = weekday[d.getDay()];

    // Current Time
    const present_date = new Date();

    // GitHub Urls

    const response = {
      slack_name: slack_name,
      current_day: day,
      utc_time: present_date,
      track: track,
      //   github_file_url: githubFileUrl,
      //   github_repo_url: githubRepoUrl,
      status_code: 200,
    };
    let result = response;
    return res.json({ result });
  } catch (error) {
    let message = error.message;
    return console.log(message);
  }
};

module.exports = endpoint_task1;
