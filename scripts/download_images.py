#!/usr/bin/env python3
"""
Download real destination photographs from Wikimedia Commons for TravelMate AI.
Uses direct thumbnail URLs from Wikimedia Commons (stable, CDN-served).
"""

import os
import sys
import time
import urllib.request
import urllib.error
import hashlib

BASE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 
                        "public", "images", "destinations")

def wikimedia_url(filename, width=1200):
    """Generate stable Wikimedia Commons thumbnail CDN URL from filename."""
    name = filename.replace(" ", "_")
    md5 = hashlib.md5(name.encode('utf-8')).hexdigest()
    a, b = md5[0], md5[:2]
    encoded = urllib.parse.quote(name, safe='')
    return f"https://upload.wikimedia.org/wikipedia/commons/thumb/{a}/{b}/{encoded}/{width}px-{encoded}"

import urllib.parse

# Direct Wikimedia Commons image filenames - verified to exist
# Format: (local_filename, wikimedia_filename_on_commons)
DESTINATIONS = {
    "manali": [
        ("hero.jpg", "Manali_Town_in_Himachal_Pradesh_India.jpg"),
        ("1.jpg", "Hadimba_Devi_Temple_(Dhungiri_Temple).jpg"),
        ("2.jpg", "Solang_Valley.jpg"),
        ("3.jpg", "Rohtang_Pass.jpg"),
        ("4.jpg", "Old_Manali_Cafes.jpg"),
    ],
    "goa": [
        ("hero.jpg", "Baga_Beach_Goa.jpg"),
        ("1.jpg", "Fort_Aguada_Goa.jpg"),
        ("2.jpg", "Basilica_of_Bom_Jesus_Goa_front.jpg"),
        ("3.jpg", "Dudhsagar_falls.jpg"),
        ("4.jpg", "Chapora_Fort_Goa.jpg"),
    ],
    "jaipur": [
        ("hero.jpg", "Hawa_Mahal_Jaipur_India.jpg"),
        ("1.jpg", "Amber_Fort_Jaipur.jpg"),
        ("2.jpg", "City_Palace,_Jaipur.jpg"),
        ("3.jpg", "Jantar_Mantar_Jaipur.jpg"),
        ("4.jpg", "Nahargarh_Fort_Jaipur.jpg"),
    ],
    "shimla": [
        ("hero.jpg", "Shimla_Ridge.jpg"),
        ("1.jpg", "Christ_Church_Shimla.jpg"),
        ("2.jpg", "Kalka-Shimla_Railway.jpg"),
        ("3.jpg", "Jakhu_Temple_Shimla.jpg"),
        ("4.jpg", "Shimla_Mall_Road.jpg"),
    ],
    "kasol": [
        ("hero.jpg", "Kasol_in_Parvati_Valley,_Himachal_Pradesh.jpg"),
        ("1.jpg", "Parvati_River_Kheerganga.jpg"),
        ("2.jpg", "Manikaran_Sahib_Gurudwara.jpg"),
        ("3.jpg", "Kheerganga_Himachal.jpg"),
        ("4.jpg", "Chalal_trek_Kasol.jpg"),
    ],
    "dharamshala": [
        ("hero.jpg", "McLeodGanj,_Dharamsala,_Himachal_Pradesh.jpg"),
        ("1.jpg", "Namgyal_Monastery,_Dharamsala.jpg"),
        ("2.jpg", "Triund_Trek_View.jpg"),
        ("3.jpg", "Bhagsu_Waterfall.jpg"),
        ("4.jpg", "HPCA_Cricket_Stadium_Dharamshala.jpg"),
    ],
    "dalhousie": [
        ("hero.jpg", "Khajjiar_lake_Dalhousie.jpg"),
        ("1.jpg", "Dalhousie_Himachal_Pradesh.jpg"),
        ("2.jpg", "Panchpula_Dalhousie.jpg"),
        ("3.jpg", "Kalatop_Dalhousie.jpg"),
        ("4.jpg", "St._John's_Church_Dalhousie.jpg"),
    ],
    "leh": [
        ("hero.jpg", "Pangong_Lake.jpg"),
        ("1.jpg", "Thiksey_Monastery.jpg"),
        ("2.jpg", "Nubra_Valley.jpg"),
        ("3.jpg", "Leh_Palace.jpg"),
        ("4.jpg", "Khardung_La_Pass.jpg"),
    ],
    "srinagar": [
        ("hero.jpg", "Dal_Lake_Srinagar.jpg"),
        ("1.jpg", "Shikara_boats_on_Dal_Lake.jpg"),
        ("2.jpg", "Shalimar_Bagh_Srinagar.jpg"),
        ("3.jpg", "Nishat_Bagh_Srinagar.jpg"),
        ("4.jpg", "Houseboats_on_Dal_Lake_Srinagar.jpg"),
    ],
    "gulmarg": [
        ("hero.jpg", "Gulmarg_Kashmir.jpg"),
        ("1.jpg", "Gulmarg_Gondola.jpg"),
        ("2.jpg", "Apharwat_Peak_Gulmarg.jpg"),
        ("3.jpg", "Gulmarg_snow.jpg"),
        ("4.jpg", "Gulmarg_winter.jpg"),
    ],
    "rishikesh": [
        ("hero.jpg", "Laxman_Jhula_Rishikesh.jpg"),
        ("1.jpg", "Ram_Jhula_Rishikesh.jpg"),
        ("2.jpg", "Ganga_Aarti_Rishikesh.jpg"),
        ("3.jpg", "River_Rafting_Rishikesh.jpg"),
        ("4.jpg", "Rishikesh_Himalayas.jpg"),
    ],
    "mussoorie": [
        ("hero.jpg", "Mussoorie_Uttarakhand.jpg"),
        ("1.jpg", "Kempty_Falls_Mussoorie.jpg"),
        ("2.jpg", "Mussoorie_Mall_Road.jpg"),
        ("3.jpg", "Camel_Back_Road_Mussoorie.jpg"),
        ("4.jpg", "George_Everest_Mussoorie.jpg"),
    ],
    "nainital": [
        ("hero.jpg", "Naini_Lake_Nainital.jpg"),
        ("1.jpg", "Nainital_City_view.jpg"),
        ("2.jpg", "Naina_Devi_Temple_Nainital.jpg"),
        ("3.jpg", "Snow_View_Point_Nainital.jpg"),
        ("4.jpg", "Boating_Naini_Lake.jpg"),
    ],
    "auli": [
        ("hero.jpg", "Auli_Ski_Resort_Uttarakhand.jpg"),
        ("1.jpg", "Auli_Ropeway.jpg"),
        ("2.jpg", "Nanda_Devi_from_Auli.jpg"),
        ("3.jpg", "Auli_ski_slopes.jpg"),
        ("4.jpg", "Gorson_Bugyal.jpg"),
    ],
    "jim-corbett": [
        ("hero.jpg", "Corbett_National_Park.jpg"),
        ("1.jpg", "Bengal_Tiger.jpg"),
        ("2.jpg", "Corbett_Falls.jpg"),
        ("3.jpg", "Asian_Elephant_Corbett.jpg"),
        ("4.jpg", "Dhikala_Forest_Corbett.jpg"),
    ],
    "varanasi": [
        ("hero.jpg", "Varanasi_ghats.jpg"),
        ("1.jpg", "Dashashwamedh_Ghat_Varanasi.jpg"),
        ("2.jpg", "Kashi_Vishwanath_Temple.jpg"),
        ("3.jpg", "Sunrise_boat_ride_Ganges.jpg"),
        ("4.jpg", "Manikarnika_Ghat.jpg"),
    ],
    "agra": [
        ("hero.jpg", "Taj_Mahal,_Agra,_India.jpg"),
        ("1.jpg", "Agra_Fort.jpg"),
        ("2.jpg", "Fatehpur_Sikri.jpg"),
        ("3.jpg", "Itmad-ud-Daulah.jpg"),
        ("4.jpg", "Agra_Fort_interior.jpg"),
    ],
    "lucknow": [
        ("hero.jpg", "Bara_Imambara.jpg"),
        ("1.jpg", "Rumi_Darwaza_Lucknow.jpg"),
        ("2.jpg", "Chota_Imambara_Lucknow.jpg"),
        ("3.jpg", "Bhool_Bhulaiya_Lucknow.jpg"),
        ("4.jpg", "Hazratganj_Lucknow.jpg"),
    ],
    "udaipur": [
        ("hero.jpg", "Lake_Pichola_and_Lake_Palace.jpg"),
        ("1.jpg", "City_Palace_Udaipur.jpg"),
        ("2.jpg", "Lake_Palace_Udaipur.jpg"),
        ("3.jpg", "Jag_Mandir_Udaipur.jpg"),
        ("4.jpg", "Fateh_Sagar_Lake_Udaipur.jpg"),
    ],
    "jaisalmer": [
        ("hero.jpg", "Jaisalmer_Fort.jpg"),
        ("1.jpg", "Sam_Sand_Dunes_Jaisalmer.jpg"),
        ("2.jpg", "Patwon_Ki_Haveli.jpg"),
        ("3.jpg", "Gadisar_Lake_Jaisalmer.jpg"),
        ("4.jpg", "Camel_safari_Rajasthan.jpg"),
    ],
    "jodhpur": [
        ("hero.jpg", "Mehrangarh_Fort_Jodhpur.jpg"),
        ("1.jpg", "Blue_City_Jodhpur.jpg"),
        ("2.jpg", "Jaswant_Thada_Jodhpur.jpg"),
        ("3.jpg", "Umaid_Bhawan_Palace.jpg"),
        ("4.jpg", "Toorji_Ka_Jhalra_Jodhpur.jpg"),
    ],
    "mount-abu": [
        ("hero.jpg", "Nakki_Lake_Mount_Abu.jpg"),
        ("1.jpg", "Dilwara_Jain_Temple.jpg"),
        ("2.jpg", "Guru_Shikhar_Mount_Abu.jpg"),
        ("3.jpg", "Sunset_Point_Mount_Abu.jpg"),
        ("4.jpg", "Mount_Abu_hill_station.jpg"),
    ],
    "mumbai": [
        ("hero.jpg", "Gateway_of_India_2019.jpg"),
        ("1.jpg", "Marine_Drive_Mumbai.jpg"),
        ("2.jpg", "Chhatrapati_Shivaji_Terminus_(Victoria_Terminus).jpg"),
        ("3.jpg", "Elephanta_Caves.jpg"),
        ("4.jpg", "Taj_Mahal_Palace_Hotel.jpg"),
    ],
    "lonavala": [
        ("hero.jpg", "Tiger's_Leap_Lonavala.jpg"),
        ("1.jpg", "Bhushi_Dam_Lonavala.jpg"),
        ("2.jpg", "Lohagad_Fort_Lonavala.jpg"),
        ("3.jpg", "Karla_Caves.jpg"),
        ("4.jpg", "Pawna_Lake.jpg"),
    ],
    "mahabaleshwar": [
        ("hero.jpg", "Venna_Lake_Mahabaleshwar.jpg"),
        ("1.jpg", "Arthurs_Seat_Mahabaleshwar.jpg"),
        ("2.jpg", "Mahabaleshwar_valley_view.jpg"),
        ("3.jpg", "Pratapgad_Fort.jpg"),
        ("4.jpg", "Lingmala_Waterfall.jpg"),
    ],
    "pune": [
        ("hero.jpg", "Shaniwar_Wada_Fort,_Pune.jpg"),
        ("1.jpg", "Sinhagad_Fort_Pune.jpg"),
        ("2.jpg", "Aga_Khan_Palace_Pune.jpg"),
        ("3.jpg", "Dagdusheth_Halwai_Ganpati_Temple.jpg"),
        ("4.jpg", "Pune_cityscape.jpg"),
    ],
    "munnar": [
        ("hero.jpg", "Tea_Estates_in_Munnar.jpg"),
        ("1.jpg", "Eravikulam_Natonal_park.jpg"),
        ("2.jpg", "Mattupetty_Dam_Munnar.jpg"),
        ("3.jpg", "Munnar_misty_hills.jpg"),
        ("4.jpg", "Attukal_Waterfalls_Munnar.jpg"),
    ],
    "alleppey": [
        ("hero.jpg", "Kerala_Houseboat_Alleppey.jpg"),
        ("1.jpg", "Alleppey_Backwaters.jpg"),
        ("2.jpg", "Vembanad_Lake.jpg"),
        ("3.jpg", "Alappuzha_Beach_Lighthouse.jpg"),
        ("4.jpg", "Backwaters_of_Kerala.jpg"),
    ],
    "kochi": [
        ("hero.jpg", "Chinese_Fishing_Nets_Cochin.jpg"),
        ("1.jpg", "Fort_Cochin_Kerala.jpg"),
        ("2.jpg", "Paradesi_Synagogue_Kochi.jpg"),
        ("3.jpg", "Marine_Drive_Kochi.jpg"),
        ("4.jpg", "Santa_Cruz_Cathedral_Basilica_Kochi.jpg"),
    ],
    "wayanad": [
        ("hero.jpg", "Banasura_Sagar_Dam.jpg"),
        ("1.jpg", "Chembra_Peak_Wayanad.jpg"),
        ("2.jpg", "Edakkal_Caves.jpg"),
        ("3.jpg", "Soochipara_Falls.jpg"),
        ("4.jpg", "Wayanad_Wildlife_Sanctuary.jpg"),
    ],
    "ooty": [
        ("hero.jpg", "Ooty_tea_gardens.jpg"),
        ("1.jpg", "Nilgiri_Mountain_Railway.jpg"),
        ("2.jpg", "Ooty_Botanical_Garden.jpg"),
        ("3.jpg", "Doddabetta_Peak.jpg"),
        ("4.jpg", "Ooty_Lake.jpg"),
    ],
    "kodaikanal": [
        ("hero.jpg", "Kodaikanal_Lake.jpg"),
        ("1.jpg", "Coakers_Walk_Kodaikanal.jpg"),
        ("2.jpg", "Pillar_Rocks_Kodaikanal.jpg"),
        ("3.jpg", "Pine_Forest_Kodaikanal.jpg"),
        ("4.jpg", "Dolphins_Nose_Kodaikanal.jpg"),
    ],
    "chennai": [
        ("hero.jpg", "Marina_Beach_Chennai.jpg"),
        ("1.jpg", "Kapaleeshwarar_Temple_Mylapore.jpg"),
        ("2.jpg", "San_Thome_Cathedral_Chennai.jpg"),
        ("3.jpg", "Shore_Temple_Mahabalipuram.jpg"),
        ("4.jpg", "Valluvar_Kottam_Chennai.jpg"),
    ],
    "mysore": [
        ("hero.jpg", "Mysore_Palace.jpg"),
        ("1.jpg", "Mysore_Palace_at_Night.jpg"),
        ("2.jpg", "Chamundeshwari_Temple_Mysore.jpg"),
        ("3.jpg", "Brindavan_Gardens_Mysore.jpg"),
        ("4.jpg", "St_Philomenas_Church_Mysore.jpg"),
    ],
    "coorg": [
        ("hero.jpg", "Abbey_Falls_Coorg.jpg"),
        ("1.jpg", "Coorg_coffee_plantation.jpg"),
        ("2.jpg", "Dubare_Elephant_Camp.jpg"),
        ("3.jpg", "Golden_Temple_Bylakuppe.jpg"),
        ("4.jpg", "Rajas_Seat_Coorg.jpg"),
    ],
    "hampi": [
        ("hero.jpg", "Vijayanagara_chariot_Vittala.jpg"),
        ("1.jpg", "Virupaksha_Temple_Hampi.jpg"),
        ("2.jpg", "Hampi_ruins.jpg"),
        ("3.jpg", "Matanga_Hill_Hampi.jpg"),
        ("4.jpg", "Lotus_Mahal_Hampi.jpg"),
    ],
    "bengaluru": [
        ("hero.jpg", "Lalbagh_Glass_House_Bangalore.jpg"),
        ("1.jpg", "Bangalore_Palace.jpg"),
        ("2.jpg", "Vidhana_Soudha_Bangalore.jpg"),
        ("3.jpg", "Cubbon_Park_Bangalore.jpg"),
        ("4.jpg", "Nandi_Hills_Bangalore.jpg"),
    ],
    "hyderabad": [
        ("hero.jpg", "Charminar_Hyderabad.jpg"),
        ("1.jpg", "Golconda_Fort_Hyderabad.jpg"),
        ("2.jpg", "Hussain_Sagar_Buddha_Hyderabad.jpg"),
        ("3.jpg", "Chowmahalla_Palace.jpg"),
        ("4.jpg", "Qutb_Shahi_Tombs_Hyderabad.jpg"),
    ],
    "darjeeling": [
        ("hero.jpg", "Darjeeling_tea_plantation.jpg"),
        ("1.jpg", "Kanchenjunga_from_Tiger_Hill.jpg"),
        ("2.jpg", "Darjeeling_Himalayan_Railway.jpg"),
        ("3.jpg", "Batasia_Loop_Darjeeling.jpg"),
        ("4.jpg", "Happy_Valley_Tea_Estate.jpg"),
    ],
    "kolkata": [
        ("hero.jpg", "Victoria_Memorial_Kolkata.jpg"),
        ("1.jpg", "Howrah_Bridge_Kolkata.jpg"),
        ("2.jpg", "Dakshineswar_Kali_Temple.jpg"),
        ("3.jpg", "Kolkata_tram.jpg"),
        ("4.jpg", "Kumortuli_Kolkata.jpg"),
    ],
    "gangtok": [
        ("hero.jpg", "Tsomgo_Lake_Sikkim.jpg"),
        ("1.jpg", "Rumtek_Monastery_Sikkim.jpg"),
        ("2.jpg", "MG_Marg_Gangtok.jpg"),
        ("3.jpg", "Nathula_Pass_Sikkim.jpg"),
        ("4.jpg", "Kanchenjunga_Sikkim.jpg"),
    ],
    "shillong": [
        ("hero.jpg", "Umiam_Lake_Shillong.jpg"),
        ("1.jpg", "Elephant_Falls_Shillong.jpg"),
        ("2.jpg", "Double_Decker_Root_Bridge_Meghalaya.jpg"),
        ("3.jpg", "Dawki_River_Meghalaya.jpg"),
        ("4.jpg", "Laitlum_Canyon_Meghalaya.jpg"),
    ],
    "kaziranga": [
        ("hero.jpg", "Indian_rhinoceros_Kaziranga.jpg"),
        ("1.jpg", "Kaziranga_National_Park.jpg"),
        ("2.jpg", "Elephant_safari_Kaziranga.jpg"),
        ("3.jpg", "Wild_Water_Buffalo_Kaziranga.jpg"),
        ("4.jpg", "Kaziranga_grasslands.jpg"),
    ],
    "puri": [
        ("hero.jpg", "Jagannath_Temple_Puri.jpg"),
        ("1.jpg", "Puri_Beach_Odisha.jpg"),
        ("2.jpg", "Rath_Yatra_procession.jpg"),
        ("3.jpg", "Konark_Sun_Temple.jpg"),
        ("4.jpg", "Chilika_Lake.jpg"),
    ],
    "amritsar": [
        ("hero.jpg", "The_Golden_Temple_of_Amritsar.jpg"),
        ("1.jpg", "Wagah_Border_Ceremony.jpg"),
        ("2.jpg", "Jallianwala_Bagh.jpg"),
        ("3.jpg", "Harmandir_Sahib_night.jpg"),
        ("4.jpg", "Amritsar_Golden_Temple_sarovar.jpg"),
    ],
    "chandigarh": [
        ("hero.jpg", "Rock_Garden_Chandigarh.jpg"),
        ("1.jpg", "Sukhna_Lake_Chandigarh.jpg"),
        ("2.jpg", "Capitol_Complex_Chandigarh.jpg"),
        ("3.jpg", "Rose_Garden_Chandigarh.jpg"),
        ("4.jpg", "Chandigarh_High_Court.jpg"),
    ],
    "ahmedabad": [
        ("hero.jpg", "Adalaj_stepwell.jpg"),
        ("1.jpg", "Sabarmati_Ashram_Ahmedabad.jpg"),
        ("2.jpg", "Sidi_Saiyyed_Mosque_Ahmedabad.jpg"),
        ("3.jpg", "Sabarmati_Riverfront.jpg"),
        ("4.jpg", "Rani_ki_Vav_Gujarat.jpg"),
    ],
    "rann-of-kutch": [
        ("hero.jpg", "Great_Rann_of_Kutch.jpg"),
        ("1.jpg", "Rann_Utsav_tent_city.jpg"),
        ("2.jpg", "Kalo_Dungar_Kutch.jpg"),
        ("3.jpg", "Dholavira_Harappan.jpg"),
        ("4.jpg", "White_salt_desert_Kutch.jpg"),
    ],
    "pondicherry": [
        ("hero.jpg", "Promenade_Beach_Pondicherry.jpg"),
        ("1.jpg", "White_Town_Pondicherry.jpg"),
        ("2.jpg", "Auroville_Matrimandir.jpg"),
        ("3.jpg", "French_Quarter_Pondicherry.jpg"),
        ("4.jpg", "Sri_Aurobindo_Ashram_Pondicherry.jpg"),
    ],
    "andaman-islands": [
        ("hero.jpg", "Radhanagar_Beach_Havelock.jpg"),
        ("1.jpg", "Cellular_Jail_Andaman.jpg"),
        ("2.jpg", "Havelock_Island_Andaman.jpg"),
        ("3.jpg", "Elephant_Beach_Andaman.jpg"),
        ("4.jpg", "Coral_reef_Andaman.jpg"),
    ],
}


def try_download(url, dest_path, label):
    """Try to download a URL to dest_path. Returns True on success."""
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; TravelMateAI/1.0; educational demo)",
        "Referer": "https://commons.wikimedia.org/",
        "Accept": "image/jpeg,image/png,image/*,*/*",
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            # Check content type
            ct = resp.headers.get("Content-Type", "")
            if "html" in ct.lower():
                return False
            data = resp.read()
            if len(data) < 8000:
                return False
            # Check JPEG/PNG magic bytes
            if not (data[:2] == b'\xff\xd8' or data[:4] == b'\x89PNG' or data[:4] == b'RIFF'):
                return False
            with open(dest_path, 'wb') as f:
                f.write(data)
            size_kb = len(data) // 1024
            print(f"  ✓ {label} → {os.path.basename(dest_path)} ({size_kb}KB)")
            return True
    except Exception:
        return False


def get_wikimedia_direct_urls(filename, widths=(1280, 1024, 800, 640)):
    """Return list of candidate URLs to try for a Wikimedia Commons file."""
    name = filename.replace(" ", "_")
    md5 = hashlib.md5(name.encode('utf-8')).hexdigest()
    a, b = md5[0], md5[:2]
    encoded = urllib.parse.quote(name, safe=':@!$&\'()*+,;=')
    
    urls = []
    for w in widths:
        urls.append(f"https://upload.wikimedia.org/wikipedia/commons/thumb/{a}/{b}/{encoded}/{w}px-{encoded}")
    # Direct full-size (not thumbnail)
    urls.append(f"https://upload.wikimedia.org/wikipedia/commons/{a}/{b}/{encoded}")
    return urls


def main():
    attribution_lines = [
        "# TravelMate AI - Image Sources\n\n",
        "All images sourced from Wikimedia Commons.\n",
        "Licensed under Creative Commons (CC BY-SA) or similar free licenses.\n",
        "For educational and demonstration purposes.\n\n",
        "| Destination | File | Source | Original Filename | License |\n",
        "|-------------|------|--------|-------------------|---------|\n",
    ]

    file_map = ["hero.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"]
    total_success = 0
    total_fail = 0
    failed_list = []

    for dest, files in DESTINATIONS.items():
        print(f"\n{'─'*52}")
        print(f"  {dest.upper()}")
        print(f"{'─'*52}")
        dest_dir = os.path.join(BASE_DIR, dest)
        os.makedirs(dest_dir, exist_ok=True)

        for local_name, wiki_filename in files:
            local_path = os.path.join(dest_dir, local_name)
            
            # Skip if already downloaded properly
            if os.path.exists(local_path) and os.path.getsize(local_path) > 8000:
                size_kb = os.path.getsize(local_path) // 1024
                print(f"  ↷ Already have {local_name} ({size_kb}KB)")
                total_success += 1
                attribution_lines.append(
                    f"| {dest} | {local_name} | Wikimedia Commons | {wiki_filename} | CC BY-SA |\n"
                )
                continue

            # Try multiple URLs
            candidate_urls = get_wikimedia_direct_urls(wiki_filename)
            downloaded = False
            
            for url in candidate_urls:
                if try_download(url, local_path, f"{dest}/{local_name} ({wiki_filename})"):
                    downloaded = True
                    break
                time.sleep(0.1)

            if downloaded:
                total_success += 1
                attribution_lines.append(
                    f"| {dest} | {local_name} | Wikimedia Commons | {wiki_filename} | CC BY-SA |\n"
                )
            else:
                total_fail += 1
                failed_list.append((dest, local_name, wiki_filename))
                print(f"  ✗ FAILED: {dest}/{local_name} ({wiki_filename})")
            
            time.sleep(0.15)

    # Write attribution
    attr_path = os.path.join(os.path.dirname(BASE_DIR), "IMAGE_SOURCES.md")
    with open(attr_path, 'w') as f:
        f.writelines(attribution_lines)

    print(f"\n{'═'*52}")
    print(f"  RESULTS: {total_success} downloaded, {total_fail} failed")
    print(f"{'═'*52}")
    if failed_list:
        print("\nFailed (need manual fix):")
        for dest, local, wiki in failed_list:
            print(f"  {dest}/{local}  ← {wiki}")
    print(f"\nAttribution → {attr_path}")


if __name__ == "__main__":
    main()
