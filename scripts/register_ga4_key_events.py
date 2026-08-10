import os
import sys

# Ensure UTF-8 output on Windows terminal
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def main():
    property_id = os.environ.get("GA4_PROPERTY_ID")
    if not property_id:
        if len(sys.argv) > 1:
            property_id = sys.argv[1]
        else:
            property_id = "543575866"

    # Format property path if numeric ID passed
    if not property_id.startswith("properties/"):
        property_id = f"properties/{property_id}"

    # Set default credentials path to ga4-admin-cli.json if not specified
    if "GOOGLE_APPLICATION_CREDENTIALS" not in os.environ:
        key_path = os.path.join(os.getcwd(), "ga4-admin-cli.json")
        if os.path.exists(key_path):
            os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = key_path
            print(f"Using credentials file: {key_path}")
        else:
            print(f"Warning: GOOGLE_APPLICATION_CREDENTIALS not set and {key_path} not found.")

    from google.analytics.admin import AnalyticsAdminServiceClient
    client = AnalyticsAdminServiceClient()

    # List of key conversion events to register
    events_to_register = [
        "bill_lead_captured",
        "generate_lead",
        "bill_email_submitted"
    ]

    print(f"\nRegistering GA4 Key Events (Conversions) for Property: {property_id}\n" + "-" * 60)

    for event_name in events_to_register:
        try:
            # Try create_key_event with dict payload first (v1beta API)
            try:
                response = client.create_key_event(
                    parent=property_id,
                    key_event={
                        "event_name": event_name,
                        "counting_method": "ONCE_PER_EVENT"
                    }
                )
                print(f"[SUCCESS] Created Key Event: {event_name}")
            except (AttributeError, TypeError, Exception) as e1:
                if "already exists" in str(e1).lower() or "ALREADY_EXISTS" in str(e1):
                    print(f"[INFO] Key Event already exists: {event_name}")
                else:
                    # Fallback to v1alpha create_conversion_event
                    response = client.create_conversion_event(
                        parent=property_id,
                        conversion_event={"event_name": event_name}
                    )
                    print(f"[SUCCESS] Created Conversion Event: {event_name}")
        except Exception as e:
            if "already exists" in str(e).lower() or "ALREADY_EXISTS" in str(e):
                print(f"[INFO] Key Event already exists: {event_name}")
            else:
                print(f"[ERROR] Error registering Key Event {event_name}: {e}")

    print("-" * 60 + "\nKey Events Registration Completed!")

if __name__ == "__main__":
    main()
