const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
async function fetchProperties() {
    try {

        // Handle when api domain is empty
        if (!apiDomain) {
            return [];
        }
        const res = await fetch(apiDomain + '/properties');
        if (!res.ok) {
            throw new Error("Failed to fetch error");
        }
        return res.json();
    } catch (error) {
        console.error("Something is wrong: ", error);
        return [];
    }
}


// Fetch single property
async function fetchProperty(id) {
    try {

        // Handle when api domain is empty
        if (!apiDomain) {
            return null;
        }
        const res = await fetch(apiDomain + '/properties/' + id);
        if (!res.ok) {
            throw new Error("Failed to fetch error");
        }
        return res.json();
    } catch (error) {
        console.error("Something is wrong: ", error);
        return null;
    }
}


export { fetchProperties, fetchProperty };