function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jS2C2Eukwc":
        Script1();
        break;
      case "6QQmaLL0W3E":
        Script2();
        break;
      case "6Fg9e8nmWzk":
        Script3();
        break;
      case "63mxb8hLgwl":
        Script4();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musikku.mp3";
audio.load();

audio.play();

audio.volume=0.1;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1; 
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.play();
audio.volume = 0.0; 
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1; 
}

