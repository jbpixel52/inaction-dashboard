export default function getIcon(appname, apptype, appurl) {
  if (new Response(appurl + "/favicon.ico").status === 200) {
    return appurl + "/favicon.ico";
  }
  if (
    new Response(
      "https://github.com/walkxhub/dashboard-icons/blob/master/png/" +
        appname +
        ".png"
    ).status === 200
  ) {
    return (
      "https://github.com/walkxhub/dashboard-icons/blob/master/png/" +
      appname +
      ".png"
    );
  }
  return "https://github.com/google/material-design-icons/blob/master/png/alert/error/materialiconsround/48dp/2x/round_error_black_48dp.png";
}
