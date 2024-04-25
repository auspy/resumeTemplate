import Links from "../Links";
import Link from "next/link";

const FourthProject = () => {
  return (
    <>
      <h3>Practicing Teamwork : Devclans</h3>
      <blockquote className="mb-4">
        <h4>Your requirements:</h4>
        <li>
          <b>You can work in teams</b>. You can hold your ground and don't need
          constant oversight but can also collaborate and work with more people
          whenever necessary.
        </li>
      </blockquote>
      <p>
        In 2024, I decided to build a connection platform for developers. We
        already had a means of marketing and testers. So I decided to build a
        platform where developers can connect with each other and share their
        projects.
      </p>
      <p>
        I was the <b>lead developer and designer</b> in this project and managed
        to get 2 other developers to work with me. We built the platform in 2
        months and deployed it on vercel.
        <Link href={"https://www.devclans.com/about"}> The Team </Link>
      </p>
      <p>
        This time i focused a lot on <b>security and performance</b> as this was
        a platform which will be built for developers. For this we used{" "}
        <b>Redis for caching data</b> and <b>zod for validation</b> in every api
        and even in frontend forms. To prevent misuse of the platform, we used{" "}
        <b>upstash for ratelimiting</b>.
      </p>
      <p>
        Important thing about cache is that it should be <b>consistent</b> and
        <b> stale data should be removed</b>. So to ensure this, we utilized a{" "}
        <b> global cache </b>
        alongside <b>separate keys for data sets</b>. For example, we have a key
        dedicated to user search information and another for each user's data.
        When a user updates their data, we only update the specific user data
        key, not the search key. While this adds complexity to the cache, it
        maintains consistency and simplifies invalidation using{" "}
        <b>Redis's built-in expiry features</b>. And to{" "}
        <b>reduce the number of requests for each update</b> we implemented
        <b> redis pipeline</b>.
      </p>
      <div>
        Example of an api:
        <details>
          <summary className="mt-4">Updating a user</summary>
          <pre>
            {`
import { UserModel } from "@/mongodb/models";
import { NextRequest, NextResponse } from "next/server";
import {
  zodMongoId,
  zodUserFormSchemaObj,
  zodUserFormSuperRefine,
} from "@/zod/zod.common";
import { UserFormProps } from "@/types/mongo/user.types";
import { Types } from "mongoose";
import dbConnect from "@/lib/dbConnect";
import updateAllCache from "@/redis/updateUserCache";

export async function POST(
  req: NextRequest,
  { params }: { params: { user: string } },
  res: NextResponse
) {
  console.log("Updating user profile...");
  // Ensure the user is authenticated
  try {
    await dbConnect();
    const body = await req.json();
    const user = params?.user;
    const { data }: { id: string; data: UserFormProps } = body;
    const userDetails = zodUserFormSchemaObj
      .partial()
      .superRefine(zodUserFormSuperRefine)
      .parse(data);
    console.log("User details:", userDetails);
    const userId = zodMongoId.parse(user, {
      path: ["id"],
      errorMap: (issue) => {
        if (issue.code === "custom") {
          return { message: issue.message || "Invalid ID" };
        }
        return { message: "Invalid user ID" };
      },
    });
    console.log("User ID:", userId);
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: new Types.ObjectId(userId) },
      { $set: userDetails },
      { new: true }
    );
    console.log("Updated user profile:", updatedUser);
    // clear the cache if exists
    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    console.log("Update user data cache...");
    await updateAllCache(userId, updatedUser);
    console.log("User data cache updated");
    // we can also add the data here in cache
    return NextResponse.json({ success: true });
  } catch (error: any) {
    // console.error("Error updating user profile:", error);
    console.error("Error message:", error?.message);
    console.error("Zod parse error message:", error?.issues?.[0]?.message);
    return NextResponse.json(null, {
      status: 500,
      statusText:
        error?.issues?.[0]?.message ||
        error?.message ||
        "Error updating user profile",
    });
  }
}`}
          </pre>
        </details>
      </div>
      <Links links={[{ name: "Website", href: "https://devclans.com" }]} />
    </>
  );
};

export default FourthProject;
