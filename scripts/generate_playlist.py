import os
import json
from datetime import datetime
import mutagen
from mutagen.mp3 import MP3
import re

def get_mp3_duration(file_path):
    """Lấy thời lượng của file MP3 bằng mutagen"""
    try:
        audio = MP3(file_path)
        return int(audio.info.length * 1000)  # Convert to milliseconds
    except:
        return 0

def clean_filename(filename):
    """Chuyển đổi tên file thành tên bài hát có dấu"""
    # Xóa phần mở rộng .mp3
    name = os.path.splitext(filename)[0]
    
    # Xóa các ID số ở cuối
    name = re.sub(r'-\d+$', '', name)
    name = re.sub(r'_\w+$', '', name)
    
    # Thay thế các dấu gạch ngang bằng dấu cách
    name = name.replace('-', ' ')
    
    # Viết hoa chữ cái đầu mỗi từ
    name = ' '.join(word.capitalize() for word in name.split())
    
    return name

def extract_artist(name):
    """Trích xuất tên nghệ sĩ từ tên file"""
    # Tìm phần sau dấu gạch ngang cuối cùng
    parts = name.split('-')
    if len(parts) > 1:
        artist = parts[-1]
        # Xóa các ID số và ký tự đặc biệt
        artist = re.sub(r'-\d+$', '', artist)
        artist = re.sub(r'_\w+$', '', artist)
        return artist.strip()
    return "Unknown Artist"

def generate_playlist_data(music_dir):
    """Tạo dữ liệu playlist từ thư mục nhạc"""
    playlist = {
        "name": "TPZ Tech Studio - Vietnamese Playlist",
        "images": [
            {
                "url": "https://stc-id.nixcdn.com/v11/images/header_new/logo_new.png"
            }
        ],
        "external_urls": {
            "spotify": "https://www.nhaccuatui.com/tim-kiem?q=8x+9x"
        },
        "tracks": {
            "items": [],
            "length": 0
        }
    }
    
    # Lấy danh sách file MP3
    mp3_files = [f for f in os.listdir(music_dir) if f.endswith('.mp3')]
    
    # Sắp xếp file theo thời gian sửa đổi (mới nhất lên đầu)
    mp3_files.sort(key=lambda x: os.path.getmtime(os.path.join(music_dir, x)), reverse=True)
    
    for mp3_file in mp3_files:
        file_path = os.path.join(music_dir, mp3_file)
        file_id = os.path.splitext(mp3_file)[0]
        
        # Lấy thời gian sửa đổi file
        modified_time = os.path.getmtime(file_path)
        added_at = datetime.fromtimestamp(modified_time).strftime('%Y-%m-%dT%H:%M:%SZ')
        
        # Lấy thời lượng file
        duration_ms = get_mp3_duration(file_path)
        
        # Tạo thông tin bài hát
        track = {
            "id": file_id,
            "name": clean_filename(mp3_file),
            "album": {
                "name": clean_filename(mp3_file),
                "images": [
                    {
                        "url": "/img/profile-picture-2.webp"
                    }
                ],
                "external_urls": {
                    "spotify": f"https://www.nhaccuatui.com/",
                    "deezer": f"https://www.mp3.zing.vn"
                }
            },
            "artists": [
                {
                    "name": extract_artist(mp3_file)
                }
            ],
            "added_at": added_at,
            "duration_ms": duration_ms
        }
        
        playlist["tracks"]["items"].append(track)
    
    playlist["tracks"]["length"] = len(playlist["tracks"]["items"])
    return playlist

def main():
    # Đường dẫn đến thư mục chứa nhạc
    music_dir = "public/music-vi"
    
    # Tạo dữ liệu playlist
    playlist_data = generate_playlist_data(music_dir)
    
    # Lưu vào file JSON
    output_file = os.path.join(music_dir, "playlist-data.json")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(playlist_data, f, ensure_ascii=False, indent=2)
    
    print(f"Đã tạo file playlist-data.json với {playlist_data['tracks']['length']} bài hát")

if __name__ == "__main__":
    main() 