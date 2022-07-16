import { getGuests, getParkAreas } from "./data.js";
import { serviceList } from "./services.js";





const parkAreas = getParkAreas()
const guests = getGuests()




export const AreasOfPark = () => {
    let html = "" 

    for (const area of parkAreas) {
        html += `<div class="park-card" id="park_area--${area.id}"><h2 id="area--${area.id}">${area.nameOfParkArea} </h2> <br>
        <h4> Services</h4>
        <br>
        ${serviceList(area.id)} 
        </div>`
    }

    return html
}






const numberOfGuests = (parkArea) => {  
    let sumOfGuests = 0 

        for (const guest of guests){ 
        if (guest.park_area_id === parkArea.id) { 
            sumOfGuests += 1 
        }
    }
    return sumOfGuests
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const areaClicked = clickEvent.target 
    

        if (areaClicked.id.startsWith("area")) { 
            const [, areaId] = areaClicked.id.split("--")  

            for (const parkArea of parkAreas) {
                if (parkArea.id === parseInt(areaId)) { 
                    const TotalNumberOfGuests = numberOfGuests(parkArea)  
                    window.alert(`There are ${TotalNumberOfGuests} in this area.`)  
                }
            }
        }
    }
)




