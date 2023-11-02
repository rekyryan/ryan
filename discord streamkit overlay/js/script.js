function generateCSS() {
  var discordID = document.getElementById("discord-id").value || "UserID";
  var normalImageURL = document.getElementById("normal-image-url").value || "ImageURL";
  var talkingImageURL = document.getElementById("talking-image-url").value || normalImageURL;

  // You can customize the generated CSS by modifying the following template string.
  var cssString = `img.Voice_avatar__htiqH:not([src*="${discordID}"]) { display:none; }

body {
  --bounce-height: 10px;
  background-color: rgba(0, 0, 0, 0);
  margin: 0px auto;
  overflow: hidden;
}

img.Voice_avatar__htiqH {
  content: url(${normalImageURL});
  height: auto !important;
  width: auto !important;
  border-radius: 0% !important;
  border: none;
  margin: 0;
  padding: 0;
  filter: brightness(50%);
}

img.Voice_avatarSpeaking__lE\\+4m {
  content: url(${talkingImageURL});
  border-color: rgba(0,0,0,0) !important;
  position: relative;
  animation-name: speak-now;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  filter: brightness(100%);
}

@keyframes speak-now {
  0% { bottom: 0px;  }
  15% { bottom: var(--bounce-height);  }
  30% { bottom: 0px;  }
}

li.Voice_voiceState__OCoZh{
  position: absolute;
  top:  var(--bounce-height);
  left: 0;
}

div.Voice_user__8fGwX{ position: absolute; left:40%; bottom:5%; }

span.Voice_name__TALd9 { display: none; }
`;

  // Remove whitespace at the beginning and end of the string.
  cssString = cssString.replace(/^\s*/, "").replace(/\s*$/, "");

  document.getElementById("css-output").value = cssString;
}

function copyCSS() {
  var textarea = document.getElementById("css-output");
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
