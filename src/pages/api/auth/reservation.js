export const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const location_id = formData.get("location-id")?.toString();
  const table_id = formData.get("table-id")?.toString();

  // napravi rezervaciju
  //
  // handle error ako ne uspije

  console.log(email, location_id, table_id);
  return new Response(formData, { status: 303 });
};
