import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET() {
  const issuerId = process.env.GOOGLE_WALLET_ISSUER_ID;
  const serviceAccount = process.env.GOOGLE_WALLET_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_WALLET_PRIVATE_KEY;

  if (!issuerId || !serviceAccount || !privateKey) {
    console.warn("Google Wallet credentials not fully configured. Returning a mock URL for testing.");
    // Return a mock demo pass URL that handles fallback gracefully
    return NextResponse.json({
      url: "https://pay.google.com/gp/v/save/mock-pass-not-configured",
      isMock: true
    });
  }

  try {
    const classId = `${issuerId}.vince_baker_card`;
    const objectId = `${issuerId}.vince_baker_card_v1`;

    const genericClass = {
      id: classId,
      classTemplateInfo: {
        cardTemplateAssociation: {
          cardTemplateId: "vince_baker_template"
        }
      },
      issuerName: "AEObility",
      reviewStatus: "UNDER_REVIEW"
    };

    const genericObject = {
      id: objectId,
      classId: classId,
      logo: {
        sourceUri: {
          uri: "https://aeobility.com.au/favicon.ico"
        }
      },
      cardTitle: {
        defaultValue: {
          language: "en-US",
          value: "AEObility Business Card"
        }
      },
      header: {
        defaultValue: {
          language: "en-US",
          value: "Vince Baker"
        }
      },
      subheader: {
        defaultValue: {
          language: "en-US",
          value: "Founder & AI Specialist"
        }
      },
      hexBackgroundColor: "#07070a",
      heroImage: {
        sourceUri: {
          uri: "https://aeobility.com.au/Profile-Picture-Vinnie.png"
        }
      },
      textModulesData: [
        {
          header: "AEO & AI Automation Specialist",
          body: "I help Australian small businesses get found and chosen across Search, Maps, and AI platforms.",
          id: "intro"
        },
        {
          header: "Contact",
          body: "Email: vince.yumi@gmail.com\nPhone: 0480 286 282",
          id: "contact"
        }
      ],
      linksModuleData: {
        uris: [
          {
            uri: "https://aeobility.com.au/my-portfolio",
            description: "View Portfolio"
          },
          {
            uri: "https://www.linkedin.com/in/vince-baker/",
            description: "LinkedIn"
          }
        ]
      },
      barcode: {
        type: "QR_CODE",
        value: "https://aeobility.com.au/vince-baker.vcf",
        alternateText: "Scan to save contact info"
      }
    };

    const payload = {
      iss: serviceAccount,
      aud: "google",
      typ: "savetowallet",
      iat: Math.floor(Date.now() / 1000),
      payload: {
        genericClasses: [genericClass],
        genericObjects: [genericObject]
      }
    };

    // Sign JWT using node crypto module
    const header = { alg: "RS256", typ: "JWT" };
    
    const base64UrlEncode = (str: string) => {
      return Buffer.from(str)
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    };

    const tokenHeader = base64UrlEncode(JSON.stringify(header));
    const tokenPayload = base64UrlEncode(JSON.stringify(payload));
    const signInput = `${tokenHeader}.${tokenPayload}`;

    // Handle newline formatting for environment keys
    const formattedPrivateKey = privateKey.replace(/\\n/g, '\n');

    const signer = crypto.createSign('RSA-SHA256');
    signer.update(signInput);
    const signature = signer.sign(formattedPrivateKey, 'base64');
    
    const tokenSignature = signature
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    const jwt = `${tokenHeader}.${tokenPayload}.${tokenSignature}`;
    const url = `https://pay.google.com/gp/v/save/${jwt}`;

    return NextResponse.json({ url, isMock: false });
  } catch (error: any) {
    console.error("Failed to generate Google Wallet JWT:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
