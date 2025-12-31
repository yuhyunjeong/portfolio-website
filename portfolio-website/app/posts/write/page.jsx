// app/posts/write/page.jsx
import { createClient } from "../../util/supabase/server";
import { redirect } from "next/navigation";
import WriteForm from "./WriteForm";

export default async function WritePage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.email !== "yuhyunjadedev@gmail.com") {
    redirect("/posts"); // Redirect to list if unauthorized
  }

  return <WriteForm />;
}
