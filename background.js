
const extensions = 'https://developer.chrome.com/docs/extensions'
const webstore = 'https://developer.chrome.com/docs/webstore'

chrome.action.onClicked.addListener(async (tab)=>{
    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
        //badge checks if extension is on/off
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        //nxt state is always opposite of previous state
        const nextState = prevState === 'ON' ? 'OFF' : 'ON'

        await chrome.action.setBadgeText({
            tabId: tab.id,
        text: nextState,
        });
        if(nextState==="ON"){
            
        }

    }

})


  