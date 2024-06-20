-- CreateTable
CREATE TABLE "MoviesOnUsers" (
    "movieId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "MoviesOnUsers_pkey" PRIMARY KEY ("movieId","userId")
);

-- AddForeignKey
ALTER TABLE "MoviesOnUsers" ADD CONSTRAINT "MoviesOnUsers_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoviesOnUsers" ADD CONSTRAINT "MoviesOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
