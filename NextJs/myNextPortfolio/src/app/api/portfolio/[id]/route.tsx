import { connectDb } from "../../../../../db";
import  Portfolio  from "../../../../../models/Portfolio";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const portfolioId = params.id;

  try {
    await connectDb();
    const res = await Portfolio.findById(portfolioId);
    return Response.json(res, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const portfolioId = params.id;

  try {
    await connectDb();
    await Portfolio.updateOne({ _id: portfolioId }, { $set: data });
    return Response.json({ message: "Successfully Edited!" }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const portfolioId = params.id;

  try {
    await connectDb();
    await Portfolio.findByIdAndDelete(portfolioId);
    return Response.json({ message: "Successfully deleted!" }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
