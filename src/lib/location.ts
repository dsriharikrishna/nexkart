import { checkPincodeServiceability } from "@/data/pincodes";

export interface RealtimeLocationResult {
  pincode: string;
  city: string;
  state: string;
  deliveryTime: string;
}

export async function detectRealtimeLocation(): Promise<RealtimeLocationResult> {
  // 1. Try HTML5 Geolocation with reverse geocoding
  if (typeof window !== "undefined" && "geolocation" in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 7000,
          enableHighAccuracy: true,
          maximumAge: 60000,
        });
      });

      const { latitude, longitude } = position.coords;

      // Reverse geocode with free public OpenStreetMap Nominatim
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
          { headers: { "Accept-Language": "en" } }
        );
        if (res.ok) {
          const data = await res.json();
          const address = data.address || {};
          const detectedPin = address.postcode ? address.postcode.replace(/\D/g, "").slice(0, 6) : null;
          const detectedCity =
            address.city || address.town || address.village || address.suburb || address.state_district || "Your Location";
          const detectedState = address.state || "Telangana";

          if (detectedPin && detectedPin.length === 6) {
            const serviceability = checkPincodeServiceability(detectedPin);
            return {
              pincode: detectedPin,
              city: `${detectedCity}`,
              state: detectedState,
              deliveryTime: serviceability.deliveryTime,
            };
          }
        }
      } catch {
        // Fallback to coordinates
      }

      // Coordinate based fallback
      if (latitude >= 16.5 && latitude <= 18.0 && longitude >= 77.5 && longitude <= 79.5) {
        return { pincode: "500081", city: "Hyderabad (HITEC City)", state: "Telangana", deliveryTime: "45 mins" };
      }
      if (latitude >= 15.8 && latitude <= 17.0 && longitude >= 80.0 && longitude <= 81.2) {
        return { pincode: "520001", city: "Vijayawada", state: "Andhra Pradesh", deliveryTime: "60 mins" };
      }
      if (latitude >= 17.2 && latitude <= 18.2 && longitude >= 82.5 && longitude <= 83.8) {
        return { pincode: "530001", city: "Visakhapatnam", state: "Andhra Pradesh", deliveryTime: "60 mins" };
      }
    } catch {
      // Permission denied or timed out
    }
  }

  // 2. IP-based Realtime Fallback (e.g. ipapi.co)
  try {
    const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      const postal = data.postal ? data.postal.replace(/\D/g, "").slice(0, 6) : null;
      const city = data.city || "Hyderabad";
      const region = data.region || "Telangana";

      if (postal && postal.length === 6) {
        const s = checkPincodeServiceability(postal);
        return {
          pincode: postal,
          city: `${city}`,
          state: region,
          deliveryTime: s.deliveryTime,
        };
      }

      return {
        pincode: "500081",
        city: `${city}`,
        state: region,
        deliveryTime: "45 mins",
      };
    }
  } catch {
    // network fallback
  }

  // 3. Guaranteed default
  return {
    pincode: "500081",
    city: "Hyderabad (HITEC City)",
    state: "Telangana",
    deliveryTime: "45 mins",
  };
}
