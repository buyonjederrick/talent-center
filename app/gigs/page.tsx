import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import GigsClient from "./GigsClient";

const GigsPage = async () => {
    const currentUser = await getCurrentUser();
    
    if(!currentUser) {
        return(
        <ClientOnly>
            <EmptyState 
                title="Unauthorized"
                subtitle="Please Login"
            />
        </ClientOnly>
        )
       
    }

    const reservations = await getReservations({
        userId: currentUser?.id
    });

    if(reservations.length == 0) {
        return (
          
        <ClientOnly>
        <EmptyState
            title="No Booked  Professional found"
            subtitle="No Booked any Proffesional for your Project or Event"
        />
        </ClientOnly>
)
    }

    return (
        <ClientOnly>
            <GigsClient
            reservations={reservations}
            currentUser = {currentUser}
            />
        </ClientOnly>
    )
}

export default GigsPage