

async function initMap() {

    const position = { lat: 51.5136, lng: 7.4653 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    let map = new Map(document.getElementById("map"), {
        zoom: 18,
        center: position,
        mapId: "DEMO_MAP_ID",
    });
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Dortmund",
    });
}
initMap()