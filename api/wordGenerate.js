import fetch from 'node-fetch';

export default async function handler(request, res) {
  const { word } = request.query;
	const url = `https://random-word-api.herokuapp.com/word?number=1&swear=0&length=5 `;
  var wordList = await fetch(url).then(res => res.json());
  // filter array to just 5 letter words
  //res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
 // res.setHeader("Access-Control-Allow-Credentials", "true");
  //res.setHeader("Access-Control-Allow-Origin", "*");
  
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json({ word: wordList});
}