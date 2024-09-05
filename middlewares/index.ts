//import { Response, Request } from "express"
//import { config } from "dotenv"
//import { verify } from "jsonwebtoken"

// config()

// export function isAdmin(req: Request, res: Response, next: Function){
//     const {is_admin} = req.body
//     const token = req.headers
//         try{
//             if(token){
//                 const isTokenValid = verify(token["token"] as string , process.env.JWT_SECRET!)
//                 if(isTokenValid){
//                     const { admin } = isTokenValid as { admin : boolean };

//                     if (admin){
//                         next()
//                     } else {
//                         res.status(401).send("No eres admin")
//                     }
//                 } else {
//                     res.status(401).send("unauthorized User")
//                 }
//             }else{
//                 res.status(401).send("Token not provided")
//             }
//         }catch(error){
//             res.status(500).send(error)
//         }
    
// }