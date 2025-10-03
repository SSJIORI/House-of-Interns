import { HomeLayout } from "@/components/layout/home-layout";
import { fetchApi } from "@/lib/strapi";

// Helper function to fetch landing page data
async function getLandingPageData() {
  try {
    const landingPageData = await fetchApi(
      "landing-page",
      {
        populate: {
          sections: {
            populate: "*"
          },
        },
      },
      { next: { revalidate: 60 } } // Revalidate every 60 seconds
    );
    return landingPageData;
  } catch (error) {
    console.error("Failed to fetch landing page data:", error);
    return null;
  }
}

export default async function Home() {
  const landingPageData = await getLandingPageData();

  if (!landingPageData || !landingPageData.data) {
    console.log("Failed landing page data object:", landingPageData);
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
        <div>
          <h1 className="text-2xl font-bold text-red-600">
            Failed to load content.
          </h1>
          <p className="text-gray-700 mt-2">
            Please make sure your Strapi server is running and the content is published.
          </p>
        </div>
      </div>
    );
  }

  console.log(
    "Landing Page Data Response:",
    JSON.stringify(landingPageData, null, 2)
  );

  return <HomeLayout data={landingPageData.data} />;
}
