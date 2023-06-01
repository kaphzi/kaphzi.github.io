

document.onkeydown = function (e) {
    [].forEach.call(hiddenElements, function (el) {
      el.classList.remove('hidden');
    });
    info.classList.add('hidden');
    key.innerHTML = e.key;
    code.innerHTML = e.code;
    keyCode.innerHTML = e.keyCode;
    keyCodeLarge.innerHTML = e.keyCode;
  };