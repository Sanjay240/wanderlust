
console.log(mapToken);
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});


const marker = new mapboxgl.Marker({color: "red"})
      .setLngLat(listing.geometry.coordinates) // Listing.geometry.coordinates
      .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(`<h6>${listing.title}</h6><p>Exact location provided after booking</p>`))
      .addTo(map);