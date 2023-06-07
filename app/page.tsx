'use client'

import { GetServerSideProps } from 'next';
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { IListingsParams } from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  listings: any[],
  currentUser: any
};

const Home = ({ listings, currentUser }: HomeProps) => {
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
          <div></div>
          {listings.map((listing: any) => (
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchParams: IListingsParams = context.query;
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return {
    props: {
      listings,
      currentUser
    }
  }
}

export default Home;
