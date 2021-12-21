import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xFC794a27C7c0FCef39812649bc93CdA720FC1D51",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Vegetable Pun",
        description: "This NFT will give you access to PunDAO!",
        image: readFileSync("scripts/assets/membernft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()