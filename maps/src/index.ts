// install type definition file
// tells typescript that there will be a global variable called google
// npm install @types/google.maps

import { User } from "./user"
import { Company } from "./Company"
import { CustomMap } from "./CustomMap"

const user = new User()
const company = new Company()
const customMap = new CustomMap("map")

customMap.addMarker(user)
customMap.addMarker(company)
