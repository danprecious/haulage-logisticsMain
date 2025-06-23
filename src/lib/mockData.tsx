import { TruckList } from "@/types";

export const mockResponse: TruckList = [
  {
    id: "TRK001",
    driver: "John Doe",
    status: "In Transit",
    location: {
      city: "Dallas",
      lat: 32.7767,
      lng: -96.797,
    },
  },
  {
    id: "TRK002",
    driver: "Jane Smith",
    status: "Idle",
    location: {
      city: "Houston",
      lat: 29.7604,
      lng: -95.3698,
    },
  },
  {
    id: "TRK003",
    driver: "Mike Johnson",
    status: "Maintenance",
    location: {
      city: "Phoenix",
      lat: 33.4484,
      lng: -112.074,
    },
  },
  {
    id: "TRK004",
    driver: "Lisa Ray",
    status: "In Transit",
    location: {
      city: "Atlanta",
      lat: 33.749,
      lng: -84.388,
    },
  },
  {
    id: "TRK005",
    driver: "Carlos Diaz",
    status: "Idle",
    location: {
      city: "Chicago",
      lat: 41.8781,
      lng: -87.6298,
    },
  },
];
