    "use server"

    import { auth } from "@clerk/nextjs/dist/types/server";
    import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

    //function to serialize transaction object
    const serializeTransaction = (obj) =>{
         const serialized = {...obj};
         
         if(obj.balance)
         {
            serialized.balance = obj.balance.toNumber();
         }
    }

    export async function createAccount(data) {
        try{
        const {userId} = await auth;
        if (!userId) throw new Error("Unauthorised"); //chacking user authentication
        const user = await db.user.findUnique({where: {clerkId: userId}});   
        if (!user) throw new Error("User not found"); //checking user existence in db

        //convert balance to float before saving
        const balanceFloat = parseFloat(data.balance);
        if (isNaN(balanceFloat)) {
            throw new Error("Invalid balance amount");  
        }   
        //check if it is the user's first account
        const existingAccounts = await db.account.findMany({where: {userId: user.id}});
        const shouldBeDefault = existingAccounts.length === 0?true :data.isDefault;

        //if this account should be default, unset previous default accounts
        if (shouldBeDefault){
            await db.account.updateMany({
                where: {userId: user.id, isDefault: true},
                data: {isDefault: false}
            });
        }
        //create new account
     const account = await db.account.create({
        data:{
            ...data,
            balance: balanceFloat,
            userId: user.id,
            isDefault: shouldBeDefault,
        },
     });
        const searializedAccount = serializeTransaction(account);
        revalidatePath("/dashboard");
        return {success: true, data: searializedAccount};   
    }catch(error){
        throw new Error( error.message);
    }  
    }