import { useState, useEffect } from "react";
import connectToDatabase from "../../mongo";
import { ObjectId } from "mongodb";
import prisma from "@/lib/prisma";

export async function getExperience(userId: string) {
    const db = await connectToDatabase();
    const collection = db.collection("users")

    //@ts-ignore
    const user = await collection.findOne({ _id: new ObjectId(userId) });

    if (user) {
        const experience = user.experience;
        console.log('User experience:', experience);
        return experience;
    }
    else {
        console.log('User not found');
        return null;
    }
}

export const getStaticProps = async () => {
    const feed = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return {
      props: { feed },
      revalidate: 10,
    };
  };

export async function updateExperience(userId: string, amount: number) {
    const db = await connectToDatabase();
    const collection = db.collection("users");
  
    const result = await collection.updateOne(
      { _id: new ObjectId(userId) },
      { $inc: { experience: amount } } // Increment the 'experience' field by 1
    );
    console.log(result);
}