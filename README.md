# Import-users-to-MS-Teams- 

## Introduction
Bulk add multiple users to Microsoft Teams by channel owner - a user who is not a global administrator of MS Teams and who does not want to consent to operations described as dangerous in the PowerShell console or in the description of the web browser add-on.
There should be no such repository at all, because the inability to export and import YOUR DATA indicates some serious software defect. I hope there is an easy way to import for any team owner - and I can close this topic here.

But for now, there is a bookmarklet solution to consider. It is relatively easy to use, secure, and has open source code that can be verified and improved by others.

See (PL) [https://andrzejq.github.io ... Skryptozakladki](https://andrzejq.github.io/Jekyll_app1htmlFile/jekyll/onefileapp/2020/09/18/Skryptozakladki.html) p.3 and 4. Here's the code source, which allows you to report corrections and improvements.

<div lang="pl">

## PL: Wstęp
Import wielu użytkowników do Microsoft Teams przez właściciela kanału. Użytkownika, który nie jest administratorem globalnym MS Teams i któy nie chce wyrażać zgody na operacje opisywane jako niebezpieczne w konsoli PowerShell, czy w opisie dodatku do przeglądarki www. 
Takiego repozytorium nie powinno być wcale, bo brak możliwości eksportu i importu SWOICH DANYCH świadczy o jakimś poważnym defekcie oprogramowania. Mam nadzieję, że jest prosty sposób na import dla każdego właściciela zespołu - i będę mógł zamknąć ten temat tutaj.

Ale na razie do rozważenia jest rozwiązanie za skryptozakładką. Jest stosunkowo prosta w użyciu, bezpieczna i ma jawny kod źródłowy który może być weryfikowany i udoskonalany przez innych.

Zob. [https://andrzejq.github.io ... Skryptozakladki](https://andrzejq.github.io/Jekyll_app1htmlFile/jekyll/onefileapp/2020/09/18/Skryptozakladki.html) p.3 i 4. Tutaj kod źródłowy, co pozwala na zgłaszanie poprawek i ulepszeń.

</div>

<!--
[**\[TeamsMb\]**](javascript:(()=>{const dely=1000;const liSep=/[,;\s]+/;const uTst=/.@.../;const lang=(document.documentElement.lang.startsWith('pl'))?1:0;const msgOpenW='!\n'+['On https://teams.microsoft.com\n'+'open the window: Add members to team...','Na https://teams.microsoft.com\n'+'otwórz okno: Dodawanie członków do zespołu...'][lang];const msgPrpt=['Paste member list here:','Tu wklej listę członków:'][lang];const msgCdnt='!!\n'+['Could not find/add:','Nie można znaleźć/dodać:'][lang]+'\n!!\n';const sInp='div.ts-people-picker input[data-tid="peoplePicker"]';const sDrop='div[data-tid="peoplepicker-dropdown"]';const sAdd='button.ts-btn[data-tid="createTeam-AddMembers"]';const checkElem=(sel,fnTrue,tmOut=2500)=>{return new Promise((rslv,rjct)=>{setTimeout(()=>{rslv($(''));},tmOut);(async()=>{while(!($(sel).length&&fnTrue(sel))){await new Promise(rslv=>requestAnimationFrame(rslv));};rslv($(sel));})();});};if(!((window.jQuery)&&$(sInp).length)){alert(msgOpenW);return;};try{(async()=>{const users=prompt(msgPrpt).split(liSep);for(const user of users){if(uTst.test(user)){console.log('====='+user);await checkElem(sAdd,(sel)=>$(sel).prop('disabled'));let $inp=$(sInp);$inp.focus().val(user);$inp.change();let selDrop=await checkElem(sDrop,(sel)=>$(sel).text().trim(),7000);if(!selDrop.length)alert(msgCdnt+user);else{$(sInp).trigger({type:'keydown',which:9,keyCode:9});let selAdd=await checkElem(sAdd,(sel)=>!$(sel).prop('disabled'));if(!selAdd.length)alert(msgCdnt+user);else{selAdd.click();$(sInp).focus();await new Promise(rslv=>setTimeout(rslv,dely));await checkElem(sAdd,(sel)=>$(sel).prop('disabled'));}}}}})();}catch(err){alert(err);}})();)
-->