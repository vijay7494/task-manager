import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

/*** POST ***/

export async function POST(req:Request){
    try {
        const {userId} = auth();

        if(!userId){
            return NextResponse.json({error: "Unauthorized", status: 401});
        }

        const {title, description, date, completed, important} = await req.json();

        if (!title || !description || !date) {
            return NextResponse.json({
              error: "Missing required fields",
              status: 400,
            });
          }
      
        if (title.length < 3) {
            return NextResponse.json({
              error: "Title must be at least 3 characters long",
              status: 400,
            });
        }
        
        const response = await prisma.task.create({
            data:{
                title,
                description,
                date,
                isCompleted: completed,
                isImportant: important,
                userId,
            }
        });


        console.log("Task created",response);    
        return NextResponse.json(response);

    } catch (error) {
        console.log("Error Creating Task",error);
        return NextResponse.json({error:"Error creating task",status: 500});
    }
}


/*** GET ***/

export async function GET(req: Request){
    try {
        const {userId} = auth();

        if(!userId){
            return NextResponse.json({error: "Unauthorized", status: 401});
        }

        const tasks = await prisma.task.findMany({
            where:{
                userId,
            },
        });
        // console.log("TASKS: " , tasks);
        return NextResponse.json(tasks);
    } catch (error) {
        console.log("Error Getting Task",error);
        return NextResponse.json({error:"Error getting task",status: 500});
    }
}

// /*** PUT ***/

export async function PUT(req:Request){
    try {
        const {userId} = auth();
        const {isCompleted, id} = await req.json();

        if(!userId){
            return NextResponse.json({error: "Unauthorized", status: 401});
        }

        const task = await prisma.task.update({
            where: {
                id,
            },
            data:{
                isCompleted,
            },
        });
        console.log(id,isCompleted);
        return NextResponse.json(task);
    } catch (error) {
        console.log("Error Updating Task",error);
        return NextResponse.json({error:"Error updating task",status: 500});
    }
}



