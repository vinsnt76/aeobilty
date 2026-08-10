import os
import sys
import json

# Ensure UTF-8 output on Windows terminal
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def main():
    property_id = os.environ.get("GA4_PROPERTY_ID")
    if not property_id:
        if len(sys.argv) > 1:
            property_id = sys.argv[1]
        else:
            print("Usage: python scripts/register_ga4_definitions.py <PROPERTY_ID>")
            print("Example: python scripts/register_ga4_definitions.py 543575866")
            sys.exit(1)

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

    try:
        from google.analytics.admin import AnalyticsAdminServiceClient
        from google.analytics.admin_v1alpha.types import CustomDimension, CustomMetric
        from google.api_core.exceptions import PermissionDenied, AlreadyExists
    except ImportError:
        print("Installing required package: google-analytics-admin...")
        os.system(f"{sys.executable} -m pip install google-analytics-admin")
        from google.analytics.admin import AnalyticsAdminServiceClient
        from google.analytics.admin_v1alpha.types import CustomDimension, CustomMetric
        from google.api_core.exceptions import PermissionDenied, AlreadyExists

    client = AnalyticsAdminServiceClient()

    json_path = os.path.join(os.getcwd(), "aeobility_ga4_custom_definitions.json")
    with open(json_path, "r", encoding="utf-8") as f:
        config = json.load(f)

    print(f"\nRegistering GA4 Custom Definitions for Property: {property_id}\n" + "-" * 60)

    # Register Custom Dimensions
    for dim in config.get("custom_dimensions", []):
        try:
            custom_dimension = CustomDimension(
                parameter_name=dim["parameter_name"],
                display_name=dim["display_name"],
                description=dim["description"],
                scope=CustomDimension.DimensionScope.EVENT,
            )
            created = client.create_custom_dimension(
                parent=property_id,
                custom_dimension=custom_dimension
            )
            print(f"[SUCCESS] Created Dimension: {dim['display_name']} ({dim['parameter_name']})")
        except AlreadyExists:
            print(f"[INFO] Dimension already exists: {dim['display_name']}")
        except PermissionDenied:
            print(f"\n[ERROR] 403 PERMISSION DENIED when accessing {property_id}.")
            print("Please add the service account email as an Editor or Administrator in GA4:")
            print("  Service Account Email: ga4-admin-cli@antigravity-cli-and-adk-500010.iam.gserviceaccount.com")
            print("  Navigation: GA4 Analytics -> Admin -> Property Access Management -> Add Users -> Assign 'Editor' role.\n")
            sys.exit(1)
        except Exception as e:
            if "already exists" in str(e).lower() or "ALREADY_EXISTS" in str(e):
                print(f"[INFO] Dimension already exists: {dim['display_name']}")
            else:
                print(f"[ERROR] Error creating Dimension {dim['display_name']}: {e}")

    # Register Custom Metrics
    for met in config.get("custom_metrics", []):
        try:
            custom_metric = CustomMetric(
                parameter_name=met["parameter_name"],
                display_name=met["display_name"],
                description=met["description"],
                scope=CustomMetric.MetricScope.EVENT,
                measurement_unit=CustomMetric.MeasurementUnit.STANDARD,
            )
            created = client.create_custom_metric(
                parent=property_id,
                custom_metric=custom_metric
            )
            print(f"[SUCCESS] Created Metric: {met['display_name']} ({met['parameter_name']})")
        except AlreadyExists:
            print(f"[INFO] Metric already exists: {met['display_name']}")
        except PermissionDenied:
            print(f"\n[ERROR] 403 PERMISSION DENIED when accessing {property_id}.")
            print("Please add the service account email as an Editor or Administrator in GA4:")
            print("  Service Account Email: ga4-admin-cli@antigravity-cli-and-adk-500010.iam.gserviceaccount.com")
            print("  Navigation: GA4 Analytics -> Admin -> Property Access Management -> Add Users -> Assign 'Editor' role.\n")
            sys.exit(1)
        except Exception as e:
            if "already exists" in str(e).lower() or "ALREADY_EXISTS" in str(e):
                print(f"[INFO] Metric already exists: {met['display_name']}")
            else:
                print(f"[ERROR] Error creating Metric {met['display_name']}: {e}")

    print("-" * 60 + "\nRegistration completed successfully!")

if __name__ == "__main__":
    main()
