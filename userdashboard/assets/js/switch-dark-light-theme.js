function readCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function switchTheme () {
	console.log("Click on button");
    const theme_val = readCookie("data-bs-theme");
    console.log(theme_val);
	  if (document.documentElement.getAttribute('data-bs-theme') == 'dark' || theme_val == 1) 
      {
        document.documentElement.setAttribute('data-bs-theme','light');
         document.cookie = 'data-bs-theme = 0';
      }
    else
	{
        document.documentElement.setAttribute('data-bs-theme','dark');
        document.cookie = 'data-bs-theme = 1';
    }
}