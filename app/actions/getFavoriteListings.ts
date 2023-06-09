import prisma from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings() {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser){
            return [];
        }

        const favorites = await prisma.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])]
                }
            },
            include: {
                user: true
            }
        });

        const safeFavorites = favorites.map((favorite) => ({
            ...favorite,
            createdAt: favorite.createdAt.toISOString(),
            user: {
                ...favorite.user,
                createdAt: favorite.user.createdAt.toISOString(),
                updatedAt: favorite.user.updatedAt.toISOString(),
                emailVerified: favorite.user.emailVerified ? favorite.user.emailVerified.toString() : null,
            },
        }));

        return safeFavorites;
    } catch (error: any) {
        throw new Error(error);
    }
}
