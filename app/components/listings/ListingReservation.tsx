'use client';
import { Range } from 'react-date-range';
import Calendar from '../inputs/Calendar';
import Button from '../Button';
import { BsTelephoneFill } from 'react-icons/bs';

interface ListingReservationProps {
Contact?: string | null;
price: number;
dateRange: Range;
totalPrice: number;
onChangeDate: (value: Range) => void;
onSubmit: () => void;
disabled?: boolean;
disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
    Contact,
    price,
    dateRange,
    totalPrice,
    onChangeDate,
    onSubmit,
    disabled,
    disabledDates
    }) => {

       
    return (


    <>

        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>
                    Ugx {price}
                </div>
                <div className='font-light text-neutral-600'>
                    Starting Price
                </div>
            </div>
            <hr className='h-px bg-purple-500 border-0'/>
            <Calendar value={dateRange} disabledDates={disabledDates} onChange={(value)=> onChangeDate(value.selection)}
                />
                <hr className='h-px bg-purple-500 border-0'/>
                <div className='p-4'>
                    <Button disabled={disabled} label="Book Professional" onClick={onSubmit} />
                </div>
                <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
                    <div>
                        Total
                    </div>
                    <div>
                        Ugx {totalPrice}
                    </div>
                </div>
        </div>


   

        {Contact && (
        <div
            className='mt-2 text-sm font-semibold flex flex-row items-center gap-2 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4'>
            <BsTelephoneFill size={24} />
            <div>{Contact}</div>
        </div>
        )}

    </>

    )
    }

    export default ListingReservation