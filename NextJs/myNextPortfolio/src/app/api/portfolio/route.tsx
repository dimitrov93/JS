import { connectDb } from "../../../../db";
import Portfolio from "../../../../models/Portfolio";

export async function GET(req: Request, res: Response) {
  try {
    await connectDb();
    const projects = await Portfolio.find()    
    return Response.json(projects, {status: 200})
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
