import flowJson from "../../../../flow.json";
import { network } from "../config";

const replaceWithProperImports = (cadence: string) => {
  return cadence.replace('"../contracts/HelloWorld.cdc"', flowJson.contracts.HelloWorld.aliases[network])
}

export default replaceWithProperImports;