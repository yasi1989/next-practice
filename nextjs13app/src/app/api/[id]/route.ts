import { supabase } from "@/utils/supabaseClient";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const id = req.url.split("/api/")[1];

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    return NextResponse.json(error);
  }
  if (!data) {
    notFound();
  }
  return NextResponse.json(data);
}
export async function POST(req: Request, res: Response) {
  const { id, title, content } = await req.json();
  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 201 });
}
export async function DELETE(req: Request, res: Response) {
  const id = req.url.split("/api/")[1];

  const { error: deleteError } = await supabase
    .from("posts")
    .delete()
    .eq("id", id);
  if (deleteError) {
    return NextResponse.json(deleteError);
  }
  return NextResponse.json({ status: 200 });
}
