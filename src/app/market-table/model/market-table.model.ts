export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface MarketData {
  code: string;
  name: string;
  currency: string;
  marketCap: string;
  price: string;
  type: string;
  netvariation: string;
  change: string;
  relatednews: string;
}
