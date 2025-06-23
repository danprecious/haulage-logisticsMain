export type Truck = {
  id: string;
  driver: string;
  status: "In Transit" | "Idle" | "Maintenance";
  location: {
    city: string;
    lat: number;
    lng: number;
  };
};

export type TruckList = Truck[];
