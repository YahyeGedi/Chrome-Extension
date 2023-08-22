
//Send Message To Background
chrome.runtime.sendMessage({name: "fetchWords"}, (response) => {
    //Wait for Response
  
    console.log(response);
  
    document.querySelector('h1').innerHTML = response.word;
    document.querySelector('h2').innerHTML = response.speech;
    document.querySelector('p').innerHTML = response.desc;
  
  
  });