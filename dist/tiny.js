$={},$.one=(e=>($.selector=document.querySelector(e),$.listener={},$.listener[$.selector]={},$)),$.all=(e=>($.selector=document.querySelectorAll(e),$)),$.addClass=(e=>("array"==typeof e?Array.from(e).forEach(e=>$.selector.classList.add(e)):$.selector.classList.add(e),$)),$.removeClass=(e=>("array"==typeof e?Array.from(e).forEach(e=>$.selector.classList.remove(e)):$.selector.classList.remove(e),$)),$.allClass=(e=>$.selector.classList.value.split(" ")),$.on=((e,s)=>{$.selector.addEventListener(e,s),$.listener[$.selector][e]=s}),$.once=((e,s)=>{listener=(()=>{s.apply(s),$.off(e)}),$.selector.addEventListener(e,listener),$.listener[$.selector][e]=listener}),$.off=(e=>{$.selector.removeEventListener(e,$.listener[$.selector][e])}),$.text=(e=>$.undefined(e,$.selector.innerText,()=>$.selector.innerText=e)),$.val=(e=>$.undefined(e,$.selector.value,()=>$.selector.value=e)),$.width=(e=>$.undefined(e,$.style(e),()=>$.selector.style.width=e)),$.height=(e=>$.undefined(e,$.style(e),()=>$.selector.style.height=e)),$.show=(e=>(e?$.selector.style.visibility="visible":$.selector.style.display="block",$)),$.hide=(e=>(e?$.selector.style.visibility="hidden":$.selector.style.display="none",$)),$.css=((e,s)=>$.undefined(s,$.style(e),()=>$.selector.style[e]=s)),$.style=(e=>window.getComputedStyle($.selector,null).getPropertyValue(e)),$.undefined=((e,s,t)=>void 0===e?s:(t(),$));