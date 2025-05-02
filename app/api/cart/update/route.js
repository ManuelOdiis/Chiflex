import connectDB from "@/config/db"
import User from "@/models/User"
import { getAuth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"


export async function POST(request) {
    try {
        
        const { userId } = getAuth(request)

        const {cartData} = await request.json() 
        

        await connectDB()
        const user = await User.findById(userId)

        user.cartItems = cartData
        await user.save()
        

        if (!user) {
            return NextResponse.json(
              { success: false, message: "User not found" },
              { status: 404 }
            );
          }

       return NextResponse.json({success: true, cart: user.cart})

    } catch (error) {
       return NextResponse.json({success: false, message:error.message})
    }
}