import { getGuests } from "./data.js";

const guests = getGuests()


export const guestList = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li class="guestName" id="guestName--${guest.id}">${guest.firstName} ${guest.lastName}</li>` //accessing id and name of guest using dot notation; adding the string with the list item to our variable
    }

    html += "</ul>" 

    return html 
}
