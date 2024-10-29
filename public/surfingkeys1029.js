// 43a74d8d - 2f77 - 4a6a - 8684 - 84b8f3bcd1bf: fx
// deepel

// helpme
const {
 RUNTIME,
 aceVimMap,
 addSearchAlias,
 cmap,
 imap,
 imapkey,
 getBrowserName,
 getClickableElements,
 getFormData,
 map,
 unmap,
 unmapAllExcept,
 iunmap,
 vunmap,
 mapkey,
 readText,
 removeSearchAlias,
 tabOpenLink,
 vmap,
 vmapkey,
 Clipboard,
 Hints,
 Visual,
 Front
} = api;
settings.hintAlign = "left"
Hints.setCharacters('asdfgwertzxcvb')
Hints.style('font-family: Consolas; font-size: 18px; line-height: 1;');
Hints.style(`
          font-family: monospace;
          font-size: 19px;
          text-transform: lowercase;
          color:black;
          `,
 "text"
);
settings.nextLinkRegex = /((>>|next)|>|›|»|→|次へ|次のページ+)/i
settings.prevLinkRegex = /((<<|prev(ious)?)|<|‹|«|←|前へ|前のページ+)/i
// ---------------------------------------------------------
const shuntNormalKeys = (keys) => keys.forEach((key) => map(`!!${key}`, key))
const unmapNormalKeys = (keys) => keys.forEach((key) => unmap(key))
const unshuntNormalKeys = (keys) => keys.forEach((key) => unmap(`!!${key}`))
// ---------------------------------------------------------
const defaultNormalKeys = ["<Alt-s>", "<Alt-i>", "p", ";ql", "cf", ";m", ";fs", "O", "af", "C", "<Ctrl-h>", "<Ctrl-j>", "<Ctrl-i>", "q", "<Ctrl-Alt-i>", "cS", "cs", "j", "k", "yt", "yT", "g0", "g$", "gx0", "gxt", "gxT", "gx$", "gxx", "E", "R", "<Alt-p>", "<Alt-m>", "on", "gT", "gt", ";u", ";U", "B", "F", "<Ctrl-6>", "S", "D", "sg", "sd", "sb", "se", "sw", "ss", "sh", "sy", "yi", "ys", "yj", "yQ", "yp", "cq", "cc", ";pp", ";pj", "oi", "od", "ob", "oe", "H", "t", "m", "'", "<Ctrl-'>", ";pm", ";e", ";v", "gc", "gk", "gn", ";i", ";j", "cp", ";pa", ";pb", ";pd", ";ps", ";pc", ";cp", ";ap", "gr", ";s", ";ph", ";t", ";dh", ";db", ";yh"];
shuntNormalKeys(defaultNormalKeys);
unmapNormalKeys(defaultNormalKeys);
map("@@", "!!<Alt-s>")
map("@pt", "!!<Alt-i>")
map("@1pt", "!!p")
map(";F", "!!cf")
map("cf", "!!;fs")
map(";u", "!!O")
map("F", "!!af")
map(";mov", "!!<Ctrl-h>")
map(";mou", "!!<Ctrl-j>")
map(";f", "!!q")
map("cc", "!!cS")
map("c;", "!!cs")
map("j", "!!j")
map("s", "!!j")
map("k", "!!k")
// map("w", "!!k")
// map("cw;", "!!w")
map("ty", "!!yt")
map("tY", "!!yT")
map("t0", "!!g0")
map("t$", "!!g$")
map("tx0", "!!gx0")
map("txl", "!!gxt")
map("txr", "!!gxT")
map("tx$", "!!gx$")
map("txx", "!!gxx")
map("txp", "!!gxp")
map("E", "!!E")
map("J", "!!E")
map("R", "!!R")
map("K", "!!R")
map("tp", "!!<Alt-p>")
map("tm", "!!<Alt-m>")
map("tn", "!!on")
map("tgp", "!!gp")
map("t;", "!!<Ctrl-6>")
map("S", "!!S")
map("H", "!!S")
map("D", "!!D")
map("L", "!!D")
map("y@e", "!!yj")
map(";q", "!!cq")
map("@re", "!!;pj")
map("oH", "!!H")
map("a", "!!t")
map("@mk", "!!m")
map("m", "!!'")
map("M", "!!<Ctrl-'>")
map("@md", "!!;pm")
map("@e", "!!;e")
map("gj", "!!;j")
map("@R", "!!gr")
map("@pdf", "!!;s")
map("@ph", "!!;ph")
map("@t", "!!;t")
map("@yh", "!!;yh")
unshuntNormalKeys(defaultNormalKeys);
// ---------------------------------------------------------
unmap("s");
unmap("x");
unmap("p");
unmap("a");
// http://127.0.0.1:5500/surfingkeys.js

mapkey('ymd', "Copy current page's link for markdown", function () {
 const url = new URL(window.location.href);
 var title = window.document.title.replace(/(<|>)/g, '\\$1')
 Clipboard.write(`[${title}](${url.href})`);
});
unmapAllExcept(['w', 's', 'e', 'd', 'f', 'r', 'gg', 'gi', 'J', 'K', 'L', 'H', 'x', 'ysc'], /youtube.com/);
// set theme
settings.theme = `
          .sk_theme {
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
          font-feature-settings: "palt";;
          font-size: 0.93rem;
          background: rgb(30 41 59 / 90%);
          backdrop-filter: blur(5px);
          box-shadow: 0px 2px 10px rgb(0 0 0 / 80%);
          border-radius: 0.5rem;
          color: #abb2bf;
          }
          .sk_theme input {
          font-family: monospace;
          letter-spacing: -0.03em;
          }
          .sk_theme tbody {
          color: #fff;
          }
          .sk_theme input {
          color: #d0d0d0;
          }
          .sk_theme .annotation {
          color: #56b6c2;
          }
          .sk_theme .omnibar_timestamp {
          color: #e5c07b;
          }
          .sk_theme .omnibar_visitcount {
          color: #98c379;
          }
          #sk_omnibar {
          width: 50%;
          left: 25%;
          opacity: 1 !important;
          }
          #sk_omnibar #sk_omnibarSearchArea {
          margin: 1.5rem;
          padding: 0.5rem;
          background-color: hsl(217deg 19% 32% / 90%);
          border-radius: 0.5rem;
          border: 0;
          }
          #sk_omnibar #sk_omnibarSearchResult {
          margin: 0 1.5rem;
          }
          #sk_omnibar #sk_omnibarSearchResult ul li {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          background-color: hsl(215deg 25% 17% / 30%);
          }
          #sk_omnibar #sk_omnibarSearchResult .omnibar_highlight {
          font-weight: bold;
          color: inherit;
          background-color: rgba(255, 255, 0, 0.2);
          }
          #sk_omnibar #sk_omnibarSearchResult ul li.focused {
          background-image: linear-gradient(to right, hsl(239deg 84% 67% / 50%), hsl(199deg 89% 48% / 60%));
          color: #fff;
          }
          #sk_omnibar #sk_omnibarSearchResult li .url {
          color: rgb(56, 189, 248);
          font-weight: normal;
          font-family: monospace;
          letter-spacing: -0.03em;
          font-size: 0.95rem;
          margin-left: 1.45rem;
          }
          #sk_status, #sk_find {
          font-size: 1.25rem;
          }
          #sk_usage > div {
          width: 25%;
          margin-bottom: 2em;
          }
          #sk_usage span.annotation {
          padding-left: 16px;
          }
          #sk_bubble .sk_bubble_content {
          overflow: auto;
          }
          #sk_keystroke {
          background: rgb(30 41 59 / 90%);
          border-radius: 0.5rem 0 0;
          padding: 0.5rem 1rem;
          font-size: 1.25rem;
          }
          #sk_keystroke > div {
          display: flex;
          align-items: center;
          margin: 0.25em 0;
          }
          #sk_keystroke kbd {
          font-size: 1.5rem;
          line-height: 1;
          }
          #sk_keystroke kbd > .candidates {
          color: rgb(219 39 119);
          }
          #sk_keystroke .kbd-span {
          min-width: 2.5rem;
          }
          #sk_keystroke .annotation {
          padding-left: 0.5em;
          color: rgb(125 211 252);
          }
          #sk_keystroke:not(.expandRichHints) {
          font-size: 2rem;
          font-family: monospace;
          }
          #sk_status {
          padding: 4px 12px;
          }
          #sk_status > span {
          line-height: 1;
          display: inline-block;
          border: 0 !important;
          }
          `;


////          otw
mapkey('otw', '#8Open Search with alias tw', function () {
 Front.openOmnibar({ type: 'SearchEngine', extra: 'tw' })
})
addSearchAlias(
 'tf',
 'Twitter フォロワーのみ',
 'https://twitter.com/search?pf=on&q='
)
// Google jp 3ヶ月以内
addSearchAlias(
 '3',
 'Google 3ヶ月以内',
 'https://www.google.co.jp/search?q={0}&tbs=qdr:m3,lr:lang_1ja&lr=lang_ja'
)
// Google jp 10ヶ月以内
addSearchAlias(
 '10',
 'Google 10ヶ月以内',
 'https://www.google.co.jp/search?q={0}&tbs=qdr:m10,lr:lang_1ja&lr=lang_ja'
)
// mercari
addSearchAlias('wbr', 'brave', 'https://search.brave.com/search?q=')
addSearchAlias('wbi', 'bing', 'https://www.bing.com/search?q=')
// Yahoo!リアルタイム検索
mapkey('or', '#8Open Search with alias r', function () {
 Front.openOmnibar({ type: 'SearchEngine', extra: 'r' })
})
// 関数リスト
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
// 数秒待ってから出し分けする
function rakutenFX() {
 fetch('https://cdnjs.cloudflare.com/ajax/libs/bignumber.js/8.0.2/bignumber.min.js?').then(r => { return r.text() }).then(t => {
  // "t"にimport.jsのファイル内容が格納されているので
  eval(t); //その内容を実行する
 });
 // var el = document.createElement("script");
 // el.src = "https://cdnjs.cloudflare.com/ajax/libs/bignumber.js/8.0.2/bignumber.min.js?" + time;
 // document.body.appendChild(el);

 ControlPanel();


 let OrderValue = 1
 let PipsValue = 15
 let Wpips = 4
 let GCurrency = 1;
 let CopyedNum = ''
 let hufu
 const ArrCurrency = ['ドル/円', 'ユーロ/円', 'ポンド/円', '豪ドル/円', 'ユーロ/ドル', 'ポンド/ドル', '豪ドル/ドル', 'メキシコペソ/円', 'NZドル/円', 'ランド/円', 'カナダドル/円', 'スイス/円', 'トルコリラ/円', '人民元/円', 'NZドル/ドル', 'ドル/カナダドル', 'ドル/スイス', 'ポンド/スイス', 'ユーロ/ポンド', 'ユーロ/スイス', '豪ドル/スイス', 'NZドル/スイス', '豪ドル/NZドル', '香港ドル/円', 'SGドル/円', 'Nクローネ/円', 'ユーロ/豪ドル', 'ポンド/豪ドル']
 const newpro = (sec) => {
  return new Promise(resolve => {
   setTimeout(() => {
    resolve();
   }, sec)
  })
 }
 let SellMoney = async (withpip) => {
  const exec = async () => {
   document.querySelector('#nav-order-open > a').click();
   hufu = await newpro(700);
   let local = SetLocalTo()
   // console.log(local)
   local = parseInt(local)
   if (isNaN(local)) {
    local = 1
   }
   if (local != 1) {
    const elem = document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewOpen > div.CurrencyPairTitle > div > div > div');
    const evt = document.createEvent("MouseEvents")
    evt.initEvent("mousedown", false, true)
    elem.dispatchEvent(evt)
    // で発火。tabオープン
    hufu = await newpro(400)
    const targetNode = document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector("body > ul > li:nth-child(" + local + ")");
    const evtT = document.createEvent("MouseEvents")
    evtT.initEvent("mouseup", false, true)
    targetNode.dispatchEvent(evtT)
    console.log(targetNode)
   }
   hufu = await newpro(1000);
   document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewOpen > div.StreamingParam > div:nth-child(1) > div.Quantity10000 > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input').value = OrderValue;
   document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.LossPipsParam > div.LossPipsUseFlag.rtsWidget.rtsWidget-option > div > div.rtsCheckBoxContainer.rtsCheckBoxContainer-option > input').checked = true
   document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.LossPipsParam > div.LossPips > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input').value = PipsValue
   //wingpips
   if (withpip == true) {
    hufu = await newpro(300);
    hufu = await newpro(600);
    document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.ProfitPipsParam > div.ProfitPipsUseFlag.rtsWidget.rtsWidget-option > div > div.rtsCheckBoxContainer.rtsCheckBoxContainer-option > input').checked = true
    document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.ProfitPipsParam > div.ProfitPipsUseFlag.rtsWidget.rtsWidget-option > div > div.rtsCheckBoxContainer.rtsCheckBoxContainer-option > input').click()
    document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.ProfitPipsParam > div.ProfitPips > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input').value = Wpips
    //wingpips
   }
   hufu = await newpro(400);
   document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewOpen > div.BidAskRate.Large > div.part.sell').click()
   hufu = await newpro(1000);
   document.querySelector('#nav-order-close > a').click();
  }
  exec()
 };

 function ControlPanel() {

  const footer = document.body;
  const div = document.createElement('div');
  div.id = 'controlPanel';
  div.style = 'position: fixed; bottom: 0; right: 0; background: #fff; padding: 10px; z-index: 9999;';
  div.innerHTML = `<h5>Control Panel</h5>
   <button id="sellMoney">idf</button>

  <input type="number" id="orderValue" value="0" style="width: 2rem;" />
  <input type="number" id="orderValue2" value="1" style="width: 2rem;" />


  <input type="radio" id="buyOption" name="tradeOption" value="buy" checked>
  <label for="buyOption">Buy</label>
  <input type="radio" id="sellOption" name="tradeOption" value="sell">
  <label for="buyOption">Sell</label>
  <input type="number" id="now" value="1" style="width: 5rem;"step="0.001" />
  <label for="buyOption">now</label>
  <input type="number" id="rikaku" value="0.015" style="width: 5rem;"step="0.001" />
  <label for="rikaku">r</label>
  <input type="number" id="songiri" value="0.7" style="width: 5rem;"step="0.001" />
  <label for="songiri">s</label>

   <button id="buyMoney">Buy Money</button>

   <button id="sellMoneyWithPips">Sell Money With Pips</button>
   <button id="buyMoneyWithPips">Buy Money With Pips</button>`;

  footer.appendChild(div);
 };


 // 買う。そのあと、ｐｔの下を入れる。
 let cutLoss = (callback) => {
  document.querySelector('#nav-order-close > a').click();
  let pt = prompt('何番を切る？', 1)
  if (pt) {

   //ここにあれが入ってるよ。出してもいいね。
   let pst = pt + 1
   const exec = async () => {
    hufu = await newpro(1000)
    let pst = pt - 1
    console.log(pt)
    document.getElementById("mainFrame").contentDocument.querySelector('#setExecQuantityBtn_' + pst + '').click();
    let fh = document.getElementById("mainFrame").contentDocument.querySelector('#frmOrder > div > table > tbody > tr:nth-child(' + pt + ') > td:nth-child(3)')
    document.getElementById("mainFrame").contentDocument.querySelector('#frmOrder > div > table > tbody > tr:nth-child(' + pt + ') > td:nth-child(3)')
    let fx = fh.textContent
    fx = fx.replace(',', '');
    fx = parseInt(fx)
    let frate = document.getElementById("mainFrame").contentDocument.querySelector('#frmOrder > div > table > tbody > tr:nth-child(' + pt + ') > td:nth-child(6)').innerText
    let ftd = document.getElementById("mainFrame").contentDocument.querySelector('#frmOrder > div > table > tbody > tr:nth-child(' + pt + ') > td:nth-child(2)').innerText;
    document.getElementById("mainFrame").contentDocument.querySelector('#setExecQuantityInp_' + pst + '').value = fx;
    document.getElementById("mainFrame").contentDocument.querySelector('#streamingBtn').click();
    hufu = await newpro(600)
    console.log('trying')
    document.getElementById("mainFrame").contentDocument.querySelector(" #main > div > div:nth-child(3)").innerText = frate + ' -go\=n- ' + ftd;
    // hufu = await newpro(1000)
    // document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.sell').click();
    // document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.buy').click();
    // ページ変遷
    // アウェイと
    if (callback) {
     callback();
    }
   }
   exec()
  }
 }
 const decide = async () => {
  document.getElementById("mainFrame").contentDocument.querySelector('#orderChangeListButton > li:nth-child(1) > input[type=image]').click();
  hufu = await newpro(500)
  document.getElementById("mainFrame").contentDocument.querySelector('#orderChangeListButton > li:nth-child(1) > input[type=image]').click();
 }
 const noPaste = async () => {
  alert('aac')
  document.getElementById("mainFrame").contentDocument.querySelector("#text_01").innerText(CopyedNum)
 }
 const noLoose = async () => {
  document.getElementById("mainFrame").contentDocument.querySelector("#text_01").value = CopyedNum
  document.getElementById("mainFrame").contentDocument.querySelector("#text_01").type = 'number'
  document.getElementById("mainFrame").contentDocument.querySelector("#text_01").step = '0.0022'
  document.getElementById("mainFrame").contentDocument.querySelector("#text_01").focus()
 }
 const noLooseO = async () => {
  document.getElementById("mainFrame").contentDocument.querySelector("#text_02").value = CopyedNum
  document.getElementById("mainFrame").contentDocument.querySelector("#text_02").type = 'number'
  document.getElementById("mainFrame").contentDocument.querySelector("#text_02").step = '0.0022'
  document.getElementById("mainFrame").contentDocument.querySelector("#text_02").focus()
 }
 const zen = () => {
  const exec = async () => {
   document.querySelector('#nav-order-closeall > a').click();
   hufu = await newpro(850);
   document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul > li > input[type=image]').click();
   hufu = await newpro(800);
   document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul > li:nth-child(2) > input[type=image]').click();
  }
  exec()
 }
 // ここまでローカルストレージにセットmap1
 const PromptNumberInput = () => {
  const cup = localStorage.getItem('keyName');
  GCurrency = window.prompt(ArrCurrency[cup - 1], cup)
  localStorage.setItem('keyName', GCurrency);
  console.log(GCurrency)
 }
 const SetLocalTo = () => {
  let cup = localStorage.getItem('keyName');
  console.log('cup')
  console.log(cup)
  if (!localStorage.getItem('keyName')) {
   cup = 1;
  }
  return cup
 }
 // タブい開き＜通貨を入力希望
 const insC = () => {
  const elem = document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewOpen > div.CurrencyPairTitle > div > div > div');
  const evt = document.createEvent("MouseEvents")
  evt.initEvent("mousedown", false, true)
  elem.dispatchEvent(evt)
  // で発火。tabオープン
  const targetNode = document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector("body > ul > li:nth-child(" + local + ")");
  const evtT = document.createEvent("MouseEvents")
  evtT.initEvent("mouseup", false, true)
  targetNode.dispatchEvent(evtT)
  console.log(targetNode)
 }
 let getChartPair = () => {
  let NowCurrency = document.querySelector("#titleBar > div:nth-child(3) > div.chartHeaderRow > div:nth-child(2) > div > div").textContent
  const NumCurrency = ArrCurrency.indexOf(NowCurrency)
  alert(NumCurrency + 1 + NowCurrency)
  localStorage.setItem('keyName', NumCurrency + 1);
 }
 let sqIs = (sq) => {
  if (sq == true) {
   return '#text_02'
  } else {
   return '#text_01'
  }
 }
 const SellLossCut = (sq) => {
  /////////////////////////////////sqIs(sq)
  const txt = sqIs(sq)
  // 連続クリック上。
  const exec = async () => {
   document.querySelector('#nav-order-change > a').click();
   hufu = await newpro(280)
   document.getElementById("mainFrame").contentDocument.querySelector('#orderChangeListData > tbody > tr:nth-child(1) > td:nth-child(1) > input[type=checkbox]:nth-child(1)').click();
   hufu = await newpro(400)
   document.getElementById("mainFrame").contentDocument.querySelector('#orderChangeListButton > li:nth-child(1) > input[type=image]').click();
   // 最初変数作り
   hufu = await newpro(500)
   // 売り完成
   let NowVal = document.getElementById("mainFrame").contentDocument.querySelector(txt).value;
   NowVal.replace(',', '.');
   NowVal = (NowVal * 1000) - 100;
   const low = [...Array(10)].map((_, i) => (((i) * 10) + (NowVal)) / 1000)
   console.log(low)
   // hufu=await newpro(200)
   for (let i = 0; i < 12; i++) {
    try {
     if ((i % 2) === 0) {
      console.log('i/2')
      console.log(i / 2)
      hufu = await newpro(400)
      document.getElementById("mainFrame").contentDocument.querySelector(txt).value = low[i / 2];
     }
     hufu = await newpro(100)
     document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
     console.log('e');
     console.log(i);
    } catch (e) {
     console.log(e)
     console.log('error')
    }
   }
  }
  exec();
 }
 const BuyLossCut = (sq) => {
  const txt = sqIs(sq)
  /////////////////////////////////iii
  // 連続クリック上。
  const exec = async () => {
   document.querySelector('#nav-order-change > a').click();
   hufu = await newpro(280)
   document.getElementById("mainFrame").contentDocument.querySelector('#orderChangeListData > tbody > tr:nth-child(1) > td:nth-child(1) > input[type=checkbox]:nth-child(1)').click();
   hufu = await newpro(400)
   document.getElementById("mainFrame").contentDocument.querySelector('#orderChangeListButton > li:nth-child(1) > input[type=image]').click();
   hufu = await newpro(50)
   // 最初変数作り
   hufu = await newpro(500)
   // かい完成
   let NowVal = document.getElementById("mainFrame").contentDocument.querySelector(txt).value;
   NowVal.replace(',', '.');
   NowVal = (NowVal * 1000) + 100;
   const low = [...Array(18)].map((_, i) => (((i) * -10) + (NowVal)) / 1000)
   console.log(low)
   // hufu=await newpro(200)
   for (let i = 0; i < 20; i++) {
    try {
     if ((i % 2) === 0) {
      console.log('i/2')
      console.log(i / 2)
      hufu = await newpro(400)
      document.getElementById("mainFrame").contentDocument.querySelector(txt).value = low[i / 2];
     }
     hufu = await newpro(100)
     document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
     console.log('e');
     console.log(i);
    } catch (e) {
     console.log(e)
     console.log('error')
    }
   }
  }
  exec();
 }
 let Teiyaku;
 const copyPaste = (zanki) => {
  let NumOfCP = 1
  NumOfCP = prompt('どれを建値をコピペするか', NumOfCP)
  NumOfCP = NumOfCP - 1;


  const exec = async () => {
   // ユーザーがキャンセルボタンをクリックする場合、この関数は、 null を返します
   document.querySelector('#nav-order-change > a').click();
   hufu = await newpro(700)
   let ag = [...document.getElementById("mainFrame").contentDocument.querySelectorAll('.align-R>div:nth-child(2)')].map((c) => c.textContent);
   console.log(ag)

   const nP = ag.filter(c => c != ' ');
   console.log(nP[NumOfCP])
   hufu = await newpro(20)
   document.getElementById("mainFrame").contentDocument.getElementsByName('checkBoxArr[' + NumOfCP + ']')[0].checked = true
   hufu = await newpro(700)
   document.getElementById("mainFrame").contentDocument.querySelector('#orderChangeListButton > li:nth-child(1) > input[type=image]').click();
   hufu = await newpro(700)
   if (zanki == true) {
    Teiyaku = nP[NumOfCP]
   } else {
    let t02Ari
    t02Ari = document.getElementById("mainFrame").contentDocument.querySelector('#text_02')
    if (t02Ari != null) {
     t02Ari.value = nP[NumOfCP]
    } else {
     console.log('appeal')
     document.getElementById("mainFrame").contentDocument.querySelector('#text_01').value = nP[NumOfCP]
    }
    hufu = await newpro(70)
    document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
    hufu = await newpro(700)
    document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
    // else内でコピペして処理してる。
   }
  }

  if (NumOfCP == -1) {
   return false;
  } else {
   exec();
  }


 }
 mapkey('pc', "チャートから取得する", function () {
  // map1
  // 取得fromchart
  getChartPair()
 })
 mapkey('qe', "入れ込むる", function () {
  // map1
  // 取得fromchart
  insC()
 })
 mapkey('qc', "どの国？", function () {
  PromptNumberInput(GCurrency)
 })
 mapkey('ppl', 'pips', function () {
  PipsValue = prompt('損失幅', PipsValue)
 })
 mapkey('ppw', 'pips', function () {
  Wpips = prompt('利幅', Wpips)
 })
 mapkey('sb', '買う', function () {
  buyMoney('buy')
 });
 mapkey('ss', '売る', function () {
  buyMoney('sell')
 });
 document.getElementById('sellMoney').addEventListener('click', function () {
  execidf()
 }
 );

 const execidf = async (buy) => {



  // 現在値が取得する必要があるため、必ず、それまで行く
  // いってきて、必ずとれる
  document.querySelector('#nav-order-open>a').click();
  await sleep(2000)

  document.getElementById("mainFrame").contentDocument.querySelector('li.order:nth-child(6) > a').click();
  await sleep(2000);
  const firstPrice = document.getElementById("mainFrame").contentDocument.querySelector('#text_01').value;
  // firstprice 
  document.getElementById("now").value = firstPrice;
  document.getElementById("mainFrame").contentDocument.getElementById('amount1').value = document.getElementById("orderValue").value;
  document.getElementById("mainFrame").contentDocument.getElementById('amount2').value = document.getElementById("orderValue2").value;
  // 数入れ

  const text01 = document.getElementById("mainFrame").contentDocument.getElementById('text_01');
  const text02 = document.getElementById("mainFrame").contentDocument.getElementById('text_02');
  const text03 = document.getElementById("mainFrame").contentDocument.getElementById('text_03');
  text01.classList.remove('clear-default');
  text02.classList.remove('clear-default');
  text03.classList.remove('clear-default');
  // document.getElementById("mainFrame")./contentDocument.getElementById('selectValidity_0');
  // document.getElementById("mainFrame").contentDocument.getElementById('selectValidity_1');

  // document.getElementById("mainFrame").contentDocument.getElementById('selectValidity_0');
  document.getElementById("mainFrame").contentDocument.querySelector('#selectValidity_2').checked = true
  document.getElementById("mainFrame").contentDocument.querySelector('#selectValidity2_2').checked = true

  const sl1 = document.getElementById("mainFrame").contentDocument.getElementById('selectBuySell_01');
  const sl2 = document.getElementById("mainFrame").contentDocument.getElementById('selectBuySell_02');
  const g1 = document.getElementById("mainFrame").contentDocument.getElementById('selectExecCond_0');
  const g2 = document.getElementById("mainFrame").contentDocument.getElementById('selectExecCond_1');
  const urikai = document.getElementById("sellOption").checked ? true : false;
  urikai ? sl1.checked = true : sl2.checked = true;
  if (document.getElementById("now").value.length < 3) {
   const clipboardData = await navigator.clipboard.readText();

   console.log(clipboardData);

   const copiedPrice = !isNaN(parseFloat(clipboardData)) ? parseFloat(clipboardData) : 149.9;
   console.log(copiedPrice);

   const copiedPriceNum = parseFloat(copiedPrice);
   document.getElementById("now").value = copiedPriceNum;
  }
  // now
  const text = document.getElementById("now").value;
  text01.value = text;

  if (Number(firstPrice) < Number(text)) {
   // 買いの時、逆止
   urikai ? g1.checked = true : g2.checked = true;
  } else {
   urikai ? g2.checked = true : g1.checked = true;
  };


  const ri = document.getElementById("rikaku").value;
  const son = document.getElementById("songiri").value;

  let text02in = urikai ? BigNumber(text).minus(BigNumber(son)) : BigNumber(text).plus(BigNumber(son));

  let text03in = urikai ? BigNumber(text).plus(BigNumber(ri)) : BigNumber(text).minus(BigNumber(ri));

  text02.value = text02in.toString()
  text03.value = text03in.toString()

 };


 mapkey('sz', '買う', function () {




  execidf(true);
 });


 mapkey('sx', '売る', function () {
  execidf();
 });
 mapkey('splb', '買う', async function () {
  buyMoney(true)
  hufu = await newpro(4000)
  BuyLossCut(true)
 });
 mapkey('spls', '売る', async function () {
  SellMoney(true)
  hufu = await newpro(4000)
  SellLossCut(true)
 });
 mapkey('sppp', '売る', async function () {
  SellLossCut(true)
 });
 mapkey('slb', '買う', async function () {
  buyMoney()
  hufu = await newpro(4000)
  await BuyLossCut()
 });
 mapkey('sls', '売る', async function () {
  SellMoney()
  hufu = await newpro(4000)
  await SellLossCut()
 });
 mapkey('xx', '何を切る？', function () {
  cutLoss()
 });
 mapkey('xc', '選択コピーペースト', function () {
  copyPaste()
 });
 mapkey('aai', '愛が止まらない', function () {
  noLoose()
 });
 mapkey('aac', 'text2', function () {
  noLooseO()
 });
 mapkey('ad', 'text2', function () {
  decide()
 });
 mapkey('aad', 'text2', function () {
  noLooseO()
 });
 // mapkey('aad', '貼り付ける。', function () {
 //     noPaste2()
 // });
 mapkey('z', 'oco選択コピーペースト', async function () {
  copyPaste(true)
  await sleep(2400);
  await modaq();
  console.log('sleepdone')
 });
 mapkey('aaa', "全決済注文　ぜんぶ決済ボタン", function () {
  zen()
 })
 mapkey('ps', 'priod saver', function () {
  let plusAlpha = window.prompt('プラス', 0.05)
  let nowplay = document.getElementById("mainFrame").contentDocument.querySelector("#text_01").value
  nowplay = nowplay * 1000
  nowplay = parseInt(nowplay)
  nowplay = nowplay + plusAlpha
  alert(nowplay)
  document.getElementById("mainFrame").contentDocument.querySelector("#text_01").value = nowplay
  console.log(nowplay)
 })
 mapkey('sqs', '売り１０', function () {
  SellLossCut();
 });
 mapkey('sqb', '買い少な目切り', function () {
  BuyLossCut();
 });
 mapkey('xt', '照会', async function () {
  document.getElementById("nav-inquiry").click();
  sleep(1000);
  document.querySelector('#nav-inquiry-execution > a:nth-child(1)').click();
 });
 async function keypress_ivent(e) {
  const buysel1 = document.getElementById("mainFrame").contentDocument.querySelector('#selectBuySell_01');
  const bana01 = document.querySelector('#bana_01');
  const bana02 = document.querySelector('#bana_02');
  const bana03 = document.querySelector('#bana_03');
  const text01 = document.getElementById("mainFrame").contentDocument.querySelector("#text_01");
  const text02 = document.getElementById("mainFrame").contentDocument.querySelector("#text_02");
  const text03 = document.getElementById("mainFrame").contentDocument.querySelector("#text_03");
  if (e.key === 'Enter' || e.key === 'Escape') {
   // エスケープ追加
   //Aキーが押された時の処理
   // 分岐　３まで。
   document.getElementById("myModal").style.visibility = "hidden";
   document.getElementById("myModal").style.opacity = 0;
   if (text03 != null) {
    text03.value = bana03.value
    text02.value = bana02.value
    text01.value = bana01.value
    // さしぎゃくさし
    // 指値逆差
    let sa1 = document.getElementById("mainFrame").contentDocument.querySelector('#selectExecCond_0');
    let sa2 = document.getElementById("mainFrame").contentDocument.querySelector('#selectExecCond_1');
    let sasiB = document.getElementById("sasiB");
    let gyakB = document.getElementById("gyakB");
    let buyB = document.getElementById("buyB");
    if (buyB.checked == true) {
     document.getElementById("mainFrame").contentDocument.querySelector('#selectBuySell_02').checked = true
    } else {
     document.getElementById("mainFrame").contentDocument.querySelector('#selectBuySell_01').checked = true
    }
    if (sa1.checked) {
     document.getElementById("mainFrame").contentDocument.querySelector('#selectExecCond_0').checked = true
    } else {
     document.getElementById("mainFrame").contentDocument.querySelector('#selectExecCond_1').checked = true
    }
    //購入数
    document.getElementById("mainFrame").contentDocument.querySelector('#amount1').value = document.querySelector('#bana_04').value;
    // たぶん期限
    document.getElementById("mainFrame").contentDocument.querySelector('#selectValidity_2').checked = true
    document.getElementById("mainFrame").contentDocument.querySelector('#selectValidity2_2').checked = true
    //購入数
    document.getElementById("mainFrame").contentDocument.querySelector('#amount1').value = document.querySelector('#bana_04').value;
   } else if (text02 != null) {
    text02.value = bana02.value
    text01.value = bana01.value
   } else {
    text01.value = bana01.value
   }
   document.removeEventListener('keypress', keypress_ivent);
   window.removeEventListener('click', windowRemove);
   if (e.key === 'Enter') {
    document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:last-child > input[type=image]').click();
    hufu = await newpro(700)
    console.log('async 400')
    document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:last-child > input[type=image]').click();
    hufu = await newpro(700)
    document.querySelector('#nav-order-close > a').click();
   }
  } else if (e.key === 'z') {
   console.log(e.target.id)
   e.target.step *= 0.1;
  } else if (e.key === 'x') {
   e.target.step *= 10;
   console.log('right')
  } else if (e.key === 'y') {
   console.log(bana01.value)
   alert(e.target.value)
  } else if (e.key === 'c') {
   console.log('c')
   document.getElementById("mainFrame").contentDocument.querySelector("#text_01").value = CopyedNum;
   console.log(CopyedNum)
  } else if (e.key === 'l') {
   // 指値逆差
   let sa1 = document.getElementById("mainFrame").contentDocument.querySelector('#selectExecCond_0');
   let sa2 = document.getElementById("mainFrame").contentDocument.querySelector('#selectExecCond_1');
   let sasiB = document.getElementById("sasiB");
   let gyakB = document.getElementById("gyakB");
   let buyB = document.getElementById("buyB");
   // 売り買い
   let bana = bana01.value * 1000;
   console.log(bana)
   if (buyB.checked) {
    console.log('buy')
    console.log(bana)
    console.log(buyB)
    console.log(text01.value)
    console.log(bana01.value)
    // 買いで
    if (text01.value < bana01.value) {
     // 今の値段が、設定値より高い
     sa1.checked = true;
     sasiB.checked = true;
     // 指値にチェック
    } else {
     // 今の値段が、設定値より低い
     sa2.checked = true;
     gyakB.checked = true;
     // 逆指値にチェック
    }
    bana02.value = (bana + 500) / 1000;
    // 利益値
    bana03.value = (bana - 500) / 1000;
    // 逆指値
   } else {
    console.log('sel')
    console.log(bana)
    console.log(buyB)
    console.log(text01.value)
    console.log(bana01.value)
    // 売り
    if (text01.value > bana01.value) {
     // 今の値段が、設定値より低い
     sa2.checked = true;
     sasiB.checked = true;
     // 指値にチェック
    } else {
     // 今の値段が、設定値より低い
     sa1.checked = true;
     gyakB.checked = true;
     // 逆指値にチェック
    }
    bana03.value = (bana + 500) / 1000;
    // 利益値
    bana02.value = (bana - 500) / 1000;
    // 逆指値
   }
   // 逆指値\
   // 売り買い
   if (buyB.checked) {
    document.getElementById("buyB").checked = true;
   } else {
    document.getElementById("sellB").checked = true;
   }
   // さしぎゃくさし
   // 売り買い
   // 逆指
   // hufu = await newpro(300)
   // console.log(bana)
   // console.log(b01)
   // bana01.value = 99.999;
   // text01.value = bana01.value;
  } else if (e.key === 'g') {
   // 売り買い
   if (buyB == true) {
    document.getElementById("mainFrame").contentDocument.querySelector('#selectBuySell_02').checked = true
   } else {
    document.getElementById("mainFrame").contentDocument.querySelector('#selectBuySell_01').checked = true
   }
   // さしぎゃくさし
   // 指値逆差
   let sa1 = document.getElementById("mainFrame").contentDocument.querySelector('#selectExecCond_0');
   let sa2 = document.getElementById("mainFrame").contentDocument.querySelector('#selectExecCond_1');
   let sasiB = document.getElementById("sasiB");
   let gyakB = document.getElementById("gyakB");
   let buyB = document.getElementById("buyB");

   //購入数
   document.getElementById("mainFrame").contentDocument.querySelector('#amount1').value = document.querySelector('#bana_04').value;
   // たぶん期限
   document.getElementById("mainFrame").contentDocument.querySelector('#selectValidity_2').checked = true
   document.getElementById("mainFrame").contentDocument.querySelector('#selectValidity2_2').checked = true
  }
  return false;
 }
 let golive = (bl) => {
  let fogMonkey;
  fogMonkey = document.getElementById("mainFrame").contentDocument.getElementById("error-message-order").innerText;
  fogMonkey = fogMonkey.slice(5)
  if (fogMonkey.includes('から')) {
   const migi = fogMonkey.split('から')[0].replace(/[^0-9^\\.]/g, '')
   const hida = fogMonkey.split('から')[1].replace(/[^0-9^\\.]/g, '')
   const blance = (migi * 1000) - (hida * 1000)
   if (bl == true) {
    if (blance < 0) {
     return migi;
    } else {
     return hida;
    }
   } else {
    if (blance < 0) {
     return hida;
    } else {
     return migi;
    }
   }
  }
  else {
   return 0;
  }
 }
 // キーログ
 let windowRemove = async (event) => {
  console.log('its living')
  let modal = document.getElementById("myModal")
  if (event.target == modal) {
   console.log('modaled')
   modal.style.visibility = "hidden";
   modal.style.opacity = 0;
   let somehtinggood = document.querySelector('#bana_01').value;
   document.getElementById("mainFrame").contentDocument.querySelector("#text_01").value = somehtinggood;
   document.removeEventListener('keypress', keypress_ivent);
   window.removeEventListener('click', windowRemove);
   document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul > li:nth-child(2) > input[type=image]').click();
  }
  return false;
 }
 let askbid = () => {
  let bid;
  bid = document.getElementById("mainFrame").contentDocument.querySelector(".bid");
  let ask;
  ask = document.getElementById("mainFrame").contentDocument.querySelector(".ask");
  if (bid != null) {
   return '買い↓'
  } else if (ask != null) {
   return '売り↑'
  } else {
   return 'どっちもない'
  }
 }
 const modaq = async () => {
  console.log('modaqed')
  let sorrys;
  sorrys = document.getElementById("mainFrame").contentDocument.querySelector("#text_01");
  let t02Ari;
  t02Ari = document.getElementById("mainFrame").contentDocument.querySelector('#text_02');
  let t03Ari;
  t03Ari = document.getElementById("mainFrame").contentDocument.querySelector('#text_03');
  if (sorrys !== null) {
   if (typeof flag === 'undefined') {
    flag = true;
    (async () => {
     const cssUrl = 'https://kenjijii.github.io/surfinbookmark/input.css?f'
     fetch('https://kenjijii.github.io/surfinbookmark/modal.html?ssss') //ロード元URL
      .then(data => data.text())
      .then(html => document.body.insertAdjacentHTML('beforeend', html))
     var link = await document.createElement('link');
     link.rel = 'stylesheet';
     link.href = cssUrl;
     link.type = 'text/css';
     document.head.after(link);
    })()
    hufu = await newpro(300);
   } else {
    // alert('twoside')
    document.getElementById("myModal").style.visibility = "visible";
    document.getElementById("myModal").style.opacity = 1;
   }
   // text2 3があるかのチェックで分岐　表示の変更
   // 初期表示の設定
   // 2,3はあるか
   hufu = await newpro(300);
   const bana01 = document.querySelector('#bana_01');
   const bana02 = document.querySelector('#bana_02');
   const bana03 = document.querySelector('#bana_03');
   hufu = await newpro(500);
   bana01.step = '0.002';
   bana02.step = '0.002';
   bana03.step = '0.002';
   bana01.value = Teiyaku;
   bana02.value = '';
   bana03.value = '';
   // if (buyB .checked) {
   //     document.getElementById("buyB").checked = true;
   // } else {
   //     document.getElementById("sellB").checked = true;
   // }
   // hufu = await newpro(100);
   if (t03Ari != null) {
    bana01.value = sorrys.value;
    bana02.value = t02Ari.value;
    bana03.value = t03Ari.value;
   } else if (t02Ari != null) {
    document.getElementById("turu02").innerText = askbid();
    document.getElementById("turu01").innerText = '利';
    bana01.value = sorrys.value;
    if (golive() == 0) {
     bana01.value = t02Ari.value;
    } else {
     if (askbid() == '買い↓') {
      bana01.value = golive();
     } else {
      bana01.value = golive(true);
     }
    }
    // hufu = await newpro(400);
    bana02.focus();
   } else {
    document.getElementById("turu01").innerText = askbid();
    hufu = await newpro(400);
    bana01.focus();
    if (golive() == 0) {
     // bana01.value = sorrys.value;
    } else {
     if (askbid() == '買い↓') {
      bana01.value = golive();
     } else {
      bana01.value = golive(true);
     }
    }
   };
   // const bana04 = document.querySelector('#bana_04');
   document.getElementById("mainFrame").contentDocument.querySelectorAll(".clear-default").forEach((item) => { item.classList.remove('clear-default') });
   window.addEventListener('click', windowRemove);
   document.addEventListener('keypress', { name: 'peace', handleEvent: keypress_ivent });
   // document.getElementById("turu").innerHTML = douk;
  }
 };
 mapkey('qq', 'aag', function () {
  modaq();
 });
 mapkey('s5', "ifo", async function () {
  document.querySelector("#nav-order-open > a").click()
  hufu = await newpro(600)
  document.getElementById("mainFrame").contentDocument.querySelector("#frm > ul > li:nth-child(6) > a").click()
 });
 mapkey("s7", "chart Open New Window", function () {
  window.open("https://fx.rakuten-sec.co.jp/web/PIATT/chart.html?2.5", '', 'width=800, height=720');
 });
 mapkey('aaz', "もダル消す", async function () {
  document.getElementById("myModal").style.visibility = "hidden";
  document.getElementById("myModal").style.opacity = 0;
 });
 mapkey('az', "fromU", function () {
  document.querySelector('#bana_01').value = document.getElementById("mainFrame").contentDocument.querySelector('#text_01').value;

 })
 mapkey('po', "paddingtop ", async function () {
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.sell').click();
 });
 mapkey('pi', "paddingtop ", async function () {
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.buy').click();
 });
 mapkey('pn', "paddingtop ", async function () {
  // document.querySelector('body').style.paddingTop = '100px'
  try {
   document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
   document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
   document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
   document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
  } catch (error) {
   document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.sell').click();
   document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.buy').click();
  } finally {
   document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.sell').click();
   document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.buy').click();
   document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
   document.getElementById("mainFrame").contentDocument.querySelector('#frm > ul.nav-btn-01.roll > li:nth-child(2) > input[type=image]').click();
  }
 });
 mapkey('qz', "提示された条件で。", async function () {
  let Art1 = document.getElementById("mainFrame").contentDocument.querySelector("#text_01");
  let Art2 = document.getElementById("mainFrame").contentDocument.querySelector("#text_02");
  if (Art2 == null) {
   if (askbid() == '買い↓') {
    Art1.value = golive();
   } else {
    Art1.value = golive(true);
   }
  } else {
   if (askbid() == '買い↓') {
    Art2.value = golive();
   } else {
    Art2.value = golive(true);
   }
  }
 });
 mapkey('pz', "提示された条件で。", async function () {
  document.getElementById("mainFrame").contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.sell').click();
  document.getElementById("mainFrame").contentDocument.querySelector('body > div > div.BidAskRate.Large > div.part.sell').click();
 });
 unmap(';t')


 mapkey('cz', 'csschange', () => {
  const CastCss = document.createElement('style')
  CastCss.innerText = "* { background-color: white!important;color:#000!important;font-weight:bold!important}a{color:#000!important;text-decolation:underline!important}"
  document.head.appendChild(CastCss)
 })
 // document.getElementsByTagName('figure')[10].scrollIntoView()
 mapkey('cx', 'csschange', () => {
  const CastCss = document.createElement('style')
  CastCss.innerText = "* { background-color: #000!important;color:#fff!important;font-weight:bold!important}a{color:#fff!important;text-decolation:underline!important}"
  document.head.appendChild(CastCss)
 })
 mapkey('cb', 'csschange', () => {
  document.head.appendChild(document.createElement('style').innerText = "* { font-weight:bold!important}")
 })
 // testing
 mapkey('s1', "新規注文", function () {
  document.querySelector('#nav-order-open > a').click();
 });
 mapkey('s2', "決済注文", function () {
  document.querySelector('#nav-order-close > a').click();
 });
 mapkey('s3', "訂正・取り消し注文", function () {
  document.querySelector('#nav-order-change > a').click();
 });
 mapkey('s4', "全決済注文", function () {
  document.querySelector('#nav-order-closeall > a').click();
 });
 //数量ボタン
 const NoB = () => {
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewOpen > div.StreamingParam > div:nth-child(1) > div.Quantity10000 > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input').value = OrderValue;
 };
 mapkey('qt', 'qt数量', function () {
  OrderValue = prompt('数量', OrderValue);
  NoB();
 })
 // 利益率pips
 const ProfitMargin = async (m) => {
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('input.rtsCheckBox').checked = true;
  // 利益幅check
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector("body > div > div.StreamingNewClose > div.ProfitPipsParam > div.ProfitPips > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input").disabled = false;
  // 利益幅の入力欄を有効化
  await new Promise(resolve => setTimeout(resolve, 500))
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector("body > div > div.StreamingNewClose > div.ProfitPipsParam > div.ProfitPips > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input").value = m;
  // 利益幅の入力欄に値を入れる
 };
 let Pmoney = 5
 // 利益率pips
 // 損失幅pips
 const LossM = async (m) => {
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.LossPipsParam > div.LossPipsUseFlag.rtsWidget.rtsWidget-option > div > div.rtsCheckBoxContainer.rtsCheckBoxContainer-option > input').checked = true
  // 損失幅check
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.LossPipsParam > div.LossPips > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input').disabled = false;
  // 損失幅の入力欄を有効化
  await new Promise(resolve => setTimeout(resolve, 500))
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.LossPipsParam > div.LossPips > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input').value = m;
  //wingpips
  // 損失幅の入力欄に値を入れる
  // 利益幅の入力欄に値を入れる
 };
 let LMoney = 15
 // 損失幅pips
 const buyButton = () => {
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('div.part.buy').click()
  // 売る
 };
 const sellButton = () => {
  document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('div.part.sell').click()
  // 売る
 };
 const imgUpdate = () => {
  document.getElementById("mainFrame").contentDocument.querySelector('#img_update').click()
  // reload
 };
 mapkey('qb', 'buyButton', function () {
  buyButton();
 });
 mapkey('qs', 'buyButton', function () {
  sellButton();
 });
 mapkey('sr', 'imgupdate', function () {
  imgUpdate();
 });
 mapkey('qp', 'profitmargin', function () {
  Pmoney = prompt('profit', Pmoney);
  ProfitMargin(Pmoney);
 })
 mapkey('ql', 'LossM', function () {
  LMoney = prompt('損失幅', LMoney);
  LossM(LMoney);
 })
 mapkey('ql', 'LossM', function () {
 })
 // ストリーミング
 // ASストリーミング
 // リーブオーダー
 // OCO
 // IFD
 // IFO
 const buyMoney = async (buy) => {
  const exec = async () => {
   const strep = document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('.spread').innerText;
   const od = await document.getElementById("mainFrame").contentDocument.querySelector('h2.hdg-l2-01').innerText;
   console.log(od)
   if (!od.includes('ストリーミング')) {
    document.querySelector("#nav-order > a").click();
    hufu = await newpro(1200)
   }
   const dL = await document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.LossPipsParam > div.LossPipsUseFlag.rtsWidget.rtsWidget-option > div > div.rtsCheckBoxContainer.rtsCheckBoxContainer-option > input').checked;
   if (!dL) {
    // まだチェックしてないなら
    document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewOpen > div.StreamingParam > div:nth-child(1) > div.Quantity10000 > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input').value = OrderValue;
    document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.LossPipsParam > div.LossPipsUseFlag.rtsWidget.rtsWidget-option > div > div.rtsCheckBoxContainer.rtsCheckBoxContainer-option > input').checked = true
    document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.LossPipsParam > div.LossPipsUseFlag.rtsWidget.rtsWidget-option > div > div.rtsCheckBoxContainer.rtsCheckBoxContainer-option > input').click
    document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('body > div > div.StreamingNewClose > div.LossPipsParam > div.LossPips > div > div.rtsStepperText.rtsStepperText-option.rtsWidget.rtsWidget-option > input').value = LMoney
   }
   hufu = await newpro(400);
   let yesno;
   if (strep == '0.2') {
    yesno = true;
   } else {
    // yesno = window.confirm('kauno');
   }
   if (yesno) {
    if (buy == 'buy') {
     let fword = document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('div.part.buy')
     document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('div.part.buy').click()
     hufu = await newpro(1000);
     document.querySelector('#nav-order-close > a').click();
    } else {
     document.getElementById("mainFrame").contentDocument.getElementById('orderFlashPanel').contentDocument.querySelector('div.part.sell').click()
     hufu = await newpro(1000);
     document.querySelector('#nav-order-close > a').click();
    }
   }
  }
  exec()

 };
 mapkey('qk', 'rakuten', function () {
  history.go(-1)
 })
 mapkey('qv', 'rakuten', function () {
  top.focus()
 })
 mapkey('qp', 'rakuten', function () {
  unmap("r");
  mapkey('r', 'rakuten', function () {
   document.getElementById("mainFrame").contentDocument.querySelector('#img_update').click();
  });
 })
};
//// qx
mapkey('qx', 'Choose a tab with omnibar', function () {
 RUNTIME('getSettings', {
  key: 'sessions'
 }, function (response) {
  console.log(response)
  var blob = new Blob([response], { type: 'text/plain' });
  // ファイルを自動でダウンロードする
  var element = document.createElement("a");
  element.download = 'filename.txt';
  element.href = window.URL.createObjectURL(blob);
  element.click();
 });
})
mapkey('Ts', 'Choose a tab with omnibar', function () {
 // api.Front.openOmnibar({ type: "Tabs" });
 tabOpenLink("/pages/options.html");
 RUNTIME("openLink", {
  tab: {
   tabbed: tabbed,
   active: active
  },
  url: getHref('https://www.google.com/')
 });
 tabOpenLink('https://www.google.com/');
 RUNTIME("openLink", {
  tab: {
   tabbed: tabbed,
   active: active
  },
  url: 'https://drrrkari.com/'
 });
 RUNTIME('getSettings', {
  key: 'sessions'
 }, function (response) {
  console.log(response)
 });
});
const options = {
 lang: 'JA',
 body: 'こんにちは！',
 tag: 'test',
 data: 'このデータは何に使う？',
 icon: 'https://drrrkari.com/css/icon_girl.png'
};
// windowを一つにまとめる。
// 出し分け
const time = new Date().getTime();
(async () => {
 switch (location.href) {

  case 'https://fx.rakuten-sec.co.jp/web/top.action':
   rakutenFX();
   break;


  case location.href.startsWith('https://raw1001.net/manga/') && location.href: {
   mapkey('zz', 'dddddddtab', function () {
    scrollBy(0, 789.317);
   });
   mapkey('za', 'dddddddtab', function () {
    scrollBy(0, -789.317);
   });
  }
  case location.href.startsWith('https://www.youtube.com/') && location.href: {
   mapkey('qw', '2こ戻す', async function () {
    useYoutubeSpeakWords(2);
   });
   mapkey('qe', '3こ戻す', async function () {
    useYoutubeSpeakWords(3);
   });


   // mapkey('qt', '戻す', async function () {
   //  useYoutubeSpeakWords()
   // });

   mapkey('qa', 'オール翻訳音声', function () {
    translateYoutube();
   });


  }
  // youtube用
 }
})();




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
 }
}

const tranceExchange = async (word) => {
 const SelectNode = window.getSelection().anchorNode.parentElement;
 const text = SelectNode.textContent;
 const reWord = await deeplTranslate(text);
 const translatedDiv = document.createElement('div');
 translatedDiv.textContent = reWord.translations[0].text;
 SelectNode.append(translatedDiv);

 // SelectNode.append(reWord.translations[0].text);
};

async function translateYoutube() {
 const player = document.querySelector('#movie_player > div:nth-child(1) > video:nth-child(1)');
 player.pause();
 const text = document.getElementById('caption-window-1').innerText;
 const reWord = await deeplTranslate(text);
 const uttr = new SpeechSynthesisUtterance(reWord.translations[0].text);
 speechSynthesis.speak(uttr)
 // speechSynthesis.speaking /
 uttr.onend = function (event) {
  player.play();
 }
};



let flag = true;
mapkey('td', 'click word mode', async function () {
 if (flag) {
  flag = false;
  document.body.onclick = async () => {
   const selection = window.getSelection();
   console.log(selection.anchorNode);
   const reWord = await deeplTranslate(selection.anchorNode.data);
   selection.anchorNode.parentElement.style.
    backgroundColor = 'lightgray';
   let span = document.createElement('span');
   span.style.fontWeight = 'normal';
   span.textContent = reWord.translations[0].text;
   selection.anchorNode.parentElement.append(span);
  }
 } else {
  document.body.onclick = null;
  flag = true;
 }

});

mapkey('tr', 'select or word', async function () {
 const selection = document.getSelection();
 if (selection != '') {
  let spanT = document.createElement('span');
  spanT.style.fontWeight = 'bold';
  spanT.textContent = selection.toString();
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(spanT);
  const reWord = await deeplTranslate(selection);
  let span = document.createElement('span');
  span.style.fontWeight = 'bold';
  span.textContent = selection.toString() + " " + reWord.translations[0].text;
  selection.anchorNode.parentElement.append(span);
 } else {
  const selection = window.getSelection();
  console.log(selection.anchorNode.data);
  selection.anchorNode.parentElement.style.
   backgroundColor = 'lightgray';


  const parents = selection.anchorNode.parentElement.innerText;

  const rewordArray = parents.split(' ');

  for (const w of rewordArray) {
   const reWord = await deeplTranslate(w);
   let span = document.createElement('span');
   span.style.fontWeight = 'bold';
   span.style.border = '1px solid black';
   span.innerHTML = `${w}<span style="font-weight: normal;"> ${reWord.translations[0].text}</span>`;
   selection.anchorNode.parentElement.append(span);
  }




 };
});
vunmap('q');
vunmap('t');
vunmap('tr');
vmapkey('q', 'kensaku', async function () {
 const selection = window.getSelection();
 console.log(selection.anchorNode);
 const reWord = await deeplTranslate(selection.anchorNode.data);
 console.log(reWord.translations[0].text);
 selection.anchorNode.parentElement.append(reWord.translations[0].text);
 // alert(reWord)
});



function buttons() {
 return new Promise((resolve) => {
  const buttonContainer = document.createElement('div');
  buttonContainer.style.position = 'fixed';
  buttonContainer.style.bottom = '10px';
  buttonContainer.style.width = '100%';
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'center';
  buttonContainer.style.gap = '10px';

  const createButton = (text) => {
   const button = document.createElement('button');
   button.textContent = text;
   button.style.width = '50px';
   button.style.height = '50px';
   button.style.borderRadius = '50%';
   button.style.border = 'none';
   button.style.backgroundColor = 'white';
   button.style.color = 'black';
   button.style.border = '2px solid black';
   button.id = text;
   button.style.fontSize = '16px';
   button.style.cursor = 'pointer';
   return button;
  };
  document.querySelector('#ytp-caption-window-container').style.fontSize = '33px'
  const createInput = (id) => {
   const input = document.createElement('input');
   input.type = 'number';
   input.id = id;
   input.value = 0; // 初期値を0に設定
   input.style.width = '50px';
   input.style.height = '50px';
   input.style.fontSize = '16px';
   input.style.color = 'black'; // 文字の色を黒に設定
   input.style.borderRadius = '50%';
   input.style.border = '2px solid black';
   input.style.textAlign = 'center';
   return input;
  };

  const button1 = createButton('Btn1');
  const input1 = createInput('input1');
  const button2 = createButton('Btn2');
  // const input2 = createInput('input2');

  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(input1);
  buttonContainer.appendChild(button2);
  // buttonContainer.appendChild(input2);

  document.body.appendChild(buttonContainer);

  resolve();
 });
}

mapkey('qb', 'scrolldowns', async function () {

 // alert('wodk')
 await buttons();

 function getInputValue(inputId) {
  const inputElement = document.getElementById(inputId);
  return inputElement ? inputElement.value : 0;
 }

 document.getElementById('Btn1').addEventListener('click', scrollUp);
 document.getElementById('Btn2').addEventListener('click', scrollDown);

 function scrollUp() {
  let inputValue = getInputValue('input1');
  window.scrollBy(0, -document.documentElement.clientHeight - inputValue);
 }

 function scrollDown() {
  let inputValue = getInputValue('input1');
  window.scrollBy(0, document.documentElement.clientHeight - inputValue);
 }

});




async function transSplit(word, SentenceNum) {
 let splited = word.split(' ');
 if (SentenceNum) {
  splited = splited.slice(-SentenceNum);
 }
 const promises = splited.map(async (part) => {
  const translated = await deeplTranslate(part);
  return [part, translated.translations[0].text];
 });
 // Wait for all promises to resolve
 const translatedPairs = await Promise.all(promises);
 const interleaved = translatedPairs.flat();
 console.log(interleaved);
 return interleaved;
}
//:?wordに入ったやつをトランスレートして、二つ配列返す


function sarabada(word, lang, onEndCallback) {
 if ('speechSynthesis' in window) {
  const uttr = new SpeechSynthesisUtterance();
  uttr.text = word;
  if (lang === 'jp') {
   uttr.lang = "ja-JP";
   uttr.rate = 1.2;
  } else {
   uttr.lang = "en-US";
   uttr.rate = 1;
  }
  uttr.pitch = 1;
  uttr.volume = 1;
  uttr.onend = onEndCallback;
  window.speechSynthesis.speak(uttr);
 }
}
//:?wordを読み上げる関数
//:?langがjpなら日本語、enなら英語で読み上げる
//:?onEndCallbackは読み上げ終了時に呼ばれるコールバック関数
function readWords(words, onEndCallback) {
 let index = 0;

 function speakNextWord() {
  if (index < words.length) {
   const word = words[index];
   const lang = index % 2 === 0 ? 'en' : 'jp';
   sarabada(word, lang, speakNextWord);
   index++;
  } else {
   onEndCallback();
  }
 }

 speakNextWord();
}
//:?wordsを読み上げる関数
//:?onEndCallbackは読み上げ終了時に呼ばれるコールバック関数
//:?奇数番目の要素は英語、偶数番目の要素は日本語として読み上げる

async function useYoutubeSpeakWords(SentenceNum) {
 const player = document.querySelector('#movie_player > div:nth-child(1) > video:nth-child(1)');
 player.pause();
 const text = document.getElementById('caption-window-1').innerText;
 console.log(text)
 const result = await transSplit(text, SentenceNum);
 readWords(result, () => {
  player.play();
 });
 console.log(result);
}

// async function useYoutubeWrite(SentenceNum) {
//  const text = document.getElementById('caption-window-1').innerText;
//  const result = await transSplitArray(text, SentenceNum);
//  console.log(result);
// }



//以下個別トランスレート


// function createTranslationContainer(target) {
//  console.log('createTranslationContainer');
//  const container = document.createElement('div');
//  container.style.display = 'flex';
//  container.style.flexDirection = 'row';
//  container.style.border = '1px solid black';
//  container.style.padding = '5px';
//  container.style.margin = '5px';
//  container.style.backgroundColor = 'white';
//  container.id = 'translation-container';
//  target.insertBefore(container, target.firstChild);
// }
// // ターゲットの手前に箱
// function addTranslationBox(original, translated) {
//  console.log('addTranslationBox')
//  const container = document.getElementById('translation-container')
//  const box = document.createElement('div');
//  box.style.display = 'block';
//  box.style.flexDirection = 'row';
//  box.style.border = '1px solid black';
//  box.style.padding = '2px';
//  box.style.margin = '1px';

//  const originalText = document.createElement('div');
//  originalText.textContent = original;
//  originalText.style.marginRight = '10px';
//  originalText.style.flex = '1'; // Allow the original text to take up available space

//  const translatedText = document.createElement('span');
//  translatedText.textContent = translated;
//  translatedText.style.color = 'red';
//  translatedText.style.wordWrap = 'break-word'; // Allow the translated text to wrap
//  translatedText.style.flex = '1'; // Allow the translated text to take up available space

//  box.appendChild(originalText);
//  box.appendChild(translatedText);
//  container.appendChild(box);
// }






function createSimpleButton(text, onClick) {
 const button = document.createElement('button');
 button.textContent = text;
 button.style.width = '100px';
 button.style.height = '50px';
 button.style.margin = '10px';
 button.style.fontSize = '16px';
 button.style.cursor = 'pointer';
 button.addEventListener('click', onClick);
 return button;
}




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
}
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
}
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
mapkey('qr', 'youtubeトランスレーションbox', function () {
 doit();
});

mapkey('qw', '選択した翻訳と音に', function () {

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
   const originalText = span.textContent.trim();
   if (span.tagName === 'SPAN' && !span.dataset.translated) {
    const translated = await deeplTranslate(originalText);
    const translatedText = translated.translations[0].text;
    const translationSpan = document.createElement('span');
    translationSpan.textContent = `${translatedText} `;
    translationSpan.style.fontWeight = 'bold';
    // translationSpan.style.marginLeft = '10px';
    span.appendChild(translationSpan);
    span.dataset.translated = true;
   } else {

    if ('speechSynthesis' in window) {
     const uttr = new SpeechSynthesisUtterance();
     uttr.text = originalText;
     uttr.lang = "en-US";
     uttr.rate = 1;
     uttr.pitch = 1;
     uttr.volume = 1;
     window.speechSynthesis.speak(uttr);
    }
   }




  };

  document.querySelectorAll('span').forEach(span => {
   span.addEventListener('click', translateOnHover);
  });

 };

});



