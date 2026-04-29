import requests
import json

API_KEY = "sk-s18h58soo623moxu394hwxo8yzr7hsfdy2hujasa3negiqd0"
API_ENDPOINT = "https://api.xiaomimimo.com/v1/chat/completions"

def call_mimo(prompt, system_prompt="你是一位富有创意的古典预言家，擅长写富有意境和故事性的签文。"):
    """调用MiMo API生成内容"""
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": "mimo-v2-flash",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.9,
        "max_tokens": 2000
    }
    
    response = requests.post(API_ENDPOINT, headers=headers, json=payload, timeout=120)
    if response.status_code == 200:
        return response.json()["choices"][0]["message"]["content"]
    else:
        print(f"Error: {response.status_code}, {response.text}")
        return None

# 生成天命签文 (5条)
print("正在生成【天命】级别签文...")
fortunes = []

# 天命 - 第一批
prompt_tianming_1 = """请生成5条"天命"级别的预言签文（注定的大事件级别，非常稀有）。

请严格按照以下JSON格式返回（不要有任何额外内容）：
```json
[
  {
    "level": "天命",
    "title": "四字标题",
    "text": "两句七言诗句，押韵有意境",
    "story": "50-80字的小故事，包含具体人物（穿红衣的女子、白发老人、黑猫、神秘商人等）、具体场景（雨天的咖啡店、清晨的公园、深夜的书店、古旧的巷子）、命运感强的相遇",
    "guide": "一句指引的话",
    "encounter": "会遇到的具体人物或生物"
  },
  ...共5条
]
```

要求：
- 5条故事主角和场景要完全不同
- 故事要有命运感，像命中注定的相遇
- 人物要具体生动
- 结局要出人意料
"""

result = call_mimo(prompt_tianming_1)
if result:
    # 尝试提取JSON
    import re
    json_match = re.search(r'\[.*\]', result, re.DOTALL)
    if json_match:
        data = json.loads(json_match.group())
        fortunes.extend(data)
        print(f"成功生成天命签文 5条")

# 天命 - 第二批 (再5条，共10条)
prompt_tianming_2 = """请再生成5条"天命"级别的预言签文。

请严格按照以下JSON格式返回（不要有任何额外内容）：
```json
[
  {
    "level": "天命",
    "title": "四字标题",
    "text": "两句七言诗句，押韵有意境",
    "story": "50-80字的小故事，包含具体人物、具体场景、命运感强的相遇",
    "guide": "一句指引的话",
    "encounter": "会遇到的具体人物或生物"
  },
  ...共5条
]
```

要求：
- 5条故事主角和场景要完全不同
- 要有逆天改命、命中注定的感觉
- 人物要具体生动
- 与众不同的场景"""

result = call_mimo(prompt_tianming_2)
if result:
    json_match = re.search(r'\[.*\]', result, re.DOTALL)
    if json_match:
        data = json.loads(json_match.group())
        fortunes.extend(data)
        print(f"成功生成天命签文 5条")

# 保存当前进度
with open('fortunes_temp.json', 'w', encoding='utf-8') as f:
    json.dump(fortunes, f, ensure_ascii=False, indent=2)

print(f"\n当前共生成 {len(fortunes)} 条签文")
