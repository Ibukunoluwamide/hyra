import connections from "@/dbconnection/connections";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import hydraModel from "@/app/model/hydraModel";
connections();

export async function POST(data) {
  try {
    const reqBody = await data.json();
    console.log(reqBody);
    const { name, userName, email, password } = reqBody;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await hydraModel.findOne({ email: email });

    if (user) {
      return NextResponse.json({ status:false, message: "Email already exists" });
    }

    const newUser = new hydraModel({
      name,
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({
      status: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}