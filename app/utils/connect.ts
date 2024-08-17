import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
}
//else{
//     let globalWithPrisma = global as typeof globalThis & {
//         prisma: PrismaClient;
//       };
//     if(!globalWithPrisma.prisma){
//         globalWithPrisma.prisma = new PrismaClient;
//     }
//     prisma = globalWithPrisma.prisma;
// }

else{
    //@ts-ignore
    if(!global.prisma){
        //@ts-ignore
        global.prisma = new PrismaClient;
    }
    //@ts-ignore
    prisma = global.prisma;
}
export default prisma;