/*
  Warnings:

  - You are about to alter the column `images` on the `AssetItems` table. The data in that column could be lost. The data in that column will be cast from `String` to `Binary`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AssetItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assetHeaderId" INTEGER NOT NULL,
    "duty" TEXT,
    "specification" TEXT,
    "valveType" TEXT,
    "valveSize" TEXT,
    "model" TEXT,
    "actuation" TEXT,
    "actuationType" TEXT,
    "flangeConnection" TEXT,
    "instrumentation" TEXT,
    "oemPartNumber" TEXT,
    "ansi" TEXT,
    "generalNotes" TEXT,
    "images" BLOB,
    CONSTRAINT "AssetItems_assetHeaderId_fkey" FOREIGN KEY ("assetHeaderId") REFERENCES "AssetHeader" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AssetItems" ("actuation", "actuationType", "ansi", "assetHeaderId", "duty", "flangeConnection", "generalNotes", "id", "images", "instrumentation", "model", "oemPartNumber", "specification", "valveSize", "valveType") SELECT "actuation", "actuationType", "ansi", "assetHeaderId", "duty", "flangeConnection", "generalNotes", "id", "images", "instrumentation", "model", "oemPartNumber", "specification", "valveSize", "valveType" FROM "AssetItems";
DROP TABLE "AssetItems";
ALTER TABLE "new_AssetItems" RENAME TO "AssetItems";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
