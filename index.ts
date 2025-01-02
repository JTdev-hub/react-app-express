import express from "express";
import cors from "cors";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(8080, "0.0.0.0", () => {
  console.log(`Listening on port ${port}`);
});

app.get("/customers", async (req, res) => {
  const { id } = req.query;
  const customers = await prisma.customers.findMany({
    where: id ? { id: Number(id) } : undefined,
  });

  res.json(customers);
});

// app.get("/customers", async (req, res) => {
//   const customers = await prisma.customers.findMany({});
//   res.json(customers);
// });

app.post("/customers", async (req, res) => {
  try {
    const { customerName, customerSite, customerContact } = req.body;
    const newCustomer = await prisma.customers.create({
      data: { customerName, customerSite, customerContact },
    });
    res.json(newCustomer);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Failed to create customer" });
  }
});

app.get("/assetHeaders", async (req, res) => {
  const assetHeaders = await prisma.assetHeader.findMany();
  res.json(assetHeaders);
});

app.post("/assetHeaders", async (req, res) => {
  const {
    customerId,
    assetNumber,
    assetDescription,
    assetSerialNo,
    siteSection,
  } = req.body;
  const newAssetHeader = await prisma.assetHeader.create({
    data: {
      customerId,
      assetNumber,
      assetDescription,
      assetSerialNo,
      siteSection,
    },
  });

  res.json(newAssetHeader);
});

app.get("/customersAssetHeaders", async (req, res) => {
  const assetAndCustomers = await prisma.customers.findMany({
    include: {
      assetHeaders: true,
    },
  });
  res.json(assetAndCustomers);
});

app.use(express.static("react-app/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "react-app", "dist", "index.html"));
});
