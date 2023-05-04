#! ./node_modules/.bin/ts-node

import 'zx/globals';

const EXECUTABLE_NAME: string = argv.EXECUTABLE_NAME || "demo-circuit";
const ZKEY_FINAL_FILENAME: string = argv.ZKEY_FINAL_FILENAME || "demo_0001";

(async () => {
  fs.readdir('./circuit-inputs/', async (_, filenames) => {
    for (let i = 0; i < filenames.length - 1; i++) {
      if (filenames[i] !== '.gitkeep') {
        // generate witnesses
        console.log(`\nGenerating witness for ${filenames[i]}...`);
        await $`cd ../circuits/${EXECUTABLE_NAME}_js && node generate_witness.js ${EXECUTABLE_NAME}.wasm ../../provers/circuit-inputs/${filenames[i]} witness-${i}.wtns`;

        // generate ZKP
        console.log(`\nGenerating ZKPs for ${filenames[i]}...`);
        await $`cd ../circuits && snarkjs groth16 prove demo_0001.zkey ./${EXECUTABLE_NAME}_js/witness-${i}.wtns proof-${i}.json public-${i}.json`;
      }
    }
  });

  console.log(`\nGenerating a verifier contract...`);
  await $`snarkjs zkey export solidityverifier ../circuits/${ZKEY_FINAL_FILENAME}.zkey ../contracts/circom/verifier.sol`;
})();
