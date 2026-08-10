const HOST = "aeobility.com.au";
const KEY = "99f72a3935774040b8814ad6a76e6e59";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlList = [
  `https://${HOST}`,
  `https://${HOST}/diagnostic`,
  `https://${HOST}/solutions`,
  `https://${HOST}/solutions/aeo-blueprint`,
  `https://${HOST}/solutions/aeo-sprint`,
  `https://${HOST}/solutions/geo-services`,
  `https://${HOST}/services`,
  `https://${HOST}/services/aeo`,
  `https://${HOST}/services/aeo/procedures`,
  `https://${HOST}/services/aeo/definition`,
  `https://${HOST}/services/aeo/comparison`,
  `https://${HOST}/services/aeo/constraints`,
  `https://${HOST}/services/aeo/costs-timing`,
  `https://${HOST}/services/aeo/shopify`,
  `https://${HOST}/services/aeo/local-business`,
  `https://${HOST}/services/geo-marketing`,
  `https://${HOST}/services/ai-search-marketing`,
  `https://${HOST}/knowledge-hub`,
  `https://${HOST}/knowledge-hub/tutorials`,
  `https://${HOST}/knowledge-hub/aeo`,
  `https://${HOST}/knowledge-hub/semantic-seo`,
  `https://${HOST}/knowledge-hub/geo`,
  `https://${HOST}/knowledge-hub/articles`,
  `https://${HOST}/knowledge-hub/articles/optimising-for-different-ai-search-engines`,
  `https://${HOST}/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework`,
  `https://${HOST}/knowledge-hub/articles/entity-authority-building`,
  `https://${HOST}/knowledge-hub/articles/positional-bias-in-retrieval`,
  `https://${HOST}/knowledge-hub/articles/aeo-vs-seo`,
  `https://${HOST}/knowledge-hub/articles/retrieval-augmented-generation`,
  `https://${HOST}/knowledge-hub/articles/structured-data-query-fan-out`,
  `https://${HOST}/knowledge-hub/case-studies`,
  `https://${HOST}/knowledge-hub/case-studies/baby-bento`,
  `https://${HOST}/about`,
  `https://${HOST}/about/freelance-digital-specialist-perth`,
  `https://${HOST}/contact`,
  `https://${HOST}/book`,
  `https://www.${HOST}`,
];

async function submitToIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  console.log(`Submitting ${urlList.length} Knowledge Hub URLs to IndexNow (${HOST})...`);

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow HTTP Status: ${response.status} ${response.statusText}`);

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log("✅ Successfully submitted Knowledge Hub URLs to IndexNow!");
    } else {
      console.error(`❌ Failed to submit: ${response.status} ${response.statusText}`);
      const text = await response.text();
      console.error("Response:", text);
    }
  } catch (error) {
    console.error("Error submitting to IndexNow:", error);
  }
}

submitToIndexNow();
