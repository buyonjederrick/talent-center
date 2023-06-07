import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  YearsOfExperience?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      YearsOfExperience,
      locationValue,
      startDate,
      endDate,
      category,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (YearsOfExperience) {
      query.YearsOfExperience = {
        gte: +YearsOfExperience,
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing?.createdAt?.toISOString(),
      user: {
        ...listing?.user,
        createdAt: listing?.user?.createdAt?.toISOString(),
        updatedAt: listing?.user?.updatedAt?.toISOString(),
        emailVerified: listing?.user?.emailVerified?.toDateString() || null,
      },
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
