const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
const imageInput = document.getElementById('imageInput');
const topicInput = document.getElementById('memeTopic');
const generateBtn = document.getElementById('generateMeme');
const downloadBtn = document.getElementById('downloadMeme');

let image = new Image();

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    };
    image.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// Simulated "AI" captions
const captions = [
    ["When you finally finish a task", "But realize you were supposed to start another one"],
    ["Me trying to act normal", "After sleeping 3 hours and drinking 5 coffees"],
    ["Expectation: Productivity mode ON", "Reality: Netflix is my boss now"],
    ["When autocorrect changes 'I'm mad'", "To 'I'm fabulous'"],
    ["Trying to be fit", "But cake has WiFi"],
    ["When you open your front camera", "And it ruins your whole day"],
    ["Mood: I’ll just wing it", "And then panic later"],
    ["I told myself I’d sleep early", "At 2AM: Let’s learn about black holes"],
    ["When you clean the entire house", "But no one is coming over"],
    ["Why work hard", "When you can panic last minute"],
    ["When you realize adulthood is just", "Laundry, bills, and existential dread"],
    ["When someone says 'act natural'", "And you forget how to blink"],
    ["How I imagined 2024", "vs. Me now in pajamas at 3PM"],
    ["When the teacher says 'pair up'", "And your bestie isn’t there"],
    ["Me trying to diet", "As the fridge whispers sweet nothings"],
    ["I need 8 hours of sleep", "Separately... throughout the day"],
    ["Me: *saves money*", "Also me: I deserve a little treat... daily"],
    ["When your code works", "But you don’t know why"],
    ["Life hack: Don’t do it", "If it requires getting up"],
    ["Current status:", "Buffering…"],
    ["let them know uncle"],
    ["please study Genai man"],
    ["when you see your crush", "and you forget how to breathe"],
    ["When you realize your crush", "Is just a figment of your imagination"],
    ["When you finally understand the meme", "But it’s too late to laugh"],
    ["When you try to be productive", "But the couch is calling your name"],
    ["When you see a spider", "And suddenly become an Olympic athlete"],
    ["When you finish a series", "And have to face reality again"],
    ["When you try to adult", "But end up napping instead"],
    ["When your friend says 'let’s go out'", "But you’re already in your pajamas"],
    ["When you realize it's Monday", "And the weekend was just a dream"],
    ["When you finally get a day off", "But it rains all day"],
    ["When you open the fridge", "And nothing looks good"],
    ["When you try to eat healthy", "But pizza is life"],
    ["When you finally finish a project", "But the deadline was yesterday"],
    ["When you see your bank account", "And it’s not looking good"],
    ["When you realize you have no plans", "And that’s the best plan ever"],
    ["When you try to be productive", "But end up on TikTok for 3 hours"],
    ["When your friend says 'let's go out'", "But you're already in your pajamas"],
    ["When you realize it's Monday", "And the weekend was just a dream"]
    ["Nuvu Career midha focus cheali amma"],
    ["Aribith kiribithhh"]
  ];
  

generateBtn.addEventListener('click', () => {
  const [topText, bottomText] = captions[Math.floor(Math.random() * captions.length)];
  drawMemeText(topText, bottomText);
});

function drawMemeText(topText, bottomText) {
  ctx.drawImage(image, 0, 0);
  ctx.font = '40px Impact';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.textAlign = 'center';

  // Top text
  ctx.fillText(topText, canvas.width / 2, 50);
  ctx.strokeText(topText, canvas.width / 2, 50);

  // Bottom text
  ctx.fillText(bottomText, canvas.width / 2, canvas.height - 30);
  ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 30);
}

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'ai-meme.png';
  link.href = canvas.toDataURL();
  link.click();
});
