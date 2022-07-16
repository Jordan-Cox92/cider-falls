import { guestList } from "./guests.js";
import { AreasOfPark } from "./parkareas.js";





const mainContainer = document.querySelector("#main-content")


const mainHTML  =

`<aside id="guest-list">
    <h2>Guests at Park</h2>
    ${guestList()}
</aside>
<section id="park-areas">
<h2>Park Areas</h2>
<h3><em>Explore by direction</em></h3>
<div class="list-of-park-areas">
${AreasOfPark()}
</div>
</section>
`



mainContainer.innerHTML = mainHTML






