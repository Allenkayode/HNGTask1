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
    let date = weekday[d.getDay()];

    // Current Time
  const now = new Date();
  const year =  now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const currentTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    // GitHub Urls
    const github_file = "https://github.com/Allenkayode/HNGTask1/tree/main/endpoint.js";
    const github_url = "https://github.com/Allenkayode/HNGTask1";

    const response = {
      slack_name: "Timi",
      current_day: day,
      utc_time: currentTime,
      track: "backend",
      github_file_url: github_file ,
      github_repo_url: github_url ,
      status_code: 200,
    };
    return res.json(response);
  } catch (error) {
    let message = error.message;
    return console.log(message);
  }
};

module.exports = endpoint_task1;
