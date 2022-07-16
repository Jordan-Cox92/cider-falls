import { getServices } from "./data.js";
import { getParkAndServiceJoinTable } from "./data.js";
import { getParkAreas } from "./data.js";


const services = getServices()
const parkAndServices = getParkAndServiceJoinTable()
const parkAreas = getParkAreas()





export const serviceList = (parkAreaId) => {
    let html = "<ul>"

    for (const parkAndService of parkAndServices) {
        for (const service of services) {
            if (parkAndService.serviceId === service.id) {
                if (parkAndService.parkId === parkAreaId) {
                    html += `<li class="serviceName" id="serviceName--${service.id}">${service.serviceName}</li>`
                }

            }
        }

    }
    html += "</ul>"

    return html
}





const areasThatHaveService = (service) => {
    let areasWithService = ""
    for (const parkArea of parkAreas) {
        for (const parkAndService of parkAndServices) {
            if (parkArea.id === parkAndService.parkId) { 
                if (parkAndService.serviceId === service.id) {
                    areasWithService += `${parkArea.nameOfParkArea}`
                }
            }
        }
    }
    return areasWithService
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const serviceClicked = clickEvent.target 

        if (serviceClicked.id.startsWith("serviceName")) {
            const [, serviceId] = serviceClicked.id.split("--") 

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    
                    window.alert(`${service.serviceName} is available at ${areasThatHaveService(service)}`)
                }
            }
        }
    }
)



