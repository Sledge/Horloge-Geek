
  function getPortWidth() {
    var viewportwidth;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined')
    {
      viewportwidth = window.innerWidth;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined'
      && typeof document.documentElement.clientWidth !=
      'undefined' && document.documentElement.clientWidth != 0)
    {
      viewportwidth = document.documentElement.clientWidth;
    }

    // older versions of IE
    else
    {
      viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
    }

     return viewportwidth;
  }

  function getPortHeight() {
    var viewportwidth;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined')
    {
      viewportheight = window.innerHeight;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined'
      && typeof document.documentElement.clientWidth !=
      'undefined' && document.documentElement.clientWidth != 0)
    {
      viewportheight = document.documentElement.clientWidth;
    }

    // older versions of IE
    else
    {
      viewportheight = document.getElementsByTagName('body')[0].clientHeight;
    }

     return viewportheight;
  }


  function updateTime() {
    var d = new Date();
    var h = d.getUTCHours();
    var m = d.getUTCMinutes();
    var s = d.getUTCSeconds();
    var ms = d.getUTCMilliseconds();
    var geektime = Math.round(65536 * (3600000 * h + 60000 * m + 1000 * s + ms) / (24 * 60 * 60 * 1000));
    var padding = "";
    if (geektime < 0x1000) padding = "0";
    if (geektime < 0x100) padding = "00";
    if (geektime < 0x10) padding = "000";
    geektime = padding + geektime.toString(16).toUpperCase();

    var yy = d.getUTCFullYear();
    var mm = d.getUTCMonth();
    var dd = d.getUTCDate();

    var geekdate = Math.round((Date.UTC(yy, mm, dd) - Date.UTC(yy, 0, 1)) / (24 * 60 * 60 * 1000));
    padding = "";
    if (geekdate < 0x100) padding = "0";
    if (geekdate < 0x10) padding = "00";
    geekdate = padding + geekdate.toString(16).toUpperCase();


    var hexcolor = new String(geektime+geekdate);
    hexcolor = hexcolor.substr(hexcolor.length-6,6);

    if (h < 10) h = "0"+h;
    if (m < 10) m = "0"+m;
    if (s < 10) s = "0"+s;

    $('#clock').html("0x"+geekdate+geektime+"<br /><small>"+h+":"+m+":"+s+"</small>");
    $('body').css('background-color', "#"+hexcolor);


  }

  $(document).ready(function() {
    updateTime();
    setInterval("updateTime()", 650);
  });

