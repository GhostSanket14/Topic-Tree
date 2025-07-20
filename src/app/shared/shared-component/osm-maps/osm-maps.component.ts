import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-osm-maps',
  templateUrl: './osm-maps.component.html',
  styleUrls: ['./osm-maps.component.scss']
})
export class OsmMapsComponent implements OnInit {
  map!: L.Map;
  searchText: string = '';
  currentMarker!: L.Marker;
  destinationMarker!: L.Marker;
  routeLine!: L.Polyline;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(this.map);
  }

  goToMyLocation(): void {
    if (!navigator.geolocation) {
      alert("Geolocation not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      this.map.setView([lat, lng], 13);

      if (this.currentMarker) {
        this.map.removeLayer(this.currentMarker);
      }

      this.currentMarker = L.marker([lat, lng])
        .addTo(this.map)
        .bindPopup('Your Location')
        .openPopup();
    }, () => alert("Location access denied."));
  }

  searchLocationCall(searchValue: string): void {
    this.searchText = searchValue;
    this.searchLocation();
  }

  searchLocation(): void {
    if (!this.searchText.trim()) return;

    const query = encodeURIComponent(this.searchText);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    fetch(url)
      .then(res => res.json())
      .then(locations => {
        if (locations.length === 0) {
          alert('Location not found!');
          return;
        }

        const location = locations[0];
        const destLat = parseFloat(location.lat);
        const destLng = parseFloat(location.lon);

        this.map.setView([destLat, destLng], 13);

        if (this.destinationMarker) {
          this.map.removeLayer(this.destinationMarker);
        }

        this.destinationMarker = L.marker([destLat, destLng])
          .addTo(this.map)
          .bindPopup(this.searchText)
          .openPopup();

        // Now get current location and draw route
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(pos => {
            const start = L.latLng(pos.coords.latitude, pos.coords.longitude);
            const end = L.latLng(destLat, destLng);

            this.drawRouteLine(start, end);
          });
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error searching location.');
      });
  }

  private drawRouteLine(start: L.LatLng, end: L.LatLng): void {
    if (this.routeLine) {
      this.map.removeLayer(this.routeLine);
    }

    const control = L.Routing.control({
      waypoints: [start, end],
      routeWhileDragging: false,
      show: false,
      addWaypoints: false
    }).addTo(this.map);

    control.on('routesfound', (e: any) => {
      const route = e.routes[0];
      const routeCoords = route.coordinates;
      const totalDistanceMeters = route.summary.totalDistance;
      const totalTimeSeconds = route.summary.totalTime;

      // Format values
      const distanceKm = (totalDistanceMeters / 1000).toFixed(2);
      const timeMin = Math.ceil(totalTimeSeconds / 60);

      // Remove previous line if any
      if (this.routeLine) this.map.removeLayer(this.routeLine);

      // Draw red route line
      this.routeLine = L.polyline(routeCoords, {
        color: 'red',
        weight: 5,
        opacity: 0.9
      }).addTo(this.map);

      // Fit map to route
      this.map.fitBounds(this.routeLine.getBounds(), { padding: [50, 50] });

      // Add floating label at midpoint of the route
      const midpointIndex = Math.floor(routeCoords.length / 2);
      const midpoint = routeCoords[midpointIndex];

      const popupText = `🛣️ ${distanceKm} km<br>🕒 ~${timeMin} mins`;

      const infoPopup = L.popup({
        closeButton: false,
        autoClose: false,
        className: 'route-popup'
      })
        .setLatLng(midpoint)
        .setContent(popupText)
        .openOn(this.map);

      // Optional: remove routing control from map to hide extra UI
      this.map.removeControl(control);
    });
  }

}
