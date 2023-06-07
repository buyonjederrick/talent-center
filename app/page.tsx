import { useEffect, useState } from 'react';
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  searchParams: IListingsParams
};

// Define the type of your listings and user data
type Listing = any; // replace with your actual type
type User = any; // replace with your actual type

const Home = ({ searchParams }: HomeProps) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const listingsData = await getListings(searchParams);
      const currentUserData = await getCurrentUser();

      setListings(listingsData);
      setCurrentUser(currentUserData);
    };

    fetchData();
  }, [searchParams]);

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: Listing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing} actionId={""}            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home;
