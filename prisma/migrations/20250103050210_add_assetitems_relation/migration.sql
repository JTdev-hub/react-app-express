-- CreateTable
CREATE TABLE "AssetItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assetHeaderId" INTEGER NOT NULL,
    "duty" TEXT,
    "specification" TEXT,
    "valveType" TEXT,
    "model" TEXT,
    "actuation" TEXT,
    "actuationType" TEXT,
    "flangeConnection" TEXT,
    "instrumentation" TEXT,
    "oemPartNumber" TEXT,
    "ansi" TEXT,
    "generalNotes" TEXT,
    "images" TEXT,
    CONSTRAINT "AssetItems_assetHeaderId_fkey" FOREIGN KEY ("assetHeaderId") REFERENCES "AssetHeader" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
