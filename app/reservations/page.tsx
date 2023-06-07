import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser){
        return(
            <ClientOnly>
                <EmptyState 
                    title="Unauthorized access to this page"
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    }


    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if(reservations.length == 0){
        return(
            <ClientOnly>
                <EmptyState
                    title="No Bookings found"
                    subtitle="Looks like you have no Bookings on your professional listing"
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <ReservationsClient 
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
};

export default ReservationPage;