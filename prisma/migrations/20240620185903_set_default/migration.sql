-- DropForeignKey
ALTER TABLE "MoviesOnUsers" DROP CONSTRAINT "MoviesOnUsers_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MoviesOnUsers" DROP CONSTRAINT "MoviesOnUsers_userId_fkey";

-- AddForeignKey
ALTER TABLE "MoviesOnUsers" ADD CONSTRAINT "MoviesOnUsers_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoviesOnUsers" ADD CONSTRAINT "MoviesOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
