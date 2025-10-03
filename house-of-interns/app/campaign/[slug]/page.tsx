import { CampaignLayout } from '@/components/campaign/campaign-layout';
import { fetchApi } from '@/lib/strapi';
import type { Metadata } from 'next';

// Helper function to fetch campaign page data
async function getCampaignPageData(slug: string) {
  try {
    const campaignPageData = await fetchApi(
      "campaigns", // Collection type
      {
        filters: {
          slug: {
            $eq: slug, // Use dynamic slug parameter
          },
        },
        populate: {
          sections: {
            populate: "*"
          },
          seo: {
            populate: "*"
          }
        },
      },
      { next: { revalidate: 60 } } // Revalidate every 60 seconds
    );
    return campaignPageData;
  } catch (error) {
    console.error("Failed to fetch campaign page data:", error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const campaignPageData = await getCampaignPageData(slug);
  
  // Fallback values
  const fallbacks = {
    title: 'Campaign Services',
    description: 'Professional services to transform your online presence.',
  };
  
  // Handle missing data
  if (!campaignPageData?.data?.[0]) {
    return {
      title: fallbacks.title,
      description: fallbacks.description,
    };
  }

  const campaign = campaignPageData.data[0];
  const seo = campaign.seo || {};
  
  // Use campaign title as fallback if no SEO title
  const title = seo.metaTitle || campaign.title || fallbacks.title;
  const description = seo.metaDescription || campaign.description || fallbacks.description;
  const keywords = seo.keywords || seo.metaKeywords;
  
  const metadata: Metadata = {
    title,
    description,
    keywords: keywords,
    other: {
      ...(keywords && { 'keywords': keywords }),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      ...(seo.metaImage?.url && {
        images: [{
          url: seo.metaImage.url,
          width: seo.metaImage.width || 1200,
          height: seo.metaImage.height || 630,
          alt: seo.metaImage.alternativeText || title,
        }]
      })
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(seo.metaImage?.url && {
        images: [seo.metaImage.url]
      })
    },
    ...(seo.metaRobots && {
      robots: {
        index: seo.metaRobots.includes('index'),
        follow: seo.metaRobots.includes('follow'),
      }
    }),
    ...(seo.canonicalURL && {
      alternates: {
        canonical: seo.canonicalURL,
      }
    }),
  };

  return metadata;
}

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const campaignPageData = await getCampaignPageData(slug);

  if (!campaignPageData || !campaignPageData.data || campaignPageData.data.length === 0) {
    console.log("Failed campaign page data object:", campaignPageData);
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
    "Campaign Page Data Response:",
    JSON.stringify(campaignPageData, null, 2)
  );

  return <CampaignLayout data={campaignPageData.data[0]} />;
}