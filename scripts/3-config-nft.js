import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0x0da115F616F29917239901E373E25976BE3eE26B",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "Portuguese Football Federation",
        description: "This NFT will give you access to WorldCupDAO!",
        image: readFileSync(
          "scripts/assets/Portuguese Football Federation.png"
        ),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
