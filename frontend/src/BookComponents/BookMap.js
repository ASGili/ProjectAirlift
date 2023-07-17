import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const BookMap = ()=>{
    return (
        <div id="map">
        <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[0,0]}/> */}
        </MapContainer>
        </div>
    )
}

export default BookMap