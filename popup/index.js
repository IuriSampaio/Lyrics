const baseURL = "https://api.lyrics.ovh/v1/";

const containerLyrics = document.getElementById('lyrics');

const button = document.getElementById('btn');

button.addEventListener('click', async( ) => {
  const artist = document.getElementById('artist')?.value.trim();

  const music  = document.getElementById('music')?.value.trim();

  const res = await fetch(baseURL+artist+"/"+music);

  const json = await res.json();

  containerLyrics.innerHTML = json.lyrics ? json.lyrics : "Musica não encontrada"
});


//  depois vou colocar iss no manifest para poder carrgar a legenda logo quando abrir a musica no yt
// "content_scripts": [
// 		{
// 			"matches": [
// 				"https://*.youtube.com/watch?v=*"
// 			],
// 			"js": [
// 				"./popup/index.js"
// 			]
// 		}
// 	]
