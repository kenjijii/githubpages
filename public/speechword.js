function clickSpeechWord() {
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


  const speechOnClick = async (event) => {
   const span = event.target;
   function Speech(word) {
    if ('speechSynthesis' in window) {
     const uttr = new SpeechSynthesisUtterance();
     uttr.text = word;
      uttr.lang = "en-US";
      uttr.rate = 1;
     uttr.pitch = 1;
     uttr.volume = 1;
     window.speechSynthesis.speak(uttr);
    }
   };

   if (span.tagName === 'SPAN') {
    Speech(span.textContent);
   }
  };

  document.querySelectorAll('span').forEach(span => {
   span.addEventListener('click', speechOnClick);
  });
 };
};
// 実行する場所↓
// 各自拡張機能とかでどうさせてみてね。
clickSpeechWord();
