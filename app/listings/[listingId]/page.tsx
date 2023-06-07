import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string;
}

export async function generateMetadata({ params }: { params: IParams },
  
  ) {
  try {
    const listing = await getListingById(params);

    
    if(!listing){
      return {
        title: 'Listing not found',
        description: 'Listing Page your are looking for is not found',
      }
    }
    return {
      title: listing.title,
      description: listing.description,
      alternates: {
        canonical: `/listings/${listing.id}`,
        languages: {
          "en-US": `/listings/${listing.id}`,
        }
      },

      robots: {
        index: true,
        follow: true,
        nocache: false,
      },

      twitter: {
        card: 'summary_large_image',
        title: listing.title,
        description: listing.shortDescription,
        siteId: '1467726470533754880',
        creator: '@esomschool',
        creatorId: '1467726470533754880',
        images: ['https://nextjs.org/og.png'],
      },
    }
  } catch (error) {
    console.log(error);
    return {
      title: 'Listing not found',
      description: 'Listing Page your are looking for is not found',
    }
}}



const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if(!listing){
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <ListingClient 
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
   
  )
}

export default ListingPage;