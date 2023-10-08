import { API_BASE_URL, API_CONFIG } from "../../constants";

export const getCharactersList = async ({
  page,
  searchText,
  gender,
  status,
}) => {
  try {
    const response = await fetch(API_BASE_URL, {
      ...API_CONFIG,
      body: JSON.stringify({
        query: `
            query {
                characters (page: ${page}, filter: { name: "${searchText}", gender: "${gender}", status: "${status}" }) {
                    results {
                        name
                        id
                        image
                    }
                    info {
                        pages
                    }
                }
            }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Error while fetching data!");
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await fetch(API_BASE_URL, {
      ...API_CONFIG,
      body: JSON.stringify({
        query: `
            query {
                character (id: ${id}) {
                    name
                    image
                    status
                    gender
                    type
                }
            }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Error while fetching data!");
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
