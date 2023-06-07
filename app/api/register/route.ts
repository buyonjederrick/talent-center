import bcrypt from "bcrypt";

import prisma from '@/app/libs/prismadb';
import { NextResponse } from "next/server";

export async function POST(
    request: Request
){
    const body = await request.json();
    const {
        email,
        name,
        phone,
        password
    } = body;

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        // Return a HTTP 409 Conflict status code along with the error message
        return new Response('Email already exists. Please Use another Email', { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            phone,
            hashedPassword
        }
    });

    return NextResponse.json(user);
}
