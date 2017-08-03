"use strict";
const render = (root) =>{
   root.empty();
   const section = $('<div></div>');
   section.append(header( _ => render(root)));

   if (state.page == null) {
    section.append(welcome( _ => render(root)));
  } else if (state.page == 1) {
    section.append(reloj( _ => render(root)));
  } else if (state.page == 2) {
    section.append(asistOk( _ => render(root)));
  } else if (state.page == 3) {
    section.append(Tardanza( _ => render(root)));
  } else if (state.page == 4) {
    section.append(Home( _ => render(root)));
  } else if (state.page == 5) {
    section.append(Falta( _ => render(root)));
  } else if (state.page == 6) {
    section.append(justificacion( _ => render(root)));
  } else if (state.page == 7) {
    section.append(mensaje( _ => render(root)));
  }

  root.append(section);
};

const update = function (){
  render(root);
};

const state = {
  data: null,
  user: null,
  email: null,
  password: null,
  page: null,
  time:null,

};

$( _ => {
    getJSON("https://spreadsheets.google.com/feeds/list/1Ga1oS3yWJse3NY3-osB04Fta_q5kQdtR-ErUB__Fpa0/od6/public/values?alt=json",(err,json)=> {
        if (err) { return alert(err.message);}

        state.data = json;
        console.log(state.data);
        const root = $('.root');
        render(root);
    });
});
