'use client';

import { useRouter } from "next/navigation";
import { SafeReservations, SafeUser } from "../types"
import Container from "../components/Container";
import Heading from "../components/Heading";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

interface GigsClientProps {
    reservations: SafeReservations[];
    currentUser?: SafeUser | null;
}

const GigsClient: React.FC<GigsClientProps> = ({
    reservations,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
        .then(() => {
            toast.success('Professional Gig Booking Cancalled');
            router.refresh();
        })
        .catch((error) => {
            toast.error(error?.response?.data?.error)
        })
        .finally(() => {
            setDeletingId('');
        });
    }, [router]);

  return (
    <Container>
    <Heading 
        title="Booked Professionals"
        subtitle="List of professional you would like to book in the near future"
    />

    <div className="
      mt-10
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
        {reservations.map((reservation) => (
                <ListingCard 
                    key={reservation.id}
                    data={reservation.listing}
                    reservation={reservation}
                    actionId={reservation.id}
                    onAction={onCancel}
                    disabled={deletingId == reservation.id}
                    actionLabel="Cancel Booking"
                    currentUser={currentUser}
                />
           ))}
    </div>
</Container>
  )
}

export default GigsClient