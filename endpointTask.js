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
    const github_file = "https://github.com/Allenkayode/HNGTask1/tree/main";
    const github_url = "https://github.com/Allenkayode";

    const response = {
      slack_name: "Timi",
      current_day: day,
      utc_time: present_date,
      track: "backend",
      github_file_url: github_file ,
      github_repo_url: github_url ,
      status_code: 200,
    };
    return res.json({respons.body });
  } catch (error) {
    let message = error.message;
    return console.log(message);
  }
};

module.exports = endpoint_task1;
