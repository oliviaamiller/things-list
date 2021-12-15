const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODgxNSwiZXhwIjoxOTU1MDg0ODE1fQ.Izz7q9ZqriuWoR8MFWUHTGEviGdIKxytmX1kn-ZDnEk';

// similarly, here's the url supabase assigned us for our database
const SUPABASE_URL = 'https://mdkwiuegdkumfqoifkcr.supabase.co';

// finally, here's the client object. this object is how we will get data from our database
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCakes() {
    const response = await client
        .from('cakes')
        .select();

    console.log(response.data);
    return response.data;
}


export async function getCake(id) {
    const response = await client 
        .from('cakes')
        .select()
        .match({ id: id })
        .single();

    console.log(response.data);
    return response.data;
}