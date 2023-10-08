/*******************************************************************************
Skryptozakładka: // Bookmarklet:
Zbiorcze dodawanie użytkowników do MS Teams // Bulk Add Users to Microsoft Teams
*******************************************************************************/

javascript: (() => { //https://www.freecodecamp.org/news/what-are-bookmarklets/

  const dely=1000; //(ms) opóźnienie po dodaniu użytkownika 
                   //(ms) delay after user added
  const liSep=/[,;\s]+/; //(regexp) separator listy rozdzielonej przecinkami, średnikami i dowolnymi białymi znakami = \s, w tym nowego wiersza 
                         //(regexp) separator of a list separated by commas, semicolons and any whitespace characters = \s, including newline
  const uTst=/.@.../; //(regexp) wzorzec do walidacji - czyli @ i kilka dowolnych znaków dookoła 
                      //(regexp) validation pattern - i.e. @ and a few arbitrary characters around it
  const msgOpenW= '!\nNajpierw otwórz okno: Dodawanie członków do zespołu... \nFirst, open the window: Add members to team...';
  const msgPrpt= 'Tu wklej listę członków: * Paste member list here:';
  const msgCdnt= '!!\nNie można znaleźć/dodać:\nCould not find/add:\n!!\n';
  const sInp='div.ts-people-picker input[data-tid="peoplePicker"]';
  const sDrop='div[data-tid="peoplepicker-dropdown"]';
  const sAdd='button.ts-btn[data-tid="createTeam-AddMembers"]';
  
  //rslv==resolve, rjct==reject
  
  const checkElem = (sel, fnTrue, tmOut=2500) => {
    return new Promise((rslv, rjct) => {
      setTimeout(() => {
        // rjct(`err: $('${sel}')`) // to stop in catch(err){}
        rslv( $('') );
      }, tmOut);
  //https://stackoverflow.com/questions/16149431/make-function-wait-until-element-exists#answer-53269990
      (async () => {
        while ( !($(sel).length && fnTrue(sel)) ) {
          await new Promise( rslv =>  requestAnimationFrame(rslv) );
        };
        rslv( $(sel) ); 
      })();
    });
  };
  
  let $inp = $(sInp);
  if (! $inp.length) {alert(msgOpenW); return;};
  try {
    (async () => {
      const users=prompt(msgPrpt).split(liSep);//Tu wklej listę członków // Paste member list here
      for (const user of users) {
        if (uTst.test(user)) { console.log('====='+user);
          await checkElem(sAdd,(sel)=> $(sel).prop('disabled')); //w gotowości do wpisywania, tj. [Add] 'disabled'
                                                                 //ready to type, i.e. [Add] 'disabled'
          $inp = $(sInp); $inp.focus().val(user); //pokazuje się tekst w <input>
                                                  //text is shown in the <input>
          $inp.change(); //zaraz pojawi się lista wyboru
                         //a selection list is about to appear
          let selDrop = await checkElem(sDrop,(sel)=>$(sel).text().trim(),7000);
          //console.log  ('selDrop= ',selDrop);
          if (! selDrop.length) alert(msgCdnt + user);//'!! Nie można znaleźć/dodać: Could not find/add: !! ';
          else {// ...text().trim() > ''
            $(sInp).trigger({type: 'keydown', which: 9, keyCode: 9}); //naciśnięty [tab] -  przycisk [Dodaj] staje się niebieski
                                                                      //pressed [tab] - the [Add] button becomes blue
            let selAdd = await checkElem(sAdd,(sel)=>! $(sel).prop('disabled')); //! [Add] 'disabled'
            //console.log  ('selAdd= ',selAdd);
            if (! selAdd.length) alert(msgCdnt + user);
            else {
              selAdd.click();
              $(sInp).focus(); //tak dla zabicia czasu //just to pass the time
              await new Promise(rslv => setTimeout(rslv, dely)); //jeszcze więcej zabijania czasu
                                                                 //even more time-killing
              await checkElem(sAdd,(sel)=> $(sel).prop('disabled')); //done - Add 'disabled'
            }
          }
        } //if
      } //for
    })(); //async
  } catch (err) { alert(err); }
})();