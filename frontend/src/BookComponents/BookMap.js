import { Typography } from '@mui/material';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const BookMap = ({commentData})=>{
    let markerslist = commentData.filter((comment) => {return comment.coordinates});
    let markers = markerslist.map((comment,index) => {
        return  <Marker key={index} position={[comment.coordinates.lat,comment.coordinates.long]}>      
                <Popup>
                <Typography component="h3">Coordinates for comment {index +1} by {comment.user}</Typography>
                <Typography component="p">{(comment.coordinates.lat +", "+ comment.coordinates.long)}</Typography>
                </Popup>
                </Marker>
    })

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