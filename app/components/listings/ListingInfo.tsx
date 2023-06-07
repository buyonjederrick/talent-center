'use client';



import useCountries from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import React from 'react'
import { IconType } from 'react-icons';
import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';
import dynamic from 'next/dynamic';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiRevision } from 'react-icons/bi';
import { BsPersonCheck } from 'react-icons/bs';
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions
} from "html-react-parser";
import ShowMoreText from '../ShowMoreText';

const Map = dynamic(() => import('../Map'), {
    ssr: false
})

interface ListingInfoProps{
    user: SafeUser;
    shortDescription?: string | null;
    description: string;
    YearsOfExperience?:  number | null;
    DeliveryTime?: number | null;
    RevisionNumber?: number | null;
    genre?: { label: string, value: string }[] | undefined | null;
    productionsoftware?: { label: string, value: string }[] | undefined | null;
    instrument?: { label: string, value: string }[] | undefined | null;
    productionpurpose?: { label: string, value: string }[] | undefined | null;
    language?: { label: string, value: string }[] | undefined | null;
    gender?: { label: string, value: string }[] | undefined | null;
    voiceoverpurpose?: { label: string, value: string }[] | undefined | null;
    accent?: { label: string, value: string }[] | undefined | null;
    agerange?: { label: string, value: string }[] | undefined | null;
    voiceovertone?: { label: string, value: string }[] | undefined | null;
    beatmood?: { label: string, value: string }[] | undefined | null;
    category: {
        icon: IconType;
        label: string;
        description: string;
    } | undefined

    locationValue: string
}


const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    shortDescription,
    description,
    YearsOfExperience,
    DeliveryTime,
    RevisionNumber,
    genre,
    productionsoftware,
    instrument,
    productionpurpose,
    language,
    gender,
    voiceoverpurpose,
    accent,
    agerange,
    voiceovertone,
    beatmood,
    category,
    locationValue
}) => {

    const {getByValue} =useCountries();
    const coordinates = getByValue(locationValue)?.latlng;


    const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
    if (
    domNode instanceof Element &&
    domNode.attribs &&
    domNode.attribs.class === "remove"
    ) {
    return <></>;
    }
    }
    };

  return (
    <div className="col-span-4 flex flex-col gap-8">
    <div className="flex flex-col gap-2">
      <div className="text-xl font-semibold flex flex-row items-center gap-2">
        <Avatar src={user?.image} />
        <div>{user?.name}</div>
      </div>
      <div className="flex flex-row items-center gap-4 font-light text-neutral-500 flex-wrap">
        {YearsOfExperience ? (
          <div className="text-xs flex flex-row items-center gap-2 font-semibold py-1 px-2 rounded text-indigo-600 bg-indigo-200 last:mr-0 mr-1">
            <BsPersonCheck />
            <div>
              {YearsOfExperience} {YearsOfExperience < 2 ? 'Year of Experience' : 'Years of Experience'}
            </div>
          </div>
        ) : null}

        {category && !['pianist', 'guitarist', 'violinist', 'song-writers'].includes(category.label.toLowerCase().replace(/\s+/g, '-')) && (
          <>
            {DeliveryTime ? (
              <div className="text-xs flex flex-row items-center gap-2 font-semibold py-1 px-2 rounded text-indigo-600 bg-indigo-200 last:mr-0 mr-1">
                <AiOutlineClockCircle />
                <div>
                  {DeliveryTime} {DeliveryTime < 2 ? 'Day Delivery' : 'Days Delivery'}
                </div>
              </div>
            ) : null}

            {RevisionNumber ? (
              <div className="text-xs font-semibold flex flex-row items-center gap-2 py-1 px-2 rounded text-indigo-600 bg-indigo-200 last:mr-0 mr-1">
                <BiRevision />
                <div>
                  {RevisionNumber} {RevisionNumber < 2 ? 'Project Revision' : 'Project Revisions'}
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
    
    <hr className="h-px bg-purple-500 border-0" />

      <div className="grid grid-cols-2 lg:grid-cols-3 content-start font-light gap-2 text-neutral-500">
          {genre && (
              <div>
                <p className='text-base font-semibold'>Genre:</p>
                <p className='flex flex-col'>{genre.map(item => item.label).join(", ")}</p>
              </div>
            )}

          {productionsoftware && (
                        <div>
                          <p className='text-base font-semibold'>Software:</p>
                          <p className='flex flex-col'>{productionsoftware.map(item => item.label).join(", ")}</p>
                        </div>
                      )}

{instrument && (
                        <div>
                          <p className='text-base font-semibold'>Instrument:</p>
                          <p className='flex flex-col'>{instrument.map(item => item.label).join(", ")}</p>
                        </div>
                      )}

{productionpurpose && (
                        <div>
                          <p className='text-base font-semibold'>Purpose:</p>
                          <p className='flex flex-col'>{productionpurpose.map(item => item.label).join(", ")}</p>
                        </div>
                      )}

{language && (
                        <div>
                          <p className='text-base font-semibold'>Languages:</p>
                          <p className='flex flex-col'>{language.map(item => item.label).join(", ")}</p>
                        </div>
                      )}

{gender && (
                        <div>
                          <p className='text-base font-semibold'>Gender:</p>
                          <p className='flex flex-col'>{gender.map(item => item.label).join(", ")}</p>
                        </div>
                      )}

{voiceoverpurpose && (
                        <div>
                          <p className='text-base font-semibold'>Purpose:</p>
                          <p className='flex flex-col'>{voiceoverpurpose.map(item => item.label).join(", ")}</p>
                        </div>
                      )}

{accent && (
                        <div>
                          <p className='text-base font-semibold'>Accent:</p>
                          <p className='flex flex-col'>{accent.map(item => item.label).join(", ")}</p>
                        </div>
                      )}

{agerange && (
                        <div>
                          <p className='text-base font-semibold'>Age Range:</p>
                          <p className='flex flex-col'>{agerange.map(item => item.label).join(", ")}</p>
                        </div>
                      )}

{voiceovertone && (
                        <div>
                          <p className='text-base font-semibold'>Tones:</p>
                          <p className='flex flex-col'>{voiceovertone.map(item => item.label).join(", ")}</p>
                        </div>
                      )}

{beatmood && (
                        <div>
                          <p className='text-base font-semibold'>Beat Mood:</p>
                          <p className='flex flex-col'>{beatmood.map(item => item.label).join(", ")}</p>
                        </div>
                      )}
      </div>


    
    <hr className="h-px bg-purple-500 border-0" />

    {category && (
      <ListingCategory icon={category.icon} label={category.label} description={category.description} />
    )}

    <hr className="h-px bg-purple-500 border-0" />

    <div>
  <div className="text-lg font-semibold text-black">Short Description</div>
  <p className="break-words text-neutral-500 font-light">{shortDescription}</p>
  <hr className="h-px mt-2 mb-2 bg-purple-500 border-0" />
  <div className="mt-4 text-lg font-semibold text-black">About this professional listing</div>

  <ShowMoreText text={description} length={100} parseHtml={true} />

  <hr className="h-px mb-4 bg-purple-500 border-0" />
    <div style={{ height: '40vh' }}>
      <Map center={coordinates} />
    </div>
  
</div>

  </div>
  )
}

export default ListingInfo