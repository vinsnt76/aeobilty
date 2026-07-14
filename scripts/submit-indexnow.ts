

const HOST = "www.aeobility.com.au"; // Replace with your actual domain
const KEY = "99f72a3935774040b8814ad6a76e6e59";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlList = [
  `https://${HOST}/knowledge-hub/case-studies`
];

async function submitToIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("Successfully submitted URLs to IndexNow!");
    } else if (response.status === 202) {
      console.log("Accepted: URLs are valid but key is pending validation.");
    } else {
      console.error(`Failed to submit: ${response.status} ${response.statusText}`);
      const text = await response.text();
      console.error("Response:", text);
    }
  } catch (error) {
    console.error("Error submitting to IndexNow:", error);
  }
}

submitToIndexNow();
