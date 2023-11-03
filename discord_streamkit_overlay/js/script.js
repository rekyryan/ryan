function generateCSS() {
  // User input.
  var browserSourceWidth = parseFloat(document.getElementById("browser-source-width").value);
  var browserSourceHeight = parseFloat(document.getElementById("browser-source-height").value);
  var peoplePerRow = parseFloat(document.getElementById("people-per-row").value);
  var numberOfRows = parseFloat(document.getElementById("number-of-rows").value);
  var nameFontSize = parseFloat(document.getElementById("name-font-size").value);
  var avatarBounceHeight = parseFloat(document.getElementById("avatar-bounce-height").value);
  var squareAvatars = document.getElementById("square-avatars").checked;
  var fullWidthNameBackgrounds = document.getElementById("full-width-name-backgrounds").checked;
  var hideDiscordID = document.getElementById("hide-discord-id").value;
  
  // Variables that control the output CSS. Feel free to change these!
  // All units are in pixels (px).
  var personMarginVertical = 10; // Vertical margin around each person.
  var personMarginHorizontal = 10; // Horizontal margin around each person.
  var spaceBetweenAvatarAndName = 10;
  var namePaddingVertical = 8; // Vertical padding around each name.
  var namePaddingHorizontal = 8; // Horizontal padding around each name.
  var nameBorderRadius = 6;
  var quietFilter = "brightness(70%)"; // Avatar image filter when not speaking.
  var speakingFilter = "brightness(100%)"; // Avatar image filter when speaking.
  
  // Compute the size of each person and avatar using the browser source size and the size of the grid.
  var personWidth = Math.floor((browserSourceWidth - personMarginHorizontal * 2 * (peoplePerRow - 1)) / peoplePerRow);
  var personHeight = Math.floor((browserSourceHeight - personMarginVertical * 2 * (numberOfRows - 1)) / numberOfRows);
 
  var maxAvatarWidth = personWidth; // Temporary variable for calculations.
  var maxAvatarHeight = personHeight - spaceBetweenAvatarAndName - nameFontSize - namePaddingVertical * 2 - avatarBounceHeight; // Temporary variable for calculations.
  var avatarSize = Math.floor(Math.min(maxAvatarWidth, maxAvatarHeight));
  var avatarBorderRadius = "50%";
  if (squareAvatars) {
    avatarBorderRadius = "0";
  }
  
  var nameMaxWidth = personWidth - namePaddingHorizontal * 2;
  var nameWidthCSSLine = `width: ${nameMaxWidth}px;`
  if (!fullWidthNameBackgrounds) {
    // When name backgrounds are not full-width, shrink the background to fit the name.
    nameWidthCSSLine = "max-" + nameWidthCSSLine;
  }

  // You can customize the generated CSS by modifying the following:
  var cssString = `
body {
    background-color: rgba(0, 0, 0, 0);
    margin: 0px auto;
    overflow: hidden;
}

ul.Voice_voiceStates__a121W {
    /* Arrange people in a grid. */
    display: flex !important;
    flex-wrap: wrap !important;
    margin: -${personMarginVertical}px -${personMarginHorizontal}px !important;
    padding: 0 !important;
}

li.Voice_voiceState__OCoZh {
    /* Space occupied by each person in the grid. */
    width: ${personWidth}px !important;
    height: ${personHeight}px !important;
    margin: ${personMarginVertical}px ${personMarginHorizontal}px !important;
    
    /* Use flex to position the name below the avatar,
       center them horizontally, and align them
       along the bottom. */
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-end !important;
}

img.Voice_avatar__htiqH {
    /* Size of each person's avatar. */
    width: ${avatarSize}px !important;
    height: ${avatarSize}px !important;
    border-radius: ${avatarBorderRadius} !important;
    filter: ${quietFilter};
    
    /* Get rid of the default border and margin. */
    border: none !important;
    margin: 0 !important;
}

div.Voice_user__8fGwX {
    /* Vertical space between avatar and name. */
    padding-top: ${spaceBetweenAvatarAndName}px !important;
}

span.Voice_name__TALd9 {
    display: block;
    text-align: center;
    font-size: ${nameFontSize}px !important;
    line-height: ${nameFontSize}px !important;
    padding: ${namePaddingVertical}px ${namePaddingHorizontal}px !important;
    border-radius: ${nameBorderRadius}px !important;
    
    /* Truncate a long name with an ellipsis. */
    ${nameWidthCSSLine};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

img.Voice_avatar__htiqH.Voice_avatarSpeaking__lE\\+4m {
  border-color: rgba(0,0,0,0) !important;
  animation-name: speak-now;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  filter: ${speakingFilter};
}

@keyframes speak-now {
  0% { padding-bottom: 0; }
  15% { padding-bottom: ${avatarBounceHeight}px; }
  30% { padding-bottom: 0; }
}
`;
  
  // If a Discord ID to hide was specified, append CSS to hide that Discord ID.
  if (hideDiscordID) {
    cssString += `
/* Hide the person with this Discord ID. */
img.Voice_avatar__htiqH[src*="723326990920319079"] { display: none !important; }
img.Voice_avatar__htiqH[src*="723326990920319079"] + div { display: none !important; }
`
  }

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
