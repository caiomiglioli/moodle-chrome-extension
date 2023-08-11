"use strict";

if (document.readyState=="loading") document.addEventListener('DOMContentLoaded', switchTitleText)
else switchTitleText()

function switchTitleText(){
  const items = document.querySelectorAll("li[data-node-type]");
  items.forEach(item => {
    if (item.getAttribute("data-node-type") != '20') return;
    let a = item.children[0].children[0];
    a.setAttribute("inner-text-old", a.innerText);
    a.innerText = a.title.replace(/^.*- /, '');
  });
}