alert('Hello, world!');
console.log('1');

function tts(e){
    var value=e.target.innerHTML;
    var to_speak=new SpeechSynthesisUtterance(value);
    window.speechSynthesis.speak(to_speak);
  }
  document.addEventListener("focus",tts,true);
