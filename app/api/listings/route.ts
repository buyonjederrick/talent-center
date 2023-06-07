import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {

    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();
    const {
        title,
        shortDescription,
        description,
        Contact,
        imageSrc,
        category,
        YearsOfExperience,
        DeliveryTime,
        RevisionNumber,
        location,
        genre,
        MediaSrc,
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
        price
    } = body;

    Object.keys(body).forEach((value: any) => {
        if(!body[value]){
            NextResponse.error();
        }
    });

    const listing = await prisma.listing.create({
        data: {
            title,
            shortDescription,
            description,
            imageSrc,
            YearsOfExperience,
            DeliveryTime,
            RevisionNumber,
            category,
            Contact,
            MediaSrc,
            locationValue: location.value,
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
            price: parseInt(price, 10),
            userId: currentUser.id
        }
    });

    return NextResponse.json(listing);
    
}