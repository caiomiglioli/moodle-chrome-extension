const button = document.querySelector('button')

function revertTitleText(){
    const items = document.querySelectorAll("li[data-node-type]");

    items.forEach(item => {
        if (item.getAttribute("data-node-type") != '20') return;
        
        let a = item.children[0].children[0];
        if (a.getAttribute("inner-text-old") == null) return;

        // mudar de original pra editado
        if (a.innerText == a.getAttribute("inner-text-old")) {
            a.innerText = a.title.replace(/^.*- /, '');
        
        // mudar de editado pra original
        }else{
            a.innerText = a.getAttribute("inner-text-old")
        }
    });
}

button.addEventListener('click', async (event) => {
    event.preventDefault();

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    if (!/.*moodle.*/.test(tab.url)) return

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: revertTitleText,
    })
});