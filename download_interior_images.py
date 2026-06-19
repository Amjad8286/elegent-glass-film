"""
Interior Design Image Downloader
Downloads 20+ images per keyword from Pexels (free, no login required with API key).

SETUP:
1. Get a FREE Pexels API key at: https://www.pexels.com/api/
2. Replace PEXELS_API_KEY below with your key (or set env variable PEXELS_API_KEY)
3. Install dependency: pip install requests
4. Run: python download_interior_images.py
"""

import os
import time
import requests
import argparse
from pathlib import Path

# ─────────────────────────────────────────────
# CONFIGURATION — edit these as needed
# ─────────────────────────────────────────────

# Below is Pexels API key placeholder. You can set it directly here or use an environment variable for better security. 
# y2mUFgGgNmZ1k2CZ4jJVPuUv5IT3eUJIBaGmodhruan6bxcRmceEA0Bw
PEXELS_API_KEY = os.environ.get("PEXELS_API_KEY", "y2mUFgGgNmZ1k2CZ4jJVPuUv5IT3eUJIBaGmodhruan6bxcRmceEA0Bw")

IMAGES_PER_KEYWORD = 5          # Minimum images to download per keyword
IMAGE_SIZE = "large"             # Options: "original", "large", "medium", "small"
OUTPUT_DIR = "/Users/amjad/Downloads/Interior-pics/glass-films"   # Root folder for all downloads
DELAY_BETWEEN_REQUESTS = 0.5     # Seconds between API calls (be polite to the server)

# ─────────────────────────────────────────────
# MODERN MINIMALIST RESIDENTIAL KEYWORDS
# (based on your project — edit freely)
# ─────────────────────────────────────────────

KEYWORDS = [
    # # Living Room
    # "minimalist living room grey sofa",
    # "white wall modern lounge",
    # "concrete wall accent living space",

    # # Bedroom
    # "minimalist bedroom neutral palette",
    # "platform bed modern bedroom",
    # "Japandi bedroom interior",

    # # Kitchen & Dining
    # "handleless kitchen modern white",
    # "open kitchen dining minimalist",
    # "terrazzo countertop modern kitchen",

    # # Bathroom
    # "minimalist bathroom white marble",
    # "walk-in shower frameless glass",
    # "concrete wash basin minimalist",

    # # Materials & Textures
    # "white plaster wall texture",
    # "light oak wood floor",
    # "large format porcelain tile",
    # "brushed brass fixture detail",
    # "linen curtain texture interior",
    # "bouclé upholstery furniture",
    # "polished concrete floor",
    # "minimalist home neutral tone",
    
    # # Glass Film Keywords — add to KEYWORDS list in your script
    # "frosted glass film partition interior",
    # "decorative window film modern home",
    # "privacy glass film bathroom",
    # "solar control window film living room",
    # "PDLC smart glass film office",
    # "geometric pattern window film",
    # "gradient frosted film window",
    # "one way mirror film residential",
    # "safety anti shatter window film",
    # "etched glass film shower enclosure",
    
    # Before & After Keywords — add to KEYWORDS list
    # "before after interior renovation home",
    # "living room makeover before after",
    # "bathroom renovation before after modern",
    # "kitchen remodel before after minimalist",
    # "bedroom transformation before after",
    # "frosted glass film before after window",
    # "glass partition before after office",
    # "switchable smart glass before after",
    # "room declutter styling before after",
    # "floor replacement before after home",
    
    "sun control window film",
    "heat rejection glass film",
    "frosted glass film",
    "frosted glass film for office",
    "safety window film",
    "security glass film",
    "one way mirror film",
    "privacy window film",
    "reflective glass film",
    "decorative window film",
    "UV protection window film",
    "glass tinting film",
    "car window tinting film",
    "window film price per sq ft",
    "glass film for home windows",
    "window film installation Mumbai",
    "sun control film Andheri",
    "frosted glass film price",
    "one way film for windows",
    "glass film dealer Mumbai"
]

# ─────────────────────────────────────────────
# DOWNLOADER LOGIC
# ─────────────────────────────────────────────

PEXELS_SEARCH_URL = "https://api.pexels.com/v1/search"

SIZE_KEY_MAP = {
    "original": "src.original",
    "large":    "src.large",
    "medium":   "src.medium",
    "small":    "src.small",
}


def get_image_url(photo: dict, size: str) -> str:
    """Extract the image URL for the requested size."""
    src = photo.get("src", {})
    return src.get(size, src.get("large", src.get("original", "")))


def fetch_photos(keyword: str, count: int, api_key: str) -> list:
    """Fetch photo metadata from Pexels for a given keyword."""
    photos = []
    page = 1
    per_page = min(count, 80)  # Pexels max per page is 80

    headers = {"Authorization": api_key}

    while len(photos) < count:
        params = {
            "query": keyword,
            "per_page": per_page,
            "page": page,
            "orientation": "landscape",
        }
        try:
            response = requests.get(
                PEXELS_SEARCH_URL, headers=headers, params=params, timeout=15
            )
            response.raise_for_status()
        except requests.exceptions.HTTPError as e:
            if response.status_code == 401:
                print("  ✗ Invalid API key. Get one free at https://www.pexels.com/api/")
            else:
                print(f"  ✗ HTTP error: {e}")
            break
        except requests.exceptions.RequestException as e:
            print(f"  ✗ Network error: {e}")
            break

        data = response.json()
        batch = data.get("photos", [])
        if not batch:
            print(f"  ⚠ No more results found for '{keyword}' (got {len(photos)} so far)")
            break

        photos.extend(batch)
        total_results = data.get("total_results", 0)

        if len(photos) >= total_results:
            break  # No more pages available

        page += 1
        time.sleep(DELAY_BETWEEN_REQUESTS)

    return photos[:count]


def sanitize_folder_name(name: str) -> str:
    """Convert a keyword into a safe folder name."""
    return "".join(c if c.isalnum() or c in " _-" else "_" for c in name).strip().replace(" ", "_")


def download_image(url: str, filepath: Path) -> bool:
    """Download a single image to disk."""
    try:
        response = requests.get(url, timeout=30, stream=True)
        response.raise_for_status()
        with open(filepath, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"    ✗ Failed to download {url}: {e}")
        return False


def download_for_keyword(keyword: str, count: int, api_key: str, root_dir: Path, size: str):
    """Fetch and download images for one keyword."""
    folder_name = sanitize_folder_name(keyword)
    save_dir = root_dir / folder_name
    save_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n📂 [{keyword}]")
    print(f"   Fetching metadata for {count} images...")

    photos = fetch_photos(keyword, count, api_key)

    if not photos:
        print("   ⚠ No photos found. Skipping.")
        return 0

    print(f"   Found {len(photos)} photos. Downloading...")
    downloaded = 0

    for i, photo in enumerate(photos, start=1):
        img_url = get_image_url(photo, size)
        if not img_url:
            continue

        # Use photo ID + photographer for a descriptive filename
        photo_id = photo.get("id", i)
        ext = "jpg"
        filename = save_dir / f"{folder_name}_{photo_id}.{ext}"

        if filename.exists():
            print(f"   ↩ [{i}/{len(photos)}] Already exists, skipping.")
            downloaded += 1
            continue

        success = download_image(img_url, filename)
        if success:
            downloaded += 1
            photographer = photo.get("photographer", "unknown")
            print(f"   ✓ [{i}/{len(photos)}] {filename.name}  (by {photographer})")
        
        time.sleep(DELAY_BETWEEN_REQUESTS)

    print(f"   ✅ Downloaded {downloaded}/{len(photos)} images → {save_dir}")
    return downloaded


def main():
    parser = argparse.ArgumentParser(
        description="Download interior design images from Pexels by keyword."
    )
    parser.add_argument(
        "--api-key", default=PEXELS_API_KEY,
        help="Your Pexels API key (or set PEXELS_API_KEY env variable)"
    )
    parser.add_argument(
        "--count", type=int, default=IMAGES_PER_KEYWORD,
        help=f"Images to download per keyword (default: {IMAGES_PER_KEYWORD})"
    )
    parser.add_argument(
        "--output", default=OUTPUT_DIR,
        help=f"Root output directory (default: {OUTPUT_DIR})"
    )
    parser.add_argument(
        "--size", default=IMAGE_SIZE,
        choices=["original", "large", "medium", "small"],
        help=f"Image size to download (default: {IMAGE_SIZE})"
    )
    parser.add_argument(
        "--keywords", nargs="+",
        help="Override keywords (space-separated, quote multi-word ones)"
    )
    args = parser.parse_args()

    api_key = args.api_key
    if api_key == "YOUR_API_KEY_HERE" or not api_key:
        print("❌ No API key provided.")
        print("   Get a FREE key at: https://www.pexels.com/api/")
        print("   Then run:  python download_interior_images.py --api-key YOUR_KEY")
        return

    keywords = args.keywords if args.keywords else KEYWORDS
    root_dir = Path(args.output)
    root_dir.mkdir(parents=True, exist_ok=True)

    print("=" * 60)
    print("  Interior Design Image Downloader — Pexels")
    print("=" * 60)
    print(f"  Keywords  : {len(keywords)}")
    print(f"  Per keyword: {args.count} images")
    print(f"  Size       : {args.size}")
    print(f"  Output dir : {root_dir.resolve()}")
    print("=" * 60)

    total_downloaded = 0
    for keyword in keywords:
        total_downloaded += download_for_keyword(
            keyword, args.count, api_key, root_dir, args.size
        )

    print("\n" + "=" * 60)
    print(f"  🎉 Done! Total images downloaded: {total_downloaded}")
    print(f"  📁 Saved to: {root_dir.resolve()}")
    print("=" * 60)


if __name__ == "__main__":
    main()
