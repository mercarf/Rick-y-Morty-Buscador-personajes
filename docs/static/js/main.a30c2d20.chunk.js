(this.webpackJsonpevaluacion=this.webpackJsonpevaluacion||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/humano.ecdb8c30.svg"},function(e,a,t){e.exports=t.p+"static/media/hombre.56e66f84.png"},function(e,a,t){e.exports=t.p+"static/media/mujer-color.2db113dd.png"},function(e,a,t){e.exports=t.p+"static/media/extraterrestre.c97d4566.png"},function(e,a,t){e.exports=t.p+"static/media/femenino.5d546c1b.svg"},function(e,a,t){e.exports=t.p+"static/media/masculino.f1289af3.svg"},function(e,a,t){e.exports=t.p+"static/media/interrogacion-color.da96d8da.svg"},function(e,a,t){e.exports=t.p+"static/media/corazon-rosa.cc33e1c8.svg"},function(e,a,t){e.exports=t.p+"static/media/tumba.dba42fdb.png"},,,,,,,,,function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(24),r=t.n(c),s=t(6),i=(t(31),t(21)),m=t(1),o=(t(32),function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results}))}),u=function(e){return l.a.createElement(s.b,{to:"/character/".concat(e.id)},l.a.createElement("li",{className:"character__list__card list__".concat(e.species)},l.a.createElement("div",{className:"character__list__card__box"},l.a.createElement("img",{className:"character__list__card__box__img",src:e.image,alt:e.name})),l.a.createElement("h3",{className:"character__list__card__name"},e.name),l.a.createElement("h4",{className:"character__list__card__species ".concat(e.species)},e.species)))},d=function(e){if(0===e.characters.length)return l.a.createElement("p",{className:"characterNotFound"},'No hay ning\xfan personaje que coincida con la palabra "'.concat(e.filterName,'"'));var a=e.characters.map((function(e){return l.a.createElement(u,{key:e.id,id:e.id,image:e.image,name:e.name,species:e.species})}));return l.a.createElement("ul",{className:"character__list"},a)},p=t(9),E=t.n(p),g=t(10),_=t.n(g),f=t(11),N=t.n(f),h=t(12),v=t.n(h),b=t(13),y=t.n(b),x=t(14),j=t.n(x),O=t(15),A=t.n(O),F=t(16),S=t.n(F),I=t(17),k=t.n(I),C=function(e){return l.a.createElement("div",{className:"leyend "},l.a.createElement("h3",{className:"leyend__title"},"Leyenda"),l.a.createElement("ul",{className:"leyend__list"},l.a.createElement("li",null,l.a.createElement("p",null,"Humano"),l.a.createElement("img",{src:E.a,alt:e.species,className:"leyend-logo"})),l.a.createElement("li",null,l.a.createElement("p",null,"Hombre"),l.a.createElement("img",{src:N.a,alt:e.species,className:"leyend-logo"})),l.a.createElement("li",null,l.a.createElement("p",null,"Mujer"),l.a.createElement("img",{src:_.a,alt:e.gender,title:e.gender,className:"leyend-logo"})),l.a.createElement("li",null,l.a.createElement("p",null,"Alien"),l.a.createElement("img",{src:v.a,alt:e.species,className:"leyend-logo"})),l.a.createElement("li",null,l.a.createElement("p",null,"Alien Femenino"),l.a.createElement("img",{src:y.a,alt:e.gender,className:"leyend-logo"})),l.a.createElement("li",null,l.a.createElement("p",null,"Alien Masculino"),l.a.createElement("img",{src:j.a,alt:e.gender,className:"leyend-logo"})),l.a.createElement("li",null,l.a.createElement("p",null,"Estado Desconocido"),l.a.createElement("img",{src:A.a,alt:e.status,className:"leyend-logo"})),l.a.createElement("li",null,l.a.createElement("p",null,"Vivo"),l.a.createElement("img",{src:S.a,alt:e.status,className:"leyend-logo"})),l.a.createElement("li",null,l.a.createElement("p",null,"Muerto"),l.a.createElement("img",{src:k.a,alt:e.status,className:"leyend-logo"}))))},D=function(e){return l.a.createElement("div",{className:"character__detail"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content__title"},l.a.createElement("h3",{className:"content__title__name"},e.name),l.a.createElement(s.b,{to:"/"},l.a.createElement("span",{className:"content__title__icon fas fa-times"}))),l.a.createElement("div",{className:"content__box"},l.a.createElement("img",{className:"content__box__image",src:e.image,alt:e.name}),l.a.createElement("div",{className:"content__description"},l.a.createElement("ul",{className:"content__description1"},l.a.createElement("li",null,l.a.createElement("h4",null,"Origen:"),l.a.createElement("p",null,e.origin)),l.a.createElement("li",null,l.a.createElement("h4",null,"Episodios:"),l.a.createElement("p",null,e.episode))),l.a.createElement("ul",{className:"content__description2"},l.a.createElement("li",null,l.a.createElement("h4",null,"Especie:"),l.a.createElement("img",{src:"Human"===e.species?E.a:"Alien"===e.species?v.a:void 0,alt:e.species,className:"detail-logo"})),l.a.createElement("li",null,l.a.createElement("h4",null,"G\xe9nero: "),l.a.createElement("img",{src:"Female"===e.gender&&"Human"===e.species?N.a:"Male"===e.gender&&"Human"===e.species?_.a:"Female"===e.gender&&"Alien"===e.species?y.a:"Male"===e.gender&&"Alien"===e.species?j.a:void 0,alt:e.gender,className:"detail-logo"})),l.a.createElement("li",null,l.a.createElement("h4",null,"Estado vital:"),l.a.createElement("img",{src:"Alive"===e.status?S.a:"Dead"===e.status?k.a:A.a,alt:e.status,className:"detail-logo"})))))),l.a.createElement(C,{species:e.species,gender:e.gender,status:e.status}))},H=function(e){return l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault()}},l.a.createElement("label",{className:"form__label"},"Busca tu personaje favorito:",l.a.createElement("input",{type:"text",className:"form__label__input",id:"filterName",value:e.filterName,onChange:function(a){a.preventDefault(),e.handleFilterName({key:"FilterName",value:a.target.value})},placeholder:"Nombre del personaje"})))},M=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(JSON.parse(localStorage.getItem("filterName")||"")),s=Object(i.a)(r,2),u=s[0],p=s[1];Object(n.useEffect)((function(){o().then((function(e){c(e)}))}),[]),Object(n.useEffect)((function(){localStorage.setItem("filterName",JSON.stringify(u))}),[u]);return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__img"})),l.a.createElement("main",{className:"main"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(H,{filterName:u,handleFilterName:function(e){p(e.value),console.log(e)}}),l.a.createElement(d,{filterName:u,characters:(t.sort((function(e,a){return e.name.toLowerCase()>a.name.toLowerCase()?1:-1})),t.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())})))})),l.a.createElement(m.a,{path:"/character/:characterId",render:function(e){var a=e.match.params.characterId,n=t.find((function(e){return e.id===parseInt(a)}));return n?l.a.createElement(D,{name:n.name,image:n.image,species:n.species,gender:n.gender,origin:n.origin.name,status:n.status,episode:n.episode.length}):l.a.createElement("p",{className:"characterDetailNotFound"},"El personaje que buscas no existe")}}))))};r.a.render(l.a.createElement(s.a,null,l.a.createElement(M,null)),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.a30c2d20.chunk.js.map