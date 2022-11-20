// instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
}

export class CustomMap {
  // public is default modifier
  // private means cannot reference property outside of this class
  private googleMap: google.maps.Map

  constructor(divId: string) {
    // add as HTMLElement to avoid TS error
    // go through type definition file with cmd click to see the types
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    )
  }

  // must contain the object location within interface Mappable
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi there!",
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}
