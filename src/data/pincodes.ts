export interface PincodeServiceability {
  pincode: string;
  city: string;
  state: "Telangana" | "Andhra Pradesh" | "Maharashtra" | "Karnataka" | "Delhi NCR";
  isServiceable: boolean;
  deliveryTime: string; // e.g. "45 mins", "60 mins", "Same Day"
  hubName: string;
}

export const REGIONAL_PINCODES: Record<string, PincodeServiceability> = {
  // Telangana (Hyderabad Metro Hubs)
  "500001": {
    pincode: "500001",
    city: "Hyderabad (Abids)",
    state: "Telangana",
    isServiceable: true,
    deliveryTime: "45 mins",
    hubName: "Hyderabad Central Micro-Hub",
  },
  "500034": {
    pincode: "500034",
    city: "Hyderabad (Banjara Hills)",
    state: "Telangana",
    isServiceable: true,
    deliveryTime: "45 mins",
    hubName: "Banjara Express Dispatch Hub",
  },
  "500081": {
    pincode: "500081",
    city: "Hyderabad (HITEC City)",
    state: "Telangana",
    isServiceable: true,
    deliveryTime: "45 mins",
    hubName: "Cyberabad Tech Hub",
  },
  "500032": {
    pincode: "500032",
    city: "Hyderabad (Gachibowli)",
    state: "Telangana",
    isServiceable: true,
    deliveryTime: "45 mins",
    hubName: "Financial District Express",
  },
  "500003": {
    pincode: "500003",
    city: "Secunderabad",
    state: "Telangana",
    isServiceable: true,
    deliveryTime: "60 mins",
    hubName: "Secunderabad Station Hub",
  },
  "500072": {
    pincode: "500072",
    city: "Hyderabad (Kukatpally)",
    state: "Telangana",
    isServiceable: true,
    deliveryTime: "60 mins",
    hubName: "KPHB Express Hub",
  },

  // Andhra Pradesh (Visakhapatnam, Vijayawada, Guntur)
  "530001": {
    pincode: "530001",
    city: "Visakhapatnam (Town)",
    state: "Andhra Pradesh",
    isServiceable: true,
    deliveryTime: "60 mins",
    hubName: "Vizag Port Express",
  },
  "530016": {
    pincode: "530016",
    city: "Visakhapatnam (Dwaraka Nagar)",
    state: "Andhra Pradesh",
    isServiceable: true,
    deliveryTime: "60 mins",
    hubName: "Vizag Central Hub",
  },
  "520001": {
    pincode: "520001",
    city: "Vijayawada (One Town)",
    state: "Andhra Pradesh",
    isServiceable: true,
    deliveryTime: "60 mins",
    hubName: "Vijayawada Krishna Hub",
  },
  "520010": {
    pincode: "520010",
    city: "Vijayawada (Benz Circle)",
    state: "Andhra Pradesh",
    isServiceable: true,
    deliveryTime: "60 mins",
    hubName: "Benz Circle Dispatch Hub",
  },
  "522001": {
    pincode: "522001",
    city: "Guntur",
    state: "Andhra Pradesh",
    isServiceable: true,
    deliveryTime: "Same Day",
    hubName: "Amaravati Regional Hub",
  },

  // Major Metro Hubs
  "400001": {
    pincode: "400001",
    city: "Mumbai (Fort)",
    state: "Maharashtra",
    isServiceable: true,
    deliveryTime: "60 mins",
    hubName: "South Mumbai Atelier",
  },
  "560001": {
    pincode: "560001",
    city: "Bengaluru (MG Road)",
    state: "Karnataka",
    isServiceable: true,
    deliveryTime: "60 mins",
    hubName: "Bengaluru Central Hub",
  },
  "110001": {
    pincode: "110001",
    city: "Delhi (Connaught Place)",
    state: "Delhi NCR",
    isServiceable: true,
    deliveryTime: "60 mins",
    hubName: "Delhi NCR Express",
  },
};

export function checkPincodeServiceability(pincode: string): PincodeServiceability {
  const cleanPin = pincode.trim();
  if (REGIONAL_PINCODES[cleanPin]) {
    return REGIONAL_PINCODES[cleanPin];
  }

  // Check prefix for Telangana & AP
  if (cleanPin.startsWith("50")) {
    return {
      pincode: cleanPin,
      city: "Hyderabad Region",
      state: "Telangana",
      isServiceable: true,
      deliveryTime: "60 mins",
      hubName: "Telangana Regional Dispatch",
    };
  }

  if (cleanPin.startsWith("51") || cleanPin.startsWith("52") || cleanPin.startsWith("53")) {
    return {
      pincode: cleanPin,
      city: "Andhra Pradesh Region",
      state: "Andhra Pradesh",
      isServiceable: true,
      deliveryTime: "Same Day",
      hubName: "AP Regional Dispatch",
    };
  }

  // Unsupported or Standard Pan-India Dispatch
  return {
    pincode: cleanPin,
    city: "Other Region",
    state: "Maharashtra",
    isServiceable: false,
    deliveryTime: "Standard Courier (2-4 Days)",
    hubName: "Central Fulfillment Hub",
  };
}
