(()=>{"use strict";var t=function(){return JSON.parse(localStorage.getItem("cart"))},n=function(){var n;return null===(n=t())||void 0===n?void 0:n.length},c=function(){var t=n(),c=document.querySelector("#cart-item"),e=c.querySelector("span");t?(c.setAttribute("data-is-not-empty",""),e.textContent=t):(c.removeAttribute("data-is-not-empty",""),e.textContent="")};function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var c=0,e=new Array(n);c<n;c++)e[c]=t[c];return e}function a(t,n){if(t){if("string"==typeof t)return e(t,n);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?e(t,n):void 0}}function o(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return'\n  <div class="counter">\n    <input\n      type="number"\n      class="counter__display"\n      value="'.concat(t,'"\n      min="').concat(c,'"\n      max="99"\n      step="').concat(n,'"\n      data-multiplier\n    >\n    <input\n      type="button"\n      class="counter__action counter__action--decrement btn-reset"\n      value="-"\n      aria-label="Вычесть одну штуку"\n    >\n    <input\n      type="button"\n      class="counter__action counter__action--increment btn-reset"\n      value="+"\n      aria-label="Добавить одну штуку"\n    >\n  </div>\n')};function d(t){var n=t.target.value,c=t.target.min;n<0?t.target.value=0:n>99?t.target.value=99:""===n&&(t.target.value=c)}var i=function(t){return'\n  <div class="popup">\n    <button class="popup__open btn-reset btn--primary" aria-label="Открыть попап">?</button>\n    <p class="popup__text">'.concat(t,"</p>\n  </div>\n")};function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var c=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=c){var e,a,o=[],r=!0,d=!1;try{for(c=c.call(t);!(r=(e=c.next()).done)&&(o.push(e.value),!n||o.length!==n);r=!0);}catch(t){d=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(d)throw a}}return o}}(t,n)||a(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l="".concat(location.origin,"/api"),p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(l).concat(t),n)};function u(t,n){var c="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!c){if(Array.isArray(t)||(c=function(t,n){if(!t)return;if("string"==typeof t)return _(t,n);var c=Object.prototype.toString.call(t).slice(8,-1);"Object"===c&&t.constructor&&(c=t.constructor.name);if("Map"===c||"Set"===c)return Array.from(t);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return _(t,n)}(t))||n&&t&&"number"==typeof t.length){c&&(t=c);var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,d=!1;return{s:function(){c=c.call(t)},n:function(){var t=c.next();return r=t.done,t},e:function(t){d=!0,o=t},f:function(){try{r||null==c.return||c.return()}finally{if(d)throw o}}}}function _(t,n){(null==n||n>t.length)&&(n=t.length);for(var c=0,e=new Array(n);c<n;c++)e[c]=t[c];return e}function m(){var t=this,n=document.querySelector(".modal");[document.querySelector("[data-modal-open]"),document.querySelector("#modal-close")].forEach((function(c){return c.addEventListener("click",v.bind(t,n))})),function(t){t.querySelector(".modal-form").addEventListener("submit",(function(n){n.preventDefault();var c,e=new FormData(n.target),a={link:location.href},o=u(e);try{for(o.s();!(c=o.n()).done;){var r=s(c.value,2),d=r[0],i=r[1];a[d]=i}}catch(t){o.e(t)}finally{o.f()}p("/order/measure",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(){alert("Наш менеджер перезвонит вам в ближайшее время"),v(t)}))}))}(n)}function v(t){t.classList.toggle("modal--active"),document.body.classList.toggle("scroll-disabled")}var b=function(t){return String(t).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")},f=function(t,n){var c=document.createElement("div");c.classList.add("loader"),n&&(c.style.position="absolute"),t.appendChild(c)},y=function(){document.querySelector(".loader").remove()},h=document.querySelector(".breadcrumbs__list"),g="tabs__item--active",x="active";function q(){var t,n=document.querySelectorAll(".tabs__item");(t=location.hash.substring(1))&&S(document.querySelector("[data-id=".concat(t,"]"))),n.forEach((function(t){return t.addEventListener("click",(function(t){return S(t.target)}))}))}function S(t){var n=t.dataset.id,c=document.querySelector("#".concat(n)),e=document.querySelector(".".concat(g));e&&e.classList.remove(g),t.classList.add(g);var a=document.querySelector("[id].".concat(x));a&&a.classList.remove(x),c.classList.add(x)}var w=document.querySelector(".card"),L=w.querySelector(".card__container"),A=new URL(location.href).searchParams,j="/".concat(location.pathname.split("/").pop()),E=A.get("id"),z={"/doors":"Каталог дверей","/accessories":"Каталог погонажа","/furniture":"Каталог фурнитуры","/arch":"Каталог арок","/iron-doors":"Каталог железных дверей"};function k(t){var n=this;p(t).then((function(t){return t.json()})).then((function(t){var c,e,a,o,s,l,p,u;y(),e=(c=t).product,a=c.colors,o=c.sizes,s=c.glasses,l=c.innerColors,p=c.outerColors,L.innerHTML="",L.insertAdjacentHTML("beforeend",function(t,n,c,e,a,o){var d=t.articul,s=t.name,l=t.stock,p=t.sale,u=t.novinka,_=t.akciya,m=t.price_rozn,v=t.model,f=t.color,y=t.size,h=t.canvas_type,g=t.coverage_type,x=t.thickness,q=t.style,S=t.collection,w=t.glass,L=t.packing,A=t.features,j=t.box_v1,E=t.box_v1_price_rozn,z=t.box_v2,k=t.box_v2_price_rozn,I=t.box_v3,C=t.box_v3_price_rozn,T=t.box_v4,O=t.box_v4_price_rozn,H=t.platband_v1,M=t.platband_v1_price_rozn,N=t.platband_v2,U=t.platband_v2_price_rozn,J=t.platband_v3,P=t.platband_v3_price_rozn,$=t.platband_v4,D=t.platband_v4_price_rozn,R=t.feigned_strap_v1,B=t.feigned_strap_v1_price_rozn,G=t.dobor_100_v1,V=t.dobor_100_v1_price_rozn,X=t.dobor_150_v1,F=t.dobor_150_v1_price_rozn,K=t.dobor_200_v1,Q=t.dobor_200_v1_price_rozn,W=t.brand,Y=t.weight,Z=t.group,tt=t.parent_group,nt=t.part_v1,ct=t.part_v1_value,et=t.part_v2,at=t.part_v2_value,ot=t.part_v3,rt=t.part_v3_value,dt=t.part_v4,it=t.part_v4_value,st=t.part_v5,lt=t.part_v5_value,pt=t.part_v6,ut=t.part_v6_value,_t=t.part_v7,mt=t.part_v7_value,vt=t.inner_side_color,bt=t.outer_side_color,ft=t.cylinder_lock,yt=t.sealer,ht=t.lever_lock,gt=t.eccentric;return"\n  ".concat('\n  <div class="modal">\n    <div class="modal__container">\n      <button class="modal__close btn-reset" id="modal-close" aria-label="Закрыть модальное окно"></button>\n      <form class="modal-form">\n        <input type="text" name="name" placeholder="Ваше имя" required>\n        <input type="tel" name="phone" placeholder="Номер телефона" required>\n        <input class="btn-reset btn btn--primary" type="submit" value="Позвонить мне">\n      </form>\n    </div>\n  </div>\n','\n  <div class="product">\n    <div class="product-image">\n      <div class="product-image__current">\n        <img src="https://dver.com/xml/images/').concat(d,'.jpeg" alt="').concat(s,'">\n      </div>\n      ').concat(c?'\n          <div class="product-image__list">\n            '.concat(c.map((function(t){return'\n              <button\n                class="product-image__item btn-reset"\n                data-value="'.concat(t.color,'"\n                data-type="color"\n              >\n                <img src="https://dver.com/xml/images/').concat(t.articul,'.jpeg" alt="').concat(t.name,'">\n              </button>\n            ')})).join(""),"\n          </div>\n          "):"",'\n    </div>\n    <div class="product__column">\n      <p class="product__sku">Артикул: ').concat(d,'</p>\n      <h2 class="product__name title title--xs">').concat(s,'</h2>\n      <div class="product__tags">\n        ').concat(p?'<span class="product__tag product__tag--sales">Распродажа</span>':"","\n        ").concat(u?'<span class="product__tag product__tag--new">Новое</span>':"","\n        ").concat(_?'<span class="product__tag product__tag--discounts">Акция</span>':"",'\n      </div>\n      <div class="product-price">\n        <div class="product-price__column">\n          <small class="product-price__type text text--sm">Розн. цена за полотно</small>\n          <h3 class="product-price__count title title--sm">').concat(b(m),' &#8381;</h3>\n          <button class="product-price__cta btn-reset btn btn--primary" id="add-to-cart">В корзину</button>\n        </div>\n        <div class="product-price__column">\n          <small class="product-price__type text text--sm">Розн. цена за текущую комплект.</small>\n          <h3 class="product-price__count title title--sm" data-price-display></h3>\n          <button class="product-price__cta btn-reset btn btn--primary" data-modal-open>Вызов замерщика</button>\n        </div>\n      </div>\n      ').concat(n?'\n          <div class="product__sizes">\n            <p class="product__label">Размеры:</p>\n            <div class="product__wrapper">\n              '.concat(n.map((function(t){return'\n                <button\n                  class="product__size btn-reset btn btn--secondary '.concat(t.size===y?"product__size--active":"",'"\n                  data-value="').concat(t.size,'"\n                  data-type="size"\n                >\n                  ').concat(t.size,"\n                </button>\n                ")})).join(""),"\n            </div>\n          </div>\n          "):"","\n      ").concat(c?'\n          <div class="product__colors">\n            <p class="product__label">Цвета:</p>\n            <div class="product__wrapper">\n              '.concat(c.map((function(t){return'\n                <button\n                  class="product__color btn-reset '.concat(t.color===f?"product__color--active":"",'"\n                  aria-label="').concat(t.name,'"\n                  data-value="').concat(t.color,'"\n                  data-type="color"\n                >\n                  <img src="https://dver.com/xml/colors_images/').concat(t.color.toLowerCase(),'.jpg" alt="" aria-hidden="true">\n                </button>\n                ')})).join(""),"\n            </div>\n          </div>\n          "):"","\n      ").concat(o?'\n          <div class="product__colors">\n            <p class="product__label">Цвет наружный:</p>\n            <div class="product__wrapper">\n              '.concat(o.map((function(t){return'\n                <button\n                  class="product__color btn-reset '.concat(t.color===bt?"product__color--active":"",'"\n                  aria-label="').concat(t.name,'"\n                  data-value="').concat(t.color,'"\n                  data-type="outer_side_color"\n                >\n                  <img src="https://dver.com/xml/colors_images/').concat(t.color.toLowerCase(),'.jpg" alt="" aria-hidden="true">\n                </button>\n                ')})).join(""),"\n            </div>\n          </div>\n          "):"","\n      ").concat(a?'\n          <div class="product__colors">\n            <p class="product__label">Цвет внутренний:</p>\n            <div class="product__wrapper">\n              '.concat(a.map((function(t){return'\n                <button\n                  class="product__color btn-reset '.concat(t.color===vt?"product__color--active":"",'"\n                  aria-label="').concat(t.name,'"\n                  data-value="').concat(t.color,'"\n                  data-type="inner_side_color"\n                >\n                  <img src="https://dver.com/xml/colors_images/').concat(t.color.toLowerCase(),'.jpg" alt="" aria-hidden="true">\n                </button>\n                ')})).join(""),"\n            </div>\n          </div>\n          "):"","\n      ").concat(e&&e[0]?'<div class="product__glasses">\n            <p class="product__label">Тип стекла:</p>\n            <div class="product__wrapper">\n              '.concat(e.map((function(t){return'\n                <button\n                  class="product__glass btn-reset '.concat(t.glass===w?"product__glass--active":"",'"\n                  aria-label="').concat(t.glass,'"\n                  data-value="').concat(t.glass,'"\n                  data-type="glass"\n                >\n                  <img src="https://dver.com/xml/colors_images/').concat((t.model+"_"+t.glass).toLowerCase(),'.jpg" alt="Стекло" aria-hidden="true">\n                </button>\n                ')})).join(""),"\n            </div>\n          </div>"):"",'\n      <div class="product__info">\n        <div class="tabs">\n          <button class="tabs__item tabs__item--active text text--md" data-id="description">Описание</button>\n          ').concat(j||z||I||T||H||N||J||$||R||G||X||K||nt||et||ot||dt||st||pt||_t?'<button class="tabs__item text text--md" data-id="equipment">Комплектующие</button>':"",'\n        </div>\n        <table class="product-table active" id="description" data-tab-content>\n          <tr class="product-table__row">\n            <td class="product-table__data">Артикул:</td>\n            <td class="product-table__data">').concat(d,'</td>\n          </tr>\n          <tr class="product-table__row">\n            <td class="product-table__data">Модель:</td>\n            <td class="product-table__data">').concat(v,"</td>\n          </tr>\n          ").concat(f?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Цвет:</td>\n                <td class="product-table__data">'.concat(f,"</td>\n              </tr>\n              "):"","\n          ").concat(W?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Бренд:</td>\n                <td class="product-table__data">'.concat(W,"</td>\n              </tr>\n              "):"","\n          ").concat(Y?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Вес:</td>\n                <td class="product-table__data">'.concat(Y,"</td>\n              </tr>\n              "):"","\n          ").concat(Z?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Группа:</td>\n                <td class="product-table__data">'.concat(Z,"</td>\n              </tr>\n              "):"","\n          ").concat(tt?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Группа 2:</td>\n                <td class="product-table__data">'.concat(tt,"</td>\n              </tr>\n              "):"","\n          ").concat(h?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Тип полотна:</td>\n                <td class="product-table__data">'.concat(h,"</td>\n              </tr>\n              "):"","\n          ").concat(g?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Тип покрытия:</td>\n                <td class="product-table__data">'.concat(g,"</td>\n              </tr>\n              "):"","\n          ").concat(x?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Толщина:</td>\n                <td class="product-table__data">'.concat(x,"</td>\n              </tr>\n            "):"","\n          ").concat(q?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Стиль:</td>\n                <td class="product-table__data">'.concat(q,"</td>\n              </tr>\n              "):"","\n          ").concat(w?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Стекло:</td>\n                <td class="product-table__data">'.concat(w,"</td>\n              </tr>\n              "):"","\n          ").concat(L?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Упаковка:</td>\n                <td class="product-table__data">'.concat(L,"</td>\n              </tr>\n              "):"",'\n          <tr class="product-table__row">\n            <td class="product-table__data">Вид номенклатуры:</td>\n            <td class="product-table__data">').concat(l,"</td>\n          </tr>\n          ").concat(A?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Особенности:</td>\n                <td class="product-table__data">'.concat(A,"</td>\n              </tr>\n              "):"","\n          ").concat(vt?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Цвет внутри:</td>\n                <td class="product-table__data">'.concat(vt,"</td>\n              </tr>\n              "):"","\n          ").concat(bt?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Цвет снаружи:</td>\n                <td class="product-table__data">'.concat(bt,"</td>\n              </tr>\n              "):"","\n          ").concat(ft?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Цилиндровый замок:</td>\n                <td class="product-table__data">'.concat(ft,"</td>\n              </tr>\n              "):"","\n          ").concat(gt?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Эксцентрик:</td>\n                <td class="product-table__data">'.concat(gt,"</td>\n              </tr>\n              "):"","\n          ").concat(yt?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Уплотнитель:</td>\n                <td class="product-table__data">'.concat(yt,"</td>\n              </tr>\n              "):"","\n          ").concat(ht?'\n              <tr class="product-table__row">\n                <td class="product-table__data">Сувальдный замок:</td>\n                <td class="product-table__data">'.concat(ht,"</td>\n              </tr>\n              "):"",'\n        </table>\n        <dl class="product-complect" id="equipment" data-tab-content>\n          ').concat([{description:j,price:E},{description:z,price:k},{description:I,price:C},{description:T,price:O}].map((function(t){var n=t.description,c=t.price;return"\n              ".concat(n?'\n                  <div class="product-complect__item">\n                    <dt class="product-complect__item-name title title--sm">Коробка</dt>\n                    <dd class="product-complect__item-description text text--md">\n                      '.concat(n," - ").concat(b(c)," &#8381;\n                    </dd>\n                  </div>\n                  "):"","\n            ")})).join(""),"\n          ").concat([{description:H,price:M},{description:N,price:U},{description:J,price:P},{description:$,price:D}].map((function(t){var n=t.description,c=t.price;return"\n              ".concat(n?'\n                  <div class="product-complect__item">\n                    <dt class="product-complect__item-name title title--sm">Наличник</dt>\n                    <dd class="product-complect__item-description text text--md">\n                      '.concat(n," - ").concat(b(c)," &#8381;\n                    </dd>\n                  </div>\n                  "):"","\n            ")})).join(""),"\n          ").concat(R?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">Притворная планка</dt>\n                <dd class="product-complect__item-description text text--md">\n                  '.concat(R," - ").concat(b(B)," &#8381;\n                </dd>\n              </div>\n              "):"","\n          ").concat(G?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">Добор</dt>\n                <dd class="product-complect__item-description text text--md">\n                  '.concat(G," - ").concat(b(V)," &#8381;\n                </dd>\n              </div>\n              "):"","\n          ").concat(X?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">Добор</dt>\n                <dd class="product-complect__item-description text text--md">\n                  '.concat(X," - ").concat(b(F)," &#8381;\n                </dd>\n              </div>\n              "):"","\n          ").concat(K?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">Добор</dt>\n                <dd class="product-complect__item-description text text--md">\n                  '.concat(K," - ").concat(b(Q)," &#8381;\n                </dd>\n              </div>\n              "):"","\n          ").concat(nt?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">'.concat(nt,'</dt>\n                <dd class="product-complect__item-description text text--md">\n                  ').concat(ct," шт.\n                </dd>\n              </div>\n              "):"","\n          ").concat(et?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">'.concat(et,'</dt>\n                <dd class="product-complect__item-description text text--md">\n                  ').concat(at," шт.\n                </dd>\n              </div>\n              "):"","\n          ").concat(ot?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">'.concat(ot,'</dt>\n                <dd class="product-complect__item-description text text--md">\n                  ').concat(rt," шт.\n                </dd>\n              </div>\n              "):"","\n          ").concat(dt?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">'.concat(dt,'</dt>\n                <dd class="product-complect__item-description text text--md">\n                  ').concat(it," шт.\n                </dd>\n              </div>\n              "):"","\n          ").concat(st?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">'.concat(st,'</dt>\n                <dd class="product-complect__item-description text text--md">\n                  ').concat(lt," шт.\n                </dd>\n              </div>\n              "):"","\n          ").concat(pt?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">'.concat(pt,'</dt>\n                <dd class="product-complect__item-description text text--md">\n                  ').concat(ut," шт.\n                </dd>\n              </div>\n              "):"","\n          ").concat(_t?'\n              <div class="product-complect__item">\n                <dt class="product-complect__item-name title title--sm">'.concat(_t,'</dt>\n                <dd class="product-complect__item-description text text--md">\n                  ').concat(mt," шт.\n                </dd>\n              </div>\n              "):"",'\n        </dl>\n      </div>\n    </div>\n    <div class="product__equipments">\n      <div class="product-equipment">\n        <div class="product-equipment__top">\n          <h4 class="product-equipment__name title title--xs">Полотно</h4>\n        </div>\n        <div class="product-equipment__bottom">\n          <p class="product-equipment__price text text--md" data-price="').concat(m,'">').concat(b(m)," &#8381;</p>\n          ").concat(r(1,1,1),"\n        </div>\n      </div>\n      ").concat([{description:j,price:E},{description:z,price:k},{description:I,price:C},{description:T,price:O}].map((function(t,n){var c=t.description,e=t.price;return"\n          ".concat(c?'\n              <div class="product-equipment">\n                <div class="product-equipment__top">\n                  <h4 class="product-equipment__name title title--xs">Коробка</h4>\n                  '.concat(i(c),'\n                </div>\n                <div class="product-equipment__bottom">\n                  <p class="product-equipment__price text text--md" data-price="').concat(e,'">').concat(b(e)," &#8381;</p>\n                  ").concat(r(n?0:function(t){return t.includes("HGX")||t.includes("INVISIBLE")?1:2.5}(S),.5),"\n                </div>\n              </div>\n              "):"","\n        ")})).join(""),"\n      ").concat([{description:H,price:M},{description:N,price:U},{description:J,price:P},{description:$,price:D}].map((function(t,n){var c=t.description,e=t.price;return"\n          ".concat(c?'\n              <div class="product-equipment">\n                <div class="product-equipment__top">\n                  <h4 class="product-equipment__name title title--xs">Наличник</h4>\n                  '.concat(i(c),'\n                </div>\n                <div class="product-equipment__bottom">\n                  <p class="product-equipment__price text text--md" data-price="').concat(e,'">').concat(b(e)," &#8381;</p>\n                  ").concat(r(n?0:function(t){return t.includes("HGX")?5:t.includes("INVISIBLE")?0:5}(S)),"\n                </div>\n              </div>\n              "):"","\n        ")})).join("")," \n      ").concat(R?'\n          <div class="product-equipment">\n            <div class="product-equipment__top">\n              <h4 class="product-equipment__name title title--xs">Притворная планка</h4>\n              '.concat(i(R),'\n            </div>\n            <div class="product-equipment__bottom">\n              <p class="product-equipment__price text text--md" data-price="').concat(B,'">').concat(b(B)," &#8381;</p>\n              ").concat(r(),"\n            </div>\n          </div>\n          "):"","\n      ").concat(G?'\n          <div class="product-equipment">\n            <div class="product-equipment__top">\n              <h4 class="product-equipment__name title title--xs">Добор</h4>\n              '.concat(i(G),'\n            </div>\n            <div class="product-equipment__bottom">\n              <p class="product-equipment__price text text--md" data-price="').concat(V,'">').concat(b(V)," &#8381;</p>\n              ").concat(r(),"\n            </div>\n          </div>\n          "):"","\n      ").concat(X?'\n          <div class="product-equipment">\n            <div class="product-equipment__top">\n              <h4 class="product-equipment__name title title--xs">Добор</h4>\n              '.concat(i(X),'\n            </div>\n            <div class="product-equipment__bottom">\n              <p class="product-equipment__price text text--md" data-price="').concat(F,'">').concat(b(F)," &#8381;</p>\n              ").concat(r(),"\n            </div>\n          </div>\n          "):"","\n      ").concat(K?'\n          <div class="product-equipment">\n            <div class="product-equipment__top">\n              <h4 class="product-equipment__name title title--xs">Добор</h4>\n              '.concat(i(K),'\n            </div>\n            <div class="product-equipment__bottom">\n              <p class="product-equipment__price text text--md" data-price="').concat(Q,'">').concat(b(Q)," &#8381;</p>\n              ").concat(r(),"\n            </div>\n          </div>\n          "):"","\n    </div>\n  </div>\n")}(e,o,a,s,l,p)),I(),m(),q(),function(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];document.querySelectorAll(".counter").forEach((function(t){var c=t.querySelector(".counter__display"),e={"-":c.stepDown.bind(c),"+":c.stepUp.bind(c)},a=t.querySelector(".counter__action--increment"),o=t.querySelector(".counter__action--decrement");c.addEventListener("input",d),[a,o].forEach((function(t){t.addEventListener("click",(function(t){var n=t.target.value;e[n]()}))})),n&&n.forEach((function(t){c.addEventListener("input",t),a.addEventListener("click",t),o.addEventListener("click",t)}))}))}(I),u=[{name:"Главная",path:"/"},{name:z[j],path:"/catalog".concat(j)},{name:t.product.model||"Карточка товара",path:"".concat(j,"?id=").concat(E)}],h.innerHTML="",u.forEach((function(t){var n=t.name,c=t.path;h.insertAdjacentHTML("beforeend",'\n        <li class="breadcrumbs__item">\n          <a href="'.concat(c,'" class="link-reset text text--sm text--gray">').concat(n,"</a>\n        </li>\n      "))})),document.title=t.product.name,document.querySelectorAll("[data-type]").forEach((function(c){return c.addEventListener("click",C.bind(n,t.product))}));var _=new URL(location.href);_.searchParams.set("id",t.product._id),history.pushState(null,"",_.toString()),document.querySelector("#add-to-cart").addEventListener("click",T.bind(n,t.product))})).catch((function(){y(),L.innerHTML="<h2 class='title title--xl' style='margin: 0 0 5rem'>Продукт не найден</h2>",document.title="Продукт не найден"}))}function I(){var t=L.querySelector("[data-price-display]"),n=L.querySelectorAll("[data-price]"),c=L.querySelectorAll("[data-multiplier]"),e=o(n).reduce((function(t,n,e){return t+ +n.dataset.price*c[e].value}),0);t.setAttribute("data-price-sum",e),t.innerHTML="".concat(b(e)," &#8381;")}function C(t,n){var c=n.target.dataset.type,e=n.target.dataset.value,a=new URLSearchParams;o(new Set(o(document.querySelectorAll("[data-type]")))).forEach((function(n){var o=n.dataset.type;c===o?a.set(c,e):a.set(o,t[o])})),a.set("id",t._id),a.set("model",t.model),f(L,!0),k("".concat(j,"/change?").concat(a.toString()))}function T(e){var a=n();!function(n){var c=t();if(!c)return localStorage.setItem("cart",JSON.stringify(n));c.push(n),localStorage.setItem("cart",JSON.stringify(c))}({index:a||0,count:1,link:location.href,articul:e.articul,name:e.name,price:document.querySelector("[data-price-display]").dataset.priceSum,equipments:o(document.querySelectorAll(".product-equipment")).map((function(t){return{name:t.querySelector(".product-equipment__name").textContent,count:t.querySelector(".counter__display").value}}))}),c()}f(w),k("".concat(j,"?id=").concat(E)),c()})();