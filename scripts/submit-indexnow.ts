const HOST = "aeobility.com.au";
const KEY = "99f72a3935774040b8814ad6a76e6e59";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlList = [
  `https://${HOST}`,
  `https://${HOST}/services`,
  `https://${HOST}/services/aeo`,
  `https://${HOST}/services/aeo/procedures`,
  `https://${HOST}/services/aeo/definition`,
  `https://${HOST}/services/aeo/comparison`,
  `https://${HOST}/services/aeo/constraints`,
  `https://${HOST}/services/aeo/costs-timing`,
  `https://${HOST}/services/geo-marketing`,
  `https://${HOST}/services/ai-search-marketing`,
  `https://${HOST}/about/freelance-digital-specialist-perth`,
  `https://${HOST}/knowledge-hub`,
  `https://${HOST}/knowledge-hub/aeo`,
  `https://${HOST}/knowledge-hub/semantic-seo`,
  `https://${HOST}/knowledge-hub/geo`,
  `https://${HOST}/knowledge-hub/articles`,
  `https://${HOST}/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework`,
  `https://${HOST}/knowledge-hub/articles/entity-authority-building`,
  `https://${HOST}/knowledge-hub/articles/positional-bias-in-retrieval`,
  `https://${HOST}/knowledge-hub/articles/aeo-vs-seo`,
  `https://${HOST}/knowledge-hub/articles/retrieval-augmented-generation`,
  `https://${HOST}/knowledge-hub/case-studies`,
  `https://${HOST}/knowledge-hub/case-studies/baby-bento`,
  `https://${HOST}/services/aeo/shopify`,
  `https://www.aeobility.com.au/services/aeo/shopify`,
  `https://www.aeobility.com.au/services`,
  `https://www.aeobility.com.au/knowledge-hub`,
  `https://www.aeobility.com.au/knowledge-hub/articles`,
  `https://www.aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework`,
  `https://www.aeobility.com.au/knowledge-hub/articles/entity-authority-building`,
  `https://www.aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval`
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
