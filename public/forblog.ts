const API_KEY = '43a74d8d-2f77-4a6a-8684-84b8f3bcd1bf:fx';
const API_URL = 'https://api-free.deepl.com/v2/translate';
async function deeplTranslate(word) {
 let deeplInput = word;
 let sourceLang = "&source_lang=EN&target_lang=JA";
 let content = encodeURI('auth_key=' + API_KEY + '&text=' + deeplInput + sourceLang);
 let url = API_URL + '?' + content;
 console.log(url);
 try {
  let response = await fetch(url);
  if (response.ok) {
   let res = await response.json();
   return res;
  } else {
   throw new Error("Could not reach the API: " + response.statusText);
  }
 } catch (error) {
  alert("翻訳失敗: " + error.message);
  return null;
 };
async function transSplitArray(word) {
 console.log(transSplitArray)
 let splited = word.split(' ');
 const promises = splited.map(async (part) => {
  const translated = await deeplTranslate(part);
  return translated.translations[0].text;
 });
 // Wait for all promises to resolve
 const translated = await Promise.all(promises);
 console.log(translated, splited)
 return { translated, splited };
 };
// wordに入ったやつをトランスレートして、二つ配列返す
function insertTextBoxes(texts, translations) {
 const container = document.getElementById('TX');
 container.innerText = '';
 texts.forEach((text, index) => {
  const textBox = document.createElement('div');
  textBox.style.position = 'relative';
  textBox.style.margin = '0 2px';
  textBox.style.padding = '2px';
  textBox.style.color = 'white';
  // textBox.style.border = '1px solid black';
  textBox.style.fontSize = '1.7vw';
  textBox.style.display = 'inline-block';
  const translatedText = document.createElement('div');
  translatedText.textContent = translations[index];
  translatedText.style.position = 'absolute';
  translatedText.style.fontSize = '1.1vw';
  translatedText.style.top = 'baf100%';
  translatedText.style.left = '0';
  translatedText.style.width = '100%';
  'lightgray';
  // translatedText.style.border = '1px solid rgba(255, 255, 255, 0.5)';
  translatedText.style.boxSizing = 'border-box';
  textBox.textContent = text;
  textBox.appendChild(translatedText);
  container.appendChild(textBox);
 });
};
function createControlButtons() {
 document.body.insertAdjacentHTML('afterbegin', `
  <div id="TC" style="z-index: 9999; position: absolute; top: 162px; left: 0; width: 100vw; height: 100px; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: flex-start; align-items: center; padding-left: 10px; pointer-events: none;">
  <div id="TX">
  </div>
  `);
 const controlContainer = document.createElement('div');
 controlContainer.style.position = 'absolute';
 controlContainer.style.bottom = '-25px';
 controlContainer.style.left = '0';
 controlContainer.style.width = '100vw';
 controlContainer.style.height = '25px';
 controlContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
 controlContainer.style.display = 'flex';
 controlContainer.style.justifyContent = 'center';
 controlContainer.style.alignItems = 'center';
 controlContainer.style.zIndex = '99';
 const startButton = document.createElement('button');
 startButton.textContent = 'StartMutation';
 startButton.id = 'startButton';
 startButton.style.width = '100px';
 startButton.style.height = '25px';
 startButton.style.margin = '5px';
 startButton.style.fontSize = '14px';
 startButton.style.color = 'black';
 startButton.style.cursor = 'pointer';
 startButton.addEventListener('click', () => {
  monitorCaptions();
 });
 const stopButton = document.createElement('button');
 stopButton.textContent = 'Stop';
 stopButton.style.width = '100px';
 stopButton.style.height = '25px';
 stopButton.style.margin = '5px';
 stopButton.style.fontSize = '14px';
 stopButton.style.cursor = 'pointer';
 stopButton.style.color = 'black';
 stopButton.id = 'stopButton';
 // stopButton.addEventListener('click', () => {
 //  observer.disconnect();
 // });
 const justDoit = document.createElement('button');
 justDoit.textContent = 'Just Do It';
 justDoit.style.width = '100px';
 justDoit.style.height = '25px';
 justDoit.style.margin = '5px';
 justDoit.style.fontSize = '14px';
 justDoit.style.cursor = 'pointer';
 justDoit.style.color = 'black';
 justDoit.addEventListener('click', () => {
  just();
 });
 justDoit.style.pointerEvents = 'auto';
 stopButton.style.pointerEvents = 'auto';
 startButton.style.pointerEvents = 'auto';
 controlContainer.appendChild(startButton);
 controlContainer.appendChild(stopButton);
 controlContainer.appendChild(justDoit);
 document.getElementById('TC').appendChild(controlContainer);
};
async function just() {
 const text = document.getElementById('caption-window-1').innerText;
 const { translated, splited } = await transSplitArray(text);
 insertTextBoxes(splited, translated);
};
// createControlButtons();
// insertTextBoxes(texts, translations);
async function doit() {
 ('caption-window-1').innerText;
 createControlButtons();
 };
function monitorCaptions() {
 console.log('monitorCaptions');
 // 監視対象の要素を取得
 const targetNode = document.getElementById('ytp-caption-window-container');
 // オブザーバの設定
 const config = {
  characterData: true,
  childList: true,
  subtree: true
 };
 // コールバック関数の定義
 const callback = async (mutationsList, observer) => {
  for (let mutation of mutationsList) {
   if (mutation.type === 'childList') {
    const text = document.querySelector('.captions-text').textContent;
    // const text = mutation.target.textContent;
    const { translated, splited } = await transSplitArray(text);
    insertTextBoxes(splited, translated);
    console.log(translated, splited);
   }
  }
 };
 // MutationObserverのインスタンスを作成
 const observer = new MutationObserver(callback);
 observer.observe(targetNode, config);
 document.getElementById('stopButton').addEventListener('click', () => {
  observer.disconnect();
 });
 document.getElementById('startButton').addEventListener('click', () => {
  // monitorCaptions(); // Restart the observer if it's stopped
  observer.observe(targetNode, config); // Restart the observer
 });
 };
 doit();
