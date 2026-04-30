import requests
from datetime import datetime
import dotenv
import os

RIOT_API_KEY = os.getenv("RIOT_API_KEY")

HEADERS = {
    "X-Riot-Token": RIOT_API_KEY
}

QUEUE_MAP = {
    420: "Ranked Solo/Duo",
    440: "Ranked Flex",
    400: "Normal Draft",
    430: "Blind Pick",
    450: "ARAM"
}

MATCHES_CACHE = {}
ITEM_CACHE = None

'''
helper methods
'''
def get_account(game_name: str, tag_line: str):
    url = f"https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{game_name}/{tag_line}"
    res = requests.get(url, headers=HEADERS)
    return res.json()

def get_recent_matches(puuid: str):
    url = f"https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids"
    res = requests.get(url, headers=HEADERS)
    return res.json()

def get_match_by_match_id(match_id: str):
    if match_id in MATCHES_CACHE:
        return MATCHES_CACHE[match_id]

    url = f"https://americas.api.riotgames.com/lol/match/v5/matches/{match_id}"
    res = requests.get(url, headers=HEADERS)

    data = res.json()
    MATCHES_CACHE[match_id] = data
    return data

def get_items():
    global ITEM_CACHE

    if ITEM_CACHE:
        return ITEM_CACHE

    
    url = "https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/item.json"
    ITEM_CACHE = requests.get(url).json()["data"]
    return ITEM_CACHE

'''
these methods map directly to calls within our API
'''
def get_latest_matches_info(game_name: str, tag_line: str):
    
    recent_match_info = []

    account = get_account(game_name, tag_line)

    puuid = account.get("puuid")
    if not puuid:
        return {"error": account}

    recent_match_list = get_recent_matches(puuid)
    item_data = get_items() 

    for match_id in recent_match_list:
        match = get_match_by_match_id(match_id)

        info = match.get("info")
        if not info:
            continue

        start = info.get("gameStartTimestamp")
        
        #for every player
        for player in info.get("participants", []):
            if player.get("puuid") != puuid:
                continue
            
            #information relevant to me

            duration = player.get("timePlayed")
            game_time = None
            if start and duration:
                game_time = datetime.fromtimestamp(
                    start / 1000 + duration
                ).strftime("%Y-%m-%d %I:%M %p")

            items = []
            for i in range(7):
                item = player.get(f"item{i}")

                if item:
                    item_info = item_data.get(str(item))
                    if item_info:
                        items.append(item_info["name"])
            


            recent_match_info.append({
                "champion": player.get("championName"),

                "win": player.get("win"),

                "game-type": QUEUE_MAP.get(info.get("queueId")),

                "kills": player.get("kills"),

                "deaths": player.get("deaths"),

                "assists": player.get("assists"),

                "game-time-end": game_time,

                "game-duration": info["gameDuration"],

                "kill-participation": player.get
                ("challenges", {}).get("killParticipation"),

                "cs": player.get("totalMinionsKilled", 0) + player.get("neutralMinionsKilled", 0),

                "items-array": items

            })

            break

    return recent_match_info