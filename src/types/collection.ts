import { Database } from "./supabase";

export type Match = Database["public"]["Tables"]["matches"]["Row"];
