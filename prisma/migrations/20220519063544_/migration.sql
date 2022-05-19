-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "modules" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    CONSTRAINT "modules_id_fkey" FOREIGN KEY ("id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "modulesResources" (
    "id" INTEGER NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "modules_id_key" ON "modules"("id");

-- CreateIndex
CREATE UNIQUE INDEX "modulesResources_id_key" ON "modulesResources"("id");
