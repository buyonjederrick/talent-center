'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeReservations, SafeUser, safeListing } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";
import Avatar from "../Avatar";

interface ListingCardProps {
    data: safeListing;
    reservation?: SafeReservations;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId: string;
    currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser
}) => {
    const router = useRouter();
    const { getByValue } = useCountries();

    const location = getByValue(data.locationValue);

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if(disabled){
                return;
            }

            onAction?.(actionId);
    },[onAction, actionId, disabled])

    const price = useMemo(() => {
        if(reservation) {
            return reservation.totalPrice;
        }

        return data.price;
    }, [reservation, data.price]);

    const reservationDate = useMemo(() => {
        if(!reservation){
            return null;
        }

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);

        return `${format(start, 'PP')} - ${format(end, 'PP')}`
    }, [reservation]);

    


  return (
    <div 
      onClick={() => router.push(`/listings/${data.id}`)} 
      className="col-span-1 bg-gray-200 p-4 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          />
          <div className="
            absolute
            top-3
            right-3
          ">
            <HeartButton 
              listingId={data.id} 
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className='mb-2 text-sm font-semibold flex flex-row items-center gap-2'>
                <Avatar 
                    src={data.user?.image}
                />
                <div>{data.user?.name}</div>
            </div>
        <div className="font-semibold text-sm mb-2">{data.title}</div>

        <div className="text-xs font-semibold rounded inline-block py-1 px-2 text-cyan-600 bg-cyan-200 last:mr-0 mr-1">
          {location?.region}, {location?.label}
        </div>
        <div className="text-xs font-semibold inline-block py-1 px-2 rounded text-sky-600 bg-sky-200 last:mr-0 mr-1">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
        {!reservation && (
            <div className="font-light">Starting at</div>
          )}
          <div className="font-semibold text-orange-300">
            Ugx {price}
          </div>
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
   );
    
}

export default ListingCard