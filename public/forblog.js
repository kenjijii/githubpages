// 書き換えないと駄目な場所↓
const API_KEY = '各自で取得して入れてくださいね';
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
 }
}
function clickTranslateWord() {
 document.body.onclick = () => {
  document.body.onclick = null;
  const selection = window.getSelection();
  console.log(selection.anchorNode.data);
  selection.anchorNode.parentElement.style.backgroundColor = '#B9B9B9FF';
  const parents = selection.anchorNode.parentElement;
  const words = parents.innerText.split(' ');
  parents.innerHTML = ''; // Clear the original content
  words.forEach(word => {
   const span = document.createElement('span');
   span.textContent = word + ' '; // Add a space after each word
   parents.appendChild(span);
  });
  const translateOnHover = async (event) => {
   const span = event.target;
   if (span.tagName === 'SPAN' && !span.dataset.translated) {
    const originalText = span.textContent.trim();
    const translated = await deeplTranslate(originalText);
    const translatedText = translated.translations[0].text;
    const translationSpan = document.createElement('span');
    translationSpan.textContent = `${translatedText} `;
    translationSpan.style.fontWeight = 'bold';
    // translationSpan.style.marginLeft = '10px';
    span.appendChild(translationSpan);
    span.dataset.translated = true;
   }
  };
  document.querySelectorAll('span').forEach(span => {
   span.addEventListener('click', translateOnHover);
  });
 };
};
// 実行する場所↓
// 各自拡張機能とかでどうさせてみてね。
clickTranslateWord();
