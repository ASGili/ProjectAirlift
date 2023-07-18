import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const BookMap = ({commentData})=>{
    let markers = commentData.map((comment,index)=><Marker key={index} position={[comment.coordinates.lat,comment.coordinates.long]}/>)


    return (
        <div id="map">
        <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
        </MapContainer>
        </div>
    )
}

export default BookMap